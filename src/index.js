import express from 'express';
import connectDataBase from './database/db.js';
import routes from './controllers/routes.js'


const app = express();
const port = 3001

app.use(express.json());
app.use(routes)

connectDataBase()
    .then(() => {
        app.listen(port, () => console.log(`Servidor rodando na porta (http://localhost:${port}). Banco de dados conectado!`));
    }) //Mensagem de sucesso na conexão (lembrar de colocar a senha que foi definida na criação do cluster)
    .catch((error) => console.log(error)); //Mensagem de erro caso não conecte no banco de dados


