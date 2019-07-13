const typeorm = require('typeorm');

const createConnection = async function () {
  await typeorm.createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "test-db",
    synchronize: true,
    logging: false,
    entities: [
      require("./entity/Post"),
      require("./entity/Users"),
    ]
  }).then(async function (connection) {
    const db = connection.options.database;
    const host = connection.options.host;
    const port = connection.options.port;
    console.log(`Successfully connected to database "${db}" in ${host} on port ${port}.`);
  }).catch(function (error) {
    console.log("Error: ", error);
  });
};

createConnection();
