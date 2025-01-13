// const express = require("express");
// const mongoose = require('mongoose');

// const hotelRouter = require("./routes/hotel.router");
// const hotelDataAddedToDBRouter = require("./routes/dataimport.router");
// const categoryAddedToDBRouter = require("./routes/categoryimport.router");


// const connectDB = require("./config/dbconfig");

// const app = express();

// app.use(express.json());
// connectDB();

// const PORT = 3500;

// app.get("/",(req,res) => (res.send("Hello MERN")
// ))

// app.use("/api/hoteldata", hotelDataAddedToDBRouter);
// app.use("/api/hotels",hotelRouter);    
// app.use("/api/categorydata", categoryAddedToDBRouter);

// mongoose.connection.once("open", () => {
//     console.log("Connected to DB");
//     app.listen(process.env.PORT || PORT, () => {
//       console.log("Server is Up and Running");
//     });
//   });


const express = require("express");
const mongoose = require('mongoose');

const hotelRouter = require("./routes/hotel.router");
const hotelDataAddedToDBRouter = require("./routes/dataimport.router");
const categoryAddedToDBRouter = require("./routes/categoryimport.router");

const categoryRouter = require("./routes/category.router");
const singleHotelRouter = require("./routes/singlehotel.router");
const connectDB = require("./config/dbconfig");

const app = express();

app.use(express.json());
connectDB();

const PORT = 3500;

app.get("/",(req,res) => (res.send("Hello MERN")
))

app.use("/api/hoteldata", hotelDataAddedToDBRouter);
app.use("/api/hotels",hotelRouter);
app.use("/api/categorydata", categoryAddedToDBRouter);
app.use("/api/category", categoryRouter);
app.use("/api/hotels", singleHotelRouter);
mongoose.connection.once("open", () => {
    console.log("Connected to DB");
    app.listen(process.env.PORT || PORT, () => {
      console.log("Server is Up and Running");
    });
  });