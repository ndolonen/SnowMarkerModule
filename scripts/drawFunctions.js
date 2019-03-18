
//function to add drawing functionality to map
function addDraw()
{
    //TODO: Make Toggle button
    if ( freehandToggle == true )
    {
        draw = new Draw(
        {
            source: selectedSource,
            type: typeSelect(),
            freehand: true
        })
    }
    else 
    {
        draw = new Draw(
        {
            source: selectedSource,
            type: typeSelect(),
            freehand: false
        })
    }
    map.addInteraction(draw)
}

//function to add modify functionality to map
function addModify()
{
    //define modify interractions
    blackModify = new Modify({source: drawSource})
    redModify = new Modify({source: redObject.source})
    orangeModify = new Modify({source: orangeObject.source})
    yellowModify = new Modify({source: yellowObject.source})
    greenModify = new Modify({source: greenObject.source})
    blueModify = new Modify({source: blueObject.source})
    purpleModify = new Modify({source: purpleObject.source}) 
    //add interractions
    map.addInteraction(blackModify) 
    map.addInteraction(redModify)
    map.addInteraction(orangeModify)
    map.addInteraction(yellowModify) 
    map.addInteraction(greenModify) 
    map.addInteraction(blueModify) 
    map.addInteraction(purpleModify)
}
//function to snap on geometry types.
function addSnap()
{
    snap = new Snap({source: selectedSource})
    map.addInteraction(snap)
}

//function to add functionality to select a feature
function addSelect()
{
    drawselect = new drawSelect({source: selectedSource})
    map.addInteraction((drawselect))
}
//initiate addSelect on startup
addSelect()

function removeDraw()
{ map.removeInteraction(draw) }

function removeModify() 
{ 
    map.removeInteraction(blackModify)
    map.removeInteraction(redModify)
    map.removeInteraction(orangeModify)
    map.removeInteraction(yellowModify) 
    map.removeInteraction(greenModify) 
    map.removeInteraction(blueModify) 
    map.removeInteraction(purpleModify)   
}

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