// const mongoose = require('mongoose')

// if (process.argv.length < 3) {
//   console.log('give password as argument')
//   process.exit(1)
// }

// const password = process.argv[2]
// const enteredName = process.argv[3]
// const enteredNumber = process.argv[4]
// const url = `mongodb+srv://faizal:${password}@cluster0.ku0ss33.mongodb.net/phoneBookApp?retryWrites=true&w=majority`

// mongoose.set('strictQuery', false)
// mongoose.connect(url)

// const personSchema = new mongoose.Schema({
//   name: String,
//   number: Number,
// })

// const Person = mongoose.model('Person', personSchema)


// // -----------> To Save the Data to the mongoDB
// // const person = new Person({
// //     name: enteredName, 
// //     number: enteredNumber,
// // })

// // person.save().then(result => {
// //   console.log(`Added ${enteredName} Number ${enteredNumber} to Phonebook`)
// //   mongoose.connection.close()
// // })

// //------------> To fetch the Date from the mongoDB
// Person.find({}).then(result => {
//   result.forEach(person => {
//     console.log(person)
//   })
//   mongoose.connection.close()
// })