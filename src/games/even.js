import { createGame, } from '../index.js'
import { getRandomValueInRange, isEven, } from '../lib.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

export function even() {
  createGame(description, createQuestion,)
}

function createQuestion() {
  const question = getRandomValueInRange(1, 99,)

  return {
    question,
    rightAnswer: isEven(question,) ? 'yes' : 'no',
  }
}
