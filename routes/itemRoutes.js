const express = require("express");
const { getItemController } = require("../controllers/itemControler");
const router = express.Router();

// routes
// method
router.get("/get-item, getItemController");
module.exports = router;
