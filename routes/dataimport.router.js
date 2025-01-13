const express = require('express');

const Category = require("../model/category.model");
const categories = require("../data/categories");

const router = express.Router();

router.route("/")
    .post(async (req, res) => {
        try {
            // Replace remove() with deleteMany to clear the collection
            await Category.deleteMany({}); // Clears all documents in the Category collection
            
            // Insert the new category data
            const categoriesInDB = await Category.insertMany(categories.data);
            
            // Respond with the inserted data
            res.json(categoriesInDB);
        } catch (err) {
            console.error("Error:", err);
            res.status(500).json({ message: "Could not add categories to DB" });
        }
    });

module.exports = router;


// const express = require("express");
// const Hotel = require("../model/hotel.model");
// const hotels = require("../data/hotels");
// const router = express.Router();

// router.route("/")
//     .post(async (req, res) => {
//         try {
//             // Optional: clear the existing hotels from the database before inserting new ones
//             await Hotel.deleteMany({});  // This will remove all hotels from the collection
            
//             // Insert the new hotels into the database
//             const hotelsInDB = await Hotel.insertMany(hotels.data);
            
//             // Respond with the inserted hotels
//             res.json(hotelsInDB);
//         } catch (err) {
//             console.log(err);
//             res.json({ message: "Could not add to DB" });
//         }
//     });

// module.exports = router;


// const express = require("express");




// const Hotel = require("../model/hotel.model");

// const hotels = require("../data/hotels");
// const router = express.Router();

// router.route("/")
//     .post(async (req,res) => {
//         try{
//             await Hotel.removeAllListeners();
//             const hotelsInDB = await hotels.insertMany(hotels.data);
//             res.json(hotelsInDB)
//         }catch(err){
//             console.log(err);
//             res.json({ message: "could not add to DB"})
//         }

//     })

//     module.exports = router;