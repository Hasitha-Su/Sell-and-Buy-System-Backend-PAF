var mongoose = require('mongoose');  
var ItemSchema = new mongoose.Schema({  
    name: String,
    itemId: Number,
    description: String,
    unitPrice: Number,
    sellerId: Number,
    quantity: Number
});
mongoose.model('Item', ItemSchema);

module.exports = mongoose.model('Item');