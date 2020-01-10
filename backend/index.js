const express = require('express')
const bodyParser = require('body-parser')
const employeeRoutes = require('./routes/employees')
const app = express()
const mongoose = require('mongoose')

const url = 'mongodb+srv://user-testator:3udFupKVGN8fAX02@cluster-crud-6obm8.mongodb.net/crud?retryWrites=true&w=majority'

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, DELETE, PATCH')
    next()
})

app.use('/employees', employeeRoutes)

app.use('/', (req, res, next) => {
    res.status(404).send({ message: 'Page note found'})
})

app.use((error, req, res, next) => {
    res.status(error.code || 500).json({ message: error.message })
})

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => { app.listen(5000) })
    .catch(() => next(new HttpError(`Can not connect to db`, 500)))