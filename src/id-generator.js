function * idGenerator () {
  let id = 0
  while (true) {
    yield id++
  }
}

const generateId = idGenerator()
console.log(generateId.next().value)
console.log(generateId.next().value)
console.log(generateId.next().value)
