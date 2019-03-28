//import { stringify } from "querystring";

let undoArr = [drawSource.getFeatures()]
let count = 0
let maxCount = 20
let maxArr = maxCount -1

//TODO: Convert to geojson so that colors and modify are doable.
function addNewChange( feature )
{
    if ( undoArr.length >= maxCount )
    {
        undoArr.shift()
    }
    //undoArr.push(f)
    let features = drawSource.getFeatures()
    if ( feature )
    {
        //console.log(features.concat(feature))
        features = features.concat(feature)
    }
    //strFeatures = JSON.stringify(features)
    undoArr.push(features)
    count = undoArr.length -1
}

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
    //return undoArr[count--] 
}

function redoChange()
{
    if ( count <= maxArr && count+1 < undoArr.length)
    { 
        count++
        //console.log(count)
    }
    if( count < undoArr.length )
    {
        drawSource.clear()
        drawSource.addFeatures(undoArr[count])
    }

    //return undoArr[++count] 
}

$('#redoChange').click( () =>
{ redoChange() })

$('#undoChange').click( () =>
{ undoChange() })

// modify.on("modifyend", function (e) 
// {
//     addNewChange(e.feature)
// })