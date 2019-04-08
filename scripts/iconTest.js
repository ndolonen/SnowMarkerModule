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

let iconSource = new VectorSource()
let iconLayer = new VectorLayer({
  source: iconSource
})
map.addLayer(iconLayer)

let iconStyle
let thisID

$('.markerIcons').click( (e) => 
{
  map.removeInteraction(draw)
  $('#'+thisID).removeClass('selectedIcon')
  thisID = e.target.id
  $('#'+thisID).addClass('selectedIcon')

  var selectedId = e.target.id
  iconStyle = new Style(
  {
    image: new Icon(/** @type {module:ol/style/Icon~Options} */ (
    {
      anchor: [0.5, 37],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: e.target.src
    }))
  })
  
  function iconDraw()
  {
    draw = new Draw(
    {
        source: iconSource,
        type: 'Point',
        name: 'POINT NAME TEST'
    })

    map.addInteraction(draw)

    draw.on('drawend', function (e)
    { 
      e.feature.setStyle(iconStyle)
      addNewChange(e.feature)
      map.removeInteraction(draw)
      $('#'+thisID).removeClass('selectedIcon')
    })
  }
  iconDraw()
})

