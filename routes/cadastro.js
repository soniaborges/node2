module.exports = function (app) {

    app.get('/cadastro', function (req, res) {
        res.render('cadastro');
    });

    app.post('/cadastro/salvar', function (req, res) {
        var conteudo = req.body;
        console.log(conteudo);
        var connection = app.config.database();
        var conteudoModel = app.models.conteudoModel;

        conteudoModel.salvarConteudo(conteudo, connection, function (error, results) {

        });

        conteudoModel.getConteudo(connection,
            function (error, results, fields) {
                console.log(error, results)
                res.render('index', { dados: results });
            });
    });
}