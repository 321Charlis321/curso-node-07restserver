const express = require('express');
var cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usersPath = '/api/users';

        //Mildewares
        this.middlewares();


        // Rutas
        this.routes();

    }

    middlewares() {

        //CORS
        this.app.use(cors());

        // lecturay parseo del Body
        this.app.use(express.json());   //Para mandar la informacion de los campos


        // Direcvtorio Publico
        this.app.use(express.static('public'))   //la palabra use significa que es un middleware

    }

    routes() {
        this.app.use(this.usersPath, require('../routes/users'));
    }

    listen() {

        this.app.listen(this.port, () => {
            console.log('Corriendo ene l puerto', this.port);
        });
    }

}

module.exports = Server;
