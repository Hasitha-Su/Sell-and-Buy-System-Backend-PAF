var mongoose = require('mongoose');
/*
creating the database
 */
var BuyerSchema = new mongoose.Schema({  
    name: String,
    email: String,
    location: String,
    reputation: Number,
    username: String,
    userId: Number
});
/*
set the database to the schema
 */
mongoose.model('Buyer', BuyerSchema);
/*
export the database table for more usage in contorller
 */
module.exports = mongoose.model('Buyer');