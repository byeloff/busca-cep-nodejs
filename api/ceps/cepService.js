const Cep = require('./cep')

// Cria REST API, add CRUD
Cep.methods(['get', 'post', 'put', 'delete'])

// Retorna post e put
Cep.updateOptions({ new: true, runValidators: true })

module.exports = Cep