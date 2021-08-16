var express = require('express');
var app = express();
/*
creating the environment variable
 */
var port = process.env.PORT || 3000;
/*
assing the contoller to variable
 */
var  BuyerController= require('./controllers/BuyerController');
var  CartController= require('./controllers/CartController');
var  ItemController= require('./controllers/ItemController');
var  SellerController= require('./controllers/SellerController');
var  FeedBackController= require('./controllers/FeedBackController');


var mongoose 	= require('mongoose');
/*
create the url link using the above variable
 */
app.use(express.static('./interfaces'));
app.use('/api/buyer', BuyerController);
app.use('/api/cart', CartController);
app.use('/api/item', ItemController);
app.use('/api/seller', SellerController);
app.use('/api/feedback', FeedBackController);

/*
creating the cloud database using mongo db
 */
mongoose.connect('mongodb+srv://user:pwd@cluster0-q58nf.mongodb.net/test?retryWrites=true', function(err) {
    if (err) {
        console.log('Not connected to the database: ' + err); // Log to console if unable to connect to database
    } else {
        console.log('Successfully connected to MongoDB'); // Log to console if able to connect to database
    }
});
/*
create the server port
 */
app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});

