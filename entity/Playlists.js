var {EntitySchema} = require("typeorm");

module.exports = new EntitySchema({
  name: "Playlists",
  columns: {
    playlist_id: {
      type: "character varying",
      primary: true,
      generated: "uuid"
    },
    owner_id: {
      type: "character varying",
      nullable: false
    },
    name: {
      type: "character varying",
      nullable: false
    },
    is_public: {
      type: "boolean",
      default: false
    },
  }
});
