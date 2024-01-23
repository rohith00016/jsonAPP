const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  questionName: { type: String, required: true },
  tags: { type: [String], required: true },
  status: { type: String, required: true },
  hardnessScore: { type: String, required: true },
  readme: { type: String, required: true },
  Exercise: {
    heading: { type: String, required: true },
    desc: { type: String, required: true }
  },
  tableNames: { type: [String], required: true },
  dataCMD: { type: String, required: true },
  dataTableCMD: { type: String, required: true },
  answers: [{
    id: { type: Number, required: true },
    question: { type: String, required: true },
    answer: { type: String, required: true },
    output: {
      columns: { type: [String], required: true },
      values: { type: [[mongoose.Schema.Types.Mixed]], required: true },
    }
  }]
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
