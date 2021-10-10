//require mongoose
const mongoose = require("mongoose");

//connect db
const connection = async () => {
    try {
        await mongoose.connect(process.env.URI);
        console.log('DataBase conected')
    } catch (error) {
        console.log('Can not connect to DataBase',error)
    }
};
module.exports=connection
