//map imports
import {Tile as TileLayer} from "ol/layer.js"
import OSM from "ol/source.js"
import Map from "ol/Map.js"
import View from "ol/View.js"

import {Vector as sVector} from "ol/source.js"
import {Vector as lVector} from "ol/layer.js"
import {Fill, Stroke, Circle, Style} from "ol/style"

// const TileLayer = ol.layer.Tile
// const OSM = ol.source.OSM
// const Map = ol.Map
// const View = ol.View

/**
 * Script to create the map layer.
 */

let raster = new TileLayer({
    source: new OSM()
})

//TODO:check if vector is required?
let mapSource = new sVector()
let vector = new lVector({
    source: mapSource,
    style: new Style
    ({
        fill: new Fill
        ({
            color: '#000000' + '66'
        }),
        stroke: new Stroke
        ({
            color: '#000000',
            width: 2
        }),
        image: new Circle
        ({
            radius: 7,
            fill: new Fill
            ({
                color: '#000000'
            })
        })
    })
})

let map = new Map({
    layers: [raster, vector],
    target: 'map',
    view: new View({
        center: ol.proj.fromLonLat([10.757933, 59.911491]),
        zoom: 6
    })
})