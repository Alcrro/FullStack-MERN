const ErrorResponse = require("../../utils/errorResponse");
const asyncHandler = require("../../middleware/async/async");
const Login = require("../../models/auth/Login");
const Register = require("../../models/auth/Register");

//	@description					register user
//	@route								POST /api/auth/register
// 	@access								Public
exports.registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  console.log(req.body);

  //Create user
  const user = await Register.create({
    name,
    email,
    password,
  });

  res.status(200).json({
    success: true,
    message: "User registered successfully",
    data: user,
  });
});

//	@description					Auth user
//	@route								POST /api/auth/login
// 	@access								Public
exports.loginUser = asyncHandler(async (req, res, next) => {
  const email = req.body.email;
  console.log(req.body);
  const password = req.body.password;

  const user = await Login.findOne({ email: email }).select("+password");
  console.log(user);

  //Check if password  matches
  const isMatch = await user.matchPassword(password);

  // Validate  email and password
  if (email === "" || password === "") {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }
  //Check if email exists
  else if (!user) {
    return next(new ErrorResponse("Invalid credentials", 401));
  } else if (!isMatch) {
    return next(new ErrorResponse("Invalid credentials", 401));
  } else {
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
    });
  }
});
