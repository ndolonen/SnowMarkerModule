$('#map').after('<div class="drawbox" id="drawbox"></div>')
// $('#map').after('<div id="drawContainer"></div>')
// $('#drawbox').after('<div id="test"></div><div id="test"></div>')
// $('<div class="drawContainer" id="drawtools"></div>\n<div class="drawContainer" id="layerList"></div').appendTo('#test')
//
var root = document.getElementById('drawbox')
// var root = document.getElementById('drawContainer')


var drawtools = 
{
    view: function() 
    {
        return m("div", {"id":"drawtools"}, //same as "div.classname#idname"
        [
            m("label", {"class":"non-interactive"},
            [
                    "Geometry type ", m.trust("&nbsp;")
            ]),
            m("div",
            [
                m("select", {"id":"type"},
                [
                    m("option", {"value":"LineString"}, "Line"),
                    m("option", {"value":"Polygon"}, "Marking"),
                    m("option", {"value":"Circle"}, "Circle")
                ]),
                m("div",
                [
                    m("span", {"class":"colorOption","id":"selectBlack"}),
                    m("span", {"class":"colorOption","id":"selectRed"}),
                    m("span", {"class":"colorOption","id":"selectOrange"}),
                    m("span", {"class":"colorOption","id":"selectYellow"}),
                    m("span", {"class":"colorOption","id":"selectGreen"}),
                    m("span", {"class":"colorOption","id":"selectBlue"}),
                    m("span", {"class":"colorOption","id":"selectPurple"})
                ]),
                m("img", {"src":"images/draw_off.png", "id":"draw"}),
            ]),
            m("div",
            [
                m("button", {"id":"addLayer"}, "UNDEDICATED"),
                m("button", {"id":"modifyLayer"}, "Modify Area"),
                m("button", {"id":"snapToggle"}, "Disable Snap"),
                m("button", {"id":"deleteLayer"}, "Delete")
                
            ]),
            m("div", 
            [
                m("h1", "TESTBUTTONS"),
                m("button#testNew", "New Feature"),
                m("button#testDelete", "Delete Feature"),
                m("button#testPrint", "Print info"),
                m("button#testColor", "Color"),
                m("p", {"id":"showMetrics", "class":"non-interactive"},
                [
                        "Print Data here"
                ])
            ])
       
        ])
        
    }

}

// var test = {
//     view: function() 
//     {
//         return m("div", {"id":"test"}, 
//         [
//             m("button")
//         ]
//     )}
// }

// var toggled = false;
// $("#buttonHide").click( () => 
// {
//   if(toggled)
//   {
//     m.mount(root, drawtools)
//   }
//   else
//   {
//     m.mount(root, test)
//   }
//   toggled = !toggled;
// })

m.mount(root, drawtools)