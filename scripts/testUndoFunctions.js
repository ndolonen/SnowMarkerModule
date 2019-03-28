let undoArr = []
let count = 0

function addNewChange()
{
    if ( undoArr.length >= 5 )
    {
        undoArr.shift()
    }
    //undoArr.push(f)
    undoarr.push(drawSource.getFeatures())
    count = undoArr.length
}

function undoChange()
{
    if ( undoArr[0] == -1 )
    { return null } //avoid null ocurrence
    drawSource.clear()
    f = undoArr[count]
    drawSource.addFeatures(f)
    count--
    //return undoArr[count--] 
}

function redoChange()
{
    if ( undoArr[count+1] == -1 )
    { return null } //avoid null ocurrence
    drawSource.clear()
    count++
    drawSource.addFeatures(undoArr[count])
    //return undoArr[++count] 
}