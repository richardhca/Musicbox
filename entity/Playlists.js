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

    /* Use it later, since frontend issue
    is_public: {
      type: "boolean",
      default: false
    },
    */

    created_on: {
      type: "timestamp",
      nullable: false
    }

    //enable/disable comments function
    /* Use it later, since frontend issue
    enable_comments: {
      type: "boolean",
      nullable: false
    }
    */
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
    playlist_tracks: {
      target: "Playlist_to_track",
      type: "one-to-many",
      joinTable: true,
      joinColumn: {name: "playlist_tracks", referencedColumnName: "id"},
      inverseSide: "playlist_id",
      cascade: true,
      onDelete: "SET NULL"
    },

    comments: {
      target: "Comments",
      nullable: true,
      type: "one-to-many",
      joinTable: true,
      joinColumn: {name: "comments", referencedColumnName: "id"},
      cascade: true,
      onDelete: "SET NULL",
      inverseSide: "playlist_id"
    
    }
  }
});
