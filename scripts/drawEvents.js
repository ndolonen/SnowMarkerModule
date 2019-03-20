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
    if( drawselect.getFeatures().getArray()[0] != null )
    {
        feature = drawselect.getFeatures().getArray()[0]
        if( drawselect.getLayer(feature) != null )
        {
            let selectSource = drawselect.getLayer(feature).getSource()
            selectSource.removeFeature(feature)
            drawselect.getFeatures().remove(feature)
        }
    }  
})


let lastColor = "selectZero";
$('.colorOption').click( (e) =>
{
    let color = e.target.id
    if( color != lastColor)
    {
        switch(color)
        {
            case "selectRed":
                selectedSource = redObject.source
                break
        
            case "selectOrange":
                selectedSource = orangeObject.source
                break
                    
            case "selectYellow":
                selectedSource = yellowObject.source
                break 
                            
            case "selectGreen":
                selectedSource = greenObject.source
                break
                
            case "selectBlue":
                selectedSource = blueObject.source
                break
                
            case "selectPurple":
                selectedSource = purpleObject.source
                break
            
            default:
                selectedSource = drawSource
        }

        $("#"+color).addClass("selectedColor")
        $('#'+lastColor).removeClass("selectedColor")
        lastColor = color

        refreshDraw()

        if(!toggleModify)
        {
            removeModify()
            addModify()
        }
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