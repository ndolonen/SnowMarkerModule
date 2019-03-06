/**
 * Script to create the map layer.
 */

let raster = new TileLayer({
    source: new OSM()
})

//TODO:check if vector is required?
let source = new VectorSource()
let vector = new VectorLayer({
    source: source,
    style: colorInit()
})

let map = new Map({
    layers: [raster, vector],
    target: 'map',
    view: new View({
        center: FromLonLat([10.757933, 59.911491]),
        zoom: 6
    })
})