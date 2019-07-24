const typeorm = require('typeorm');

const createConnection = async function () {
  await typeorm.createConnection({
    type: "postgres",
    host: "db",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "musicbox-db",
    synchronize: true,
    logging: false,
    entities: [
      require("./entity/Users"),
      require("./entity/Albums"),
      require("./entity/Artists"),
      require("./entity/Musics"),
      require("./entity/Playlists"),
      require("./entity/Playlist_to_music"),

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