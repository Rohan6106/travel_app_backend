const Category = require("../model/category.model");


const categoryHandler = async (requestAnimationFrame,res) => {
    try {
        const categories = await Category.find({});
        res.json(categories)
    }catch(err){
        res.status(404).json({ message: "could not find categories" })
    }
}

module.exports = categoryHandler;