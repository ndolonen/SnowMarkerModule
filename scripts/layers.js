import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {Draw, Modify, Snap} from 'ol/interaction.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style.js';

var raster = new TileLayer({
source: new OSM()
});

var source = new VectorSource();
var vector = new VectorLayer({
source: source,
style: new Style({
    fill: new Fill({
    color: 'rgba(255, 255, 255, 0.2)'
    }),
    stroke: new Stroke({
    color: '#ffcc33',
    width: 2
    }),
    image: new CircleStyle({
    radius: 7,
    fill: new Fill({
        color: '#ffcc33'
    })
    })
})
});

var map = new Map({
layers: [raster, vector],
target: 'map',
view: new View({
    center: [-11000000, 4600000],
    zoom: 4
})
});

var modify = new Modify({source: source});
map.addInteraction(modify);

var draw, snap; // global so we can remove them later
var typeSelect = document.getElementById('type');

function addInteractions() {
draw = new Draw({
    source: source,
    type: typeSelect.value,
    freehand: true
});
map.addInteraction(draw);
snap = new Snap({source: source});
map.addInteraction(snap);

}

/**
 * Handle change event.
 */
typeSelect.onchange = function() {
map.removeInteraction(draw);
map.removeInteraction(snap);
addInteractions();
};

addInteractions();