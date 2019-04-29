/**
 * Copyright (c) 2019, Njaal Dolonen, Nicolay Skjelbred, Jan-Magnus Solheim. 
 * All rights reserved. See LICENSE for more detail.  
 * */ 

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