/**
 * Copyright (c) 2019, Njaal Dolonen, Nicolay Skjelbred, Jan-Magnus Solheim All rights reserved.
 * See LICENSE for more detail.  
 * */ 

$('#map').after('<div class="drawbox" id="drawbox"></div>')
$('<div id="drawTab"></div>').appendTo('#drawbox')
$('<div id="iconTab"></div>').appendTo('#drawbox')

const root = document.getElementById('drawTab')



const drawTools = 
{
    view: function() 
    {
        return m("div", {"id":"drawtools"},
        [   
            m("div", {"id":"divide", "class":""}, 
            [
                m("button", {"id":"abtn", "class":""}, "screams internally"),
                m("button", {"id":"bbtn", "class":""}, "loudly"),
            ]),
            m("img", {"src":"images/drawIcons/questionmark_48px.png", "id":"tooltip", "title":"Tooltip Helper, click and mouseover other functions"}),
            m("div",
            [   
                m("label", {"class":"non-interactive"}, ["Draw type ", m.trust("&nbsp;")]),
                m("div", 
                [
                    m("img", {"src":"images/drawIcons/straightline_50px.png", "id":"straight", "class":"drawIcon"}),
                    m("img", {"src":"images/drawIcons/wigglyline_50px.png", "id":"freehand", "class":"drawIcon selectedFunction"}),
                ]),
                m("label", {"class":"non-interactive"},
                [
                        "Geometry type ", m.trust("&nbsp;")
                ]),
                m("select", {"id":"type", "class" : "drawSelect"},
                [
                    m("option", {"value":"Polygon", "id":"optPolygon"}, "Marking"),
                    m("option", {"value":"LineString", "id":"optLine"}, "Line"),
                    m("option", {"value":"Circle", "id":"optCircle"}, "Circle")
                ]),
                m("label", {"class":"non-interactive"},
                [
                        "Color Selector ", m.trust("&nbsp;")
                ]),
                m("div", {"id":"ColorSelecter"},
                [
                    m("span", {"class":"colorOption selectedColor","id":"selectBlack"}),
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
                    m("img", {"src":"images/drawIcons/draw_128px.png", "id":"drawToggle", "class":"drawIcon"}),
                    m("img", {"src":"images/drawIcons/trashCan_50px.png", "id":"deleteLayer", "class":"drawIcon"}),
                    m("img", {"src":"images/drawIcons/edit_50px.png","id":"modifyToggle", "class":"drawIcon"}),
                    m("img", {"src":"images/drawIcons/snap_50px.png","id":"snapToggle", "class":"drawIcon"}),
                    m("img", {"src":"images/drawIcons/km2_50px.png","id":"printMetric", "class":"drawIcon"}),
                   // m("img", {"src":"images/download","id":"downloadGPX", "class" : "drawIcon"}),
                   // m("img", {"src":"images/download","id":"downloadKML", "class" : "drawIcon"}),
                   // m("img", {"src":"images/download","id":"downloadJSON", "class" : "drawIcon"}),
                ]),
            ]),
            m("div",
            [
                // m("button", {"id":"printMetric", "class" : "drawButton"}, "Print Area"),
                m("p", {"id":"showMetrics", "class":"non-interactive"}, "Areal")
            ]),
            m("div",
            [
                //m("button", {"id":"writeJSON", "class" : "drawButton"}, "Write JSON"),
                //m("button", {"id":"readJSON", "class" : "drawButton"}, "Read JSON"),
                m("button", {"id":"undoChange", "class" : "drawButton"}, "Undo"),
                m("button", {"id":"redoChange", "class" : "drawButton"}, "Redo"),
            ]),
        ])   
    }
}

const iconTools = 
{
    view: function() 
    {
        return m("div", {"id":"icontools"},
        [

        ])
    }
}

m.mount(root, drawTools)