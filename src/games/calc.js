import { createGame, } from '../index.js'
import { getRandomIndex, getRandomValueInRange, } from '../lib.js'

const description = 'What is the result of the expression?'
const operators = ['+', '-', '*',]

export function calc() {
  createGame(description, createQuestion,)
}

function createQuestion() {
  const value1 = getRandomValueInRange(0, 100,)
  const value2 = getRandomValueInRange(0, 100,)
  const operator = operators[getRandomIndex(operators.length,)]
  const question = `${value1} ${operator} ${value2}`

  return {
    question,
    rightAnswer: calcExpression(operator, value1, value2,) .toString(),
  }
}

function calcExpression(operator, value1, value2,) {
  switch (operator) {
    case '+': return value1 + value2
    case '-': return value1 - value2
    case '*': return value1 * value2
    default: throw Error('Неправильный оператор',)
  }
}
