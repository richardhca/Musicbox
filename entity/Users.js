var {EntitySchema} = require("typeorm");

module.exports = new EntitySchema({
  // "User" is taken by postgres by default, so we use "Users" instead.
  name: "Users",
  columns: {
    id: {
      type: String,
      primary: true,
      generated: "uuid"
    },
    email: {
      type: String,
      unique: true,
      length: 255,
      nullable: false,
    },
    password: {
      type: String,
      nullable: false
    },
    username: {
      type: String,
      unique: true,
      nullable: false,
      length: 35
    },
    first_name: {
      type: String,
      length: 35,
      nullable: true
    },
    last_name: {
      type: String,
      length: 35,
      nullable: true
    },
    date_of_birth: {
      type: Date,
      nullable: false
    },
    user_type: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    },
    confirmed: {
      type: Boolean,
      default: false
    },
  }
});
