/**
 * Script to manage drawing functionality
 */
var toggleDraw = false;

$('#draw').click( () =>
{ 
    toggleDraw = !toggleDraw; 
    
    if ( toggleDraw )
    {
        addDraw();
        $('#draw').attr("src", "images/draw_on.png");
    }
    else
    {
        removeDraw();
        $('#draw').attr("src", "images/draw_off.png");
    }
})

$('#type').change( () => 
{
    if(toggleDraw)
    {
        removeDraw();
        addDraw();
    }
});