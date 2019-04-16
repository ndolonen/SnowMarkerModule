 /*
    Draw Module based on OpenLayers 5. 
    drawStyle. 

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

//Sets the current style to the selected color.
function setStyleColor(colorVal)
{
    currentStyle = getStyle(colorVal)
}
   
//Returns a style with a certain color.
function getStyle(colorVal)
{
    let colorStyle = new Style(
    {
        stroke: new Stroke(
        {
            color: colorVal,
            width: 3
        }),
        fill: new Fill(
        { color: colorVal + hexOpacity })
    })
    return colorStyle
}

//Initial color settings.
setStyleColor(hexBlack)

//Style for selecting features.
const selectStyle = new Style(
{
    stroke: new Stroke(
    {
        color: hexSelectStroke,
        width: '3'
    }),
    fill: new Fill(
    { color: hexSelectFill + hexOpacity })
})

//Toggles orange border on deleteLayer when clicking and removes it on mouseleave.
function deleteHighlightHandler() 
{
    $('#deleteLayer').mousedown( () => 
    { $('#deleteLayer').addClass("selectedFunction") }).mouseup( () => 
    { $('#deleteLayer').removeClass("selectedFunction") }).mouseleave( () => 
    { $('#deleteLayer').removeClass("selectedFunction") })
}