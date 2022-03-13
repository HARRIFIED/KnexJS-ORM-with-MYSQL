const mysql = require("mysql");

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      filename: './data/data.mysql'
    }
  },
};
