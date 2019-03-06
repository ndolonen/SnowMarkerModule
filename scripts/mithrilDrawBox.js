$('#map').after('<div class="drawbox" id="drawbox"></div>')
$('#drawbox').after('<div id="test"></div><div id="test"></div>')
// $('<div class="drawContainer" id="drawtools"></div>\n<div class="drawContainer" id="layerList"></div').appendTo('#test')
//
var root = document.getElementById('drawbox')

var drawbox = 
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
                m("button", {"id":"addLayer"}, "New Area"),
                m("button", {"id":"modifyLayer"}, "Modify Area"),
                m("button", {"id":"snapToggle"}, "Disable Snap"),
                m("button", {"id":"refreshDrawings"}, "Delete")
                
            ]),
       
        ])
        
    }

}

var test = {
    view: function() 
    {
        return m("div", {"id":"test"}, 
        [
            m("button")
        ]
    )}
}

m.mount(root, drawbox)