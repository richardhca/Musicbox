var {EntitySchema} = require("typeorm");

module.exports = new EntitySchema({
  name: "Playlists",
  columns: {
    playlist_id: {
      type: String,
      primary: true,
      generated: "uuid"
    },
    owner_id: {
      type: String,
      unique: true,
      length: 255,
      nullable: false
    },
    name: {
      type: String,
      length: 255,
      nullable: false
    },
    is_public: {
      type: Boolean,
      default: false
    },
  }
});
