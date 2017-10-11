var express = require('express');
var router = express.Router();
//Entry point to application
router.get('/', function (req, res, next) {
    res.render('index');
});
module.exports = router;
