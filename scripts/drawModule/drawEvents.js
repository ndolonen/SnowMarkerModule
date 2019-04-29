/**
 * Copyright (c) 2019, Njaal Dolonen, Nicolay Skjelbred, Jan-Magnus Solheim All rights reserved.
 * See LICENSE for more detail.  
 * */ 
//OnClick handler for drawToggle.
function drawToggle_click() 
{ 
    if ( !toggleDraw )
    {
        addDraw()
        //Enables snap if snap was previously toggled on.
        if ( toggleSnap )
        { addSnap() }
        //Disable modify while draw is active.
        if ( toggleModify )
        {
            removeModify()
            toggleModify = false
        }
    }
    //Removes snap and draw if draw is active.
    else
    {
        removeSnap()
        removeDraw()
    }
    toggleDraw = !toggleDraw 
}//End drawToggle_click()

//OnClick handler for modifyToggle.
function modifyToggle_click()
{ 
    if( !toggleDraw )
    {
        if ( !toggleModify )
        { addModify() }
        else
        { removeModify() }
        toggleModify = !toggleModify
    }
} //End modifyToggle_click()

//OnClick handler for snapToggle.
function snapToggle_click()
{
    if( toggleDraw )
    {
        if ( !toggleSnap )
        { addSnap() }
        else
        { removeSnap() }
        toggleSnap = !toggleSnap
    }
} //End snapToggle_click()

//OnClick handler for deleteLayer. 
function deleteLayer_click()
{
    try
    {
        //Checks if at least one feature is selected.
        if( selectedFeatures[0] )
        {
            //Cycles through the array of selected features and removes them from the source.
            selectedFeatures.forEach((e) => 
            { 
                drawSource.removeFeature(e) 
                removeSingleMeasureTooltip(e) 
            })
            originalStyles = []
            selectedFeatures = [] 
            addNewChange() //Updates the undo function array.
        }
    }
    catch(error)
    {
        console.log("Unexpected Error Caught:\n" + error)
    }
} //End deleteLayer_click()

let drawingColor = "selectBlack";
//OnClick handler for changing drawing color.
function colorOption_click(e) 
{
    //Removes selectedColor class from last drawing color.
    $('#'+drawingColor).removeClass("selectedColor")
    //Gets id from clicked color selector.
    drawingColor = e.target.id
    //Adds selectedColor class to the current drawing color.
    $("#"+drawingColor).addClass("selectedColor")
    
    //Switch to set the current selected color as Style.
    switch( drawingColor )
    {
        case "selectRed":
            setStyleColor(hexRed)  
            break
    
        case "selectOrange":
            setStyleColor(hexOrange) 
            break
                
        case "selectYellow":
            setStyleColor(hexYellow)
            break 
                        
        case "selectGreen":
            setStyleColor(hexGreen)
            break
            
        case "selectBlue":
            setStyleColor(hexBlue)
            break
            
        case "selectPurple":
            setStyleColor(hexPurple)
            break
        
        default:
            setStyleColor(hexBlack)
    }//End of switch
    
    //Changes the color of all selected features.
    if( selectedFeatures[0] )
    {
        selectedFeatures.forEach( (e) =>
        {
            e.setStyle(currentStyle)
        })
        selectedFeatures = [] 
        originalStyles = [] 
    }
} //End colorOption_click()

let tooltipElement
//OnClick handler for printing out leangth/area of feature.
function toggleMetric_click()
{ 
    if(toggleAreal)
    {
        $('#printMetric').removeClass('selectedFunction')
        removeAllMeasureTooltip()
    }
    else
    {
        $('#printMetric').addClass('selectedFunction')
        addMeasureOverlay()
    }
    toggleAreal = !toggleAreal
} //End toggleMetric_click()

//Function to get area calculation from a feature.
function getAreal(f)
{
    let output = "none selected"
     //Gets the geometry of a feature.
    const geom = f.getGeometry()
     //Gets the type of geometry.
    const geomType = geom.getType()
    if ( geomType == "Polygon" ) 
    {
        const area = Sphere.getArea(geom)
        output = getMetrics("1", area)
    }
    else if ( geomType == "Circle" ) 
    {  
        //Converts the circle to a polygon so that we can calculate. 
        //the area with the correct values, regardless of EPSG projection.
        const area = Sphere.getArea(PolygonGeom.fromCircle(geom))
        output = getMetrics("1", area)
    }
    else if ( geomType == "LineString" )
    {
        const length = Sphere.getLength(geom)
        output = getMetrics("2", length)
    }//End if

    return output
    //Function for calculation and formats of metric and print out.
    function getMetrics( type, metric )
    {
        let output
        //Calculates and formats Area of Polygon/Circle.
        if( type == "1" )
        {
            if ( metric > 10000 ) 
            { output = (Math.round(metric / 1000000 * 100) / 100) + ' ' + 'km<sup>2</sup>'} 
            else 
            { output = (Math.round(metric * 100) / 100) + ' ' + 'm<sup>2</sup>' }
            return output
        }
        //Calculates and formats length of LineString.
        else if( type == "2" ) 
        {
            if ( metric > 100 ) 
            { output = (Math.round(metric / 1000 * 100) / 100) + ' ' + 'km'} 
            else 
            { output = (Math.round(metric * 100) / 100) + ' ' + 'm'}
            return output
        }
    } //End getMetrics()
} //End getAreal()

