var {EntitySchema} = require("typeorm");

module.exports = new EntitySchema({
  name: "Artists",
  columns: {
    id: {
      type: "integer",
      primary: true,
      generated: "increment"
    },
    artist_name: {
      type: "character varying",
      length: 70,
      nullable: false
    },
    country_of_origin: {
      type: "character varying",
      length: 35,
      nullable: true
    },
    established_on: {
      type: "date",
      nullable: true
    },
    disbanded_on: {
      type: "date",
      nullable: true
    },
    is_group: {
      type: "boolean",
      default: false
    },
    company: {
      type: "character varying",
      nullable: true
    },
    introduction: {
      type: "character varying",
      nullable: true
    }
  }
});