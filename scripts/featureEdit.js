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

    refreshDraw()

    if(!toggleModify)
    {
        removeModify()
        addModify()
    }
})   
