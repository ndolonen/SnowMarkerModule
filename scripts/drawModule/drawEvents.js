//Script for managing drawings.
$("#buttonHide").click( () => 
{ $("#drawbox").toggle() })

$('#type').change( () => 
{ refreshDraw() })

$('#drawToggle').click( () =>
{ 
    if ( !toggleDraw )
    {
        addDraw()

        if ( toggleSnap )
        {   
            addSnap()
        }
        if ( toggleModify )
        {
            removeModify()
            toggleModify = false
        }
    }
    else
    {
        removeSnap()
        removeDraw()
    }

    toggleDraw = !toggleDraw 
})

$('#modifyToggle').click( () => 
{ 
    if(!toggleDraw)
    {
        if ( !toggleModify )
        {
            addModify()
        }
        else
        {        
            removeModify()
        }
        toggleModify = !toggleModify
    }
})

$('#snapToggle').click( () => 
{
    if(toggleDraw)
    {
        if (!toggleSnap )
        {        
            addSnap()
        }
        else
        {
            removeSnap()
        }
        toggleSnap = !toggleSnap
    }
})


$('#deleteLayer').click( () => 
{
    try
    {
        if(drawSelect.getFeatures().getArray()[0] != null)
        {
            feature = drawSelect.getFeatures()
            let selectSource = drawSelect.getLayer(feature.getArray()[0]).getSource()
            feature.getArray().forEach(element => {
                selectSource.removeFeature(element)
            })
            feature.clear()
            drawArray = []
        
        }
    }
    catch(error)
    {
        console.log("Nonexisting Feature selected, please unselect and reselect features")
        console.log(error)
    }

})

let lastColor = "selectBlack";
$('.colorOption').click( (e) =>
{
    let color = e.target.id
    let thisHex
    switch(color)
    {
        case "selectRed":
            setStyleColor(hexRed)   
            thisHex = hexRed
            break
    
        case "selectOrange":
            setStyleColor(hexOrange) 
            thisHex = hexOrange  
            break
                
        case "selectYellow":
            setStyleColor(hexYellow)
            thisHex = hexYellow
            break 
                        
        case "selectGreen":
            setStyleColor(hexGreen)
            thisHex = hexGreen
            break
            
        case "selectBlue":
            setStyleColor(hexBlue)
            thisHex = hexBlue
            break
            
        case "selectPurple":
            setStyleColor(hexPurple)
            thisHex = hexPurple
            break
        
        default:
            setStyleColor(hexBlack)
            thisHex = hexBlack
    }

    $('#'+lastColor).removeClass("selectedColor")
    $("#"+color).addClass("selectedColor")
    lastColor = color
    
    if(drawSelect.getFeatures().getArray()[0] != null)
    {
        drawSelect.getFeatures().getArray().forEach( (el) =>
        {
            setFeatureColor(thisHex, el)
        })
        drawSelect.getFeatures().clear()
        drawArray = []
    }
}) 

$('#printMetric').click( () =>
{ 
    $('#showMetrics').html( () => 
    {
        feature = drawSelect.getFeatures().getArray()[0]
        let output = "none selected"
        
        if ( feature == null )
        { return output }
    
        if ( feature.getGeometry().getType() == "Polygon" ) 
        {
            const polygon = feature.getGeometry()
            const area = Sphere.getArea(polygon)
            
            if ( area > 10000 ) 
            { output = (Math.round(area / 1000000 * 100) / 100) + ' ' + 'km<sup>2</sup>' } 
            else 
            { output = (Math.round(area * 100) / 100) + ' ' + 'm<sup>2</sup>' }
            return output
        }
        else if ( feature.getGeometry().getType() == "Circle" ) 
        {  
            const circle = feature.getGeometry()
            const polyCircle = PolygonGeom.fromCircle(circle)
            const area = Sphere.getArea(polyCircle)
            
            if ( area > 10000 ) 
            { output = (Math.round(area / 1000000 * 100) / 100) + ' ' + 'km<sup>2</sup>'} 
            else 
            { output = (Math.round(area * 100) / 100) + ' ' + 'm<sup>2</sup>' }
            return output
        }
        else if ( feature.getGeometry().getType() == "LineString" )
        {
            const line = feature.getGeometry()
            const length = Sphere.getLength(line)
            
            if ( length > 100 ) 
            { output = (Math.round(length / 1000 * 100) / 100) + ' ' + 'km' } 
            else 
            { output = (Math.round(length * 100) / 100) + ' ' + 'm' }
            return output    
        } 
    }) 
})

$('#freehand').click( () =>
{
    if( toggleFreehand == false )
    {
        toggleFreehand = true;
        $('#freehand').addClass('selectedFunction')
        $('#straight').removeClass('selectedFunction')
        refreshDraw()
    }
})

$('#straight').click( () =>
{
    if( toggleFreehand == true )
    {
        toggleFreehand = false;
        $('#straight').addClass('selectedFunction')
        $('#freehand').removeClass('selectedFunction')
        refreshDraw()
    }
})

//toggles orange border on deleteLayer when clicking
$('#deleteLayer').mousedown( () => 
{$('#deleteLayer').addClass("selectedFunction")}).mouseup( () => 
{$('#deleteLayer').removeClass("selectedFunction")}).mouseleave( () => 
{$('#deleteLayer').removeClass("selectedFunction")})

drawSelect.on('select', function(evt)
{
    let currentObject
    evt.selected.forEach(function(f) 
    {            
        currentObject = {"ol_uid" : f.ol_uid, "style" : f.getStyle()}

        if(!drawArray.indexOf(currentObject) != -1)
        {
            drawArray.push(currentObject)
        }
        f.setStyle(selectStyle)
    });

    evt.deselected.forEach(function(f) 
    {
        let tempObj = -1
        let tempInd = 0
        drawArray.forEach(function(el)
        {
            if( f.ol_uid == el.ol_uid )
            {
                tempObj = el
                tempInd = drawArray.indexOf(el)
            }
        })
        if(tempObj != -1)
        {        
            f.setStyle(tempObj.style); 
            drawArray.splice(tempInd, 1) 
        }
    });
});