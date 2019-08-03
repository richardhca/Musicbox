const typeorm = require('typeorm');

const createConnection = async function () {
    await typeorm.createConnection({
        type: "postgres",
        host: process.env.DOCKER_DB_HOST || "localhost",
        port: 5432,
        username: "postgres",
        password: "password",
        database: "musicbox-db",
        synchronize: true,
        logging: false,
        entities: [
            require("../entity/Users"),
            require("../entity/Albums"),
            require("../entity/Tracks"),
            require("../entity/Playlists"),
            require("../entity/Shared_playlist"),
            require("../entity/Playlist_to_track"),

        ]
    }).then(async function (connection) {
        const db = connection.options.database;
        const host = connection.options.host;
        const port = connection.options.port;
        console.log(`Successfully connected to database "${db}" in "${host}" on port ${port}.`);
    }).catch(function (error) {
        console.log("Error: ", error);
    });
};

createConnection();
