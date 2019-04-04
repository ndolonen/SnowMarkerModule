const Feature = ol.Feature
const PointGeom = ol.geom.Point
const jsonFormat = new ol.format.GeoJSON
const gpxFormat = new ol.format.GPX
const kmlFormat = new ol.format.KML

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
    var vector_layer = new ol.layer.Vector
    ({
        source: new ol.source.Vector(
        {
        features: [point_feature]
        })
    })
    map.addLayer(vector_layer)
}

// function featureToJSON()
// {
//     if( drawSelect.getFeatures().getArray()[0] != null )
//     {
//         feature = drawSelect.getFeatures().getArray()[0]
//         const json = GetGeoJSONFromFeature(feature)
//         console.log(json)
//     }
// }
let test
function featuresToJSON()
{
    if ( drawSelect.getFeatures().getArray()[0] != null )
    {
        feature = drawSelect.getFeatures().getArray()
        let json = '{ "objects" : ['
        let first = true
        feature.forEach( (f) => 
        {  
            if( first )
            { first = false }
            else
            { json += ',' }
            let originalStyle = ""
            drawArray.forEach(function(el)
            {
                if( f.ol_uid == el.ol_uid )
                {
                    originalStyle = el.style.getStroke().getColor()
                    console.log(originalStyle)
                }
            })
            if( originalStyle != "" )
            {
                json += '{"style" : "' + originalStyle + '", "drawObj":'
                json += JSON.stringify(GetGeoJSONFromFeature(f))
                json += '}'
            } 
            else 
            { console.log("error: No Style Set")}
        })
        json += ']}'
        console.log(json)
        parsedJSON = JSON.parse(json)
        console.log(json)
        test = parsedJSON
    }
    return test

        
}

// function featureToGPX()
// {
//     if( drawSelect.getFeatures().getArray()[0] != null )
//     {
//         feature = drawSelect.getFeatures().getArray()[0]
//         const gpx = GetGPXFromFeature(feature)
//         console.log(gpx)
//     }
// }


// function featureToKML(feature)
// {
//     if( drawSelect.getFeatures().getArray()[0] != null )
//     {
//         feature = drawSelect.getFeatures()
//         const kml = GetKMLFromFeature(feature)
//         console.log(kml)
//     }
// }
// //Format ol features to KML, JSON and GPX
// function GetKMLFromFeature(feature) 
// {
//     var kml = kmlFormat.writeFeaturesNode(feature);
//     return kml;
// }

function GetGeoJSONFromFeature(feature) 
{
    if ( feature.getGeometry().getType() == "Circle" ) 
    {  
        const circle = feature.getGeometry()
        feature.setGeometry(PolygonGeom.fromCircle(circle))
    }
    var geoJSON = jsonFormat.writeFeatureObject(feature); 
    return geoJSON;
}

// function GetGPXFromFeature(feature) 
// {
//     var gpx = gpxFormat.writeFeatures(feature)
//     return gpx
// }

// return features from a layer
function GetFeaturesFromLayer(layer)
{
    var source = layer.getSource()
    var feature = source.getFeatures()
    return feature;
}
/* Default projection and list of supported projections */
//PROJECTION( "EPSG:900913" );
//SUPPORTED_PROJ( ["EPSG:900913", "EPSG:32633"] );

function readJSON()
{
//function to read incoming json
}

$('#writeJSON').click( () => 
{
    featuresToJSON()
})

$('#readJSON').click( () => 
{
    test.objects.forEach( (obj) =>
    {
        drawFeatureToMap(obj)
        // console.log(obj.drawObj)
    })
    // console.log(test.objects[0].drawObj)
})


function drawFeatureToMap(jsonObject) 
{
    // let jsonTestString = '' + 
    // '{"style" : "#000000", "drawObj":'+
    // '{"type":"Feature","geometry":'+
    // '{"type":"Polygon","coordinates":'+
    // '[[[1540970.4902291533,8782308.80185361],[1506726.7015573943,8770078.877327982],[1489604.8072215149,8757848.952802354],'+
    // '[1479820.8676010123,8728497.133940846],[1482266.852506138,8706483.269794716],[1514064.6562727713,8667347.511312705],'+
    // '[1543416.475134279,8642887.662261449],[1572768.2939957867,8630657.737735821],[1619242.0071931737,8623319.783020444],'+
    // '[1651039.8109598071,8623319.783020444],[1682837.6147264405,8637995.692451198],[1695067.5392520686,8655117.586787077],'+
    // '[1702405.4939674458,8667347.511312705],[1540970.4902291533,8782308.80185361]]]},"properties":null}}'
    
    // let jsonTestObject = JSON.parse(jsonTestString)
    let featureStyle = getStyle(jsonObject.style)
    let featureObject = jsonObject.drawObj
    // console.log(featureObject)
    
    let feature = jsonFormat.readFeature(featureObject)
    feature.setStyle(featureStyle)
    drawSource.addFeature(feature)
    // console.log(feature)
    // drawSource.addFeature(jsonFormat.readFeature(drawTestOject))
    // testtest.style_ = testStyle
    // console.log(testtest)
}

//not working as intended
function kmlFromFeature()
{
    if(drawSelect.getFeatures().getArray()[0] != null)
    {
        let kmlForm = kmlFormat.writeFeatures(drawSelect.getFeatures())
        console.log(kmlForm)
    }
}

//not working as intended
$('#logKML').click( () =>
{
    kmlFromFeature()
})