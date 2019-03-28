/**
 * Script to manage drawing functionality
 */
var toggleDraw = false;
/**
 * Handle change event.
 */

$('#draw').click( () =>
{ 
    addNewChange()
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

typeSelect.onchange = () => {
    if(toggleDraw)
    {
        removeDraw();
        addDraw();
    }
};