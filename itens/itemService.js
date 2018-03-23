const Item = require('./item')

// Cria REST API, add CRUD
Item.methods(['get', 'post', 'put', 'delete'])

// Retorna post e put
Item.updateOptions({new: true, runValidators: true})

module.exports = Item