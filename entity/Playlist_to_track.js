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
      inverseSide: "playlist_tracks",
      onDelete: "CASCADE",
    },
    track_id: {
      target: "Tracks",
      type: "many-to-one",
      eager: true,
      joinTable: true,
      joinColumn: {name: "track_id", referencedColumnName: "id"},
      onDelete: "CASCADE",
      cascade: true
    },
  }
});
