const Cep = require('./cep');

const popularDb = (req, res, next) => {
    
    const parametroUrl = req.params.arquivo;

    let cidades = require('../../cepaberto/cidades');
    let estados = require('../../cepaberto/estados');

    let ceps = require('../../cepaberto/' + parametroUrl);

    for (let cep of ceps) {

        cep.cidade = cidades.find(item => item.id == cep.cidade).cidade;
        cep.uf = estados.find(item => item.id == cep.uf).estado;

        // Cadastra toda essa base no banco de dados;
        const salvaCep = new Cep(cep);
        console.log(salvaCep);
        salvaCep.save().then(() => console.log('CEP salvo.'));

    }

};

module.exports = { popularDb }