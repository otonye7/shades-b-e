import express from 'express';
import { create, getquestions } from '../contollers/questions';


const router = express.Router();

router.post('/questions', create);
router.get('/get-questions', getquestions)


module.exports = router;