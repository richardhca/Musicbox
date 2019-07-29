var {EntitySchema} = require("typeorm");

module.exports = new EntitySchema({
  name: "Tracks",
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
    mime_type: {
      type: "character varying",
      nullable: true // TODO: Let's confirm that MS EDGE (browser) populates this field in the uploaded file first.
    },
    published_on: {
      type: "date",
      nullable: true
    },
    language: {
      type: "character varying",
      length: 35,
      nullable: true
    },
    uploaded_on: {
      type: "timestamp",
      nullable: false
    },
    owner_id: {
      type: "character varying",
      nullable: false
    },
    is_public: {
      type: "boolean",
      default: false
    },
    genres: {
      type: "character varying",
      nullable: true
    },
    lyrics: {
      type: "character varying",
      nullable: true
    },
    file_name: {
      type: "character varying",
      length: 4096,
      nullable: false
    },
    cover_art_file_name: {
      type: "character varying",
      length: 4096,
      nullable: true
    },
  },
  relations: {
    artist_id: {
      target: "Artists",
      type: "many-to-one",
      joinTable: true,
      joinColumn: {name: "artist_id", referencedColumnName: "id"},
      cascade: true,
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    },
    album_id: {
      target: "Albums",
      type: "many-to-one",
      joinTable: true,
      joinColumn: {name: "album_id", referencedColumnName: "id"},
      cascade: true,
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    },
    owner_id: {
      target: "Users",
      type: "many-to-one",
      joinTable: true,
      joinColumn: {name: "owner_id", referencedColumnName: "id"},
      cascade: true,
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    },
  }
});
