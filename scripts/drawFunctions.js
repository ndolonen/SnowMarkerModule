function addDraw()
{
    draw = new Draw({
        source: selectedSource,
        type: typeSelect(),
        freehand: true
    })
    map.addInteraction(draw)
}

function addModify()
{
    modify = new Modify({source: selectedSource})
    map.addInteraction(modify) 
}

function addSnap()
{
    snap = new Snap({source: selectedSource})
    map.addInteraction(snap)
}

function addSelect()
{
    drawselect = new drawSelect({source: selectedSource})
    map.addInteraction((drawselect))
}


function removeDraw()
{ map.removeInteraction(draw) }

function removeModify() 
{ map.removeInteraction(modify) }

function removeSnap()
{ map.removeInteraction(snap) }

function removeSelect()
{ map.removeInteraction(drawselect) }

function refreshDraw()
{
    if(!toggleDraw)
    {
        removeDraw()
        addDraw()
    }
}