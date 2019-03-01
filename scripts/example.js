

var modify = new Modify({source: source});
    map.addInteraction(modify);

var draw, snap; // global so we can remove them later
var typeSelect = document.getElementById('type');

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
    }
    else 
    {
      map.removeInteraction(draw);
      map.removeInteraction(snap);
      document.getElementById("draw").innerText = "Start drawing"
    }
}

var colorSelect = document.getElementById('color');
colorSelect.onchange = () => 
{
    setColor();
}



document.getElementById('addLayer').onclick = () => 
{
    resetLayer();
    refreshDraw();
}

function refreshDraw()
{
    map.removeInteraction(draw);
    map.removeInteraction(snap);
    addInteractions();
}

function resetLayer()
{
    //map.removeLayer(vector);
    //map.addLayer(vector);
    //map.addLayer(newVector);
    //map.removeInteraction(vector);
    //vector = newVector();
    //map.addInteraction(vector);
}

function newVector()
{
    var newVector = new VectorLayer({
        source: source,
        style: new Style({
            fill: new Fill({
                color: 'rgba(255, 255, 255, 0.2)'
            }),
            stroke: new Stroke({
                color: '#ffcc33',
                width: 2
            }),
            image: new CircleStyle({
                radius: 7,
                fill: new Fill({
                    color: '#ffcc33'
                })
            })
        })
    });
    return newVector
}   