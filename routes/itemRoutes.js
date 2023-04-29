const express = require("express");
const { getItemControler } = require("../controllers/itemControler");
const router = express.Router();

// Routes
// Method - get
router.get("/get-item", getItemControler);
module.express = router;
