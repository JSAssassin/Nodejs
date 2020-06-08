const events = require('events');



class Person extends events.EventEmitter{
    constructor(name){
        super();
        this.name = name;
    }
}


const James = new Person('James');
const Ori = new Person('Ori');
const Ryu = new Person('Ryu');

const people = [James, Ori, Ryu];

console.log(people);
people.forEach(person => person.on('speak', function(msg){
  console.log(`${person.name} said ${msg}`);
}));


James.emit('speak', 'hello world');
Ori.emit('speak','meow');
Ryu.emit('speak','bye');

