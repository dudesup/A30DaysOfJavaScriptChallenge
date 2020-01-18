let isGood = true
isGood ? console.log("Is good"): console.log("Isn't good")
isGood=false
isGood ? console.log("Still good"): console.log("Now isn't good")

//Prompt method
let number = prompt('Enter number', 'number goes here')
console.log(number)

//Confirm method
const agree = confirm('Are you sure?')
console.log(agree) //if you click ok -> returns true, else false

//Date
//const now = new Date()
//const day = now.getDate()
//const month = now.getMonth()+1
//const year = now.getFullYear()
//console.log(`${day}/${month}/${year}`)