var {EntitySchema} = require("typeorm");

module.exports = new EntitySchema({
  name: "Album_to_artist",
  columns: {
    id: {
      type: "integer",
      primary: true,
      generated: "increment"
    },
    album_id: {
      type: "integer",
      nullable: false
    },
    artist_id: {
      type: "integer",
      nullable: false
    },
  }
});
