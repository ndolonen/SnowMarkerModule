/**
 * Copyright (c) 2019, Njaal Dolonen, Nicolay Skjelbred, Jan-Magnus Solheim All rights reserved.
 * See LICENSE for more detail.  
 * */ 

let measureTooltipElement;
let measureTooltip;

//Adds new measure overlays to the map.
function addMeasureOverlay(f=null)
{
    let tooltipCoord
    //Adds a tooltip to a feature.
    function createTooltip(f)
    {
        createMeasureTooltip(f)
        //Gets the coordinate of the feature.
        if ( f.getGeometry() instanceof PolygonGeom ) 
        {
            tooltipCoord = f.getGeometry().getInteriorPoint().getCoordinates();
        } 
        else if ( f.getGeometry() instanceof ol.geom.LineString ) 
        {
            tooltipCoord = f.getGeometry().getLastCoordinate();
        } 
        else if(f.getGeometry() instanceof ol.geom.Circle)
        {
            tooltipCoord = f.getGeometry().getCenter()
        }
        //Adds Area measurement to the overlay.
        measureTooltipElement.innerHTML = getAreal(f);
        //Sets the position of the overlay on top of the feature.
        measureTooltip.setPosition(tooltipCoord);
    } //End createTooltip()

    //Checks if input is given.
    if ( f )
    {
        createTooltip(f)
    }
    else if ( selectedFeatures[0] )
    {
        selectedFeatures.forEach( (f) =>
        {
            createTooltip(f)
        })
    }
} //End addMeasureOverlay()

let tooltipObjects = []
// Creates a new measure tooltip.
function createMeasureTooltip(f) 
{
    measureTooltipElement = document.createElement('div');
    measureTooltipElement.className = 'tooltip tooltip-measure'
    measureTooltip = new ol.Overlay({
        element: measureTooltipElement,
        offset: [0, -15],
        positioning: 'bottom-center'
    })
    //Creates an object to keep track of what tooltip belongs to which features.
    let tooltipObj = 
    {
        "ol_uid":f.ol_uid, 
        "overlay": measureTooltip,
        "element": measureTooltipElement 
    }
    
    tooltipObjects.push(tooltipObj)
    map.addOverlay(measureTooltip)
} //End createMeasureTooltip()

//Function to remove a single area overlay, identified by a feature f.
function removeSingleMeasureTooltip(f)
{
    //Cycles through the list to find the tooltip that belongs to feature f.
    tooltipObjects.forEach( (e) => 
    {
        if( f.ol_uid == e.ol_uid )
        {
            let element = e.element
            element.parentNode.removeChild(element)
            map.removeOverlay(e.overlay)
            let eIndex = tooltipObjects.indexOf(e)
            tooltipObjects.splice(eIndex, 1)
        }
    })
} //End removeSingleMeasureTooltip()

//Function to remove all area overlays.
function removeAllMeasureTooltip()
{
    //Loops throught all area overlays and removes them.
    tooltipObjects.forEach((e) =>
    {
        let element = e.element
        element.parentNode.removeChild(element)
        map.removeOverlay(e.overlay)
    })
    tooltipObjects = []
} //End removeAllMeasureTooltip()