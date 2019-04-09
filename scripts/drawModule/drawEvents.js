//Script for managing drawings.

function tb_draw_click()
{ $("#drawbox").toggle() }

// $("#abtn").click( () => 
// {
//     console.log("why?")
//     //swapDraw()
// })

$('#type').change( () => 
{ refreshDraw() })

// function drawToggle_click() 
$('#drawToggle').click( () =>
{ 
    if ( !toggleDraw )
    {
        addDraw()

        if ( toggleSnap )
        {   
            addSnap()
        }
        if ( toggleModify )
        {
            removeModify()
            toggleModify = false
        }
        // removeSelect()
    }
    else
    {
        // addSelect()
        removeSnap()
        removeDraw()
    }

    toggleDraw = !toggleDraw 
})

$('#modifyToggle').click( () => 
{ 
    if(!toggleDraw)
    {
        if ( !toggleModify )
        {
            addModify()
        }
        else
        {        
            removeModify()
        }
        toggleModify = !toggleModify
    }
})

$('#snapToggle').click( () => 
{
    if(toggleDraw)
    {
        if (!toggleSnap )
        {        
            addSnap()
        }
        else
        {
            removeSnap()
        }
        toggleSnap = !toggleSnap
    }
})


$('#deleteLayer').click( () => 
{
    try
    {
        if( selectedFeatures[0] != null )
        {
            selectedFeatures.forEach(e => {
                drawSource.removeFeature(e)
            })
            drawArray = []
            selectedFeatures = []
            addNewChange()
        }
    }
    catch(error)
    {
        console.log("Nonexisting Feature selected, please unselect and reselect features")
        console.log(error)
    }
})

let lastColor = "selectBlack";
$('.colorOption').click( (e) =>
{
    let color = e.target.id
    let thisHex
    switch(color)
    {
        case "selectRed":
            setStyleColor(hexRed)   
            thisHex = hexRed
            break
    
        case "selectOrange":
            setStyleColor(hexOrange) 
            thisHex = hexOrange  
            break
                
        case "selectYellow":
            setStyleColor(hexYellow)
            thisHex = hexYellow
            break 
                        
        case "selectGreen":
            setStyleColor(hexGreen)
            thisHex = hexGreen
            break
            
        case "selectBlue":
            setStyleColor(hexBlue)
            thisHex = hexBlue
            break
            
        case "selectPurple":
            setStyleColor(hexPurple)
            thisHex = hexPurple
            break
        
        default:
            setStyleColor(hexBlack)
            thisHex = hexBlack
    }

    $('#'+lastColor).removeClass("selectedColor")
    $("#"+color).addClass("selectedColor")
    lastColor = color
    
    if( selectedFeatures[0] )
    {
        selectedFeatures.forEach( (e) =>
        {
            setFeatureColor(thisHex, e)
        })
        selectedFeatures = []
        drawArray = []
    }
}) 

$('#printMetric').click( () =>
{ 
    //old code
    let dontUse = false
    if(dontUse == false)
    {
        $('#showMetrics').html( () => 
        {
            if( selectedFeatures[0] )
            {return getAreal(selectedFeatures[0])}
        }) 
    }
})

function getAreal(f)
{
    let output = "none selected"
    const geom = f.getGeometry()
    const geomType = geom.getType()
    if ( geomType == "Polygon" ) 
    {
        const area = Sphere.getArea(geom)
        output = getMetrics("1", area)
    }
    else if ( geomType == "Circle" ) 
    {  
        const area = PolygonGeom.fromCircle(Sphere.getArea(geom))
        output = getMetrics("1", area)
    }
    else if ( geomType == "LineString" )
    {
        const length = Sphere.getLength(geom)
        output = getMetrics("2", length)
    }

    return output

    function getMetrics( type, metric )
    {
        let output
        if( type == "1" )
        {
            if ( metric > 10000 ) 
            { output = (Math.round(metric / 1000000 * 100) / 100) + ' ' + 'km<sup>2</sup>'} 
            else 
            { output = (Math.round(metric * 100) / 100) + ' ' + 'm<sup>2</sup>' }
            return output
        }
        else if( type == "2" )
        {
            if ( metric > 100 ) 
            { output = (Math.round(metric / 1000 * 100) / 100) + ' ' + 'km'} 
            else 
            { output = (Math.round(metric * 100) / 100) + ' ' + 'm'}
            return output
        }
    }
}

$('#freehand').click( () =>
{
    if( toggleFreehand == false )
    {
        toggleFreehand = true;
        $('#freehand').addClass('selectedFunction')
        $('#straight').removeClass('selectedFunction')
        refreshDraw()
    }
})

$('#straight').click( () =>
{
    if( toggleFreehand == true )
    {
        toggleFreehand = false;
        $('#straight').addClass('selectedFunction')
        $('#freehand').removeClass('selectedFunction')
        refreshDraw()
    }
})

//toggles orange border on deleteLayer when clicking
$('#deleteLayer').mousedown( () => 
{$('#deleteLayer').addClass("selectedFunction")}).mouseup( () => 
{$('#deleteLayer').removeClass("selectedFunction")}).mouseleave( () => 
{$('#deleteLayer').removeClass("selectedFunction")})

let selectedFeatures = []
let lastFeature, currentFeature
let featureCheck = false
function manualSelect(pixel) 
{
    featureCheck = false
    map.forEachFeatureAtPixel(pixel, function(f) 
    { 
        fType = f.getGeometry().getType()
        if( fType == 'Point' )
        {
            selectIcons(f)
        }
        else if ( fType == 'Circle' || fType == 'Polygon' || fType == 'Linestring' )
        {
            selectMarkedArea(f)
        }
    })

    if( !featureCheck )
    {
        let tempObj = -1
        let tempInd = 0
        selectedFeatures.forEach( function(f)
        {
            drawArray.forEach(function(el)
            {
                if ( f.ol_uid == el.ol_uid )
                {
                    tempObj = el
                    tempInd = drawArray.indexOf(el)
                }
            })
            if ( tempObj != -1 )
            {        
                f.setStyle(tempObj.style) 
                drawArray.splice(tempInd, 1) 
            }
        })
        selectedFeatures = []
    }   
}

function selectMarkedArea(f)
{
    if ( drawSource.getFeatures().includes(f) && !selectedFeatures.includes(f) )
    {
        let currentObject       
        currentObject = {"ol_uid" : f.ol_uid, "style" : f.getStyle()}

        drawArray.push(currentObject) 
        f.setStyle(selectStyle)
        selectedFeatures.push(f)
    }
    else if( selectedFeatures.includes(f) )
    {
        drawArray.forEach( (e) => 
        {        
            if ( f.ol_uid == e.ol_uid )
            {
                let eIndex = drawArray.indexOf(e)
                f.setStyle(e.style) 
                drawArray.splice(eIndex, 1)
                let fIndex = selectedFeatures.indexOf(f)
                selectedFeatures.splice(fIndex, 1)
            }
        })
    }
    if( !featureCheck )
    { featureCheck = true }
}

function selectIcons(f)
{
    if( !droppingIcon )
    { 
        console.log('Icons')
        droppingIcon = false
    }
}

map.on('click', (e) =>
{
    var pixel = e.pixel;
    manualSelect(pixel);
})