

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