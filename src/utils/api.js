import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
  _getProjectSummary
} from "./_DATA";

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
    _getProjectSummary(),
  ]).then(([users, questions,projectSummary]) => ({
    users,
    questions,
    projectSummary
   
  }))
  
}

export function saveQuestion (question) {
  return _saveQuestion(question)
}

export function saveQuestionAnswer(data) {
  return _saveQuestionAnswer(data)
}