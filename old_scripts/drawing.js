//Version with working Drawing function

var raster = new ol.layer.Tile({
  source: new ol.source.OSM()
});

var source = new ol.source.Vector({wrapX: false});

var vector = new ol.layer.Vector({
  source: source
});

var map = new ol.Map({
  layers: [raster, vector],
  target: 'map',
  view: new ol.View({
    center: ol.proj.fromLonLat([14.14278, 66.31278]),
    zoom: 4
  })
});

var typeSelect = document.getElementById('type');

var draw; // global so we can remove it later
function addInteraction() {
  draw = new ol.interaction.Draw({
    source: source,
    type: typeSelect.value
  });
  map.addInteraction(draw);
}


/**
 * Handle change event.
 */
typeSelect.onchange = function() {
  map.removeInteraction(draw);
  addInteraction();
};

// var value = typeSelect.value;
// if (value !== 'None' || value !== '' || value !== null) {
  addInteraction();
// }