const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Please Add Username"],
    },
    email: {
      type: String,
      required: [true, "Please Add An Email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please Add Password"],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
