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
    feature.setStyle(currentStyle)
}

function getStyle(colorVal)
{
    jsonStyle = new Style
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
    return jsonStyle
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