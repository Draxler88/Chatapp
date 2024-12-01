const User = require("../models/User.js");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.getUser = async (req, res) => {
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
};

exports.addUser = async (req, res) => {
  try {
    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists)
      return res.status(401).json({ message: "email already exists!" });
    const {firstName, lastName, email, password, image} = req.body
    const user = new User({
      firstName,
      lastName,
      email,
      password,
      image,
    });
    const result = await user.save();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "somthing went wrong" });
  }
};

exports.updateUser = async (req, res) => {
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
};

exports.deleteUser = async (req, res) => {
  try {
    const result = await User.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: "User not found" });
    
    res.status(200).json({ message: "User has been deleted" });
    
  } catch (error) {
    res.status(500).json({ message: "Invalid user ID" });
  }
};

exports.addContact = async (req, res) => {
  try {
    const { name, phone, email } = req.body;
    // const verefyEmail = await User.findOne({ email});
    // if (!verefyEmail)
    //   return res.status(404).json({ msg: "this email does not exec " });
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          contact: {
            name,
            phone,
            email
          },
        },
      },
      { new: true }
    );
    res.status(203).json({ msg: "user add contact seccefully", updateUser });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const { id, idContact } = req.params;
    const deleteContact = await User.findByIdAndUpdate(
      { _id: id },
      {
        $pull: {
          contact: {
            _id: idContact,
          },
        },
      },
      { new: true }
    );
    if (!deleteContact) {
      return res.status(404).json({ msg: "User or contact not found" });
    }
    res
      .status(200)
      .json({ msg: "contact has been dleted succefuly", deleteContact });
  } catch (error) {
    console.error("Error deleting contact:", error);
    res
      .status(500)
      .json({ msg: "An error occurred while deleting the contact" });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const { id, idContact } = req.params;
    const { name, email, phone } = req.body;
    const updateContact = await User.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          contact: {
            _id: idContact,
            name: name,
            phone: phone,
            email: email,
          },
        },
      },
      { new: true }
    );
    if (!updateContact) {
      return res.status(404).json({ msg: "User or contact not found" });
    }
    res
      .status(200)
      .json({ msg: "contact has been update succefuly", updateContact });
  } catch (error) {
    console.error("Error updating contact:", error);
    res
      .status(500)
      .json({ msg: "An error occurred while updating the contact" });
  }
};
