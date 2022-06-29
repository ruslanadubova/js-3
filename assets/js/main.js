var counter = (function() {
  var count = 0;
  return function(n) {
  count = n == undefined ? count : n;
  return count++;
  }
}());

var counting = (function() {
  var count = 0;
  return {
    value(n) {
      if (n !== undefined) count = n;
      return count;},
    increment() {count++;},
    decrement() {count--},
  };
}());

var myPrint = (a, b, res) => `${a}^${b}=${res}`;
var myPow = (a, b, callback) => {
  var pow = (x, n) => {
    if (n !== 1) return x *= pow(x, n - 1);
    return x;
  };
  return callback(a, b, pow(a, b));
};
console.log(myPow(3, 4, myPrint)); // 3^4=81
console.log(myPow(2, 3, myPrint)); // 2^3=8

 var info = function() {
    return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
  }
 var yearNow = new Date().getFullYear();
 var car = {
   engine: 1300,
   model: 'Fiesta',
   name: 'Ford',
   year: 2000,
   info: info,
  get used() {
   return this.year !== yearNow ? 'used' : 'new';
 },
 set used(value) {
   if (value === 'new' && this.year < yearNow) this.year = yearNow;
 }
};


var  list = [12, 23, 100, 34, 56, 9, 233];
var myMax = function (arr) {
return Math.max.apply(Math, arr);
}; 
 
var myMul = function (a, b) {
  return a * b;
};

var myDouble = myMul.bind(0, 2);

var myTriple = myMul.bind(1, 3);

var notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];
var notUniqStrings = [
  'Bob',
  'Kate',
  'Jhon',
  'Tom',
  'Jhon',
  'Kate',
  'Tom',
  'Bob',
  'Jhon',
  'Tom'
];
var myUniq = (arr) => {
var set = new Set();
  arr.forEach((val) => {
    set.add(val);
})
return set;
};

    






