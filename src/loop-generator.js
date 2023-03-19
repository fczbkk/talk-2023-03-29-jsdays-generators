function * trafficLight () {
  while (true) {
    yield 'red'
    yield 'yellow'
    yield 'green'
  }
}

const fastLight = trafficLight()
const slowLight = trafficLight()

setInterval(() => {
  console.log('fast', fastLight.next().value)
}, 1000)

setInterval(() => {
  console.log('slow', slowLight.next().value)
}, 3000)
