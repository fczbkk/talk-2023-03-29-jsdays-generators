function * basicGenerator () {
  yield 1;
  yield 2;
  yield 3;
}

const generateManually = basicGenerator()
console.log(generateManually.next()) // { value: 1, done: false }
console.log(generateManually.next()) // { value: 2, done: false }
console.log(generateManually.next()) // { value: 3, done: false }
console.log(generateManually.next()) // { value: undefined, done: true }

const generateInLoop = basicGenerator()
for (const result of generateInLoop) {
  console.log(result) // 1, 2, 3
}
