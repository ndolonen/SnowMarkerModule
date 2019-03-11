const Feature = ol.Feature
const PolygonGeom = ol.geom.Polygon
const PointGeom = ol.geom.Point
const CircleGeom = ol.geom.Circle

addSelect()
let feature, features, center, radius 

$('#testPrint').click( () =>
{
    console.log("Test Print Function Init")
    // this.style = new Style({stroke: new Stroke ({color: "#ffffff", width: 2 })})
    features = select.getFeatures();
    console.log(features)
    feature = select.getFeatures().getArray()[0];
    console.log(feature)
    //features.item(0).ol_uid
    
    
})

$('#testNew').click( () => 
{
    console.log("Test tha New Function Init")
    feature = new Feature({});   
    
    // get the polygon geometry
    // var poly = feature.getGeometry();

    // Render the feature as a point using the coordinates from labelPoint
    feature.setGeometryName('labelPoint');

    // get the point geometry
    var point = feature.getGeometry()
})

/*
import Feature from 'ol/Feature';
import Polygon from 'ol/geom/Polygon';
import Point from 'ol/geom/Point';

var feature = new Feature({
  geometry: new Polygon(polyCoords),
  labelPoint: new Point(labelCoords),
  name: 'My Polygon'
});

// get the polygon geometry
var poly = feature.getGeometry();

// Render the feature as a point using the coordinates from labelPoint
feature.setGeometryName('labelPoint');

// get the point geometry
var point = feature.getGeometry();
*/


$('#testDelete').click( () => 
{
    console.log("Test Delete Function Init")
    if( select.getFeatures().getArray()[0] != null)
    {
        feature = select.getFeatures().getArray()[0];
        var selectSource = select.getLayer(feature).getSource();
        selectSource.removeFeature(feature);
        select.getFeatures().remove(feature);
    }
})

let selectedColor, selectedStyle

$('#testColor').click( () => 
{
    console.log("Test Color Function Init")
    console.log("Selected color: " + selectedColor)

    feature = select.getFeatures().getArray()[0];
    feature.style = selectedStyle;
})

$('.colorOption').click( (e) =>
{
    let color = e.target.id

    switch(color)
    {
        case "selectRed":
            //red function here
            selectedColor = 'red'
            selectedStyle = redStyle
            break
            
        case "selectOrange":
            //orange function here
            selectedColor = 'orange'
            selectedStyle = orangeStyle
            break
                
        case "selectYellow":
            //yellow function here
            selectedColor = 'yellow'
            selectedStyle = yellowStyle
            break 
                        
        case "selectGreen":
            //green function here
            selectedColor = 'green'
            selectedStyle = greenStyle
            break
            
        case "selectBlue":
            //blue function here
            selectedColor = 'blue'
            selectedStyle = blueStyle
            break
            
        case "selectPurple":
            //purple function here
            selectedColor = 'purple'
            selectedStyle = purpleStyle
            break
        
        default:
            //defaults to black
            selectedColor = 'black';
            selectedStyle = blackStyle
    }
})   
