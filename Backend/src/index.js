const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
/*
    Rotas e recursos: Verbos GET, POST, PUT e DELETE.
    Paramentros: tipos
        Query, nomeados e enviados  com ? e &
        Route Params, Utilizado para identifica o recurso
        Request body: Corpo da requisição
        Banco: SQLite (Knext.js)
            Entidades: Ong, Caso
            Funcionalidades: Login, Logout, Cadastro Ong, Cadastror novo caso, Deletar Caso, Listar Casos da Ong, LIstar todos Casos, Contato com Ong.
*/
app.listen(3333);