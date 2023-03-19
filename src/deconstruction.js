function * rangeGenerator (start = 0, end = 10, step = 1) {
  for (let i = start; i <= end; i += step) {
    yield i
  }
}

console.log('numbers from 0 to 10', [...rangeGenerator()])
console.log('odd numbers', [...rangeGenerator(1, 7, 2)])
console.log('count by ten', [...rangeGenerator(0, 100, 10)])
