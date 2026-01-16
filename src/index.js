import readlineSync from 'readline-sync'
import { hi } from './cli.js'

const maxRoundCount = 3

export function createGame(description, createQuestion) {
  const name = hi()
  console.log(description)
  for (let i = 0; i < maxRoundCount; i++) {
    const { question, rightAnswer } = createQuestion()
    console.log(`Question: ${question}`)
    const answer = readlineSync.question('Your answer: ')

    if (answer !== rightAnswer.toString()) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    console.log('Correct!')
  }
  console.log(`Congratulations, ${name}!`)
}
