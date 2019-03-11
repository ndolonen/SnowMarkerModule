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
    console.log("Test Delete Function Init")

    function deleteItem()
    {
        feature = select.getFeatures().getArray()[0];
        var selectSource = select.getLayer(feature).getSource();
        selectSource.removeFeature(feature);
        select.getFeatures().remove(feature);
    }  
    
    deleteItem()
})