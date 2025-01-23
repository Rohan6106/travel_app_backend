const express = require("express");
const router = express.Router();
const getAllHotelHandler = require("../controllers/hotelControllers")
router
  .route("/") // localhost:3500/api/hotels?category=National+park
  .get(getAllHotelHandler);

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