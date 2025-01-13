// const express = require('express');

// const Category = require("../model/category.model.js");
// const categories = require("../data/categories.js");

// const router = express.Router();

// router.route("/")
//     .post(async (req, res) => {
//         console.log(categories);
        
//         try{
//             console.log(categories);
            
//             await Category.remove();
//             const categoriesInDB = await Category.insertMany(categories.data);
//             res.json(categoriesInDB)
//         }catch(err){
//             console.log(err);
//             res.json({ message: "Could not add categories to DB"})
//         }
//     })

// module.exports = router;

// // const express = require("express");
// // const Category = require("../model/category.model");
// // const categories = require("../data/categories");
// // const router = express.Router();

// // router.route("/")
// //     .post(async (req, res) => {
// //         try {
// //             // Optional: clear the existing hotels from the database before inserting new ones
// //             await Category.deleteMany({});  // This will remove all hotels from the collection
            
// //             // Insert the new hotels into the database
// //             const categoriesInDB = await Category.insertMany(categories.data);
            
// //             // Respond with the inserted hotels
// //             res.json(categoriesInDB);
// //         } catch (err) {
// //             console.log(err);
// //             res.json({ message: "Could not add categories to DB" });
// //         }
// //     });

// // module.exports = router;

const express = require('express');

const Category = require("../model/category.model.js");
const categories = require("../data/categories.js");

const router = express.Router();

router.route("/")
    .post(async (req, res) => {
        console.log(categories);

        try{
            console.log(categories);

            await Category.deleteMany({}); // Use deleteMany({}) to remove all documents
            const categoriesInDB = await Category.insertMany(categories.data);
            res.json(categoriesInDB)
        }catch(err){
            console.log(err);
            res.status(500).json({ message: "Could not add categories to DB", error: err.message }) // Added status code and error message
        }
    })

module.exports = router;