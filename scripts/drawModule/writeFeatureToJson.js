/**
 * Copyright (c) 2019, Njaal Dolonen, Nicolay Skjelbred, Jan-Magnus Solheim All rights reserved.
 * See LICENSE for more detail.  
 * */ 

let test
function featuresToJSON()
{
    if ( drawSelect.getFeatures().getArray()[0] != null )
    {
        feature = selectedFeatures //Can use array directly isntead of features
        let json = '{ "objects" : ['
        let first = true
        feature.forEach( (f) => 
        {  
            if( first )
            { first = false }
            else
            { json += ',' }
            let originalStyle = ""
            originalStyles.forEach(function(e)
            {
                if( f.ol_uid == e.ol_uid )
                {
                    originalStyle = e.style.getStroke().getColor()
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


// return features from a layer
function GetFeaturesFromLayer(layer)
{
    var source = layer.getSource()
    var feature = source.getFeatures()
    return feature;
}

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
    // JSONTESTOBJECT
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
