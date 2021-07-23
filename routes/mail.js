const express = require('express');

const { create } = require('../contollers/mail');



const router = express.Router();

router.post('/subscribe', create);


module.exports = router;