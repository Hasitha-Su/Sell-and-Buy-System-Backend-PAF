var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Feedback = require('./../models/Feedback');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.post('/', function (req, res) {
    Feedback.create({
            feedBackId: req.body.feedBackId,
            message: req.body.message,
            itemId: req.body.itemId,
            buyerId: req.body.buyerId,
            rating: req.body.rating
        },
        function (err, feedback) {
            if (err) return res.status(500).json({
                "error": "Error encountered Please try again."
            });
            res.status(201).json({
                "data": feedback
            });
        }
    );
});

router.get('/', function (req, res) {
    Feedback.find({}, function (err, feedback) {
        if (err) return res.status(500).json({
            "error": "Error encountered Please try again."
        });
        res.status(200).json({
            "data": feedback
        });
    });
});

router.delete('/:feedBackId', function (req, res) {
    Feedback.remove({
        feedBackId: req.body.feedBackId
    }, function (err, feedback) {
        if (err) return res.status(500).json({
            "error": "Error encountered Please try again."
        });
        res.status(200).json({
            "messgae": "Feed back: " + req.params.feedBackId + " was deleted."
        });
    });
});

router.put('/:feedBackId', function (req, res) {
    Feedback.findOneAndUpdate({
        feedBackId: req.body.feedBackId
    }, {
        $set: {
            message: req.body.message,
            itemId: req.body.itemId,
            buyerId: req.body.buyerId,
            rating: req.body.rating
        }
    }, {
        new: true
    }, function (err, feedback) {
        if (err) return res.status(500).json({
            "error": "Error encountered Please try again."
        });
        res.status(200).send(feedback);
    });
});

module.exports = router;