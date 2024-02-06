const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterfullEvent', () => {
  console.log('Please turn off the motor!');
  setTimeout(() => {
    console.log("Please turn off the motor!...Its gentle reminder   ")
  }, 4000);
});

// "type": "module", is removed from    package.json
console.log("script is running")
myEmitter.emit('WaterfullEvent');
console.log("script is still running")