const Feature = ol.Feature
const Polygon = ol.geom.Polygon
const Point = ol.geom.Point

addSelect()
var feature
var features

$('#testPrint').click( () =>
{
    console.log("Test Print Function Init")
// this.style = new Style({stroke: new Stroke ({color: "#ffffff", width: 2 })})
    feature = select.getFeatures();
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

function deleteItem()
{
    feature = select.getFeatures().getArray()[0];
    var selectSource = select.getLayer(feature).getSource();
    selectSource.removeFeature(feature);
    select.getFeatures().remove(feature);
}

$('#testDelete').click( () => 
{
    console.log("Test Delete Function Init")
    // feature = map.forEachFeatureAtPixel(e, pixel, function (feature) {

    //         SelectedFeature = feature;
    //         console.log(feature.featureID)
    //     })
    // features = select.getFeatures();
    // var colorVal = "#ffffff"
    // // vector.getSource().removeFeature(features.item(0))
    // features.item(0).setStyle(new Style(
    // {
    //     fill: new Fill
    //     ({
    //         color: colorVal + hexOpacity
    //     }),
    //     stroke: new Stroke
    //     ({
    //         color: colorVal,
    //         width: 2
    //     }),
    //     image: new CircleStyle
    //     ({
    //         radius: 7,
    //         fill: new Fill
    //         ({
    //             color: colorVal
    //         })
    //     })
    // }))

})

$('#testColor').click( () => 
{
    console.log("Test Color Function Init")
})




//click function delegated id addlayer for testing purposes
//TODO:CLEANUP LATER
//CONSOLE:
//features.item(0)


/*
        map.on('click', function (evt) {

            var feature = map.forEachFeatureAtPixel(evt.pixel,
            function (feature, layer) {

                SelectedFeature = feature;
                popup.show(evt.coordinate, "<a style='cursor: pointer' onclick='DeleteFeature()'>Delete</a></br>" + feature.featureID + "");
                console.log(feature.featureID);
            });
        });
*/
