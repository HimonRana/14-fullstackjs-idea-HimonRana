const express = require('express');
const router = express.Router();

// Lägg till minst 5 produkter av minst två olika kategorier i databasen. 
// En produkt skall ha en beskrivning, bild, kategori, pris, lagerstatus.

// @route   GET products/test
// @dec     Test products route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'products works' }));

module.exports = router;