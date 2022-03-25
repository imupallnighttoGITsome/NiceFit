const mongoose =  require('mongoose');

const outFitSchema =  mongoose.Schema({
    //hat, glasses, top, bottom, socks, shoes/// all type string //// required: [true, 'Please Add Description']

    hat: {
        type: String,
        required: [true, 'Please Add a Description']
    },

    glasses: {
        type: String,
        required: [true, 'Please Add a Description']
    },

    top: {
        type: String,
        required: [true, 'Please Add a Description']
    },

    bottoms: {
        type: String,
        required: [true, 'Please Add a Description']
    },

    socks: {
        type: String,
        required: [true, 'Please Add a Description']
    },

    shoes: {
        type: String,
        required: [true, 'Please Add a Description']
    },

})