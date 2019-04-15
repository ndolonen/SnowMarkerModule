 /*
    Draw Module based on OpenLayers 5. 
    mountReload. 

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

// $('#iconTab').hide() 

// let swapDrawWindowToggle = false
// $('.toggleFunction').click( () => 
// {
//     if (swapDrawWindowToggle)
//     {   
//         $('#iconTab').hide()
//         $('#drawTab').show()  
//         swapDrawWindowToggle = false 
//     } else
//     {
//         $('#drawTab').hide() 
//         $('#iconTab').show() 
//         swapDrawWindowToggle = true
//     }   
// })

m.mount(popupRoot, drawPopup)
let drawRoot = document.getElementById("drawBox")
let iconRoot = document.getElementById("iconBox")
m.mount(drawRoot, drawTools)
m.mount(iconRoot, iconTools)
// markerIcons_load()
$('#iconBox').hide()

// m.mount(iconRoot, iconTools)
cssColors()
function resetDraw()
{
    m.mount(drawRoot, drawTools)
    cssColors()
}

let selectedToolbox = false //false = draw, true = tools
function showDrawbox()
{
    if( selectedToolbox )
    {    
        $("#drawPopupTitle").text("Draw Tools")
        $('#drawBox').show()
        $('#iconBox').hide()
        $('#iconTab').removeClass("selectedTab")
        $('#drawTab').addClass("selectedTab")
        selectedToolbox = false
    }
}

function showIconbox()
{
    if( !selectedToolbox )
    { 
        $("#drawPopupTitle").text("Icon Tools")
        $('#drawBox').hide()
        $('#iconBox').show()
        $('#drawTab').removeClass("selectedTab")
        $('#iconTab').addClass("selectedTab")
        selectedToolbox = true
    }
}