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
//Function to add drawing functionality to map.
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

    //Adds style to drawn feature and adds it to the undo Array.
    draw.on('drawend', function (e)
    { 
         e.feature.setStyle(currentStyle)
         addNewChange(e.feature)
    })
} //End addDraw()

//Function to add modify functionality to map.
function addModify()
{
    //Defines modify interractions.
    modify = new Modify({source: drawSource})
    map.addInteraction(modify)
    $('#modifyToggle').addClass('selectedFunction')
} //End addModify()

//Function to snap on geometry types.
function addSnap()
{
    snap = new Snap({source: drawSource})
    map.addInteraction(snap)
    $('#snapToggle').addClass('selectedFunction')
} //End addSnap()

//Function to disable draw functionality.
function removeDraw()
{ 
    map.removeInteraction(draw) 
    $('#drawToggle').removeClass('selectedFunction')
} //End removeDraw()

//Function to disable Modify functionality from the map.
function removeModify() 
{ 
    map.removeInteraction(modify)
    $('#modifyToggle').removeClass('selectedFunction')
} //End removeModify()

//Function to disable geometry snapping on draw.
function removeSnap()
{ 
    map.removeInteraction(snap)
    $('#snapToggle').removeClass('selectedFunction')
} //End removeSnap()

//Function to refresh draw functionality, used to refresh parameters(colors/type/freehand).
function refreshDraw()
{
    if(toggleDraw)
    {
        removeDraw()
        addDraw()
    }
} //End refreshDraw()