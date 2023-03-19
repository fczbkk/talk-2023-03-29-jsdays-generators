function * rangeGenerator (start = 0, end = 10, step = 1) {
  for (let i = start; i <= end; i += step) {
    yield i
  }
}

console.log('numbers from 0 to 10')
const simpleRange = rangeGenerator()
for (const result of simpleRange) {
  console.log(result)
}

console.log('odd numbers')
const oddNumbers = rangeGenerator(1, 7, 2)
for (const result of oddNumbers) {
  console.log(result)
}

console.log('count by ten')
const countByTen = rangeGenerator(0, 100, 10)
for (const result of countByTen) {
  console.log(result)
}
