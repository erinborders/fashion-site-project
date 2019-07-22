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
const LocationSchema = new mongoose.Schema({
  neighborhood: String,
  address: String
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const LocationCollection = mongoose.model('Location', LocationSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllLocations() {
  return LocationCollection.find()
}

function getLocation (locationId) {
  return LocationCollection.findById(locationId)
}

function createLocation (location) {
  return LocationCollection.create(location)
}

function updateLocation (locationId, updatedLocation) {
  return LocationCollection.findByIdAndUpdate(locationId, updatedLocation, {new:true})
}

function deleteLocation (locationId) {
  return LocationCollection.findByIdAndDelete(locationId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllLocations,
  getLocation,
  createLocation,
  updateLocation,
  deleteLocation
}
