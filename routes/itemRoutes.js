const express = require("express");
const {
  getItemControler,
  addItemController,
} = require("../controllers/itemControler");
const router = express.Router();

// routes
// Method - get
router.get("/get-item", getItemControler);

// Method - Post
router.post("/add-item", addItemController);

module.exports = router;
