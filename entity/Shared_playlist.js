var {EntitySchema} = require("typeorm");

module.exports = new EntitySchema({
    name: "Shared_playlist",
    columns: {
        id: {
            type: "integer",
            primary: true,
            generated: "increment"
        },
        shared_on: {
            type: "timestamp",
            nullable: false
        },
        is_accepted: {
            type: "boolean",
            default: false,
            nullable: false
        },
    },
    relations: {
        shared_with: {
            target: "Users",
            nullable: false,
            type: "many-to-one",
            joinTable: true,
            joinColumn: {name: "shared_with", referencedColumnName: "id"},
            cascade: true,
            onDelete: "CASCADE"
        },
        playlist_id: {
            target: "Playlists",
            type: "many-to-one",
            joinTable: true,
            joinColumn: {name: "playlist_id", referencedColumnName: "playlist_id"},
            inverseSide: "shared",
            onDelete: "CASCADE",
        },
    }
});
