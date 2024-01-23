
const express = require('express');
const questionController = require('../controllers/questionController');
const Question = require('../models/question');

const router = express.Router();

router.post('/questions', questionController.storeQuestion);

router.get('/questions', questionController.getAllQuestions);

router.get('/questions/:id', questionController.getQuestionById);

module.exports = router;
