module.exports.init = function (applicantion, req, res) {
    var dados = req.body;
    req.assert('apelido', 'Nome do usuario é obrigatorio.').notEmpty();
    req.assert('apelido', 'Nome do usuario deve conter 3 a 15 caracteres.').len(3, 15);

    var erros = req.validationErrors();

    if (erros) {
        res.render('', { erros: erros });
        return;
    }

    applicantion.get('io').emit(
        'sendMsg',
        { apelido: dados.apelido, mensagem: 'Acabou de entrar no chat.' });

    res.render('chat', { dados: dados });

}
