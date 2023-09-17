const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
   name:{
    type : String,
    required:[true, 'Name must be required'],
    minLength:[5, 'Minimum length of name must be 5'],
    maxLength:[50, 'Maximum length of name must be 50'],
    trim:true
   },
   email:{
    type: String,
    required:[true, 'Email must be required'],
    unique: [true,'already registered'],
    lowercase:true
   },
   password:{
    type: String,
   },
   forgotPasswordToken:{
    type: String,
   },
   forgotPasswordExpiryDate:{
    type: Date,
   }
},{
    timestamps: true
});

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;