module.exports = function (app) {

    app.get('/front', function (req, res) {

        var connection = app.config.database();

        var query = app.models.conteudoModel;
        query.getConteudoFront(connection,
            function (error, results, fields) {
                console.log(error, results);
                res.render('front', { dados: results });
            });
    });
}