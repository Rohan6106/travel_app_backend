const express = require('express');

const router = express.Router();


const verifyUser = require("../middleware/verifyuser");
const wishlistController = require("../controllers/wishlistController");
const { createWishlistHandler, deleteWishlistHandler,getWishlistHandler } = wishlistController;

router.route("/")
    .post(verifyUser, createWishlistHandler)

    router.route("/:id")
    .delete(verifyUser,deleteWishlistHandler)


    router.route("/")
    
        .get(verifyUser,getWishlistHandler)
    

    module.exports = router;