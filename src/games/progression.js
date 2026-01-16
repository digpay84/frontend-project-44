import { createGame } from '../index.js'
import { createProgression, getRandomIndex } from '../lib.js'

const description = 'What number is missing in the progression?'

export function progression() {
  createGame(description, createQuestion)
}

function createQuestion() {
  const progression = createProgression()
  const index = getRandomIndex(progression.length)
  const rightAnswer = progression[index].toString()
  progression[index] = '..'

  return {
    question: progression.join(' '),
    rightAnswer,
  }
}
