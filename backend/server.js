// const dbConnect = require('./db/dbConnect');

// dbConnect();
require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./db/dbConnect');

// Connect to MongoDB
connectDB();

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});
