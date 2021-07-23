import express from 'express';
import { create, glass, image, remove, read } from '../contollers/glasses';
import formidable from 'express-formidable';
import { requireSignin, glassesOwner } from '../middlewares';

const router = express.Router();

router.post('/create-glasses', requireSignin, formidable(), create);
router.get('/bestseller', glass);
router.get('/bestseller/image/:glassId', image);
router.get('/bestseller/:glassId', read)
router.delete('/delete-glasses/:glassId', requireSignin, glassesOwner, remove)


module.exports = router;