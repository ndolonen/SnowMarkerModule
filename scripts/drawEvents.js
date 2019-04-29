/**
 * Copyright (c) 2019, Njaal Dolonen, Nicolay Skjelbred, Jan-Magnus Solheim All rights reserved.
 * See LICENSE for more detail.  
 * */ 

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
        $('#draw').attr("src", "images/draw_on.png")
    }
    else
    {
        removeDraw()
        $('#draw').attr("src", "images/draw_off.png")
    }
    toggleDraw = !toggleDraw 
})

$('#modifyLayer').click( () => 
{ 
    if ( toggleModify )
    {
        addModify()
        $('#modifyLayer').text("Stop Modify")
    }
    else
    {        
        removeModify()
        $('#modifyLayer').text("Start Modify")

    }
    toggleModify = !toggleModify
})

$('#snapToggle').click( () => 
{
    if ( toggleSnap )
    {        
        addSnap()
        $('#snapToggle').text("Stop Snap")
    }
    else
    {
        removeSnap()
        $('#snapToggle').text("Start Snap")
    }
    toggleSnap = !toggleSnap
})


$('#deleteLayer').click( () => 
{
    if( drawselect.getFeatures().getArray()[0] != null)
    {
        feature = drawselect.getFeatures().getArray()[0];
        var selectSource = drawselect.getLayer(feature).getSource();
        selectSource.removeFeature(feature);
        drawselect.getFeatures().remove(feature);
    }  
})


let lastColor;
$('.colorOption').click( (e) =>
{
    let color = e.target.id

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