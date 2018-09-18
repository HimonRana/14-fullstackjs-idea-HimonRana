const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Product model
const Product = require('../models/Product');

// Lägg till minst 5 produkter av minst två olika kategorier i databasen. 
// En produkt skall ha en beskrivning, bild, kategori, pris, lagerstatus.

// @route   GET products/test
// @dec     Test products route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'products works' }));

// @route   GET products/test
// @dec     Test products route
// @access  Public
router.get('/products');

module.exports = router;