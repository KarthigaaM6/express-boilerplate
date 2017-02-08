'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const userModel = require('./userEntity');
//const userCtrl = require('./userController');

// deleting a single user
router.delete('/remove', function(req, res) {
    logger.debug("inside user remove DELETE");
    userModal.remove({
        name: req.body.name
    }, function(err, arr) {
        if (err) {
            res.send(err);
        } else {
            res.send('user deletion successfull!');
        }
    });
});

// updating a user
router.put('/update', function(req, res) {
    logger.debug("inside user update PUT");
    let user = req.body.name;
    let password = req.body.password;
    userModel.findOneAndUpdate({
        name: user
    }, {
        $set: {
            password: password
        }
    }, function(err, arr) {
        if (err) {
            res.send(err);
        } else {
            res.send('user updation successfull!');
        }
    });
});

// add new user
router.post('/add', function(req, res) {
    logger.debug("inside user add POST");
    let user = new userModel(req.body);
    user.save(function(err) {
        if (err) {
            res.send(err);
        } else {
            res.send('sign up successfull!')
        }
    });
});

router.get('/', function(req, res) {
    console.log('inside user GET');
    res.send('response from user GET route');
});

// display all users
router.get('/displayall', function(req, res) {
    console.log('inside user displayall GET');
    userModel.find({}, function(err, arr) {
        if (err) {
            res.send(err);
        } else {
            res.send(arr);
        }
    });
});

// display users
router.get('/display/:username', function(req, res) {
    console.log('inside user display GET');
    userModel.find({
        name: req.params.username
    }, function(err, arr) {
        if (err) {
            res.send('error in retrieving the user');
        } else {
            res.send(arr);
        }
    });
});

module.exports = router;
