var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Item = require('./../models/Item');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.post('/', function (req, res) {
    Item.create({
            name: req.body.name,
            itemId: req.body.itemId,
            description: req.body.description,
            unitPrice: req.body.unitPrice,
            sellerId: req.body.sellerId,
            quantity: req.body.quantity
        },
        function (err, item) {
            if (err) return res.status(500).json({
                "error": "Error encountered Please try again."
            });
            res.status(201).json({
                "data": item
            });
        }
    );
});

router.get('/', function (req, res) {
    Item.find({}, function (err, items) {
        if (err) return res.status(500).json({
            "error": "Error encountered Please try again."
        });
        res.status(200).json({
            "data": items
        });
    });
});

router.delete('/:itemId', function (req, res) {
    Item.remove({
        itemId: req.body.itemId
    }, function (err, item) {
        if (err) return res.status(500).json({
            "error": "Error encountered Please try again."
        });
        res.status(200).json({
            "messgae": "Item: " + req.params.itemId + " was deleted."
        });
    });
});

router.put('/:itemId', function (req, res) {
    Item.findOneAndUpdate({
        itemId: req.body.itemId
    }, {
        $set: {
            name: req.body.name,
            description: req.body.description,
            unitPrice: req.body.unitPrice,
            sellerId: req.body.sellerId,
            quantity: req.body.quantity
        }
    }, {
        new: true
    }, function (err, item) {
        if (err) return res.status(500).json({
            "error": "Error encountered Please try again."
        });
        res.status(200).send(item);
    });
});

module.exports = router;