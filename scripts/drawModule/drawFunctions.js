
//function to add drawing functionality to map
function addDraw()
{
    draw = new Draw(
    {
        source: drawSource,
        type: typeSelect(),
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

//function to add modify functionality to map
function addModify()
{
    
    //define modify interractions
    modify = new Modify({source: drawSource})
    map.addInteraction(modify)
    $('#modifyToggle').addClass('selectedFunction')
    removeSelect()
}
//function to snap on geometry types.
function addSnap()
{
    snap = new Snap({source: drawSource})
    map.addInteraction(snap)
    $('#snapToggle').addClass('selectedFunction')
}

//function to add functionality to select a feature
function initSelect()
{
    drawSelect = new DrawSelect({
        source: drawSource,
        hitTolerance: 5, 
        style: selectStyle})
    map.addInteraction(drawSelect)
}
//initiate addSelect on startup
initSelect()

function addSelect()
{
    map.addInteraction(drawSelect)
}

function removeDraw()
{ 
    map.removeInteraction(draw) 
    $('#drawToggle').removeClass('selectedFunction')

}

function removeModify() 
{ 
    map.removeInteraction(modify)
    $('#modifyToggle').removeClass('selectedFunction')
    addSelect() 
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