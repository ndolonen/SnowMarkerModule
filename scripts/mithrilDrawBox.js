$('#map').after('<div class="drawbox" id="drawbox"></div>')
var root = document.getElementById('drawbox')

var drawtools = 
{
    view: function() 
    {
        return m("div", {"id":"drawtools"},
        [
            m("div",
            [   
                m("label", {"class":"non-interactive"}, ["Draw type ", m.trust("&nbsp;")]),
                m("div", 
                [
                    m("img", {"src":"images/straightline_50px.png", "id":"straight", "class":"drawIcon"}),
                    m("img", {"src":"images/wigglyline_50px.png", "id":"freehand", "class":"drawIcon selectedFunction"}),
                ]),
                m("label", {"class":"non-interactive"},
                [
                        "Geometry type ", m.trust("&nbsp;")
                ]),
                m("select", {"id":"type", "class" : "drawSelect"},
                [
                    m("option", {"value":"LineString"}, "Line"),
                    m("option", {"value":"Polygon"}, "Marking"),
                    m("option", {"value":"Circle"}, "Circle")
                ]),
                m("label", {"class":"non-interactive"},
                [
                        "Color Selector ", m.trust("&nbsp;")
                ]),
                m("div", {"id":"ColorSelecter"},
                [
                    m("span", {"class":"colorOption selectedColor","id":"selectZero"}),
                    m("span", {"class":"colorOption","id":"selectRed"}),
                    m("span", {"class":"colorOption","id":"selectOrange"}),
                    m("span", {"class":"colorOption","id":"selectYellow"}),
                    m("span", {"class":"colorOption","id":"selectGreen"}),
                    m("span", {"class":"colorOption","id":"selectBlue"}),
                    m("span", {"class":"colorOption","id":"selectPurple"})
                    
                ]),
                m("label", {"class":"non-interactive"},
                [
                        "Functions ", m.trust("&nbsp;")
                ]),
                m("div",
                [
                    m("img", {"src":"images/draw_off.png", "id":"draw", "class":"drawIcon"}),
                    m("img", {"src":"images/trashcan_50px.png", "id":"deleteLayer", "class":"drawIcon"}),
                ]),
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