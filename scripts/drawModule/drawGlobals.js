 /*
    Draw Module based on OpenLayers 5. 
    drawGlobals. 

    Copyright (C) 2019 Nicolay Skjelbred, Jan-Magnus Solheim and Njål Dolonen, 
    ohanssen@acm.org

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published 
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.
    You should have received a copy of the GNU Affero General Public License
    along with this program. If not, see <http://www.gnu.org/licenses/>.
*/


//Import and create predefined calls for functions.
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
const Icon = ol.style.Icon
const FromLonLat = ol.proj.fromLonLat
const Sphere = ol.sphere 
const PolygonGeom = ol.geom.Polygon 
const Point = ol.geom.Point

//Global variables
let draw, snap, drawSelect, feature, modify
let toggleDraw = false, toggleModify = false, toggleSnap = false, toggleFreehand = true, 
    toggleTooltip = false, droppingIcon = false, dropdownShown = false
//Decides if icons has to be toggled on/off or is disabled after drop.
let continuousIconDropping = false
//Contains the currently selected style.
let currentStyle
//originalStyles Contains the original ol_uid of a feature and the style.
//selectedFeatures Contains the currently selected Features.
let originalStyles = [], selectedFeatures = []
//Default draw type: "Polygon", Options: "LineString", "Polygon", "Circle".
let drawType = "Polygon"

//Global opacity declaration.
const hexOpacity = "20"
//Global color declarations.

function testHex(color)
{
    if( !color )
    { return false }
    //regex of hex with 3 or 6 letters
    else if ( color.search(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i) == 0 )
    { return true }
    else
    { return false }
}

var hexBlack = "#1f1f1f"
if( testHex(color1) )
{ hexBlack = color1 }
const hexRed = "#e60000"
const hexOrange = "#ff9a28"
const hexYellow = "#ffff00"
const hexGreen = "#01b301"
const hexBlue = "#33ccff"
const hexPurple = "#a300a3"
const hexSelect = "#248f8f" //TODO: Create better style for Select
const hexSelectStroke = "#0569ff"
const hexSelectFill = "#9ebbff"

//Sets the color of the colorselectors. 
//Represents the colors of the hex variables used to draw.
const cssColors = () => {
    $('#selectBlack').css('background-color', hexBlack)
    $('#selectRed').css('background-color', hexRed)
    $('#selectOrange').css('background-color', hexOrange)
    $('#selectYellow').css('background-color', hexYellow)
    $('#selectGreen').css('background-color', hexGreen)
    $('#selectBlue').css('background-color', hexBlue)
    $('#selectPurple').css('background-color', hexPurple)
} //End cssColors

//Default source for drawing.
let drawSource = new VectorSource()
let drawLayer = new VectorLayer(
{ source: drawSource })
map.addLayer(drawLayer)

