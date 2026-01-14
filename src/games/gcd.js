import { createGame, } from '../index.js'
import { getGCD, getRandomValueInRange, } from '../lib.js'

const description = 'Find the greatest common divisor of given numbers.'

export function gcd() {
  createGame(description, createQuestion,)
}

function createQuestion() {
  const value1 = getRandomValueInRange(1, 99,)
  const value2 = getRandomValueInRange(1, 99,)
  const question = `${value1} ${value2}`

  return {
    question,
    rightAnswer: getGCD(value1, value2,),
  }
}
