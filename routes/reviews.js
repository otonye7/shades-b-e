const express = require('express');

const { create, getreviews } = require('../contollers/reviews');


const router = express.Router();

router.post('/reviews', create);
router.get('/get-reviews', getreviews)


module.exports = router;