/**
 * Copyright (c) 2019, Njaal Dolonen, Nicolay Skjelbred, Jan-Magnus Solheim. 
 * All rights reserved. See LICENSE for more detail.  
 * */ 

//initiates the array with all existing features
let undoArr = [drawSource.getFeatures()]
let count = 0
//sets the maximum ammount of changes kept
let maxCount = 20
let maxArr = maxCount -1

//Adds a new change so its possible to revert
function addNewChange( feature )
{
    if ( undoArr.length >= maxCount )
    {
        undoArr.shift()
    }
    let features = drawSource.getFeatures()
    if ( feature )
    {
        features = features.concat(feature)
    }
    undoArr.push(features)
    count = undoArr.length -1
}

//undo's a change
function undoChange()
{
    if ( count > 0 )
    { 
        count--    
        console.log(count)
    }
    else 
    {
        count = 0
    }
    drawSource.clear()
    drawSource.addFeatures(undoArr[count])
}

//redo's a change
function redoChange()
{
    if ( count <= maxArr && count+1 < undoArr.length )
    { 
        count++
    }
    if( count < undoArr.length )
    {
        drawSource.clear()
        drawSource.addFeatures(undoArr[count])
    }
}

function redoChange_click()
{ redoChange() }

function undoChange_click()
{ undoChange() }