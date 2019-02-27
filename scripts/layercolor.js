var source = new VectorSource();

var vectorRed = new VectorLayer({
    source: source,
    style: new Style({
        fill: new Fill({
        color: 'rgba(255, 255, 255, 0.2)'
        }),
        stroke: new Stroke({
        color: '#ff0000',
        width: 2
        }),
        image: new CircleStyle({
        radius: 7,
        fill: new Fill({
            color: '#ff0000'
        })
        })
    })
});

var vectorBlue = new VectorLayer({
    source: source,
    style: new Style
    ({
        fill: new Fill
        ({
            color: 'rgba(255, 255, 255, 0.2)'
        }),
        stroke: new Stroke
        ({
            color: '#0000ff',
            width: 2
        }),
        image: new CircleStyle
        ({
            radius: 7,
            fill: new Fill
            ({
                color: '#0000ff'
            })
        })
    })
});

var map = new Map
({
layers: [raster, vectorRed],
target: 'map',
view: new View
    ({
    center: [-11000000, 4600000],
    zoom: 4
    })
});
    

var colorSelect = document.getElementById('color');
colorSelect.onchange = function() 
{
    var colorVal = document.getElementById('color').value;
    map.removeLayer(map.getLayers.pop);
    switch(colorVal)
    {
        case Red: map.addLayer(vectorRed);
        case Blue: map.addLayer(vectorBlue)
    }

}