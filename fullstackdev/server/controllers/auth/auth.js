const ErrorResponse = require("../../utilitis/errorResponse");
const asyncHandler = require("../../middleware/async/async");
const Register = require("../../models/auth/Register");
const Login = require("../../models/auth/login");

//	@description					register user
//	@route								POST /api/auth/register
// 	@access								Public
exports.registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  console.log(req.session);

  // Validate  email and password
  if (!name || !email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  //Check if email exists
  const userRegister = await Register.findOne({ email });
  if (userRegister) {
    return next(new ErrorResponse("User already exists", 401));
  }

  //Create user
  const register = await Register.create({
    name,
    email,
    password,
  });

  const token = register.getSignedJwtToken();

  res.status(200).json({
    success: true,
    token: token,
  });
});
//	@description					Auth user
//	@route								POST /api/auth/login
// 	@access								Public
exports.loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate  email and password
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  //Check if email exists in db
  const user = await Register.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  //Check if password  matches
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  const userLogged = await Login.findOne({ email }).select("+password");

  if (userLogged) {
    return next(new ErrorResponse("User already logged in", 401));
  }

  sendTokenResponse(user, 200, res);
});

//	@description					Get current logged in user
//	@route								POST /api/auth/me
// 	@access								Private
exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await Register.findById(req.user.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});

const logoutUser = asyncHandler(async (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      return next(new ErrorResponse("Error logging out", 500));
    }
    res.status(200).clearCookie("token").json({
      success: true,
      data: {},
    });
  });
});

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token

  const token = user.getSignedJwtToken();

  const expireSession = new Date(Date.now() + 86400000);

  const options = {
    expires: expireSession,
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
  });
};
