var {EntitySchema} = require("typeorm");

module.exports = new EntitySchema({
  name: "Artists",
  columns: {
    artist_id: {
      type: Number,
      primary: true,
      generated: "increment"
    },
    artist_name: {
      type: String,
      length: 70,
      nullable: false
    },
    country_origin: {
      type: String,
      length: 35,
      nullable: true

    },
    established_on: {
      type: Date
    },
    disbanded_on: {
      type: Date
    },
    is_group: {
      type: Boolean,
      default: false
    },
    company: {
      type: String,
      length: 255,
      nullable: true
    },
    introduction: {
      type: String,
      length: 255,
      nullable: true
    }
  }
});
