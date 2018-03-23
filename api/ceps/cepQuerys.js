const Cep = require('./cep');

const buscarPorCep = (req, res, next) => {
    const parametroUrl = req.params.cep;

    Cep.find({ 'cep': parametroUrl }, (err, cep) => {
        if (err) {
            return handleError(err);
        } else {
            res.json(cep);
        }
    });
};

module.exports = { buscarPorCep }