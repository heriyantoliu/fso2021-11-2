/* eslint-disable no-undef */
const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log(
    'Please provide the password as an argument: node mongo.js <password>'
  )

  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb://heriyanto:${password}@cluster0-shard-00-00.h84kf.mongodb.net:27017,cluster0-shard-00-01.h84kf.mongodb.net:27017,cluster0-shard-00-02.h84kf.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`

mongoose
  .connect(url)
  .then(() => console.log('Connected'))
  .catch((error) => console.log(error))

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (name) {
  const person = new Person({
    name,
    number,
  })

  person.save().then(() => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
} else {
  Person.find({}).then((persons) => {
    persons.forEach((person) => {
      console.log(person)
    })
    mongoose.connection.close()
  })
}
