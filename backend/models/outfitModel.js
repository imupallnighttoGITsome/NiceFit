const mongoose = require("mongoose");

const outFitSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    //hat, glasses, top, bottom, socks, shoes/// all type string //// required: [true, 'Please Add Description']
    hat: {
      type: String,
    },

    glasses: {
      type: String,
    },

    top: {
      type: String,
    },

    bottoms: {
      type: String,
    },

    socks: {
      type: String,
    },

    shoes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Outfit", outFitSchema);
