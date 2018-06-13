// ES 6 Syntax
// Declaration of LET, VAR and CONST keywords

function f() {
  var x = 1
  let y = 2
  const z = 3
  {
    var x = 100
    let y = 200
    const z = 300
    console.log('x in block scope is', x)
    console.log('y in block scope is', y)
    console.log('z in block scope is', z)
  }
  console.log('x outside of block scope is', x)
  console.log('y outside of block scope is', y)
  console.log('z outside of block scope is', z)
}

f()

function name (fName, lName){
  //return `Good Evening $(Chilaka) $(Michael)`

  console.log(name(Chilaka, Michael))
}


// // Using array helper function (forEach)
// // forEach Executes the provided function for each element of the array, passing the array element as an argument.

// var colors = ['red', 'green', 'blue']

// function print(val) {
//   console.log(val)
// }

// colors.forEach(print)



// // Map: Creates a new array containing the same number of elements, but output elements are created by the provided function. It just converts each array element to something else.
// var colors = ['red', 'green', 'blue']

// function capitalize(val) {
//     return val.toUpperCase()
// }

// var capitalizedColors = colors.map(capitalize)

// console.log(capitalizedColors)



// // filter

// // Creates a new array containing a subset of the original array. The result has these elements that pass the test implemented by the provided function, which should return true or false.
// var values = [1, 60, 34, 30, 20, 5]

// function lessThan20(val) {
//     return val < 20
// }

// var valuesLessThan20 = values.filter(lessThan20)

// console.log(valuesLessThan20)


// // find

// // Finds the first element that passes the test implemented by the provided function, which should return true or false.
// var people = [
//     {name: 'Jack', age: 50},
//     {name: 'Michael', age: 9}, 
//     {name: 'John', age: 40}, 
//     {name: 'Ann', age: 19}, 
//     {name: 'Elisabeth', age: 16}
//   ]
  
//   function teenager(person) {
//       return person.age > 10 && person.age < 20
//   }
  
//   var firstTeenager = people.find(teenager)
  
//   console.log('First found teenager:', firstTeenager.name)



// //   every

// //   Checks if every element of the array passes the test implemented by the provided function, which should return true or false.
//   var people = [
//     {name: 'Jack', age: 50},
//     {name: 'Michael', age: 9}, 
//     {name: 'John', age: 40}, 
//     {name: 'Ann', age: 19}, 
//     {name: 'Elisabeth', age: 16}
//   ]
  
//   function teenager(person) {
//       return person.age > 10 && person.age < 20
//   }
  
//   var everyoneIsTeenager = people.every(teenager)
  
//   console.log('Everyone is teenager: ', everyoneIsTeenager)


// //   Some
// //   Checks if any element of the array passes the test implemented by the provided function, which should return true or false.
//   var people = [
//     {name: 'Jack', age: 50},
//     {name: 'Michael', age: 9}, 
//     {name: 'John', age: 40}, 
//     {name: 'Ann', age: 19}, 
//     {name: 'Elisabeth', age: 16}
//   ]
  
//   function teenager(person) {
//       return person.age > 10 && person.age < 20
//   }
  
//   var thereAreTeenagers = people.some(teenager)
  
//   console.log('There are teenagers:', thereAreTeenagers)


// //   reduce

// //   Applies a function passed as the first parameter against an accumulator and each element in the array (from left to right), thus reducing it to a single value. The initial value of the accumulator should be provided as the second parameter of the reduce function.
  var array = [1, 2, 3, 4]

// function sum(acc, value) {
//   return acc + value
// }

function product(acc, value) {
  return acc * value
}

//var sumOfArrayElements = array.reduce(sum, 0)
var productOfArrayElements = array.reduce(product, 1)

//console.log('Sum of', array, 'is', sumOfArrayElements)
console.log('Product of', array, 'is', productOfArrayElements)



// // Arrow functions

// // Implementation of very simple functions (like the aforementioned sum or product) requires writing a lot of boilerplate. Is there any remedy for that? Yes, just try arrow functions!
// var array = [1, 2, 3, 4]

// const sum = (acc, value) => acc + value
// const product = (acc, value) => acc * value

// var sumOfArrayElements = array.reduce(sum, 0)
// var productOfArrayElements = array.reduce(product, 1)

// //Arrow functions can also be inline. It really simplifies the code:
// var array = [1, 2, 3, 4]

// var sumOfArrayElements = array.reduce((acc, value) => acc + value, 0)
// var productOfArrayElements = array.reduce((acc, value) => acc * value, 1)



// //Arrow functions can also be more complex and have many lines of code:
// var array = [1, 2, 3, 4]

// const sum = (acc, value) => {
//   const result = acc + value
//   console.log(acc, ' plus ', value, ' is ', result)
//   return result
// }

// var sumOfArrayElements = array.reduce(sum, 0)


// // Classes

