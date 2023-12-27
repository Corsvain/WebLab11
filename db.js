const { Schema, model } = require('mongoose')

const schema = new Schema({
  name: String,
  phone: String
})

module.exports = model('user', schema)