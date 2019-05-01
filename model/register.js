const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
let Schema=mongoose.Schema
const registerSchema = new Schema({
userName: {
    type: String,
    required: true,
},
email: {
    type: String,
    required: true,
},
phone: {
    type: String,
    required: true,
},


password: {
    type: String,
    require:true
   
},


date:{
    type:Date,
    default:Date.now
}

});
module.exports = mongoose.model('register', registerSchema);
