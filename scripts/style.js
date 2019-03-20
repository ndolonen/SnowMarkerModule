/**
 * Script to manage predefined styles.
 */

$('#color').change( () => 
{
    setColor()
})

function setFeatureColor(colorVal, feature)
{
    currentStyle = new Style
    ({
        fill: new Fill
        ({
            color: colorVal + hexOpacity
        }),
        stroke: new Stroke
        ({
            color: colorVal,
            width: 3
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
    feature.setStyle(selectableStyle(currentStyle))
}

function setStyleColor(colorVal)
{
    currentStyle = new Style
    ({
        fill: new Fill
        ({
            color: colorVal + hexOpacity
        }),
        stroke: new Stroke
        ({
            color: colorVal,
            width: 3
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
}

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

const blackStyle = new Style
({
    fill: new Fill
    ({
        color: hexBlack + hexOpacity
    }),
    stroke: new Stroke
    ({
        color: hexBlack,
        width: 3
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

const selectStyle = new Style(
    {
        stroke: new Stroke(
        {
            color: hexSelect,
            width: '3'
        }),
        fill: new Fill(
        {
            color: hexSelect + hexOpacity
        }),
        image: new CircleStyle
        ({
            radius: 7,
            fill: new Fill(
            {
                color: hexSelect
            })
        })
    })