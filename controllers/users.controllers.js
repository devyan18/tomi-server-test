const { UserModel } = require('../models/users.model') 

const getUsers = async (_request, response) => {
    try {
        const usuarios = await UserModel.findAll()

        response.status(200).json(usuarios)
    } catch (error) {
        console.log(error)
        response.status(500).json({
            message: 'Hubo un error al crear el usuario'
        })
    }
}

const createUser = async (request, response) => {
    try {
        const { username, password } = request.body

        const usuarioCreado = await UserModel.create({
            username,
            password
        })

        response.status(201).json(usuarioCreado)
    } catch (error) {
        console.log(error)
        response.status(500).json({
            message: 'Hubo un error al crear el usuario'
        })
    }
}

module.exports = { getUsers, createUser }
