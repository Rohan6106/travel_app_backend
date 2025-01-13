const express = require("express");
const router = express.Router();
const Hotel = require("../model/hotel.model");

router
  .route("/") // localhost:3500/api/hotels?category=National+park
  .get(async (req, res) => {
    const hotelCategory = req.query.category; // Correct query parameter name casing
    try {
      let hotels;
      if (hotelCategory) {
        // Find hotels matching the provided category
        hotels = await Hotel.find({ category: hotelCategory });
      } else {
        // Return all hotels if no category is provided
        hotels = await Hotel.find({});
      }

      // Check if hotels are found and respond
      hotels.length > 0
        ? res.json(hotels)
        : res.status(404).json({ message: "No data found" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "An error occurred while fetching hotels" });
    }
  });

module.exports = router;


// const express = require("express");

// const router = express.Router();



// const Hotel = require("../model/hotel.model");

// router.route("/")  //localhost:3500/api/hotels/hotelCategory
// .get(async (req,res) => {
//     const hotelCategory = req.query.Category //http://localhost:3500/api/hotels?category=National+park

//     try{
//         let hotels
//         if(hotelCategory){
//             hotels = await Hotel.find({ category: hotelCategory})

//         }else{
//             hotels = await Hotel.find({});
//         }


//          hotels = await Hotel.find({});
//         hotels ? res.json(hotels) : res.status(404).json({ message: "No data found" })
//     }catch(err){
//         console.log(err)
//     }
    
    
// })

// module.exports = router;