function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}

function gpxFromFeature()
{
    if(drawSelect.getFeatures().getArray()[0] != null)
    {
        
        let gpxForm = gpxFormat.writeFeatures(drawSelect.getFeatures().getArray())
        //download(gpxForm, "gpxtest", "gpx")
        return gpxForm
    }
}

$('#logGPX').click( () =>
{ console.log(gpxFromFeature()) })

$('#downloadGPX').click( () =>
{ 
    let gpx = gpxFromFeature()
    let filename = $('#fileNameGpxDownload').val()
    download(filename, gpx)
})