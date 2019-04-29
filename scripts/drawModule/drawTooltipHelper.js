/**
 * Copyright (c) 2019, Njaal Dolonen, Nicolay Skjelbred, Jan-Magnus Solheim All rights reserved.
 * See LICENSE for more detail.  
 * */ 

//Helper class for tooltips.
$( function()  
{ $( document ).tooltip() })
//TODO: Check if that is allready exsistent in Polaric-Server.

//OnClick handler for tooltip.
function tooltip_click()
{
    if ( toggleTooltip )
    { 
        $('#tooltip').removeClass('selectedFunction') 
        
        //drawStyle
        $('#straight').removeAttr("title")
        $('#freehand').removeAttr("title")
        
        //geometry
        $('#type').removeAttr("title")
        $('#optLine').removeAttr("title")
        $('#optPolygon').removeAttr("title")
        $('#optCircle').removeAttr("title")

        //colors
        $('.colorOption').removeAttr("title")
        
        //functions
        $('#drawToggle').removeAttr("title")
        $('#deleteLayer').removeAttr("title")
        $('#modifyToggle').removeAttr("title")
        $('#snapToggle').removeAttr("title")
        
        //metrics
        $('#printMetric').removeAttr("title")
        $('#showMetrics').removeAttr("title")
    }
    else
    { 
        $('#tooltip').addClass('selectedFunction') 
        
        //drawStyle
        $('#straight').attr("title", "Enables drawing with a point to point type line")
        $('#freehand').attr("title", "Enables freehand drawing. Note: freehand is hard to modify on later")
        
        //geometry type
        $('#type').attr("title", "Selects Geometry type")
        $('#optLine').attr("title", "Draws a line, useful for making paths")
        $('#optPolygon').attr("title", "Draws a polygon, useful for marking areas")        
        $('#optCircle').attr("title", "Draws a circle on map, useful for encapsulating an area")

        //colors
        $('.colorOption').attr("title", "Select a color")
        
        //functions
        $('#drawToggle').attr("title", "Enables drawing")
        $('#deleteLayer').attr("title", "Deletes the selected feature from the map")
        $('#modifyToggle').attr("title", "Toggles modify on/off for drawn areas")
        $('#snapToggle').attr("title", "Toggles snap on/off while drawing")
        
        //metrics
        $('#printMetric').attr("title", "Shows metrics data for selected area")
        $('#showMetrics').attr("title", "Shows metrics data for selected area")
    }
    toggleTooltip = !toggleTooltip
}//End of tooltip_click