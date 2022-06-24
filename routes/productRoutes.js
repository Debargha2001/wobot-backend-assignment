const express = require("express");
const productController = require("../controllers/productController");
const authController = require("../controllers/authController");
const multer = require("multer");
const storage = multer.memoryStorage();

const router = express.Router();

router.get("/", authController.protect, productController.getAllProducts);
router.post(
  "/",
  authController.protect,
  multer({ storage: storage }).single("csv"),
  productController.uploadProducts
);

module.exports = router;
