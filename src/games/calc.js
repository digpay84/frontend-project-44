import readlineSync from 'readline-sync'
import { hi } from '../cli.js'
import { getRandomIndex, getRandomValueInRange } from '../lib.js'

const maxRoundCount = 3
const operators = ['+', '-', '*']

export function calc() {
    const name = hi()    
    console.log('What is the result of the expression?')
    for (let i = 0; i < maxRoundCount; i++) {
        const expression = createExpression()
        console.log(`Question: ${expression}`)

        const answer = readlineSync.question('Your answer: ')
        const correctAnswer = eval(expression).toString()
        
        if (answer !== correctAnswer) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
            console.log(`Let's try again, ${name}!`)
            return
        }
        console.log('Correct!')
    }
    console.log(`Congratulations, ${name}!`)
}

function createExpression() {
    const value1 = getRandomValueInRange(0, 100)
    const value2 = getRandomValueInRange(0, 100)
    const operator = operators[getRandomIndex(operators.length)]
    return `${value1} ${operator} ${value2}`
}