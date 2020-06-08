const stuff = require('./app');
const events = require('events');

console.log(stuff.add(1,stuff.a));

let myEmitter = new events.EventEmitter;

myEmitter.on('someEvent', function(msg){
  console.log(msg)
});

myEmitter.emit('someEvent','The event was emitted');
