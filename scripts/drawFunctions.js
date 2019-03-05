function addDraw()
{
    draw = new Draw({
        source: source,
        type: $('#type').val(),
        freehand: true
    });
    map.addInteraction(draw);
}

function addModify()
{
    modify = new Modify({source: source});
    map.addInteraction(modify); 
}

function addSnap()
{
    snap = new Snap({source: source});
    map.addInteraction(snap);
}

function removeDraw()
{ map.removeInteraction(draw); }

function removeModify() 
{ map.removeInteraction(modify); }

function removeSnap()
{ map.removeInteraction(snap); }
