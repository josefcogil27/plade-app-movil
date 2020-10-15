let knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'plade_app_movil'
    }
});

module.exports = knex;