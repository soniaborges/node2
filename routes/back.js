module.exports = function (app) {

    app.get('/back', function (req, res) {

        var connection = app.config.database();

        var query = app.models.conteudoModel;
        query.getConteudoBack(connection,
            function (error, results, fields) {
                console.log(error, results);
                res.render('back', { dados: results });
            });
    });
}