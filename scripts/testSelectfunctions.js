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

//Format ol features to KML and JSON
function GetKMLFromFeatures(featured) 
{
    var format = new ol.format.KML();
    var kml = format.writeFeatures(featured, {featureProjection: 'EPSG:32633'});
    return kml;
}

function GetGeoJSONFromFeatures(featured) 
{
    var format = new ol.format.GeoJSON();
    var geoJSON = format.writeFeatures(featured, {featureProjection: 'EPSG:32633'});
    return geoJSON;
}

// return features from a layer
function GetFeaturesFromLayer(layer)
{
    var source = layer.getSource();
    var features = source.getFeatures();
    return features;
}
/* Default projection and list of supported projections */
//PROJECTION( "EPSG:900913" );
//SUPPORTED_PROJ( ["EPSG:900913", "EPSG:32633"] );
