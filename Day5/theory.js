const numbers = [0, 3.14, 9.81, 100, 920.1]
const fruits = ['banana', 'grape', 'apple', 'mango']
const countries = ['Finland', 'Denmark', 'Sweden', 'Iceland', 'Poland', 'Germany']

console.log(numbers)
console.log(numbers.length)
console.log(fruits)
console.log(fruits.length)
console.log(countries)
console.log(countries.length)


//array can have items of different data types
const arr = ['Hello', 250, true, {country: 'Finland', city: 'HElsinki'}, 
{skills: ['HTML', 'CSS', 'JS', 'React', 'Python']}]
console.log(arr) 

//create an array using split
let js = 'javascript'
const charInJS = js.split('')
console.log(charInJS)

let txt = 'I know nothing'
const txtArr = txt.split(' ')
console.log(txtArr)
console.log(txtArr[1])

//fill all the array elements with a static value
const fillArray = Array(8).fill('X')
console.log(fillArray)

//concatenate
const firstList = [1,2,3]
const secondList = [4,5,6]
const thirdList = firstList.concat(secondList)
console.log("First list: "+ firstList + " second list: "+ secondList+" third list: "+thirdList)

//check items in a list
const names = ['Adam', 'Eric', 'Julia', 'Alice', 'John', 'Adam', 'Adam']
let index = names.indexOf('Alice')

index != -1 ? console.log('This name does exist in the array'): console.log('This name does not exist in the array')
console.log(names.lastIndexOf('Adam'))
console.log(names.includes('Alice'))
console.log(names.includes('Bob'))

//convert array to string
console.log(names.toString())

//joining array elements
console.log(names.join(' # '))

//slice
console.log(names.slice(1,4))

//push, pop, shift, unshift, reverse
console.log(names.push('Edith')) //adding item in the end
console.log(names.pop()) //removing item in the end
console.log(names.shift()) //remove the item from the beginning 
console.log(names.unshift('Diana')) // adding item in the beginning

//reversing
console.log(names.reverse())

//sort
console.log(names.sort())

//Array of arrays
const firstNums = [1,2,3]
const secondNums = [4,5,6]

const arrayOfArrays = [firstNums, secondNums]
console.log(arrayOfArrays)
console.log(arrayOfArrays[0])
console.log(arrayOfArrays[1])