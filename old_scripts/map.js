// version with basic map functions
let map = new ol.Map
({
    target: 'map',
    layers: 
    [
      new ol.layer.Tile
      ({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View
    ({
      center: ol.proj.fromLonLat( [14.14278, 66.31278] ),
      //centers the map on Mo i Rana
      zoom: 10
    })
});

