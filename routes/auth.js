import express from 'express';

const router = express.Router();

import {signup, login} from '../contollers/auth';

router.post('/signup', signup)
router.post('/login', login)

module.exports = router