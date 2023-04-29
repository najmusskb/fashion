const express = require("express");
const { getItemControler } = require("../controllers/itemControler");
const router = express.Router();

// routes
// Method - get
router.get("/get-item", getItemControler);
module.exports = router;
