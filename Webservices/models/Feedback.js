var mongoose = require('mongoose');  
var FeedBackSchema = new mongoose.Schema({  
    feedBackId: Number,
    message: String,
    itemId: Number,
    buyerId: Number,
    rating: Number
});
mongoose.model('FeedBack', FeedBackSchema);

module.exports = mongoose.model('FeedBack');