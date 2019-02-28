// import Map from 'ol/Map.js';
// import View from 'ol/View.js';
// import {Draw, Modify, Snap, getActive} from 'ol/interaction.js';
// import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
// import {OSM, Vector as VectorSource} from 'ol/source.js';
// import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style.js';

const Map = ol.Map;
const View = ol.View;
const Draw = ol.interaction.Draw;
const Modify = ol.interaction.Modify;
const Snap = ol.interaction.Snap;
const getActive = ol.interaction.getActive;
const TileLayer = ol.layer.Tile;
const VectorLayer = ol.layer.Vector;
const OSM = ol.source.OSM;
const VectorSource = ol.source.Vector;
const CircleStyle = ol.style.Circle;
const Fill = ol.style.Fill;
const Stroke = ol.style.Stroke;
const Style = ol.style.Style;


var raster = new TileLayer({
    source: new OSM()
});

var source = new VectorSource();
var vector = new VectorLayer({
    source: source,
    style: new Style()
});
setColor()

var map = new Map({
    layers: [raster, vector],
    target: 'map',
    view: new View({
        center: [14.14278, 66.31278],
        zoom: 4
    })
});

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

function setColor()
{
    var colorVal = document.getElementById('color').value;
    vector.setStyle(new Style
    ({
        fill: new Fill
        ({
            color: 'rgba(255, 255, 255, 0.2)'
        }),
        stroke: new Stroke
        ({
            color: colorVal,
            width: 2
        }),
        image: new CircleStyle
        ({
            radius: 7,
            fill: new Fill
            ({
                color: colorVal
            })
        })
    })
)}

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