 /*
    Draw Module based on OpenLayers 5. 
    drawStyle. 

    Copyright (C) 2019 Nicolay Skjelbred, Jan-Magnus Solheim and Njål Dolonen, 
    ohanssen@acm.org

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published 
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.
    You should have received a copy of the GNU Affero General Public License
    along with this program. If not, see <http://www.gnu.org/licenses/>.
*/

/**
 * Script to manage predefined styles.
 */

/* $('#color').change( () => 
{
    setColor()
}) */

//probably legacy code, remove if nothing breaks unexpectedly
// function setFeatureColor(colorVal, feature)
// {
//     currentStyle = new Style
//     ({
//         fill: new Fill
//         ({
//             color: colorVal + hexOpacity
//         }),
//         stroke: new Stroke
//         ({
//             color: colorVal,
//             width: 3
//         }),
//         image: new CircleStyle
//         ({
//             radius: 7,
//             fill: new Fill
//             ({
//                 color: colorVal
//             })
//         })
//     })
//     setStyleColor(colorVal)
//     feature.setStyle(currentStyle)
// }

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

//Toggles orange border on deleteLayer when clicking and removes it on mouseleave.
$('#deleteLayer').mousedown( () => 
{$('#deleteLayer').addClass("selectedFunction")}).mouseup( () => 
{$('#deleteLayer').removeClass("selectedFunction")}).mouseleave( () => 
{$('#deleteLayer').removeClass("selectedFunction")})