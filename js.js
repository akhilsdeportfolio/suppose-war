function A() {}

function B() {}

A.prototype = B.prototype = {};
const a = new A();
console.log(a instanceof B);
