import { createGame } from "../index.js";
import { getRandomValueInRange, isPrime } from "../lib.js";

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

export function prime() {
  createGame(description, createQuestion)
}

function createQuestion() {
  const question = getRandomValueInRange(1, 99)

  return {
    question,
    rightAnswer: isPrime(question) ? 'yes' : 'no',
  }
}