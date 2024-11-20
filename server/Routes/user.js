const express = require("express");
const router = express.Router();
const User = require("../models/User.js");

/**
 * @desc get all users from DB
 * @rout /ChatApp/users
 * @method GET
 * @access public
 */

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

/**
 * @desc get user from DB
 * @rout /ChatApp/users/:id
 * @method GET
 * @access public
 */

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Invalid user ID" });
  }
});

/**
 * @desc add user to DB
 * @rout /ChatApp/users/:id
 * @method GET
 * @access public
 */

router.post("/add", async (req, res) => {
  try {
    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists)
      return res.status(401).json({ message: "email already exists!" });

    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      image: req.body.image,
    });
    const result = await user.save();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "somthing went wrong" });
  }
});

/**
 * @desc delete user
 * @route /chatAPP/users/:id
 * @access public
 * @method delete
 */
router.delete("/:id", async (req, res) => {
  try {
    const result = await User.findByIdAndDelete(req.params.id);
    if (result) {
      res.status(200).json({ message: "User has been deleted" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Invalid user ID" });
  }
});

/**
 * @desc update user
 * @route /chatAPP/users/:id
 * @access public
 * @method delete
 */
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedUser) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User has been updated", updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Invalid user ID" });
  }
});

module.exports = router;
