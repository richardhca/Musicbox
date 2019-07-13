var {EntitySchema} = require("typeorm");

module.exports = new EntitySchema({
  name: "Albums",
  columns: {
    album_id: {
      type: Number,
      primary: true,
      generated: "increment"
    },
    title: {
      type: String,
      length: 255,
      nullable: false
    },
    published_on: {
      type: Date,
      nullable: true
    },
    language: {
      type: String,
      length: 30,
      nullable: true
    },
    genres: {
      type: String,
      nullable: true
    },
    cover: {
      type: String,
      length: 255,
      nullable: true
    },
  }
});
