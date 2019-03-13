$('#map').after('<div class="drawbox" id="drawbox"></div>')
var root = document.getElementById('drawbox')

var drawtools = 
{
    view: function() 
    {
        return m("div", {"id":"drawtools"},
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
                m("h1", "Test the Test"),
                m("button#testPrint", "Print info"),
                m("p", {"id":"showMetrics", "class":"non-interactive"},
                [
                        "Print Data here"
                ])
            ])
        ])   
    }
}

m.mount(root, drawtools)