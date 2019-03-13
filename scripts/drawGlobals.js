//import and create predefined calls for functions
const Draw = ol.interaction.Draw
const Modify = ol.interaction.Modify
const Snap = ol.interaction.Snap
const drawSelect= ol.interaction.Select
const getActive = ol.interaction.getActive
const VectorLayer = ol.layer.Vector
const VectorSource = ol.source.Vector
const CircleStyle = ol.style.Circle
const Fill = ol.style.Fill
const Stroke = ol.style.Stroke
const Style = ol.style.Style
const FromLonLat = ol.proj.fromLonLat

//global variables
let draw, snap, modify, drawselect
let toggleDraw = true, toggleModify = true, toggleSnap = true

//global color declarations
const hexOpacity = "20"
const hexBlack = "#1f1f1f"
const hexRed = "#ff0000"
const hexOrange = "#ff9a28"
const hexYellow = "#ffff00"
const hexGreen = "#01b301"
const hexBlue = "#0000ff"
const hexPurple = "#a300a3"

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
            color: hexBlack + hexOpacity
        }),
        stroke: new Stroke
        ({
            color: '#000000',
            width: 3
        }),
        image: new CircleStyle
        ({
            radius: 7,
            fill: new Fill
            ({
                color: '#000000'
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