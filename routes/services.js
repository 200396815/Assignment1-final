'use strict';
var express = require('express');
var router = express.Router();

/* Simranjot kaur  200396815  COMP2068. This page will tell about the languages used by me to create this portfolio. */
router.get('/', function (req, res) {
    res.render('services', { title: 'Services' });
});

module.exports = router;
