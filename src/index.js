const express = require('express');
const app = express();

//Middlewares, son funciones que se ejecutan antes de las rutas
//Para que se acepten ficheros en json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Rutas
app.use(require('./routes/index'));

app.listen(4000);
console.log('Servidor escuchando por el puerto 4000');