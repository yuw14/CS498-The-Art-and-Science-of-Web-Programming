const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    // await mongoose.connect(
    //   'mongodb+srv://yuw14:woshiyoucai0@yuw14devconnector.yatkr.mongodb.net/yuw14DevConnector?retryWrites=true&w=majority',
    //   { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
    // );

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.messege);
    //exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
