//map imports
const TileLayer = ol.layer.Tile
const OSM = ol.source.OSM
const Map = ol.Map
const View = ol.View

/**
 * Script to create the map layer.
 */

let raster = new TileLayer({
    source: new OSM()
})

//TODO:check if vector is required?
let mapSource = new ol.source.Vector()
let vector = new ol.layer.Vector({
    source: mapSource,
    style: new ol.style.Style
    ({
        fill: new ol.style.Fill
        ({
            color: '#000000' + '66'
        }),
        stroke: new ol.style.Stroke
        ({
            color: '#000000',
            width: 2
        }),
        image: new ol.style.Circle
        ({
            radius: 7,
            fill: new ol.style.Fill
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