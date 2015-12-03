var otherFile = require('./otherFile.js');

console.log('hello from requreEx');
console.log(otherFile);
console.log(otherFile.a +otherFile.b);
console.log(otherFile.add(123,234));

var square = require('./square.js');//require('./square.js')                                         //return a constructor
var s1 = square('s1',12,23);
var s2 = square('s1',12,23);

s1.setName('s1');
s2.setName('s2');
s1.setWidth(111);
console.log(s1);
console.log(s1.getName());
console.log(s2.getName());
console.log(s1.getWidth());

var math = require('./math'); // only give directory name to import it
var math1 = math();
console.log(math1);
console.log(math1.add(12,23));