const http = require('http');
http.createServer(function(req, res) {

	res.write('Rhoshans  diner application deciding where to go on the weekends with his girlfriend');

	res.end();


}

).listen(3000);

console.log("Roshan's server started on port 3000");


