const express = require("express");

const router = express.Router();

const Hotel = require("../model/hotel.model");

//localhost:3500/api/hotels/12345qwert
router.route("/:id")
    .get(async (req,res) => {
        try{
            const { id } = req.params;
            const hotel = await Hotel.findById(id);
            res.json(hotel);

        }catch(err){
            res.status(404).json({ message: "No Hotel Found"})

        }
    })

    module.exports = router;