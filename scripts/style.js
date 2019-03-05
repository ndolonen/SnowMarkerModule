/**
 * Script to manage predefined styles.
 */

$('#color').change( () => 
{
    setColor();
})

function setColor()
{
    let colorVal = $('#color').val();
    vector.setStyle(new Style
    ({
        fill: new Fill
        ({
            color: 'rgba(255, 255, 255, 0.2)'
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



