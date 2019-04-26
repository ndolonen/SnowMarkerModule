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

//Root mount. 
const popupRoot = document.getElementById('markerModule')

//Necesarry resources to be loaded when creating the drawbox.
function loadDrawOnMount()
{
    m.mount(popupRoot, drawPopup)
    let drawRoot = document.getElementById("drawBox")
    let iconRoot = document.getElementById("iconBox")
    m.mount(drawRoot, drawTools)
    m.mount(iconRoot, iconTools)
    $('#iconBox').hide()
    
    cssColors()
    deleteHighlightHandler() 
}
//TODO: Remove on implementation and use OnClick handler instead
loadDrawOnMount()

let selectedToolbox = false //false = draw, true = icon
//OnClick handler for showing Drawtab.
function showDrawbox_click()
{
    if( selectedToolbox )
    { swappingTab() }
}

//OnClick handler for showing Icontab.
function showIconbox_click()
{
    if( !selectedToolbox )
    { swappingTab() }
}

//Function to swap between drawbox and iconbox.
function swappingTab()
{   
    $('#drawBox').toggle()
    $('#iconBox').toggle()
    
    //drawTab
    if( selectedToolbox )
    {
        $("#drawPopupTitle").text("Draw Tools")
        $('#iconTab').removeClass("selectedTab")
        $('#drawTab').addClass("selectedTab")
    }
    //iconTab
    else
    {
        $("#drawPopupTitle").text("Icon Tools")
        $('#drawTab').removeClass("selectedTab")
        $('#iconTab').addClass("selectedTab")
    }
    
    //Removes highlight on buttons.
    $('#drawToggle').removeClass('selectedFunction')
    $('#snapToggle').removeClass('selectedFunction')
    $('#modifyToggle').removeClass('selectedFunction')
    $('#'+thisID).removeClass('selectedIcon')
    
    //Disables funtions to avoid bugs.
    toggleDraw = false
    toggleModify = false
    toggleSnap = false
    thisID=null
    map.removeInteraction(draw)
    map.removeInteraction(snap)
    map.removeInteraction(modify)
    selectedToolbox = !selectedToolbox
}