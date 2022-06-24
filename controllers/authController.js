const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const { promisify } = require("util");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.cookie("jwt", token, cookieOptions);

  user.password = undefined;

  return res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.signup = async (req, res) => {
  try {
    // check user already exists or not
    const existedUser = await User.findOne({username: req.body.username});
    if(existedUser){
        return res.status(400).json({
          status: "fail",
          message: 'User already exists! Go to login.',
        });
    }
    const newUser = await User.create(req.body);
    createSendToken(newUser, 201, res);
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // 1) check if username and password exist
    if (!username || !password) {
        return res.status(400).json({
          status: "fail",
          message: "Please provide email and password",
        });
    }

    // 2) check if user exists and password is correct
    const user = await User.findOne({ username: username }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
        return res.status(401).json({
          status: "fail",
          message: "Incorrect email or password",
        });
    }
    // 3) if everything is ok, send token to client
    createSendToken(user, 200, res);
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: "Bad request",
    });
  }
};

exports.protect = async (req, res, next) => {
  try {
    // 1)getting token and check if it's there
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return res.status(401).json({
          status: "fail",
          message: "You are not logged in! Please log in to get access.",
        });
    }

    // 2) verification token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // 3)check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
        return res.status(401).json({
          status: "fail",
          message: "The user belonging to this token does not longer exists",
        });
    }

    // 4)grant access to protected route
    req.user = currentUser;
    next();
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
