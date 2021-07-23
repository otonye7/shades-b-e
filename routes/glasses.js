const express = require('express');
const { create, glass, image, remove, read } = require('../contollers/glasses');
const formidable = require('express-formidable');
const { requireSignin, glassesOwner } = require('../middlewares');

const router = express.Router();

router.post('/create-glasses', requireSignin, formidable(), create);
router.get('/bestseller', glass);
router.get('/bestseller/image/:glassId', image);
router.get('/bestseller/:glassId', read)
router.delete('/delete-glasses/:glassId', requireSignin, glassesOwner, remove)


module.exports = router;