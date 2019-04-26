 /*
    Draw Module based on OpenLayers 5. 
    map. 

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

//map imports
const TileLayer = ol.layer.Tile
const OSM = ol.source.OSM
const Map = ol.Map
const View = ol.View

/**
 * Script to create the map layer.
 */
let raster = new TileLayer(
{ source: new OSM() })
var browser = 
{
     map: new Map(
        {
            layers: [raster],
            target: 'map',
            view: new View(
            {
                center: ol.proj.fromLonLat([10.757933, 59.911491]),
                zoom: 6
            })
        })
}

<<<<<<< HEAD
//Generates a container div to mount in, and appends the container to the map div in index.
$('<div id="markerModule" class="POPUP widget ui-draggable ui-draggable-dragging"' 
+ 'style="position: absolute; display: block; padding: 2px; cursor: default; overflow-y: visible; left: 20px; top: 60px; opacity: 1;">'
+'</div>').appendTo('#map')
=======
// //Generates a container div to mount in, and appends the container to the map div in index.
// $('<div id="POPUP" class="POPUP widget ui-draggable ui-draggable-dragging"' 
// + 'style="position: absolute; display: block; padding: 2px; cursor: default; overflow-y: visible; left: 20px; top: 60px; opacity: 1;">'
// +'</div>').appendTo('#map')
>>>>>>> 4afd9646e796747cf9fb9d475d2f3ca11f9cb6a0
