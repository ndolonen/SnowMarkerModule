console.log("app.js running")
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/openlayers', {useNewUrlParser: true},(error) => 
{ {if( error ) {console.log(error)}}})