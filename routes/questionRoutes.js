
const express = require('express');
const questionController = require('../controllers/questionController');
const Question = require('../models/question');

const router = express.Router();

router.post('/questions', questionController.storeQuestion);

module.exports = router;
