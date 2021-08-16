var mongoose = require('mongoose');  
var CartSchema = new mongoose.Schema({  
    cartId: String,
    items: Array,
    buyerId: Number,
    currentAmount: Number,
    expireDate: Date
});
mongoose.model('Cart', CartSchema);

module.exports = mongoose.model('Cart');