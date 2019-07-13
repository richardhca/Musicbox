var {EntitySchema} = require("typeorm");

module.exports = new EntitySchema({
  name: "Musics",
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
    artist_id: {
      type: "integer",
      nullable: false
    },
    album_id: {
      type: "integer",
      nullable: false
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
    file_location: {
      type: "character varying",
      length: 4096,
      nullable: false
    },
  }
});
