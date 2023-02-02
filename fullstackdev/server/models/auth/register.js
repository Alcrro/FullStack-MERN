const mongoose = require("mongoose");
const slugify = require("slugify");
const bcrypt = require("bcryptjs");
2;

const RegisterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  slug: String,
  password: {
    type: String,
    required: true,
  },
});

//Create bootcamp slug from the name
//pre run before operation
// UserSchema.pre("save", function (next) {
//   console.log("Slugify ran", this.name);
//   this.slug = slugify(this.name, { lower: true });
//   next();
// });

//Encrypt password using bcrypt
RegisterSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//Match  user entered password to hashed password in database
RegisterSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Register = mongoose.model("Register", RegisterSchema);
module.exports = Register;