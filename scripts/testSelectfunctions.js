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
      source: drawSource,
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
    if( drawSelect.getFeatures().getArray()[0] != null )
    {
        feature = drawSelect.getFeatures().getArray()[0]
        const json = GetGeoJSONFromFeature(feature)
        console.log(json)
    }
}
let test
function featuresToJSON()
{
    if ( drawSelect.getFeatures().getArray()[0] != null)
    {
        feature = drawSelect.getFeatures().getArray()
        var format = new ol.format.GeoJSON();
        // let json = format.writeFeature(feature)
        // console.log(json)
        let json = '{ "objects" : ['
        let first = true
        feature.forEach( (f) => 
        {
            if(first)
            {
                first = false
            }
            else
            {
                json += ',' 
            }
            json += '{"style" : "' + f.getStyle().getStroke().getColor() + '", "drawObj":'
            json += JSON.stringify(GetGeoJSONFromFeature(f))
            json += '}'
            
        })
        json += ']}'
        console.log(json)
        parsedJSON = JSON.parse(json)
        console.log(json)
    }
}


function featureToGPX()
{
    if( drawSelect.getFeatures().getArray()[0] != null )
    {
        feature = drawSelect.getFeatures().getArray()[0]
        const gpx = GetGPXFromFeature(feature)
        console.log(gpx)
    }
}


function featureToKML()
{
    if( drawSelect.getFeatures().getArray()[0] != null )
    {
        feature = drawSelect.getFeatures()
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
