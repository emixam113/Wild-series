const express = require("express");
const {read, browse} = require("../../../controllers/programAction");


const router = express.Router();    

router.get('/', browse)
router.get("/:id", read) 
module.exports = router; 