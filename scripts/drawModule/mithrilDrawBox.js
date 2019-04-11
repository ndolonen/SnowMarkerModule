$('<div class="POPUP widget ui-draggable"' 
+ 'style="position: absolute; display: block; padding: 2px; cursor: default; overflow-y: visible; right: 20px; top: 60px; opacity: 1;">'
+ '<div id="POPUP"></div></div>').appendTo('#map')

$('<h1 class="ui-draggable-handle">Drawing</h1>'
+ '<div class="drawbox" id="drawbox"></div>').appendTo('#POPUP')
// $('<div id="drawTab"></div>').appendTo('#drawbox')
// $('<div id="iconTab"></div>').appendTo('#drawbox')

const drawRoot = document.getElementById('drawbox')
//const iconRoot = document.getElementById('iconTab')

const drawTools = 
{
    view: function() 
    {
        return m("div", {"id":"drawtools"},
        [   
            // m("div", {"id":"divide", "class":""}, 
            // [
            //     m("button", {"class":"selectedFunction"}, "Draw"),
            //     m("button", {"class":"toggleFunction"}, "Icons"),
            //     m("button", {"class":"toggleDownload"}, "Downloads")

            // ]),
            m("img", {"src":"images/drawIcons/questionmark_48px.png", "id":"tooltip", "title":"Tooltip Helper, click and mouseover other functions", onclick:tooltip_click}),
            m("div",
            [   
                m("label", {"class":"non-interactive"}, ["Draw type ", m.trust("&nbsp;")]),
                m("div", 
                [
                    m("img", {"src":"images/drawIcons/straightline_50px.png", "id":"straight", "class":"drawIcon", onclick: straight_click}),
                    m("img", {"src":"images/drawIcons/wigglyline_50px.png", "id":"freehand", "class":"drawIcon selectedFunction", onclick: freehand_click}),
                ]),
                m("label", {"class":"non-interactive"},
                [
                        "Geometry type ", m.trust("&nbsp;")
                ]),
                m("div", {"id":"selectingType", "class":"dropdownSelect"}, [
                    m("p", {"id":"optPolygon", "class":"dropdownOption", onclick: setCurrentType}, "Polygon"),
                    m("p", {"id":"optLine", "class":"dropdownOption", onclick: setCurrentType}, "LineString"),
                    m("p", {"id":"optCircle", "class":"dropdownOption", onclick: setCurrentType}, "Circle"),
                ]),
                m("div", {"id":"type", "class":"dropdownSelect"}, 
                [
                    m("p", {"id":"currentType", onclick:showDropdownOptions}, "Polygon")
                ]),
                // m("select", {"id":"type", "class" : "drawSelect", onchange(){type_change}},
                // [
                //     m("option", {"value":"Polygon", "id":"optPolygon", onclick:type_change}, "Marking"),
                //     m("option", {"value":"LineString", "id":"optLine", onclick:type_change}, "Line"),
                //     m("option", {"value":"Circle", "id":"optCircle", onclick:type_change}, "Circle")
                // ]),
                m("label", {"class":"non-interactive"},
                [
                        "Color Selector ", m.trust("&nbsp;")
                ]),
                m("div", {"id":"ColorSelecter"},
                [
                    m("span", {"class":"colorOption selectedColor","id":"selectBlack", onclick:colorOption_click}),
                    m("span", {"class":"colorOption","id":"selectRed", onclick:colorOption_click}),
                    m("span", {"class":"colorOption","id":"selectOrange", onclick:colorOption_click}),
                    m("span", {"class":"colorOption","id":"selectYellow", onclick:colorOption_click}),
                    m("span", {"class":"colorOption","id":"selectGreen", onclick:colorOption_click}),
                    m("span", {"class":"colorOption","id":"selectBlue", onclick:colorOption_click}),
                    m("span", {"class":"colorOption","id":"selectPurple", onclick:colorOption_click})
                    
                ]),
                m("label", {"class":"non-interactive"},
                [
                        "Functions ", m.trust("&nbsp;")
                ]),
                m("div",
                [
                    m("img", {"src":"images/drawIcons/draw_128px.png", "id":"drawToggle", "class":"drawIcon" , onclick:drawToggle_click}),
                    m("img", {"src":"images/drawIcons/trashCan_50px.png",   "id":"deleteLayer", "class":"drawIcon", onclick:deleteLayer_click}),
                    m("img", {"src":"images/drawIcons/edit_50px.png", "id":"modifyToggle", "class":"drawIcon", onclick: modifyToggle_click}),
                    m("img", {"src":"images/drawIcons/snap_50px.png", "id":"snapToggle", "class":"drawIcon", onclick: snapToggle_click}),
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
//         return m("div", {"id":"icontools"},
//         [
//             m("button", {"class":"toggleFunction"}, "Draw"),
//             m("button", {"class":"selectedFunction"}, "Icons"),
//             m("div", {"id":"iconContainer", "class":""}, 
//             [

//             ])
//         ])
        
//     }
// }


// $('#showDraw').click( () => 
// {
//     console.log("test")
// })

// $('')