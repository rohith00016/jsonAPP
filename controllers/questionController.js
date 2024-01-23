const { validationResult, check } = require('express-validator');
const Question = require('../models/question');

const addQuestionValidation = [
  check('id').isInt().notEmpty(),
  check('questionName').isString().notEmpty(),
  check('tags').isArray().notEmpty(),
  check('status').isString().notEmpty(),
  check('hardnessScore').isString().notEmpty(),
  check('readme').isString().notEmpty(),
  check('Exercise.heading').isString().notEmpty(),
  check('Exercise.desc').isString().notEmpty(),
  check('tableNames').isArray().notEmpty(),
  check('dataCMD').isString().notEmpty(),
  check('dataTableCMD').isString().notEmpty(),
  check('answers.*.id').isInt().notEmpty(),
  check('answers.*.question').isString().notEmpty(),
  check('answers.*.answer').isString().notEmpty(),
  check('answers.*.output.columns').isArray().notEmpty(),
  check('answers.*.output.values').isArray().notEmpty(),
];

const addQuestion = async (req, res) => {
  try {

    addQuestionValidation.forEach(validation => validation.run(req));

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const newQuestion = new Question(req.body);
    const savedQuestion = await newQuestion.save();
    res.status(201).json(savedQuestion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);

    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }

    res.status(200).json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  addQuestion,
  getAllQuestions,
  getQuestionById,
};
