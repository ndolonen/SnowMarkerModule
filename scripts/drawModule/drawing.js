 /*
    Draw Module based on OpenLayers 5. 
    drawing. 

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

/**
 * Script to manage drawing functionality
 * Legacy code
 */
var toggleDraw = false;
/**
 * Handle change event.
 */

$('#draw').click( () =>
{ 
    addNewChange()
    toggleDraw = !toggleDraw; 
    
    if ( toggleDraw )
    {
        addDraw();
        $('#draw').attr("src", "images/draw_on.png");
    }
    else
    {
        removeDraw();
        $('#draw').attr("src", "images/draw_off.png");
    }
})

typeSelect.onchange = () => {
    if(toggleDraw)
    {
        removeDraw();
        addDraw();
    }
};