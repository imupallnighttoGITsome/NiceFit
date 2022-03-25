const mongoose = require("mongoose");

// const mongoURI =
//   process.env.NODE_ENV === "production"
//     ? process.env.DB_URL
//     : `mongodb://localhost:27017/nicefit`;

const connectDB = async () =>  {
  try {
    const conn =  await mongoose.connect(process.env.MONGO_URI)
    console.log(`mongodb connected: ${conn.connection.host.magenta.underline}`)
  }
  // .connect(mongoURI, {
  //   useNewUrlParser: true,
  //   useCreateIndex: true,
  //   useUnifiedTopology: true,
  //   useFindAndModify: false,
  // })
  // .then((instance) =>
  //   console.log(`connected to db: ${instance.connections[0].name}`.cyan.underline)
  // )
  catch (error) {
    console.log(`connection to db failed due to: ${error}`);
    process.exit(1)
}

}
module.exports = connectDB
