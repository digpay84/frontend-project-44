export function getRandomValueInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getRandomIndex(max) {
  return Math.floor(Math.random() * (max))
}

export function isEven(value) {
  return !(value % 2)
}

export function getGCD(a, b) {    
  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}