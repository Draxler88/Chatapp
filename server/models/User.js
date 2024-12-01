const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
});

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      maxlength: 30,
      minlength: 3,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      maxlength: 30,
      minlength: 3,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 5, 
      trim: true,
      unique: true, 
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
    },
    password: {
      type: String,
      required: true,
      minlength: 3, 
      trim: true,
    },
    contact:[contactSchema],
    image: {
      type: String,
      default: "image-avatar.png",
    },
  },
  {
    timestamps: true, 
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User
