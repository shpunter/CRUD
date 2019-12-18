const express = require('express')
const bodyParser = require('body-parser')

const employeeRoutes = require('./routes/employees')
const app = express()

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
app.listen(5000)