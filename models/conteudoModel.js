module.exports = function() {

    this.getConteudo = function(connection, callback){
        connection.query("SELECT * FROM conteudo", callback);
    }
    this.getConteudoFront = function(connection, callback){
        connection.query("SELECT * FROM conteudo WHERE categoria = 'front'", callback);
    }
    this.getConteudoBack = function(connection, callback){
        connection.query("SELECT * FROM conteudo WHERE categoria = 'back'", callback);
    }

    this.salvarConteudo = function(conteudo, connection, callback){
        connection.query("INSERT INTO conteudo SET ?", conteudo);
    }

    return this;
}