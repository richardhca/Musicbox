const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "cannot be blank."],
    match: [/\S+@\S+\.\S+/, 'is invalid.'],
    index: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "cannot be blank."],
    match: [/^[a-zA-Z0-9]+$/, 'is invalid.'],
    index: true,
    trim: true
  },
  first_name: {type: String, lowercase: true, min: 3, max: 35, trim: true},
  last_name: {type: String, lowercase: true, min: 3, max: 35, trim: true},
  date_of_birth: {type: Date, required: true},
  user_type: {type: String, enumValues: ['user', 'admin'], default: 'user'},
  confirmed: {type: Boolean, default: false},
}, {timestamps: true});

// Encrypt password before storing it in our database.
userSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      next(err);
    } else {
      user.password = hash;
      next();
    }
  });
});

userSchema.statics.authenticate = function (username, password, callback) {
  var query = {};
  // If user use email address to login
  if (username.includes('@')) {
    query = {email: username};
  } else {
    query = {username: username};
  }
  User.findOne(query)
    .exec(function (error, user) {
      var errors = [{msg: 'Incorrect username or password.'}];
      if (error) {
        console.log(error);
        return callback(errors);
      } else if (!user) {
        return callback(errors);
      }
      bcrypt.compare(password, user.password, function (error, result) {
        if (result === true) {
          return callback(null, user);
        } else {
          return callback(errors, null);
        }
      })
    });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
