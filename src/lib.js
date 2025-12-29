export function getRandomValueInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getRandomIndex(max) {
  return Math.floor(Math.random() * (max))
}

export function isEven(value) {
  return !(value % 2)
}
