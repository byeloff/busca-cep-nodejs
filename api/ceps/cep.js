const restful = require('node-restful')
const mongoose = restful.mongoose

const cepSchema = new mongoose.Schema({
    cep: { type: String, required: true },
    logradouro: { type: String, required: true },
    bairro: { type: String, required: false },
    cidade: { type: String, required: false },
    uf: { type: String, required: true }
})

module.exports = restful.model('Cep', cepSchema)