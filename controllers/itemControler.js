const itemModel = require("../models/itemModel");

const getItemControler = async (req, res) => {
  try {
    const items = await itemModel.find();
    res.status(200).send(items);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getItemControler };
