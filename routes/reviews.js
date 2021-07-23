import express from 'express';
import { create, getreviews } from '../contollers/reviews';


const router = express.Router();

router.post('/reviews', create);
router.get('/get-reviews', getreviews)


module.exports = router;