/**
 * Script to manage drawing functionality
 */
$('#draw').click( () =>
{ 
    toggleDraw = !toggleDraw 
    
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
})

$('#type').change( () => 
{
    if(toggleDraw)
    {
        removeDraw()
        addDraw()
    }
})