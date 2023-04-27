let str = null;
console.log(str?.length); // undefined (nullish)

str = 'Hello';
console.log(str?.length); // 5 (not nullish)
