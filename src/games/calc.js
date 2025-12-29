import { createGame } from '../index.js'
import { getRandomIndex, getRandomValueInRange } from '../lib.js'

const description = 'What is the result of the expression?'
const operators = ['+', '-', '*']

export function calc() {
  createGame(description, createQuestion)
}

function createQuestion() {
const value1 = getRandomValueInRange(0, 100)
  const value2 = getRandomValueInRange(0, 100)
  const operator = operators[getRandomIndex(operators.length)]
  const question = `${value1} ${operator} ${value2}`
  return {
    question,
    rightAnswer: eval(question).toString()
  }
}

