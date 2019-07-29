var {EntitySchema} = require("typeorm");

module.exports = new EntitySchema({
  name: "Playlist_to_track",
  columns: {
    id: {
      type: "integer",
      primary: true,
      generated: "increment"
    },
    rank: {
      type: "double precision",
      nullable: false
    }
  },
  relations: {
    playlist_id: {
      target: "Playlists",
      type: "many-to-one",
      joinTable: true,
      joinColumn: {name: "playlist_id", referencedColumnName: "playlist_id"},
      cascade: true
    },
    track_id: {
      target: "Tracks",
      type: "many-to-one",
      joinTable: true,
      joinColumn: {name: "track_id", referencedColumnName: "id"},
      cascade: true
    },
  }
});
