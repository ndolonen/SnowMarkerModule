/**
 * Copyright (c) 2019, Njaal Dolonen, Nicolay Skjelbred, Jan-Magnus Solheim All rights reserved.
 * See LICENSE for more detail.  
 * */ 

let nextId = 1;
class layers
{
    constructor (colorName, layer, source)
    {
        this.colorName = colorName
        this.layer = layer
        this.source = source
        this.uid = uuidv4()
        this.id = nextId++
    }
}

function newLayer(colorName, inpStyle)
{
    const newSource = new VectorSource()
    const newLayer = new VectorLayer(
    {
        source: newSource,
        style: inpStyle
    })
    let layer = new layers(colorName, newLayer, newSource)
    return layer
}

const redObject     = newLayer("red"    ,     redStyle )
const orangeObject  = newLayer("orange" ,  orangeStyle )
const yellowObject  = newLayer("yellow" ,  yellowStyle )
const greenObject   = newLayer("green"  ,   greenStyle )
const blueObject    = newLayer("blue"   ,    blueStyle )
const purpleObject  = newLayer("purple" ,  purpleStyle )

map.addLayer(redObject.layer)
map.addLayer(orangeObject.layer)
map.addLayer(yellowObject.layer)
map.addLayer(greenObject.layer)
map.addLayer(blueObject.layer)
map.addLayer(purpleObject.layer)