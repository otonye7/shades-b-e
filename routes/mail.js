import express from 'express';
import { create } from '../contollers/mail';



const router = express.Router();

router.post('/subscribe', create);


module.exports = router;