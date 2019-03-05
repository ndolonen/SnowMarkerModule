//TODO: Write code!
//import and create predefined calls for functions
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
const FromLonLat = ol.proj.fromLonLat;

//global variables
let draw, snap, modify;
function typeSelect() { return $('#type').val(); }

function colorInit() 
{ 
    vector.setStyle(new Style
    ({
        fill: new Fill
        ({
            color: 'rgba(255, 255, 255, 0.2)'
        }),
        stroke: new Stroke
        ({
            color: '#000000',
            width: 2
        }),
        image: new CircleStyle
        ({
            radius: 7,
            fill: new Fill
            ({
                color: '#000000'
            })
        })
    }))
}

