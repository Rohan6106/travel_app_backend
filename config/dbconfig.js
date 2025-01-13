const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from the .env file
dotenv.config();

const connectDB = async () => {
    try {
        // Attempt to connect to MongoDB without the deprecated options
        await mongoose.connect(process.env.DATABASE_URI);
        console.log('Database connected successfully');
    } catch (err) {
        console.error('Database connection error:', err);
        process.exit(1); // Optional: Exit the process if connection fails
    }
};

module.exports = connectDB;


// const mongoose = require('mongoose');
// const dotenv = require('dotenv');


// const connectDB = async () => {
//     try{
//         await mongoose.connect(process.env.DATABASE_URI, {
//             useUnifiedTopology: true,
//             useNewUrlParser: true
//         })
//     }catch(err){
//         console.log(err)
//     }
// }

// module.exports = connectDB;