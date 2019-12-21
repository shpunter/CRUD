const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    active: { type: Boolean, required: true },
    department: { type: String, required: true }
})

module.exports = mongoose.model('Employee', employeeSchema)