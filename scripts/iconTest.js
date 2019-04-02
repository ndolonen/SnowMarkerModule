/**
 * Icons downloaded from: https://mapicons.mapsmarker.com
 * Name of icon Collection: Maps Icons Collection
 * Icons licenced under Creative Commons 3.0
 * We do not own any of the icons in this directory
 */

const Point = ol.geom.Point
const Icon = ol.style.Icon

let imageLoc = "images/iconpack/"

let imageList = ["aed-2", "aircraftsmall", "airport", "avalanche1", "blast", "boat", "bomb", "bunker-2-2", "bus", "busstop", "campfire-2", 
"car", "caraccident", "caution", "coffee", "comment-map-icon", "conversation-map-icon", "crimescene", "disability", "doublebendright", 
"earthquake-3", "fallingrocks", "ferry", "fillingstation", "fire-hydrant-2", "fire", "fireexstinguisher", "firemen", "firstaid", "flood", 
"footprint", "fourbyfour", "harbor", "helicopter", "highway", "hiking", "home-2", "hospital-building", "house", "hunting", "icy_road", 
"information", "jeep", "lake", "lighthouse-2", "linedown", "lodging_0star", "mainroad", "male-2", "military", "mine", "motorcycle", 
"mountains", "oilrig2", "parkinggarage", "pin-export", "planecrash", "police", "prison", "radiation", "radio-station-2", "repair", "rescue-2", 
"river-2", "rowboat", "school", "septic_tank", "shipwreck", "shooting", "shootingrange", "snowmobiling", "stop", "tires", "toilets", 
"tollstation", "tools", "townhouse", "toxic", "train", "tramway", "trash", "trolley", "truck3", "tunnel", "underground", "walkingtour", 
"watercraft", "waterfall-2", "wetlands", "wind-2", "windturbine", "workshop", "world", "you-are-here-2", "zoo", "zoom"]
imageList.forEach(function(image) 
{
    $('#iconContainer').append('<img src="'+ imageLoc + image + '.png" title="' + image + '" class="markerIcons" id="markerIcon-'+ image +'"/>')
})

let locationData
map.on('pointermove', function(e) 
{
    locationData = e.coordinate
})

function addIcon(imgSrc)
{
    
}

let iconSource = ""
$('.markerIcons').mousedown( (e) => 
{
    var iconFeature = new Feature({
        geometry: new Point(locationData), 
        name: ''
      });
      var iconStyle = new Style({
        image: new Icon(/** @type {module:ol/style/Icon~Options} */ ({
          anchor: [0.5, 37],
          anchorXUnits: 'fraction',
          anchorYUnits: 'pixels',
          src: e.target.src
        }))
      });
    
      iconFeature.setStyle(iconStyle);
      
      drawSource.addFeature(iconFeature)
      addNewChange()
}).mousemove( (e) =>
{
    //Todo: Make a moving feature
}).on('dragend', (e) =>
{
    //Todo: Drop the feature when the cursor ends
})