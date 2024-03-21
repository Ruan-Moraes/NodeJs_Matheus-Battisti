const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('sayHello', () => {
  console.log('Hello');
});

console.log('Oi');
eventEmitter.emit('sayHello');
console.log('Hola');
