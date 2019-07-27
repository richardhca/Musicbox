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
            length: 70,
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
        // TODO: Figure out how to handle this field if time permits
        published_on: {
            type: "date",
            nullable: true
        },
        uploaded_on: {
            type: "timestamp",
            nullable: false
        },
        cover_art_file_name: {
            type: "character varying",
            length: 4096,
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
    },
    relations: {
        owner_id: {
            target: "Users",
            nullable: false,
            type: "many-to-one",
            joinTable: true,
            joinColumn: {name: "owner_id", referencedColumnName: "id"},
            cascade: true,
            onDelete: "CASCADE"
        },
        tracks: {
            target: "Tracks",
            nullable: false,
            type: "one-to-many",
            joinTable: true,
            joinColumn: {name: "tracks", referencedColumnName: "id"},
            inverseSide: "album_id",
            cascade: true,
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
