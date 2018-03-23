const express     = require('express')
const cepQuerys   = require('../api/ceps/cepQuerys')
const cepPopulaDb = require('../api/ceps/cepPopulaDb')

module.exports = function(server) {

    const router = express.Router()
    server.use('/api', router)

    const cepService = require('../api/ceps/cepService')
    cepService.register(router, '/cep')

    // Rota para busca;
    router.get('/buscar-cep/:cep', cepQuerys.buscarPorCep)

    // Rota para popular o db;
    router.get('/popular-db/:arquivo', cepPopulaDb.popularDb)

}