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
    //vector.setStyle(vector.)
)}

/*
//NOTE COMMENTED OUT FOR DOING COLOR TESTING
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
*/

//colorstyles START
const redStyle = new Style(
{
    stroke: new Stroke(
    {
        color: hexRed,
        width: '3'
    }),
    fill: new Fill(
    {
        color: hexRed + hexOpacity
    }),
    image: new CircleStyle
    ({
        radius: 7,
        fill: new Fill
        ({
            color: hexRed
        })
    })
})

const orangeStyle = new Style(
{
    stroke: new Stroke(
    {
        color: hexOrange,
        width: '3'
    }),
    fill: new Fill(
    {
        color: hexOrange + hexOpacity
    }),
    image: new CircleStyle
    ({
        radius: 7,
        fill: new Fill
        ({
            color: hexOrange
        })
    })
})

const yellowStyle = new Style(
{
    stroke: new Stroke(
    {
        color: hexYellow,
        width: '3'
    }),
    fill: new Fill(
    {
        color: hexYellow + hexOpacity
    }),
    image: new CircleStyle
    ({
        radius: 7,
        fill: new Fill
        ({
            color: hexYellow
        })
    })
})

const greenStyle = new Style(
{
    stroke: new Stroke(
    {
        color: hexGreen,
        width: '3'
    }),
    fill: new Fill(
    {
        color: hexGreen + hexOpacity
    }),
    image: new CircleStyle
    ({
        radius: 7,
        fill: new Fill
        ({
            color: hexGreen
        })
    })
})

const blueStyle = new Style(
{
    stroke: new Stroke(
    {
        color: hexBlue,
        width: '3'
    }),
    fill: new Fill(
    {
        color: hexBlue + hexOpacity
    }),
    image: new CircleStyle
    ({
        radius: 7,
        fill: new Fill
        ({
            color: hexBlue
        })
    })
})

const purpleStyle = new Style(
{
    stroke: new Stroke(
    {
        color: hexPurple,
        width: '3'
    }),
    fill: new Fill(
    {
        color: hexPurple + hexOpacity
    }),
    image: new CircleStyle
    ({
        radius: 7,
        fill: new Fill(
        {
            color: hexPurple
        })
    })
})

const blackStyle = new Style(
{
    stroke: new Stroke(
    {
        color: hexBlack,
        width: '3'
    }),
    fill: new Fill(
    {
        color: hexBlack + hexOpacity
    }),
    image: new CircleStyle
    ({
        radius: 7,
        fill: new Fill
        ({
            color: hexBlack
        })
    })
})

//colorstyles END