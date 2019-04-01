var map = browser.map

//import and create predefined calls for functions
const Draw = ol.interaction.Draw 
const Modify = ol.interaction.Modify 
const Snap = ol.interaction.Snap 
const DrawSelect= ol.interaction.Select 
const getActive = ol.interaction.getActive 
const VectorLayer = ol.layer.Vector
const VectorSource = ol.source.Vector
const CircleStyle = ol.style.Circle 
const Fill = ol.style.Fill 
const Stroke = ol.style.Stroke 
const Style = ol.style.Style 
const FromLonLat = ol.proj.fromLonLat
const Sphere = ol.sphere 
const PolygonGeom = ol.geom.Polygon 

//global variables
let draw, snap, drawSelect, feature, modify
let toggleDraw = false, toggleModify = false, toggleSnap = false, toggleFreehand = true, toggleTooltip = false
let currentStyle
let drawArray = []

//global color declarations
const hexOpacity = "20"
const hexBlack = "#1f1f1f" 
const hexRed = "#e60000"
const hexOrange = "#ff9a28"
const hexYellow = "#ffff00"
const hexGreen = "#01b301"
const hexBlue = "#33ccff"
const hexPurple = "#a300a3"
const hexSelect = "#248f8f"

const cssColors = () => {
    $('#selectBlack').css('background-color', hexBlack)
    $('#selectRed').css('background-color', hexRed)
    $('#selectOrange').css('background-color', hexOrange)
    $('#selectYellow').css('background-color', hexYellow)
    $('#selectGreen').css('background-color', hexGreen)
    $('#selectBlue').css('background-color', hexBlue)
    $('#selectPurple').css('background-color', hexPurple)
}
cssColors()

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
            color: hexBlack,
            width: 3
        }),
        image: new CircleStyle
        ({
            radius: 7,
            fill: new Fill
            ({
                color: hexBlack
            })
        })
    })
    return style
}
currentStyle = colorInit()

//default source
let drawSource = new VectorSource()
let drawLayer = new VectorLayer({
    source: drawSource
})
map.addLayer(drawLayer)