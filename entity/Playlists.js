var {EntitySchema} = require("typeorm");

module.exports = new EntitySchema({
  name: "Playlists",
  columns: {
    playlist_id: {
      type: "uuid",
      primary: true,
      generated: "uuid"
    },
    name: {
      type: "character varying",
      nullable: false
    },
    is_public: {
      type: "boolean",
      default: false
    },
    created_on: {
      type: "timestamp",
      nullable: true
    }
  },
  relations: {
    owner_id: {
      target: "Users",
      type: "many-to-one",
      joinTable: true,
      joinColumn: {name: "owner_id", referencedColumnName: "id"},
      cascade: true,
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    },
  }
});
