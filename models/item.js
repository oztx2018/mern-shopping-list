const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

// create Schema

// this is for db schema that we will use to keep data from user
const ItemSchema = new Schema ( {

    name : {
        type: String,
        required: true
          },

    date : {
        type: Date,
        default: Date.now

    }
});


module.exports = Item = mongoose.model('item', ItemSchema);