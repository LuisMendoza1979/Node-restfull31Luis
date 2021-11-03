const express = require("express");
const server = express();

const empleado = {

    "PrimerNombre" : "Juan",
    "SegundoNombre" : "Alberto"
};

server.get('/', function(request, response){

    response.send("Servicio get raíz");

});

server.get('/empleado', function(request, response){

    response.send(empleado);

});

server.listen(
    4000,()=>{
        console.log("Hola mundo, inicio servidor");
    }
);