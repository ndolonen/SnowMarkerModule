//import and create predefined calls for functions
// const Draw = ol.interaction.Draw 
// const Modify = ol.interaction.Modify 
// const Snap = ol.interaction.Snap 
// const drawSelect= ol.interaction.Select 
// const getActive = ol.interaction.getActive 
// const VectorLayer = ol.layer.Vector
// const VectorSource = ol.source.Vector
// const CircleStyle = ol.style.Circle 
// const Fill = ol.style.Fill 
// const Stroke = ol.style.Stroke 
// const Style = ol.style.Style 
// const FromLonLat = ol.proj.fromLonLat
// const Sphere = ol.sphere 
// const PolygonGeom = ol.geom.Polygon 

import {Draw as Draw, Modify as Modify, Snap as Snap, Select as Select, getActive as getActive} from "ol/interaction.js"
import {Style as Style, Stroke as Stroke, Circle as CircleStyle, Fill as Fill} from "ol/style.js"
import {Sphere as Sphere} from "ol/sphere.js"
import {Polygon as PolygonGeom} from "ol/geom.js"
import {Vector as VectorSource} from "ol/source.js"
import {Vector as VectorLayer} from "ol/layer.js"
import {fromLonLat as FromLonLat} from "ol/proj.js"


//global variables
let draw, snap, drawselect, feature
let blackModify, redModify, orangeModify, yellowModify, greenModify, blueModify, purpleModify
let toggleDraw = true, toggleModify = true, toggleSnap = true, toggleFreehand = true


//global color declarations
const hexOpacity = "20"
const hexZero = "#1f1f1f" // black
const hexRed = "#ff0000" // red
const hexOrange = "#ff9a28" // orange
const hexYellow = "#ffff00" // yellow
const hexGreen = "#01b301" // green
const hexBlue = "#0000ff" // blue
const hexPurple = "#a300a3" // purple

$('#selectZero').css('background-color', hexZero)
$('#selectRed').css('background-color', hexRed)
$('#selectOrange').css('background-color', hexOrange)
$('#selectYellow').css('background-color', hexYellow)
$('#selectGreen').css('background-color', hexGreen)
$('#selectBlue').css('background-color', hexBlue)
$('#selectPurple').css('background-color', hexPurple)

//Found on Stackover flow:
//source: https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
//Made by broofa
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    });
}

function typeSelect() 
{ return $('#type').val() }

//initial color settings
function colorInit() 
{ 
    let style = new Style
    ({
        fill: new Fill
        ({
            color: hexZero + hexOpacity
        }),
        stroke: new Stroke
        ({
            color: hexZero,
            width: 3
        }),
        image: new CircleStyle
        ({
            radius: 7,
            fill: new Fill
            ({
                color: hexZero
            })
        })
    })
    return style
}

//default source
let drawSource = new VectorSource()
let drawLayer = new VectorLayer({
    source: drawSource,
    style: colorInit()
})
map.addLayer(drawLayer)

let selectedSource;
selectedSource = drawSource