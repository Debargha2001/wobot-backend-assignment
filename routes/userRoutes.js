const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.get("/", authController.protect, userController.getAllUsers);
router.get(
  "/getUserDetails",
  authController.protect,
  userController.getUserDetails
);

module.exports = router;
