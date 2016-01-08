var http = require('http'),
	url = require('url');

function handle_incoming_request(req, res) {
	console.log(url.parse(req.url, true));
	console.log("--------------------------------------------");
	res.writeHead(200, { "Content-Type" : "application/json" });
	res.end(JSON.stringify( { error: null }) + "\n");
}

var s = http.createServer(handle_incoming_request);
s.listen(8080);