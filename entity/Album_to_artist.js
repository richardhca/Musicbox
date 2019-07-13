var {EntitySchema} = require("typeorm");

module.exports = new EntitySchema({
  name: "Album_to_artist",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: "increment"
    },
    album_id: {
      type: Number,
      nullable: false
    },
    artist_id: {
      type: Number,
      nullable: false
    },
  }
});
