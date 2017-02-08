'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
//const restaurantCtrl = require('./restaurantController');
const restaurantModel = require('./restaurantEntity');

// deleting a single restaurant
router.delete('/remove', function(req, res) {
    logger.debug("inside restaurant remove DELETE");
    restaurantModel.remove({
        _id: req.body.id
    }, function(err, arr) {
        if (err) {
            res.send(err);
        } else {
            res.send('restaurant deleted successfully!');
        }
    });
});

// deleting all restaurants
router.delete('/removeall', function(req, res) {
    logger.debug("inside restaurant removeall DELETE");
    restaurantModel.remove({}, function(err, arr) {
        if (err) {
            res.send(err);
        } else {
            res.send('restaurants deleted successfully!');
        }
    });
});

// updating a restaurant
router.put('/update', function(req, res) {
    logger.debug("inside restaurant update PUT");
    restaurantModel.findOneAndUpdate({
        _id: Number(req.body.id)
    }, {
        $set: {
            name: req.body.name,
            'address.0.city': req.body.city,
            'address.0.state': req.body.state
        }
    }, function(err, users) {
        if (err) {
            res.send('restaurant updation failed' + err);
        } else {
            res.send('restaurant updated successfully!');
        }
    });
});

router.post('/add', function(req, res) {
    logger.debug("inside restaurant add POST");

    let restaurant = new restaurantModel(req.body);
    restaurant.save(function(err) {
        if (err) {
            res.send('restaurant addition failed' + err);
        } else {
            res.send('restaurant added successfully!');
        }
    });
});

router.get('/display/:location', function(req, res) {
    console.log('inside restaurant display GET');
    let state = (req.params.location).toLowerCase();
    restaurantModel.find({
        "address.0.state": state
    }, function(err, arr) {
        if (err) {
            res.send('restaurant cannot be fetched' + err);
        } else {
            res.send(arr);
        }
    });
});

router.get('/displayall', function(req, res) {
    console.log('inside restaurant display GET');
    let state = (req.params.location).toLowerCase();
    restaurantModel.find({}, function(err, arr) {
        if (err) {
            res.send('restaurants cannot be fetched' + err);
        } else {
            res.send(arr);
        }
    });
});

module.exports = router;
