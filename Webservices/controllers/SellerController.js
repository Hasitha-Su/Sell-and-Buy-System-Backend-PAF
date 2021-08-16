var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

var Seller = require('./../models/Seller');
/*
set the postman url which start with '/' znd insert  the data to database
 */
router.post('/', function (req, res) {
    Seller.create({
            name: req.body.name,
            email: req.body.email,
            location: req.body.location,
            reputation: req.body.reputation,
            username: req.body.username,
            userId: req.body.userId
        },
        function (err, user) {
            if (err) return res.status(500).json({
                "error": "Error encountered Please try again."
            });
            res.status(201).json({
                "data": user
            });
        }
    );
});
/*
find the all the user in the database
 */

router.get('/', function (req, res) {
    Seller.find({}, function (err, users) {
        if (err) return res.status(500).json({
            "error": "Error encountered Please try again."
        });
        res.status(200).json({
            "data": users
        });
    });
});
/*
delete the user with the user id
 */
router.delete('/:userId', function (req, res) {
    Seller.remove({
        userId: req.body.userId
    }, function (err, user) {
        if (err) return res.status(500).json({
            "error": "Error encountered Please try again."
        });
        res.status(200).json({
            "messgae": "User: " + req.params.userId + " was deleted."
        });
    });
});
/*
update the selected user from user id
eg-: localhost:3000/api/seller/userId
 */

router.put('/:userId', function (req, res) {
    Seller.findOneAndUpdate({
        userId: req.body.userId
    }, {
        $set: {
            name: req.body.name,
            email: req.body.email,
            location: req.body.location,
            reputation: req.body.reputation,
            username: req.body.username
        }
    }, {
        new: true
    }, function (err, user) {
        if (err) return res.status(500).json({
            "error": "Error encountered Please try again."
        });
        res.status(200).send(user);
    });
});

module.exports = router;