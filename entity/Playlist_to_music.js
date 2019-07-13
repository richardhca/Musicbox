var {EntitySchema} = require("typeorm");

module.exports = new EntitySchema({
  // "User" is taken by postgres by default, so we use "Users" instead.
  name: "Playlist_to_music",
  columns: {
    id: {
      type: "integer",
      primary: true,
      generated: "increment"
    },
    playlist_id: {
      type: "character varying",
      nullable: false
    },
    music_id: {
      type: "integer"
    },
    rank: {
      type: "double precision"
    }
  }
});
