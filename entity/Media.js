var {EntitySchema} = require("typeorm");

module.exports = new EntitySchema({
  // "User" is taken by postgres by default, so we use "Users" instead.
  name: "Media",
  columns: {
    id: {
      type: String,
      primary: true
    },
    title: {
      type: String,
      nullable: false,
      length: 255
    },
    slug: {
      type: String,
      nullable: false
    },
    upload_date: {
      type: Date,
      nullable: false
    }
    // uploader: {
    //
    // }
  }
});
