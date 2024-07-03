const express = require("express");
const { categories } = require("../../../controllers/categoryAction");

const router = express.Router();


router
.get("/:id", (req, res) => {
    const categorieId = parseInt(req.params.id, 10);
    const categoriesFound = categories.find((categorie) => categorie.id === categorieId)
    res.status(200).json(categoriesFound);

    if(categoriesFound){
        res.status(200).json(categoriesFound);
    } else{
        res.status(404).json({message: "No categories found"});
    }
})














module.exports = router