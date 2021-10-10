// 1 require express
const express = require("express");

//2 create instance
const app = express();

//5 require dotenv
require("dotenv").config();

//6connect db
const connectDB = require("./config/connectDB");
connectDB();
//middleware
app.use(express.json());
//require routes
app.use("/api/contacts", require("./Routes/contact"));

//3 Port creation
const port = process.env.PORT;

//4 server creation
app.listen(port, (error) => {
    error ? console.error(error) : console.log(`app is runnig in ${port}...`);
});
