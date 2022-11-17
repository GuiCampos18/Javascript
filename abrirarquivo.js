var fs = require ('fs');

fs.appendFile('teste.txt', 'Olá!', function(err){
    if(err) throw err;
    console.log('Arquivo criado!');
})