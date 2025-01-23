const express = require("express");

const router = express.Router();

const singlehotelHandler = require("../controllers/singleHotelController");

//localhost:3500/api/hotels/12345qwert
router.route("/:id")
    .get(singlehotelHandler)

    module.exports = router;