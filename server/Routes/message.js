const express = require("express");
const router = express.Router();
const Message = require("../models/Message.js");

/**
 * @desc get all messages from DB
 * @rout /ChatApp/messages
 * @method GET
 * @access public
 */

router.get("/", async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

/**
 * @desc get message from DB
 * @rout /ChatApp/messages/:id
 * @method GET
 * @access public
 */

router.get("/:id", async (req, res) => {
  try {
    const message = await Message.findById({_id : req.params.id});
    if (!message) {
        return res.status(404).json({ message: "message not found" });
    }
        res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: "Invalid message ID" });
  }
});

/**
 * @desc add message to DB
 * @rout /ChatApp/messages/:ids/:idr
 * @method post
 * @access public
 */

router.post("/send", async (req, res) => {
  const {content, status, type} = req.body

 if (!content || !status || !type) return res.status(400).json({ message: "All fields are required" });

  try {
    const message = new Message({
      senderId : "67453f0e0bcb17909cb3b593",
      receiverId : "673c50a5fbc566f12db7ade6" ,
      content,
      status,
      type,
    });
    const result = await message.save();
    res.status(200).json({msg : "message have been add succesfully", result});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "somthing went wrong" , error});
  }
});

/**
 * @desc delete Message
 * @route /chatAPP/Messages/:id
 * @access public
 * @method delete
 */
router.delete("/:id", async (req, res) => {
  try {
    const result = await Message.findByIdAndDelete(req.params.id);
    if (!result) {
        res.status(404).json({ message: "Message not found" });
    }
        res.status(200).json({ message: "Message has been deleted" });
  } catch (error) {
    res.status(500).json({ message: "Invalid Message ID" });
  }
});

/**
 * @desc update Message
 * @route /chatAPP/Messages/:id
 * @access public
 * @method delete
 */
router.put("/:id", async (req, res) => {
  try {
    const updatedMessage = await Message.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedMessage) {
      res.status(404).json({ message: "Message not found" });
    }
    res.status(200).json({ message: "Message has been updated", updatedMessage });
  } catch (error) {
    res.status(500).json({ message: "Invalid Message ID" });
  }
});

module.exports = router;
