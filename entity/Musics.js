var {EntitySchema} = require("typeorm");

module.exports = new EntitySchema({
  name: "Musics",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: "increment"
    },
    title: {
      type: String,
      unique: true,
      length: 255,
      nullable: false
    },
    artist_id: {
      type: Number
    },
    album_id: {
      type: Number
    },
    published_on: {
      type: Date
    },
    language: {
      type: String,
      length: 35,
      nullable: true
    },
    uploaded_on: {
      type: Date,
      nullable: false
    },
    owner_id: {
      type: String,
      nullable: false
    },
    is_public: {
      type: Boolean,
      default: false
    },
    genres: {
      type: String,
      nullable: true
    },
    lyrics: {
      type: String,
      nullable: true
    },
  }
});
