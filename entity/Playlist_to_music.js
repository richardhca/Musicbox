var {EntitySchema} = require("typeorm");

module.exports = new EntitySchema({
  // "User" is taken by postgres by default, so we use "Users" instead.
  name: "Playlist_to_music",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: "increment"
    },
    playlist_id: {
      type: String,
      unique: true,
      length: 255,
      nullable: false
    },
    music_id: {
      type: Number
    },
    rank: {
      type: "double precision"
    }
  }
});
