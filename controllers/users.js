const { response } = require('express');


const usersGet = (req, res = response) => {

    const { q, nombre = 'no name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get Api - Controlladors',
        q,
        nombre,
        apikey,
        page,
        limit,
    });
}

const usersPost = (req, res = response) => {

    const { nombre, edad } = req.body; // lo que se que envie en el body se va a reflejar 

    res.status(200).json({
        msg: 'POST Api - Controlladors',
        nombre, // aqui se va a reflejar
        edad,  //y si me envia por la url el apelllido o direccion no me va recibir xq estoy mencionando que solo recibire el nombre y la edad

    });
}


// Actualiza
const usersPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'PUT Api - Controlladors',
        id
    });
}
const usersDelete = (req, res = response) => {
    res.json({
        msg: 'DELETE Api - Controlladors'
    });
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
}