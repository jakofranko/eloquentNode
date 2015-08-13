var http = require("http");
var request = http.request({
	hostname: "eloquentjavascript.net",
	path: "/author",
	method: "GET",
	headers: {Accept: process.argv[2] + "/" + process.argv[3]}
}, function(response) {
	response.on("data", function(chunk) {
		process.stdout.write(chunk.toString());
	});
});
request.end();