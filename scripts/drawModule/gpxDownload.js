 /*
    Draw Module based on OpenLayers 5. 
    gpxDownload. 

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

//maked downlaad prompt for the user
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/gpx;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}



//TODO: FIX LAT LON COORDINATES
//Returns OSM based values
//Outputs the selected array as GPX format
function gpxFromFeature()
{
    if( selectedFeatures[0] )
    {
        //write Features to gpxFormat
        let gpxForm = gpxFormat.writeFeatures(selectedFeatures)
        return gpxForm
    }
}

//TODO: Implement button for download
function downloadGpx_Click()
{ 
    let gpx = gpxFromFeature()
    let filename = "gpxDownload.gpx" //change  to own input if its gonna be changable
    download(filename, gpx)
}