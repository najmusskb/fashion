const itemModel = require("../models/itemModel");

// get-items
const getItemControler = async (req, res) => {
  try {
    const items = await itemModel.find();
    res.status(200).send(items);
  } catch (error) {
    console.log(error);
  }
};

// add-items
const addItemController = async (req, res) => {
  try {
    const newItem = new itemModel(req.body);
    await newItem.save();
    res.status(201).send("Items Saved");
  } catch (error) {
    res.status(400).send("error", error);
    console.log(error);
  }
};
module.exports = { getItemControler, addItemController };
