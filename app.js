
const express = require("express");
const app = express(); 

function run_web_site(port) {    
	app.use(express.static('html'));
	app.use("/", express.Router());   
	app.listen(port, function () {
		console.log("Stssssatisssc site hosted on port", port);
	});
} 
run_web_site(8080) 
