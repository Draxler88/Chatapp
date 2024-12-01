const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    senderId : {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
        required: true
    },
    receiverId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
          required: true
    },
    content: {
      type: String,
      required: true,
    },
    status: {
        type: String,
        enum: ["sent", "delivered", "read"],
        default: "sent",
    },
    type: {
        type: String,
        enum: ["text", "image", "video", "file"],
        default: "text",
    },
  },
  {
    timestamps: true, 
  }
);

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message
