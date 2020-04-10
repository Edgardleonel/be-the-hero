const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação do back-end
 * PUT: Alterar uma informação do back-end
 * DELETE: Deletar uma informação do back-end
 */

 /**
  * Tipos de parâmetros: 
  * 
  * Query: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) Exemplo: http://localhost:3333/users?name=Edgard&idade=41
  * Route Params: Parâmetros utilizados para identificar recursos Exemplo: app.get('/users/:id', ...)
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
  */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() - Instalar knex: npm install knex | npm install sqlite3(banco utilizado) 
 * npx knex init (ambiente de desenvolvimento do banco)
 */