// // Which Java developer doesn’t miss classes when switching to a JS project? Who doesn’t like explicit inheritance, like in Java language, instead of writing magic code for prototypal inheritance? Although some JS developers complained, classes have been introduced in ES6. They don’t change the concept of inheritance. They are just syntactic sugar for prototypal inheritance.
// class Point {
//     constructor(x, y) {
//         this.x = x
//         this.y = y
//     }

//     toString() {
//         return '[X=' + this.x + ', Y=' + this.y + ']'
//     }
// }

// class ColorPoint extends Point {
//     static default() {
//         return new ColorPoint(0, 0, 'black')
//     }

//     constructor(x, y, color) {
//         super(x, y)
//         this.color = color
//     }

//     toString() {
//         return '[X=' + this.x + ', Y=' + this.y + ', color=' + this.color + ']'
//     }
// }

// console.log('The first point is ' + new Point(2, 10))
// console.log('The second point is ' + new ColorPoint(2, 10, 'green'))
// console.log('The default color point is ' + ColorPoint.default())


// // Enhanced object literals

// // Object literals have been enhanced. Now we can much more easily:

// //     define fields with variable assignment of the same name
// //     define functions
// //     define dynamic (calculated) properties
// const color = 'red'
// const point = {
//   x: 5,
//   y: 10,
//   color,
//   toString() {
//     return 'X=' + this.x + ', Y=' + this.y + ', color=' + this.color
//   },
//   [ 'prop_' + 42 ]: 42
// }

// console.log('The point is ' + point)
// console.log('The dynamic property is ' + point.prop_42)


// // Template strings

// // Who loves writing large string and variables concatenation? I believe a minority of us. Who hates reading it? I’m sure everyone. 
// // Fortunately, ES6 introduces very easy-to-use string templates with placeholders for variables.
// function hello(firstName, lastName) {
//   return `Good morning ${firstName} ${lastName}! 
// How are you?`
// }

// console.log(hello('Jan', 'Kowalski'))


// // Please note, that we can write multi-line text.

// // Important: Use backticks instead of apostrophes to wrap the text.
// // Default function arguments

// // Don’t you like providing all possible function parameters? Use defaults.

// function sort(arr = [], direction = 'ascending') {
//   console.log('I\'m going to sort the array', arr, direction)
// }

// sort([1, 2, 3])
// sort([1, 2, 3], 'descending')


// //Rest and spread operators

// // Spread

// // It enables extraction of array or object content as single elements.

// // Example — make shallow copy of array:
// var array = ['red', 'blue', 'green']
// var copyOfArray = [...array]

// console.log('Copy of', array, 'is', copyOfArray)
// console.log('Are', array, 'and', copyOfArray, 'same?', array === copyOfArray)


// // merge arrays:
// var defaultColors = ['red', 'blue', 'green']
// var userDefinedColors = ['yellow', 'orange']

// var mergedColors = [...defaultColors, ...userDefinedColors]

// console.log('Merged colors', mergedColors)



// // Rest

// // Would you like to bind the first few function parameters to variables, and others to single variables as an array? Now you can do it quite easily.
// function printColors(first, second, third, ...others) {
//   console.log('Top three colors are ' + first + ', ' + second + ' and ' + third + '. Others are: ' + others)
// }
// printColors('yellow', 'blue', 'orange', 'white', 'black')



// // Destructuring

// // Of array

// // Enables extraction of requested elements from the array and assigning them to variables.
// function printFirstAndSecondElement([first, second]) {
//   console.log('First element is ' + first + ', second is ' + second)
// }

// function printSecondAndFourthElement([, second, , fourth]) {
//   console.log('Second element is ' + second + ', fourth is ' + fourth)
// }


// // Of object

// // Enables extraction of requested properties from the object and assigning them to variables of the same name as properties.
// function printBasicInfo({firstName, secondName, profession}) {
// 	console.log(firstName + ' ' + secondName + ' - ' + profession)
// }

// var person = {
//   firstName: 'John',
//   secondName: 'Smith',
//   age: 33,
//   children: 3,
//   profession: 'teacher'
// }


// // Promises

// // Promise promises (yes, I know it sounds weird) that you would get in future results of deferred or long-running tasks. Promise has two channels: the first for results, the second for potential errors. To get the result, you provide the callback function as the ‘then’ function parameter. To handle errors, you provide the callback function as the ‘catch’ function parameter.

// // Please notice that output of the example might differ for each execution, because of random function call.
// function asyncFunc() {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const result = Math.random();
//         result > 0.5 ? resolve(result) : reject('Oppps....I cannot calculate')
//       }, 1)
//   });
// }

// for (let i=0; i<10; i++) {
// asyncFunc()
//     .then(result => console.log('Result is: ' + result))
//     .catch(result => console.log('Error: ' + result))
// }

// printBasicInfo(person)

// var array = [1, 2, 3, 4, 5]

// printFirstAndSecondElement(array)
// printSecondAndFourthElement(array)
