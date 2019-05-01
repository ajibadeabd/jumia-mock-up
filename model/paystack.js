const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
userName: {
    type: String,
    required: true,
},
email: {
    type: String,
    required: true,
    unique:true
},
user: {
    type: String,
    require:true
   
},
amount: {
    type: Number,
    required: true,
},


});
const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;