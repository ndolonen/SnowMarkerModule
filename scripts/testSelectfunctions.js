/**
 * Copyright (c) 2019, Njaal Dolonen, Nicolay Skjelbred, Jan-Magnus Solheim All rights reserved.
 * See LICENSE for more detail.  
 * */ 

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

//openlayers.org meassure example
