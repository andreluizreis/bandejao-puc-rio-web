/** ******************************************
 *                  user.js
 *
 *   Author: André Reis
 *   Description: User Model for MongoBD
 *********************************************/

/** ******************************************
 *                  Imports
 *********************************************/

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

/** ******************************************
 *                User Schema
 *********************************************/

// define the schema for user model
const userSchema = mongoose.schema({
  local: {
    username: String,
    email: String,
    password: String,
  },
});

/** ******************************************
 *                  Methods
 *********************************************/

/**
 * Generating a hash
 *
 * @param {String} password - Password data.
 * @returns {String} Password hash.
 */
userSchema.methods.generateHash = function generateHash(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

/**
 * Checking if password is valid.
 *
 * @param {String} password - Data to be compared
 * @returns {Boolean} Compared password.
 */
userSchema.methods.validPassword = function validPassword(password) {
  return bcrypt.compareSync(password, this.local.password);
};

/** ******************************************
 *                  Exports
 *********************************************/

/**
 * Create the model for users
 */
module.exports = mongoose.model('User', userSchema);


