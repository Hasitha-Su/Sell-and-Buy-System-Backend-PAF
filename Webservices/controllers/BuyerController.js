var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

var Buyer = require('./../models/Buyer');

router.post('/', function (req, res) {
    Buyer.create({
            name: req.body.name,
            email: req.body.email,
            location: req.body.location,
            reputation: req.body.reputation,
            username: req.body.username,
            userId:req.body.userId
        },
        function (err, user) {
            if (err) return res.status(500).json({
                "error": "Error encountered Please try again."
            });
            res.status(201).json({
                "data": user
            });
        });
});

router.get('/', function (req, res) {
    Buyer.find({}, function (err, users) {
        if (err) return res.status(500).json({
            "error": "Error encountered Please try again."
        });
        res.status(200).json({
            "data": users
        });
    });
});

router.delete('/:userId', function (req, res) {
    Buyer.remove({
        userId: req.params.userId
    }, function (err, user) {
        if (err) return res.status(500).json({
            "error": "Error encountered Please try again."
        });
        res.status(200).json({
            "messgae": "User: " + req.params.userId + " was deleted."
        });
    });
});

router.put('/:userId', function (req, res) {
    Buyer.findOneAndUpdate({
        userId: req.params.userId
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