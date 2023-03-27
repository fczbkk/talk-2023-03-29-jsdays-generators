function * idGenerator () {
  let id = 0;
  while (true) {
    yield id++;
    if (id >= 3) {
      return 'inside return value';
    }
  }
}

const myGenerator = idGenerator();
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.return('outside return value'));
console.log(myGenerator.next());
console.log(myGenerator.next());
