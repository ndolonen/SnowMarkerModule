 /*
    Draw Module based on OpenLayers 5. 
    drawFunctions. 

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
//function to add drawing functionality to map
function addDraw()
{
    draw = new Draw(
    {
        source: drawSource,
        type: drawType,
        freehand: toggleFreehand,
    })
    map.addInteraction(draw)
    $('#drawToggle').addClass('selectedFunction')

    draw.on('drawend', function (e)
    { 
         e.feature.setStyle(currentStyle)
         addNewChange(e.feature)
    })
}

//TODO: good name?
function refreshDrawType()
{
    drawType = $("#currentType").text()
    refreshDraw()
}

//function to add modify functionality to map
function addModify()
{
    
    //define modify interractions
    modify = new Modify({source: drawSource})
    map.addInteraction(modify)
    $('#modifyToggle').addClass('selectedFunction')
    // removeSelect()
}
//function to snap on geometry types.
function addSnap()
{
    snap = new Snap({source: drawSource})
    map.addInteraction(snap)
    $('#snapToggle').addClass('selectedFunction')
}

//function to add functionality to select a feature
// function initSelect()
// {
//     drawSelect = new DrawSelect({
//         source: drawSource,
//         hitTolerance: 5, 
//         style: selectStyle})
// }
//initiate addSelect on startup
//initSelect()

// function addSelect()
// { map.addInteraction(drawSelect) }

function removeDraw()
{ 
    map.removeInteraction(draw) 
    $('#drawToggle').removeClass('selectedFunction')

}

function removeModify() 
{ 
    map.removeInteraction(modify)
    $('#modifyToggle').removeClass('selectedFunction')
    // addSelect() 
}

function removeSnap()
{ 
    map.removeInteraction(snap)
    $('#snapToggle').removeClass('selectedFunction')

}

function removeSelect()
{ map.removeInteraction(drawSelect) }

function refreshDraw()
{
    if(toggleDraw)
    {
        removeDraw()
        addDraw()
    }
}