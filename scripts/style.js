/**
 * Script to manage predefined styles.
 */

$('#color').change( () => 
{
    setColor()
})

function setColor(colorVal)
{
    //let colorVal = $('#color').val()
    // var cnv
    // var ctx = cnv.getContext('2d')
    // var img = new Image()
    // img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png'
    /*
        A type accepted by CanvasRenderingContext2D.fillStyle or CanvasRenderingContext2D.strokeStyle. Represents a color, pattern, or gradient. 
        The origin for patterns and gradients as fill style is an increment of 512 css pixels from map coordinate [0, 0]. 
        For seamless repeat patterns, width and height of the pattern image must be a factor of two (2, 4, 8, ..., 512).
        https://viglino.github.io/ol-ext/examples/style/map.style.strokepattern.html
    */
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