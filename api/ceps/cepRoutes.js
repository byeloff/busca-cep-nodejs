module.exports = (router, querys) => {
    router.get('/bucar-cep/:cep', querys.buscarPorCep);
}