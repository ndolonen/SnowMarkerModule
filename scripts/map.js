/**
 * Script to create the map layer.
 */

var raster = new TileLayer({
    source: new OSM()
});

//TODO:check if vector is required?
var source = new VectorSource();
var vector = new VectorLayer({
    source: source,
    style: new Style()
});
setColor()

var map = new Map({
    layers: [raster, vector],
    target: 'map',
    view: new View({
        center: ol.proj.fromLonLat([10.757933, 59.911491]),
        zoom: 6
    })
});