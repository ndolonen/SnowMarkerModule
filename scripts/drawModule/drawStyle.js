/**
 * Copyright (c) 2019, Njaal Dolonen, Nicolay Skjelbred, Jan-Magnus Solheim. 
 * All rights reserved. See LICENSE for more detail.  
 * */ 

//Sets the current style to the selected color.
function setStyleColor(colorVal)
{
    currentStyle = getStyle(colorVal)
}
   
//Returns a style with a certain color.
function getStyle(colorVal)
{
    let colorStyle = new Style(
    {
        stroke: new Stroke(
        {
            color: colorVal,
            width: 3
        }),
        fill: new Fill(
        { color: colorVal + hexOpacity })
    })
    return colorStyle
}

//Initial color settings.
setStyleColor(hexBlack)

//Style for selecting features.
const selectStyle = new Style(
{
    stroke: new Stroke(
    {
        color: hexSelectStroke,
        width: '3'
    }),
    fill: new Fill(
    { color: hexSelectFill + hexOpacity })
})

//Toggles orange border on deleteLayer when clicking and removes it on mouseleave.
function deleteHighlightHandler() 
{
    $('#deleteLayer').mousedown( () => 
    { $('#deleteLayer').addClass("selectedFunction") }).mouseup( () => 
    { $('#deleteLayer').removeClass("selectedFunction") }).mouseleave( () => 
    { $('#deleteLayer').removeClass("selectedFunction") })
}