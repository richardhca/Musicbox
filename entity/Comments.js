var {EntitySchema} = require("typeorm");

module.exports = new EntitySchema({
    name: "Comments",
    columns: {
        id: {
            type: "integer",
            primary: true,
            generated: "increment"
        },

        created_on: {
            type: "timestamp",
            nullable: false
        },

        content: {
            type: "text",
            nullable: false
        }
    },

    relations: {
        owner_id: {
            target: "Users",
            nullable: false,
            type: "many-to-one",
            joinTable: true,
            joinColumn: {name: "owner_id", referencedColumnName: "id"},
            cascade: true,
            onDelete: "CASCADE",
          },

          playlist_id: {
            target: "Playlists",
            nullable: false,
            type: "many-to-one",
            joinTable: true,
            joinColumn: {name: "playlist_id", referencedColumnName: "playlist_id"},
            cascade: false,
            onDelete: "CASCADE",
            inverseSide: "comments"
          },
    }
});