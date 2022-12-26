const mongoose = require('mongoose')

const connectdb = async () => {
  try {
    await mongoose.connect('mongodb+srv://sabrydb:WBZZoQwgN5JeRAdt@cluster0.zvwmrku.mongodb.net/?retryWrites=true&w=majority')
    console.log('you are connected to the db ')
  } catch (err) {
    console.log(err)
  }
}

module.exports = connectdb
