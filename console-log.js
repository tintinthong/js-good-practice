const foo = {name:'tom', age:30, nervous:false};
const bar = {name:'dick', age:40, nervous:false};
const baz = {name:'harry', age:50, nervous:true};

'Bad Code'

console.log(foo)
console.log(bar)
console.log(baz)

'Good Code'

console.log('%c My Friends', 'color:orange;')
console.log({foo,bar,baz})

console.table([foo,bar,baz]);
