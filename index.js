var http = require("http");
var fs = require("fs")

http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html'});
    var mywebsite = fs.createReadStream(__dirname+'/index.html','utf8');
    mywebsite.pipe(response);
}).listen(5000);
console.log('Server running at http://localhost:5000');