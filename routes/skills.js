'use strict';
var express = require('express');
var router = express.Router();
/* Simranjot kaur  200396815  COMP2068. This page will tell about my skills whether it is soft or technical. */
router.get('/', function (req, res) {
    res.render('skills', { title: 'Skills' });
});
module.exports = router;