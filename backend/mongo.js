const MongoClient = require('mongodb').MongoClient
const url = 'mongodb+srv://user-testator:3udFupKVGN8fAX02@cluster-crud-6obm8.mongodb.net/crud?retryWrites=true&w=majority'

const createEmployee = async (req, res, next) => {
    const newEmployee = {
        name: 'Some name',
        active: true,
        department: 'HR'
    }
    const client = new MongoClient(url)

    try {
        await client.connect()
        const db = client.db()
        const result = db.collection('employees').insertOne(newEmployee)
    } catch (error) {
        return res.json({ message: 'failed db connection'})
    }

    client.close()
    res.json(newEmployee)
}

const getEmployees = async (req, res, next) => {

}

exports.createEmployee = createEmployee
exports.getEmployees = getEmployees