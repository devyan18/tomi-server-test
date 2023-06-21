const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
require('./models/users.model')

const { sequelize } = require('./database')

// creacion de un middleware personalizado


// para emular variables de entorno

const { router } = require('./routes/users.routes')
const { environments } = require('./environments')

const app = express()

app.use((request, response, next) => {
    console.log(request.headers)

    const { mivalidacion } = request.headers

    try {
        if (!mivalidacion) {
            return response.status(400).send('No tienes permisos')
        }
    
        next()
    } catch (error) {
        console.log(error)
        response.status(500).json({
            message: 'Hubo un error al crear el usuario'
        })
    }
})


// middleware (funciones que se ejecutan antes de las rutas)
app.use(express.json()) // interpreta el cuerpo de la peticion como json
app.use(morgan('dev')) // muestra por consola las peticiones que se hacen al servidor
app.use(cors()) // permite que el servidor reciba peticiones de otros dominios
app.use(helmet()) // protege al servidor de ataques

app.use('/users', router)

app.listen(environments.PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log('server start on port ' + process.env.PORT + '...')
})