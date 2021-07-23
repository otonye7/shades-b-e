const express = require('express');

const { create, getquestions } = require('../contollers/questions');


const router = express.Router();

router.post('/questions', create);
router.get('/get-questions', getquestions)


module.exports = router;