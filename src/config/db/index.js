const mongoose = require('mongoose');
const connect = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.DATABASE_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    console.log('Connect DB successfully');
  } catch (err) {
    console.log('Connect fail', err.message);
  }
}

module.exports = { connect };