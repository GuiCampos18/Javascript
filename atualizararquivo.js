var fs = require('fs');
fs.appendFile('teste.txt', 'texto atualizado!', function(err){
    if (err) throw err;
    console.log('arquivo atualizado!');
});