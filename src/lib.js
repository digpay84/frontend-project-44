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

export function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    
    return true;
}

export function createProgression() {    
    const result = []
    const length = getRandomValueInRange(5,15)
    const start = getRandomValueInRange(0, 9)
    const step = getRandomValueInRange(1, 10)
    for (let i=0;i<length;i++) {
      result.push(start+i*step)
    }

    return result
}