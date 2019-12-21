const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    name: { type: String, required: true },
    active: { type: Boolean, required: true },
    department: { type: String, required: true }
})

module.exports = mongoose.model('Employee', employeeSchema)