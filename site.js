var http = require('http');

var data = require('./primeiromodulo');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Aula de Javascript</h1>');
    res.write('<h2>Servidor criado!</h2>');
    res.write('Endereco acessado: '+req.url+'<br>');
    res.write(data.myDateTime());
    res.end();
}).listen(8080);