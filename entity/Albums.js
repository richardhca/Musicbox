var {EntitySchema} = require("typeorm");

module.exports = new EntitySchema({
    name: "Albums",
    columns: {
        id: {
            type: "integer",
            primary: true,
            generated: "increment"
        },
        title: {
            type: "character varying",
            nullable: false
        },
        artist_name: {
            type: "character varying",
            length: 70,
            nullable: true
        },
        // Includes featured artists
        artists: {
            type: "simple-array",
            nullable: true
        },
        published_on: {
            type: "date",
            nullable: true
        },
        language: {
            type: "character varying",
            length: 30,
            nullable: true
        },
        genres: {
            type: "simple-array",
            nullable: true
        },
        cover: {
            type: "character varying",
            length: 4096,
            nullable: true
        },
    },
    relations: {
        owner_id: {
            target: "Users",
            nullable: false,
            type: "many-to-one",
            joinTable: true,
            joinColumn: {name: "owner_id", referencedColumnName: "id"},
            cascade: true,
            onUpdate: "CASCADE",
            onDelete: "CASCADE"
        },
    },
    uniques: [
        {
            name: "UNIQUE_ALBUM_TEST",
            columns: [
                "title",
                "artist_name",
                "owner_id",
            ]
        }
    ]
});
