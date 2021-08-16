var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Cart = require('./../models/Cart');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.post('/', function (req, res) {
    Cart.create({
            cartId: req.body.cartId,
            items: req.body.items,
            buyerId: req.body.buyerId,
            currentAmount: req.body.currentAmount,
            expireDate: req.body.expireDate
        },
        function (err, cart) {
            if (err) return res.status(500).json({
                "error": "Error encountered Please try again."
            });
            res.status(201).json({
                "data": cart
            });
        }
    );
});

router.get('/:cartId', function (req, res) {
    Cart.find({cartId: req.body.cartId}, function (err, cart) {
        if (err) return res.status(500).json({
            "error": "Error encountered Please try again."
        });
        res.status(200).json({
            "data": cart
        });
    });
});

router.delete('/:cartId', function (req, res) {
    Cart.remove({
        cartId: req.body.cartId
    }, function (err, cart) {
        if (err) return res.status(500).json({
            "error": "Error encountered Please try again."
        });
        res.status(200).json({
            "messgae": "Cart: " + req.params.cartId + " was deleted."
        });
    });
});

router.put('/:cartId', function (req, res) {
    Cart.findOneAndUpdate({
        cartId: req.body.cartId
    }, {
        $set: {
            items: req.body.items,
            buyerId: req.body.buyerId,
            currentAmount: req.body.currentAmount,
            expireDate: req.body.expireDate
        }
    }, {
        new: true
    }, function (err, cart) {
        if (err) return res.status(500).json({
            "error": "Error encountered Please try again."
        });
        res.status(200).send(cart);
    });
});

module.exports = router;