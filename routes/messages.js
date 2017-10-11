var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;
var Message = require('../models/message');
//Get messages from database
router.get('/', function (req, res, next) {
    var now = Date.now();
    console.log(now);
    var query = Message.find({expirationDate : {"$gt" : now } });

        query.exec(function(err, documents) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'success',
                obj: documents
            });
        });
});

module.exports = router;
