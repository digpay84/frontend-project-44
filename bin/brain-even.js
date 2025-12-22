import readlineSync from 'readline-sync'

export function even(name) {
  let correctAnswersCount = 0

  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  while (true) {
    const number = getRandomValueInRange(1, 99)
    console.log(`Question: ${number}`)

    const answer = readlineSync.question('Your answer: ')
    const correctAnswer = getCorrectAnswer(number)
    if (answer === correctAnswer) {
      console.log('Correct!')
      correctAnswersCount += 1
      if (correctAnswersCount > 2) {
        console.log(`Congratulations, ${name}!`)
        break
      }
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      break
    }
  }
}

function getRandomValueInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function isEven(value) {
  return !(value % 2)
}

function getCorrectAnswer(number) {
  return isEven(number) ? 'yes' : 'no'
}
