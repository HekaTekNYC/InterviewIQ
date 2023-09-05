const mongoose = require('mongoose');

const connectDB = async () => {
  console.log('hello im working');
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    });
    console.log('Successfully connected to MongoDB Atlas!');
  } catch (error) {
    console.error('Unable to connect to MongoDB Atlas!', error);
  }
};

module.exports = connectDB;
