/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')

/* Step 1 alternative
 *
 * TODO: make a global variable to act as an in memory database. 
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 *
 */
// global.sampleModel = [];

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const UserSchema = new mongoose.Schema({
 user: {
     userName: String,
     password: String
 }
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const UserCollection = mongoose.model('User', UserSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllUsers() {
  return UserCollection.find()
}

function getUser (userId) {
  return UserCollection.findById(userId)
}

function createUser (user) {
  return UserCollection.create(user)
}

function updateUser (userId, updatedUser) {
  return UserCollection.findByIdAndUpdate(userId, updatedUser, {new:true})
}

function deleteUser (userId) {
  return UserCollection.findByIdAndDelete(userId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}
