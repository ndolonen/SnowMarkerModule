/**
 * Script to manage drawing functionality
 */

function addInteractions() {
    draw = new Draw({
        source: source,
        type: typeSelect.value,
        freehand: true
    });
    map.addInteraction(draw);
    snap = new Snap({source: source});
    map.addInteraction(snap);

}

var toggleDraw = false;
/**
 * Handle change event.
 */
typeSelect.onchange = function() {
    if(toggleDraw)
    {
        refreshDraw();
    }
};

document.getElementById("draw").onclick = () => 
{
    toggleDraw = !toggleDraw;
    if (toggleDraw)
    {
        addInteractions();
        document.getElementById("draw").innerText = "Stop drawing"
        document.getElementById("draw").src = "images/draw_on.png"
    }
    else 
    {
      map.removeInteraction(draw);
      map.removeInteraction(snap);
      document.getElementById("draw").innerText = "Start drawing"
      document.getElementById("draw").src = "images/draw_off.png"
    }
}


function refreshDraw()
{
    map.removeInteraction(draw);
    map.removeInteraction(snap);
    addInteractions();
}

