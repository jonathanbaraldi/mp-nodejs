var express = require('express'); 
var app = express();
var bodyParser = require('body-parser');
var request = require("request");


var port = 8869;
// Parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  	extended: true
}));

// Request setup CORS
app.use(function(req, res, next) {
  	res.header("Access-Control-Allow-Origin", "*");
  	// Methods
  	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	next();
});

/*
	GET /      		>>> Welcome msg
	GET /train 		>>> Train with the database
	GET /load  		>>> Load mind saved
	POST /diagnosis >>> Send data to get the diagnosis
*/

// GET  - Jarvis online
app.get('/',function(req,res){
	var data = {
		"msg":"Jarvis is online Sr. How can I help you?",
		"sources": [
			{
				"action" : "Train",
				"endpoint" : "/train",
				"method": "GET"
			},
			{
				"action" : "Load",
				"endpoint" : "/load",
				"method": "GET"
			},
			{
				"action" : "Diagnosis",
				"endpoint" : "/diagnosis",
				"method": "POST"
			}
		]
	};
	res.json(data);
	console.log(data);
});

app.listen(port,function(){
	console.log("Jarvis online on port:"+port);
});
