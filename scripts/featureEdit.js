let toggleModify = false;
let toggleSnap = false;

$('#modifyLayer').click( () => 
{ 
    toggleModify = !toggleModify;
    if ( toggleModify )
    {
        removeModify();
        $('#modifyLayer').text("Start Modify");

    }
    else
    {
        addModify();
        $('#modifyLayer').text("Stop Modify");
    }
});

$('#snapToggle').click( () => 
{
    toggleSnap = !toggleSnap;
    if ( toggleSnap )
    {
        removeSnap();
        $('#snapToggle').text("Start Snap");

    }
    else
    {
        addSnap();
        $('#snapToggle').text("Stop Snap");
    }
})