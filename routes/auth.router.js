const express = require('express');

const singupHandler = require("../controllers/signupController");
const loginHandler = require("../controllers/loginController");

const router = express.Router();

router.route("/register")
    .post(singupHandler)

router.route("/login")
    .post(loginHandler)

module.exports = router;

// const express = require('express');
// const router = express.Router();

// const signupHandler =require("../controllers/signupController");
// const loginHandeler = require('../controllers/loginController');

// router.route("/register").post(signupHandler)
// router.route("/login")
//  .post(loginHandeler);

//  module.exports = router;
// const express = require('express');
// const { model } = require('mongoose');

// const router = express.Router();
// const User = require("../model/user.model");

// //router.route("/login")//localhost:3500/api/auth/register

// router.route("/register")
//     .post(async (req,res) => {
//         try{
//             const userUser = new User ( {
//                 username: req.body.username,
//                 number: req.body.number,
//                 email: req.body.email,
//                 password: req.body.password


//             });
//             const savedUser = await newUser.save();
//             res.status(201).json(savedUser)

            

//         }catch(err)
//         {
//             res.status(500).json({ message: "Error creating a user"})
//         }
//     })

//     module.exports = router;



// (async (req, res) => {
//   try {
//     const newUser = new User({
//       username: req.body.username,
//       number: req.body.number,
//       email: req.body.email,
//       password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET_KEY).toString(),
//     });
//     const savedUser = await newUser.save(); // Corrected variable name
//     res.status(201).json(savedUser);
//   } catch (err) {
//     console.error("Error creating user:", err); // Log error details
//     res.status(500).json({ message: "Error creating a user" });
//   }
// });



// (async (req,res) => {
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
// })


