
function isString(value) {
  return typeof value === 'string';
}
console.log(isString);



function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}
console.log('\nisNumber Tests:');
console.log(isNumber(123));         // true
console.log(isNumber("123"));       // false
console.log(isNumber(-5.67));       // true


function isBigInt(value) {
  return typeof value === 'bigint';
}
console.log('\nisBigInt Tests:');
console.log(isBigInt(10n));         // true
console.log(isBigInt(5));           // false
console.log(isBigInt("10n"));       // false

function isBoolean(value) {
  return typeof value === 'boolean';
}
console.log('\nisBoolean Tests:');
console.log(isBoolean(true));       // true
console.log(isBoolean(false));      // true
console.log(isBoolean("true"));     // false
console.log(isBoolean(1));          // false

function isNull(value) {
  return value === null;
}
console.log('\nisNull Tests:');
console.log(isNull(null));          // true
console.log(isNull(undefined));     // false
console.log(isNull(""));            // false
console.log(isNull(0));             // false


function isUndefined(value) {
  return typeof value === 'undefined';
}
console.log('\nisUndefined Tests:');
console.log(isUndefined(undefined));  // true
console.log(isUndefined(0));          // false
console.log(isUndefined(null));       // false
console.log(isUndefined(""));         // false


function isSymbol(value) {
  return typeof value === 'symbol';
}
console.log('\nisSymbol Tests:');
console.log(isSymbol(Symbol()));        // true
console.log(isSymbol(Symbol("id")));    // true
console.log(isSymbol("symbol"));        // false
console.log(isSymbol(123));             // false


function isObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
console.log('isObject Tests:');
console.log(isObject({}));             // true
console.log(isObject({ name: "huy" }));  // true
console.log(isObject(null));           // false
console.log(isObject([]));             // false
console.log(isObject("object"));       // false


function isArray(value) {
  return Array.isArray(value);
}
console.log('isArray Tests:');
console.log(isArray([1, 2, 3]));       // true
console.log(isArray([]));              // true
console.log(isArray({}));              // false
console.log(isArray("array"));         // false


function isFunction(value) {
  return typeof value === 'function';
}
console.log('isFunction Tests:');       
console.log(isFunction(() => {}));        // true
console.log(isFunction(123));             // false
console.log(isFunction("function"));      // false
