const Product = require("../models/productModel");
const csv = require("csvtojson");
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("createdBy")
      .select("-_id -__v");
    return res.status(200).json({
      stats: "success",
      data: {
        products,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.uploadProducts = async (req, res) => {
  try {
    const productsArray = await csv().fromString(req.file.buffer.toString());
    if (productsArray.length != 0) {
      for (let i = 0; i < productsArray.length; i++) {
        const name = productsArray[i].name;
        const description = productsArray[i].description;
        const quantity = productsArray[i].quantity;
        const price = productsArray[i].price;

        await Product.create({
          name: name,
          description: description,
          quantity: quantity,
          price: price,
          createdBy: req.user.id,
        });
      }
    }
    return res.status(200).json({
      stats: "success",
      message: "Products are inserted successfully!",
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
