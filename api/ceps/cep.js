const restful = require('node-restful')
const mongoose = restful.mongoose

const cepSchema = new mongoose.Schema({
    cep: { type: String, required: true },
    logradouro: { type: String, required: true },
    bairro: { type: String, required: true },
    cidade: { type: String, required: true },
    uf: { type: String, required: true }
})

module.exports = restful.model('Cep', cepSchema)