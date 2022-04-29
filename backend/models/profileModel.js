const mongoose = require("mongoose");

const profileSchema = mongoose.Schema(
  {
    firstName: {
        type: String, 
        required: [true, 'Please Add First Name']
    },
    lastName: {
        type: String,
        required: [false]
    },
    profilePic: {
        type: String,
        required: [true, 'Please Add Some Pic']
    },
    height: {
        type: String,
        required: [true, 'Please Add Height Measurements']
    },
    bust: {
        type: String,
        required: [true, 'Please Add Bust Measurements']

    },
    waist: {
        type: String,
        required: [true, 'Please Add Waist Measurements']

    },
    hips: {
        type: String,
        required: [true, 'Please Add Hip Measurements']

    },
    shoeSize: {
        type: String,
        required: [true, 'Please Add Shoe Size']

    }
},

{
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", profileSchema);