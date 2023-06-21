const { Router } = require('express')
const { getUsers, createUser } = require('../controllers/users.controllers')

const router = Router()

router.get('/', getUsers)

router.post('/', createUser)

router.put('/', (request, response) => {
    response.send('se ha editado un usuario')
})

module.exports = { router }