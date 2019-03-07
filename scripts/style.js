/**
 * Script to manage predefined styles.
 */

$('#color').change( () => 
{
    setColor()
})

function setColor(colorVal)
{
    vector.setStyle(new Style
    ({
        fill: new Fill
        ({
            color: colorVal + hexOpacity
        }),
        stroke: new Stroke
        ({
            color: colorVal,
            width: 2
        }),
        image: new CircleStyle
        ({
            radius: 7,
            fill: new Fill
            ({
                color: colorVal
            })
        })
    })
)}

$('.colorOption').click( (e) =>
{
    let color = e.target.id

    switch(color)
    {
        case "selectRed":
        //red function here
            setColor(hexRed)
            break
            
        case "selectOrange":
        //orange function here
            setColor(hexOrange)
            break
            
        case "selectYellow":
        //yellow function here
            setColor(hexYellow)
            break 
                       
        case "selectGreen":
        //green function here
            setColor(hexGreen)
            break
            
        case "selectBlue":
        //blue function here
            setColor(hexBlue)
            break
            
        case "selectPurple":
        //purple function here
            setColor(hexPurple)
            break
        
        default:
            //defaults to black
            setColor(hexBlack)
    }
})