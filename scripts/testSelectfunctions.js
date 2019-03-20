const Feature = ol.Feature
const PointGeom = ol.geom.Point

$('.colorOption').on("mouseleave", (e) =>
{
    let color = e.target.id 

    switch(color)
    {
        case "selectRed":
            // console.log("dragged red")
            break
    
        case "selectOrange":
            
            break
                
        case "selectYellow":
            
            break 
                        
        case "selectGreen":
        
            break
            
        case "selectBlue":

            break
            
        case "selectPurple":

            break
        
        default:

    }
})  

function addPoint() {
    /* draw = new Draw({
      source: selectedSource,
      type: Point
    });
    map.addInteraction(draw); */
    var pos = map.ol.getLonLatFromPixel(evt.xy);
//https://stackoverflow.com/questions/19906473/add-a-marker-on-mouse-click-and-remove-the-existing-on-in-openlayers


    var point_feature = new ol.Feature({ })

    var vector_layer = new ol.layer.Vector(
    {
        source: new ol.source.Vector(
        {
        features: [point_feature]
        })
    })
    map.addLayer(vector_layer);
}

function featureToJSON()
{
    if( drawselect.getFeatures().getArray()[0] != null )
    {
        feature = drawselect.getFeatures().getArray()[0]
        const json = GetGeoJSONFromFeature(feature)
        console.log(json)
    }
}


function featureToGPX()
{
    if( drawselect.getFeatures().getArray()[0] != null )
    {
        feature = drawselect.getFeatures().getArray()[0]
        const gpx = GetGPXFromFeature(feature)
        console.log(gpx)
    }
}


function featureToKML()
{
    if( drawselect.getFeatures().getArray()[0] != null )
    {
        feature = drawselect.getFeatures()
        const kml = GetKMLFromFeature(feature)
        console.log(kml)
    }
}
//Format ol features to KML, JSON and GPX
function GetKMLFromFeature(feature) 
{
    var format = new ol.format.KML();
    var kml = format.writeFeaturesNode(feature);
    return kml;
}

function GetGeoJSONFromFeature(feature) 
{
    if ( feature.getGeometry().getType() == "Circle" ) 
    {  
        const circle = feature.getGeometry()
        feature.setGeometry(PolygonGeom.fromCircle(circle))
    }
    var format = new ol.format.GeoJSON();
    var geoJSON = format.writeFeatureObject(feature); // format.writeFeature
    return geoJSON;
}

function GetGPXFromFeature(feature) 
{
    var format = new ol.format.GPX();
    var gpx = format.writeFeatures(feature);
    return gpx;
}

// return features from a layer
function GetFeaturesFromLayer(layer)
{
    var source = layer.getSource();
    var feature = source.getFeatures();
    return feature;
}
/* Default projection and list of supported projections */
//PROJECTION( "EPSG:900913" );
//SUPPORTED_PROJ( ["EPSG:900913", "EPSG:32633"] );

/* drawselect.getFeatures().getArray()[0].setStyle(new Style(
{
    stroke: new Stroke(
    {
        color: hexRed,
        width: '3'
    }),
    fill: new Fill(
    {
        color: hexRed + hexOpacity
    }),
    image: new CircleStyle
    ({
        radius: 7,
        fill: new Fill
        ({
            color: hexRed
        })
    }),
})) */
