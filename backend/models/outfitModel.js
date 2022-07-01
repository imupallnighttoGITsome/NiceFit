const mongoose = require("mongoose");

const outFitSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    hat: String,

    glasses: String,

    top: String,

    bottoms: String,

    socks: String,

    shoes: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Outfit", outFitSchema);
