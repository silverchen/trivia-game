import { DataUtil } from 'common';

export function QuizModel(payload) {
  return {
    "category": payload.category,
    "type": payload.type,
    "difficulty": payload.difficulty,
    "question": payload.question,
    "correctAnswer": payload.correct_answer,
    "incorrectAnswers": !DataUtil.isArrayEmpty(payload.incorrect_answers) ? payload.incorrect_answers : null,
    "isCorrect": null
  };
}
