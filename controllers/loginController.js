const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const User = require("../model/user.model");

const loginHandler = async (req, res) => {
  try {
    // Check if user exists
    const user = await User.findOne({ number: req.body.number });
    if (!user) {
      return res.status(401).json({ message: "Incorrect Mobile Number" });
    }

    // Decrypt the stored password
    const decodedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET_KEY
    ).toString(CryptoJS.enc.Utf8);

    // Validate the password
    if (decodedPassword !== req.body.password) {
      return res.status(401).json({ message: "Incorrect Password" });
    }

    // Generate a JWT token
    const { password, ...rest } = user._doc; // Exclude password from the response
    const accessToken = jwt.sign(
      { username: user.username },
      process.env.ACCESS_TOKEN_SECRET, // Ensure this is set correctly in your .env file
      { expiresIn: "1h" } // Optional: Token expires in 1 hour
    );

    // Send the response with user details and token
    return res.json({ ...rest, accessToken });
  } catch (err) {
    console.error("Error in loginHandler:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = loginHandler;


// const CryptoJS = require('crypto-js');
// const jwt = require('jsonwebtoken');

// const User = require("../model/user.model");

// const loginHandler = async (req, res) => {
//     try{
//         const user = await User.findOne({ number: req.body.number });
//         !user && res.status(401).json({ message: "Incorrect Mobile Number" });

//         const decodedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8);
//         decodedPassword !== req.body.password && res.status(401).json({ message: "Incorrect Password"});

//         const { password, ...rest } = user._doc;
//         const accessToken = jwt.sign( {username: user.username}, process.env.ACCESS_TOKEN )

//         res.json({...rest, accessToken});

//     }catch(err){
//         console.log(err)
//     }
// }

// module.exports = loginHandler;


// const CryptoJS = require("crypto-js");
// const jwt = require('jsonwebtoken');
// const User = require("../model/user.model");
// const loginHandeler = async (req,res) => {
//     try{
//         const user = await User.findOne({number: req.body.number});
//         !user && res.status(401).json({message:"Incorrect Mobile Number"});

//         const decodedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8)
//         console.log(decodedPassword);

//         decodedPassword !== req.body.password && res.status(401).json({ message:"Incorrect password"});
//         const{ password, ...rest } = user._doc;
//         const accessToken = jwt.sign({username: user.username}, process.env.ACCESS_TOKEN )

//         res.json({...rest, accessToken});
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// module.exports = loginHandeler;