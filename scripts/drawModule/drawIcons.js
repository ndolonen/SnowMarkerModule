/**
 * Icons downloaded from: https://mapicons.mapsmarker.com
 * Name of icon Collection: Maps Icons Collection
 * Icons licenced under Creative Commons 3.0
 * We do not own any of the icons in this directory
 */

let imageLoc = "images/iconpack/"

// let iconSource = new VectorSource()
// let iconLayer = new VectorLayer({
//   source: iconSource
// })
// map.addLayer(iconLayer)

let iconStyle
let thisID

//OnClick hanlder for icon select.
function markerIcons_click(e)
{
  map.removeInteraction(draw)
  $('#'+thisID).removeClass('selectedIcon')
  if( thisID == e.target.id )
  { 
    thisID=null 
    return null 
  }
  thisID = e.target.id
  $('#'+thisID).addClass('selectedIcon')
  let imgsrc = $('#'+thisID).attr("src")

  //Generates a style with the selected icon to be placed.
  iconStyle = new Style(
  {
    image: new Icon(
    ({
      anchor: [0.5, 38],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: imgsrc
    }))
  })
 
  //Enables Point drawing.
  draw = new Draw(
  {
    source: drawSource,
    type: 'Point',
    name: 'POINT NAME TEST' //TODO: Add description?
  })
  map.addInteraction(draw)
  droppingIcon = true
    
  //When the point is drawn, gives it the icon style and disables drawing.
  draw.on('drawend', function (e)
  { 
    e.feature.setStyle(iconStyle)
    addNewChange(e.feature)
    if( !continuousIconDropping )
    { 
      map.removeInteraction(draw)
      //Removes the selected icon class and ID after placement.
      $('#'+thisID).removeClass('selectedIcon')
      thisID = null
    }
  })
}//End of markerIcons_click