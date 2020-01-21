//Exercises

//Level1
//1
let age = prompt('Enter your age: ')
let todayYear = (new Date).getFullYear()

if(todayYear-age>=18){
    console.log('You are old enough to drive')
}
else {
    console.log(`You are left with ${18-age} years to drive`)
}

//2

