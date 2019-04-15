 /*
    Draw Module based on OpenLayers 5. 
    drawEvents. 

    Copyright (C) 2019 Nicolay Skjelbred, Jan-Magnus Solheim and Njål Dolonen, 
    ohanssen@acm.org

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published 
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.
    You should have received a copy of the GNU Affero General Public License
    along with this program. If not, see <http://www.gnu.org/licenses/>.
*/

//Script for managing drawing.

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
            selectedFeatures.forEach(e => 
            { drawSource.removeFeature(e) })
            drawArray = []
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
    //gets id from clicked color selector
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
        drawArray = [] 
    }
} //End colorOption_click()

//OnClick handler for printing out leangth/area of feature.
function printMetric_click()
{ 
    //TODO: WRITE A LISTENER FEATURES INSTEAD?
    //TODO: ADD BACK AREAL PRINT VALUES TO PROGRAM.
    let dontUse = false
    if(dontUse == false)
    {
        $('#showMetrics').html( () => 
        {
            if( selectedFeatures[0] )
            {return getAreal(selectedFeatures[0])}
        }) 
    }
} //End printMetric_click()

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
        const area = PolygonGeom.fromCircle(Sphere.getArea(geom))
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
        //Calculates and formats length of Linestring.
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
        else if ( fType == 'Circle' || fType == 'Polygon' || fType == 'Linestring' )
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
            drawArray.forEach( function(e)
            {
                if ( f.ol_uid == e.ol_uid )
                {
                    tempObj = e
                    tempInd = drawArray.indexOf(e)
                }
            }) //End drawArray.forEach()
            if ( tempObj )
            {   
                //Gives the feature back it's original style.     
                f.setStyle(tempObj.style) 
                drawArray.splice(tempInd, 1) //Removes the style object from drawArray.
            }
        }) //End selectedFeatures.forEach()
        selectedFeatures = []
    } //End if 
} //End manualSelect()


//Function for selecting marked areas. 
function selectMarkedArea(f)
{
    if ( drawSource.getFeatures().includes(f) && !selectedFeatures.includes(f) )
    {
        let currentObject       
        currentObject = {"ol_uid" : f.ol_uid, "style" : f.getStyle()}

        drawArray.push(currentObject) 
        f.setStyle(selectStyle)
        selectedFeatures.push(f)
    }
    //Deselects the clicked feature if it was already selected
    else if( selectedFeatures.includes(f) )
    {
        drawArray.forEach( (e) => 
        {        
            if ( f.ol_uid == e.ol_uid )
            {
                let eIndex = drawArray.indexOf(e)
                f.setStyle(e.style) 
                drawArray.splice(eIndex, 1)
                let fIndex = selectedFeatures.indexOf(f)
                selectedFeatures.splice(fIndex, 1)
            }
        })
    }
    if( !featureCheck )
    { featureCheck = true }
}//End selectMarkedArea

function selectIcons(f)
{
    if( !droppingIcon )
    { 
        console.log('Icons')
        // DO SELECT STUFF FOR ICONS HERE
        // TODO: Write out information about Icon
    } 
    else 
    { droppingIcon = false }
}

map.on('click', (e) =>
{
    var pixel = e.pixel;
    manualSelect(pixel);
})

function setCurrentType_click(e)
{
    let selectedID = e.target.id
    $('#currentType').text($("#"+selectedID).text())
    refreshDrawType()
    // $('#type').show()
    $('#selectingType').hide()
    // $('#currentType').css('color:#ffffffff')
    dropdownShown = false
}   

function showDropdownOptions_click()
{
    $('#currentType').css('color:#ffffff00')

    // $('#type').hide()
    $('#selectingType').show()
    dropdownShown = true
}

//function to hide dropdown
//TODO: add handler to catch click event outside dropdown box.
function closeDropdown()
{
    if(dropdownShown)
    { $('#selectingType').hide() }
    dropdownShown = false
}