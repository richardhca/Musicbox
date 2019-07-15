var {EntitySchema} = require("typeorm");

module.exports = new EntitySchema({
  name: "Albums",
  columns: {
    album_id: {
      type: "integer",
      primary: true,
      generated: "increment"
    },
    title: {
      type: "character varying",
      nullable: false
    },
    published_on: {
      type: "date",
      nullable: true
    },
    language: {
      type: "character varying",
      length: 30,
      nullable: true
    },
    genres: {
      type: "character varying",
      nullable: true
    },
    cover: {
      type: "character varying",
      length: 4096,
      nullable: true
    },
  },
  relations: {
  	album_to_artist: {
  		target: "Artists",
  		type: "many-to-many",
  		joinTable: {name: "album_to_artist", joinColumn: {name: "album_id", referencedColumnName: "album_id"}, inverseJoinColumn: {name: "artist_id", referencedColumnName: "artist_id"}}
  	},
  }
});