//OnClick handler to set draw to Freehand style.
function freehand_click()
{
    if( toggleFreehand == false )
    {
        toggleFreehand = true;
        $('#freehand').addClass('selectedFunction')
        $('#straight').removeClass('selectedFunction')
        refreshDraw()
    }
} // End freehand_click()

//OnClick handler to set draw to Point-to-Point style.
function straight_click()
{
    if( toggleFreehand == true )
    {
        toggleFreehand = false;
        $('#straight').addClass('selectedFunction')
        $('#freehand').removeClass('selectedFunction')
        refreshDraw()
    }
}//End straight_click()
 
//Boolean to check if clicked location contains a feature.
let featureCheck = false //True = feature on pixel/location.
//Function for manually selecting a feature.
//Created cause of problems with ol.Select being global and causing unintended issues.
function manualSelect(pixel) 
{

    featureCheck = false
    //Checks for features at pixel and toggles Select on them.
    map.forEachFeatureAtPixel(pixel, function(f) 
    { 
        //Gets the type of the feature.
        fType = f.getGeometry().getType()
        //If type = Point it's an icon.
        if( fType == 'Point' && !toggleDraw )
        {
            selectIcons(f)
        }
        //If type is a Polygon, Circle or LineString it's a drawn object/feature.
        else if ( fType == 'Circle' || fType == 'Polygon' || fType == 'LineString' )
        {
            selectMarkedArea(f)
        }
    }) //End map.forEachFeatureAtPixel()

    //Deselects all features when clicking somewhere without a feature.
    if( !featureCheck )
    {
        let tempObj = false
        let tempInd = 0
        //Loops throught all selected features and returns their original style.
        selectedFeatures.forEach( function(f)
        {
            //Finds the original style/color of the feature f and saves it to tempObj.
            originalStyles.forEach( function(e)
            {
                if ( f.ol_uid == e.ol_uid )
                {
                    tempObj = e
                    tempInd = originalStyles.indexOf(e)
                }
            }) //End originalStyles.forEach()
            if ( tempObj )
            {   
                //Gives the feature back it's original style.     
                f.setStyle(tempObj.style) 
                originalStyles.splice(tempInd, 1) //Removes the style object from originalStyles.
            }
        }) //End selectedFeatures.forEach()
        //removes all metrics from map
        if( toggleAreal )
        { removeAllMeasureTooltip() }
        selectedFeatures = []
    } //End if 
} //End manualSelect()


//Function for selecting marked areas. 
function selectMarkedArea(f)
{
    if ( drawSource.getFeatures().includes(f) && !selectedFeatures.includes(f) )
    {
        //Saves the original style of the feature to an object, with ol_uid as identifier.
        let currentObject = {"ol_uid" : f.ol_uid, "style" : f.getStyle()}
        originalStyles.push(currentObject) 

        //Sets the Style of the selected object to selectStyle.
        f.setStyle(selectStyle)
        selectedFeatures.push(f)
        //adds area for the selected feature to the map
        if ( toggleAreal )
        {
            addMeasureOverlay(f)
        }
    }
    //Deselects the clicked feature if it was already selected.
    else if( selectedFeatures.includes(f) )
    {
        originalStyles.forEach( (e) => 
        {        
            if ( f.ol_uid == e.ol_uid )
            {
                //Sets the original style back to the feature.
                let eIndex = originalStyles.indexOf(e)
                f.setStyle(e.style) 
                //Removes the object from originalStyles and selectedFeatures as its no longer selected.
                originalStyles.splice(eIndex, 1)
                let fIndex = selectedFeatures.indexOf(f)
                selectedFeatures.splice(fIndex, 1)
                //removes the area overlay from the feature from the map
                if ( toggleAreal )
                {
                    removeSingleMeasureTooltip(f)
                }
            }
        })
    }


    //Sets the featureCheck to true to prevent the deselect all.
    if( !featureCheck )
    { featureCheck = true }
} //End selectMarkedArea()

//Function for selecting icons in icon tab. 
function selectIcons(f)
{
    if( !droppingIcon )
    { 
        // DO SELECT STUFF FOR ICONS HERE
        // TODO: Write out information about Icon
        console.log("Icon")
    } 
    else 
    { droppingIcon = false }
} //End selectIcons()

//OnClick handler for selecting features.
//TODO: Check if conflicting with other onclick handlers
map.on('click', (e) =>
{ manualSelect(e.pixel) })

//OnClick handler for selecting geometry type.
function setCurrentType_click(e)
{
    let selectedID = e.target.id
    $('#currentType').text($("#"+selectedID).text())
    //Checks geometry type and refreshes draw.
    if ( selectedID == "optPolygon" )
    { drawType = "Polygon" }
    else if ( selectedID == "optLine" )
    { drawType = "LineString" }
    else if ( selectedID == "optCircle")
    { drawType = "Circle" }
    else //error happened selecting type.
    { console.log("Unexpected error while selecting geometry type") }
    refreshDraw()
    //Hides dropdown after selecting type.
    $('#selectingType').hide()
    dropdownShown = false
} //End setCurrentType_click()   

//OnClick handler for showing the geometry type options.
function showDropdownOptions_click()
{
    $('#selectingType').show()
    dropdownShown = true
} //End showDropdownOptions_click()

//OnClick handler for hiding drop down when selected Geometry type.
//TODO: add handler to catch click event outside dropdown box.
function closeDropdown()
{
    if(dropdownShown)
    { $('#selectingType').hide() }
    dropdownShown = false
} //End closeDropdown()