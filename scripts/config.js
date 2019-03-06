//(Plugin) Funksjon for å krysse ut i polygon form. const FillPattern = ol.style.FillPattern 


//import and create predefined calls for functions
const Map = ol.Map
const View = ol.View
const Draw = ol.interaction.Draw
const Modify = ol.interaction.Modify
const Snap = ol.interaction.Snap
const Select= ol.interaction.Select
const getActive = ol.interaction.getActive
const TileLayer = ol.layer.Tile
const VectorLayer = ol.layer.Vector
const OSM = ol.source.OSM
const VectorSource = ol.source.Vector
const CircleStyle = ol.style.Circle
const Fill = ol.style.Fill
const Stroke = ol.style.Stroke
const Style = ol.style.Style
const FromLonLat = ol.proj.fromLonLat

//global variables
let draw, snap, modify, select
let toggleDraw = false
let toggleModify = false
let toggleSnap = false

//global color declarations
const hexOpacity = "20"
const hexBlack = "#1f1f1f"
const hexRed = "#ff0000"
const hexOrange = "#ff9a28"
const hexYellow = "#ffff00"
const hexGreen = "#01b301"
const hexBlue = "#0000ff"
const hexPurple = "#a300a3"

function typeSelect() { return $('#type').val() }

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
    })
    return style
}