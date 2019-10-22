
const http =  require('http');

http.createServer( (req, res )=> {

    res.writeHead(200,{'Content-Type':'application/json'});

    let salida = {
        nombre : 'Nicolas',
        edad: 26,
        puesto: 'analista'
    }

    res.write(JSON.stringify(salida));

    res.end();
})
.listen(8080);