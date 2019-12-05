
const upper = (x) => x.toUpperCase();

const underscorify = (x) => x.split('').join('_');

const switchValueForX = (value) => (x) => 
  x.replace(new RegExp(value, 'g'), 'x')
;

console.log(upper('marcel'));
console.log(underscorify('marcel'));

// const upperAndUnderscorify = (x) => upper(underscorify(x));

const compose = (...funcs) => (x) =>
  funcs.reduceRight((v, f) => f(v), x)
;

const upperAndUnderscorify =
  compose(
    upper, 
    underscorify, 
    switchValueForX('a'),
    switchValueForX('r')
  );
; 

console.log(upperAndUnderscorify('marcel'));

