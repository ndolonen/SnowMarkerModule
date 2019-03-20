//Script for managing drawings.
$("#buttonHide").click( () => 
{ $("#drawbox").toggle() })

$('#type').change( () => 
{ refreshDraw() })

$('#draw').click( () =>
{ 
    if ( toggleDraw )
    {
        addDraw()
        // $('#draw').attr("src", "images/draw_on.png")
        // $('#draw').css('border-color', '#ff4500ff')
        $('#draw').addClass('selectedFunction')
    }
    else
    {
        removeDraw()
        // $('#draw').attr("src", "images/draw_off.png")
        if ( toggleSnap == true )
        {   
            toggleSnap = false;
            map.removeInteraction(snap);
            $('#snapToggle').text("Start snap")
        }
        // $('#draw').css('border-color', '#ff450000')
        $('#draw').removeClass('selectedFunction')
    }
    toggleDraw = !toggleDraw 
})

$('#modifyLayer').click( () => 
{ 
    if ( toggleModify )
    {
        addModify()
        $('#modifyLayer').addClass('selectedFunction')
    }
    else
    {        
        removeModify()
        $('#modifyLayer').removeClass('selectedFunction')
    }
    toggleModify = !toggleModify
})

$('#snapToggle').click( () => 
{
    if ( toggleSnap )
    {        
        addSnap()
        $('#snapToggle').text("Stop Snap")
        //$('#snapToggle').addClass('selectedFunction')

    }
    else
    {
        removeSnap()
        $('#snapToggle').text("Start Snap")
        //$('#snapToggle').removeClass('selectedFunction')
    }
    toggleSnap = !toggleSnap
})


$('#deleteLayer').click( () => 
{
    if(drawselect.getFeatures().getArray()[0] != null)
    {
        feature = drawselect.getFeatures()
        let selectSource = drawselect.getLayer(feature.getArray()[0]).getSource()
        feature.getArray().forEach(element => {
            selectSource.removeFeature(element)
        });
        feature.clear()
    }

})
    // for( let i = 0; i < drawselect.getFeatures().getArray().length; i++ )
    // {
    //     feature = drawselect.getFeatures().getArray()[i]
    // eventuell if test :O

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
        // setColor(hexRed, feature)
            break
    
        case "selectOrange":
            setStyleColor(hexOrange) 
            thisHex = hexOrange  
            // setColor(hexOrange, feature)
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

    refreshDraw()

    if(!toggleModify)
    {
        removeModify()
        addModify()
    }
    
    if(feature = drawselect.getFeatures().getArray()[0] != null)
    {
        for( let i = 0; i < drawselect.getFeatures().getArray().length; i++ )
        {
            feature = drawselect.getFeatures().getArray()[i]
            setFeatureColor(thisHex, feature)
        }
        drawselect.getFeatures().clear()
    }
}) 

$('#printMetric').click( () =>
{ 
    $('#showMetrics').html( () => 
    {
        feature = drawselect.getFeatures().getArray()[0]
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
        // $('#straight').css('border-color', '#ff450000')
        // $('#freehand').css('border-color', '#ff4500ff')
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
        // $('#straight').css('border-color', '#ff4500ff')
        // $('#freehand').css('border-color', '#ff450000')
        refreshDraw()
    }
})

//toggles orange border on deleteLayer when clicking
$('#deleteLayer').mousedown( () => 
{$('#deleteLayer').addClass("selectedFunction")}).mouseup( () => 
{$('#deleteLayer').removeClass("selectedFunction")}).mouseleave( () => 
{$('#deleteLayer').removeClass("selectedFunction")})

//attempt to fix selection bug on zoom/mapmove (ON ZOOM IT SELECTS ALL)
let lastzoom = "6"
function onMoveEnd(evt)
{
    let map = evt.map
    let zoom = map.getView().getZoom()
    // console.log(zoom)
    // if(zoom != lastzoom) 
    // {
        if(drawselect.getFeatures().getArray()[0] != null)
        { drawselect.getFeatures().clear() }
        lastZoom = zoom;
        removeSelect() 
        addSelect()
    // }
}

map.on('moveend', onMoveEnd)
