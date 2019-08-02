var {EntitySchema} = require("typeorm");

module.exports = new EntitySchema({
  name: "Playlists",
  columns: {
    playlist_id: {
      type: "uuid",
      primary: true,
      generated: "uuid"
    },
    title: {
      type: "character varying",
      length: 70,
      nullable: false
    },
    is_public: {
      type: "boolean",
      default: false
    },
    created_on: {
      type: "timestamp",
      nullable: false
    }
  },
  relations: {
    owner_id: {
      target: "Users",
      nullable: false,
      type: "many-to-one",
      joinTable: true,
      joinColumn: {name: "owner_id", referencedColumnName: "id"},
      cascade: true,
      onDelete: "SET NULL"
    },
    shared: {
      target: "Shared_playlist",
      type: "one-to-many",
      joinTable: true,
      joinColumn: {name: "shared", referencedColumnName: "id"},
      inverseSide: "playlist_id",
      cascade: true,
      onDelete: "SET NULL"
    },
    playlist_tracks: {
      target: "Playlist_to_track",
      type: "one-to-many",
      joinTable: true,
      joinColumn: {name: "playlist_tracks", referencedColumnName: "id"},
      inverseSide: "playlist_id",
      cascade: true,
      onDelete: "SET NULL"
    },
  }
});
