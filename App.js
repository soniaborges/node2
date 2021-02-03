var app = require('./config/server');
const port = 3100;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});