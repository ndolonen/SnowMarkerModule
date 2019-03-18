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
                m("select", {"id":"type", "class" : "drawSelect"},
                [
                    m("option", {"value":"LineString"}, "Line"),
                    m("option", {"value":"Polygon"}, "Marking"),
                    m("option", {"value":"Circle"}, "Circle")
                ]),
                m("div", {"id":"ColorSelecter"},
                [
                    m("span", {"class":"colorOption","id":"selectZero"}),
                    m("span", {"class":"colorOption","id":"selectRed"}),
                    m("span", {"class":"colorOption","id":"selectOrange"}),
                    m("span", {"class":"colorOption","id":"selectYellow"}),
                    m("span", {"class":"colorOption","id":"selectGreen"}),
                    m("span", {"class":"colorOption","id":"selectBlue"}),
                    m("span", {"class":"colorOption","id":"selectPurple"})
                    
                ]),
                m("img", {"src":"images/draw_off.png", "id":"draw", "class":"drawIcon"}),
                m("img", {"src":"images/trashDelete.png", "id":"deleteLayer", "class":"drawIcon"}),
            ]),
            m("div",
            [
                m("button", {"id":"modifyLayer", "class" : "drawButton"}, "Enable Modify"),
                m("button", {"id":"snapToggle", "class" : "drawButton"}, "Enable Snap"),
                m("button", {"id":"printMetric", "class" : "drawButton"}, "Print Area"),
                // m("button", {"id":"deleteLayer", "class" : "drawButton"}, "Delete"),
                m("p", {"id":"showMetrics", "class":"non-interactive"}, "Areal")
            ]),
        ])   
    }
}

m.mount(root, drawtools)