var {Album} = require("./Albums");
var {Artist} = require("./Artists");
var {EntitySchema} = require("typeorm");
var {TableForeignKey} = require("typeorm");
var {createForeignKey} = require("typeorm");

module.exports = new EntitySchema({
  name: "Album_to_artist",
  columns: {
    id: {
      type: "integer",
      primary: true,
      generated: "increment"
    },
  },
  relations: {
    album_id: {
      target: "Albums",
      type: "many-to-one",
      joinTable: "albums",
      joinColumn: {name: "album_id", referencedColumnName: "album_id"},
      cascade: true
    },
    artist_id: {
      target: "Artists",
      type: "many-to-one",
      joinTable: "artists",
      joinColumn: {name: "artist_id", referencedColumnName: "artist_id"},
      cascade: true
    },
  },
});
