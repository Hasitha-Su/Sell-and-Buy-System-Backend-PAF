var mongoose = require('mongoose');  
var SellerSchema = new mongoose.Schema({  
    name: String,
    email: String,
    location: String,
    reputation: Number,
    username: String,
    userId: Number
});
mongoose.model('Seller', SellerSchema);

module.exports = mongoose.model('Seller');