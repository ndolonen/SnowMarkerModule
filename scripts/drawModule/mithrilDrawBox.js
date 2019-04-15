 /*
    Draw Module based on OpenLayers 5. 
    mithrilDrawBox. 

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

$('<div id="POPUP" class="POPUP widget ui-draggable ui-draggable-dragging"' 
+ 'style="position: absolute; display: block; padding: 2px; cursor: default; overflow-y: visible; left: 20px; top: 60px; opacity: 1;">'
+'</div>').appendTo('#map')


// $('<div id="drawTab" class="drawTab"><p class="selectedTab">Draw</p><p id="iconTab">Icon</p></div>' 
// + '<h1 class="ui-draggable-handle">Drawing</h1>'
// + '<div class="drawbox" id="drawbox"></div>').appendTo('#POPUP')
// $('<div id="drawTab"></div>').appendTo('#drawbox')
// $('<div id="iconTab"></div>').appendTo('#drawbox')

const popupRoot = document.getElementById('POPUP')


const drawPopup = 
{
    view: function() 
    {
        return m("div", 
        [
            m("div", 
            {"class":"drawTab"}, 
            [
                m("p", 
                {
                    "id":"drawTab", 
                    "class":"selectedTab", 
                    onclick:showDrawbox
                }, "Draw"),
                m("p", 
                {
                    "id":"iconTab", 
                    onclick:showIconbox
                }, "Icon")
            ]),
            m("h1", 
            {
                "id":"drawPopupTitle", 
                "class":"ui-draggable-handle"
            }, "Draw Tools"),
            m("div",
            {"id":"drawBox"}),
            m("div", 
            {"id":"iconBox"}),
        ])
        // '<div id="drawTab" class="drawTab"><p class="selectedTab">Draw</p><p id="iconTab">Icon</p></div>' 
        // + '<h1 class="ui-draggable-handle">Drawing</h1>'
        // + '<div class="drawbox" id="drawbox"></div>'
    }
}

const drawTools = 
{
    view: function() 
    {
        return m("div", 
        {"id":"drawtools"},
        [   
            m("img", 
            {
                "src":"images/drawIcons/questionmark_48px.png", 
                "id":"tooltip", 
                "title":"Tooltip Helper, click and mouseover other functions", 
                onclick:tooltip_click
            }),
            m("div",
            [   
                m("label", 
                {"class":"non-interactive"}, 
                ["Draw type ", m.trust("&nbsp;")]),
                m("div", 
                [
                    m("img", 
                    {
                        "src":"images/drawIcons/straightline_50px.png", 
                        "id":"straight", "class":"drawIcon", 
                        onclick: straight_click
                    }),
                    m("img", 
                    {
                        "src":"images/drawIcons/wigglyline_50px.png", 
                        "id":"freehand", "class":"drawIcon selectedFunction", 
                        onclick: freehand_click
                    }),
                ]),
                m("label", 
                {"class":"non-interactive"},
                ["Geometry type ", m.trust("&nbsp;"),]),
                m("div", 
                {
                    "id":"selectingType", 
                    "class":"dropdownSelect"
                }, [
                    m("p", 
                    {
                        "id":"optPolygon", 
                        "class":"dropdownOption", 
                        onclick: setCurrentType_click
                    }, "Polygon"),
                    m("p", 
                    {
                        "id":"optLine", 
                        "class":"dropdownOption", 
                        onclick: setCurrentType_click
                    }, "LineString"),
                    m("p", 
                    {
                        "id":"optCircle", 
                        "class":"dropdownOption", 
                        onclick: setCurrentType_click
                    }, "Circle"),
                ]),
                m("div", 
                {
                    "id":"type", 
                    "class":"dropdownSelect"
                }, 
                [
                    m("p", 
                    {
                        "id":"currentType",
                        onclick:showDropdownOptions_click}, 
                        "Polygon"),
                ]),
                // m("select", {"id":"type", "class" : "drawSelect", onchange(){type_change}},
                // [
                //     m("option", {"value":"Polygon", "id":"optPolygon", onclick:type_change}, "Marking"),
                //     m("option", {"value":"LineString", "id":"optLine", onclick:type_change}, "Line"),
                //     m("option", {"value":"Circle", "id":"optCircle", onclick:type_change}, "Circle")
                // ]),
                m("label", 
                {"class":"non-interactive"},
                [
                        "Color Selector ", m.trust("&nbsp;"),
                ]),
                m("div", 
                {"id":"ColorSelecter"},
                [
                    m("span", 
                    {
                        "class":"colorOption selectedColor",
                        "id":"selectBlack", 
                        onclick:colorOption_click
                    }),
                    m("span", 
                    {
                        "class":"colorOption",
                        "id":"selectRed", 
                        onclick:colorOption_click
                    }),
                    m("span", 
                    {
                        "class":"colorOption",
                        "id":"selectOrange", 
                        onclick:colorOption_click
                    }),
                    m("span", 
                    {
                        "class":"colorOption",
                        "id":"selectYellow", 
                        onclick:colorOption_click
                    }),
                    m("span", 
                    {
                        "class":"colorOption",
                        "id":"selectGreen", 
                        onclick:colorOption_click
                    }),
                    m("span", 
                    {
                        "class":"colorOption",
                        "id":"selectBlue", 
                        onclick:colorOption_click
                    }),
                    m("span", 
                    {
                        "class":"colorOption",
                        "id":"selectPurple", 
                        onclick:colorOption_click
                    }),
                    
                ]),
                m("label", 
                {"class":"non-interactive"},
                ["Functions ", m.trust("&nbsp;")]),
                m("div",
                [
                    m("img", 
                    {
                        "src":"images/drawIcons/draw_128px.png", 
                        "id":"drawToggle", "class":"drawIcon", 
                        onclick:drawToggle_click
                    }),
                    m("img", 
                    {
                        "src":"images/drawIcons/trashCan_50px.png",   
                        "id":"deleteLayer", "class":"drawIcon", 
                        onclick:deleteLayer_click
                    }),
                    m("img", 
                    {
                        "src":"images/drawIcons/edit_50px.png", 
                        "id":"modifyToggle", "class":"drawIcon", 
                        onclick: modifyToggle_click
                    }),
                    m("img", 
                    {
                        "src":"images/drawIcons/snap_50px.png", 
                        "id":"snapToggle", "class":"drawIcon", 
                        onclick: snapToggle_click
                    }),
                    // m("img", {"src":"images/drawIcons/km2_50px.png", "id":"printMetric", "class":"drawIcon", onclick: printMetric_click})
                   // m("img", {"src":"images/download","id":"downloadGPX", "class" : "drawIcon"}),
                ]),
            ]),
            // m("div",
            // [
            //     // m("button", {"id":"printMetric", "class" : "drawButton"}, "Print Area"),
            //     m("p", {"id":"showMetrics", "class":"non-interactive"}, "Areal")
            // ]),
            // m("div",
            // [
            //     //m("button", {"id":"writeJSON", "class" : "drawButton"}, "Write JSON"),
            //     //m("button", {"id":"readJSON", "class" : "drawButton"}, "Read JSON"),
            //     m("button", {"id":"undoChange", "class":"drawButton"}, "Undo"),
            //     m("button", {"id":"redoChange", "class":"drawButton"}, "Redo"),
            //     m("button", {"id":"logGPX",     "class":"drawButton"}, "log gpx"),
            //     m("button", {"id":"logKML",     "class":"drawButton"}, "log kml")
            // ]),
            // m("div", {"id":"","class":"downloadFiles"},
            // [
            //     m("button", {"id":"", "class":"drawButton"}, "Draw new Path"),
            //     m("input",  {"id":"fileNameGpxDownload", "type":"text", "value":"path.gpx"}),
            //     m("button", {"id":"downloadGPX", "class":"drawButton"}, "Download GPX")
            // ])
        ])   
    }
}

// const iconTools = 
// {
//     view: function() 
//     {
//         return m("div", 
//         {"id":"icontools"},
//         [
//             m("div", 
//             {"id":"iconContainer"}, 
//             [
//                 m("img", 
//                 {
//                     "src":"images/iconpack/blast.png", 
//                     "class":"drawIcons",
//                     "id":"markerIcon-blast", 
//                     "title":"IMAGE", 
//                     onclick: (e) => 
//                     {markerIcons_click(e)}
//                 })
//             ])

//         ])
        
//     }
// }

// $('#showDraw').click( () => 
// {
//     console.log("test")
// })

// $('')