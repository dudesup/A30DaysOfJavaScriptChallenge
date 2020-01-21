//Exercises

//Level1
//1
let age = prompt('Enter your age: ')

if(age>=18){
    console.log('You are old enough to drive')
}
else {
    console.log(`You are left with ${18-age} years to drive`)
}

//3
let a = 4
let b = 3
a>b ? console.log(`${a} is grater than ${b}`):console.log(`${b} is grater than ${a}`)

//4
let number = prompt('Enter a number: ')
number%2 ? console.log(`${number} is an odd number`):console.log(`${number} is an even number`)

//Level2
//1
let note = prompt("Enter student's note: ")

if(note>=90){console.log('A')}
else if(note>=70 && note<90){console.log('B')}
else if(note>=60 && note<70){console.log('C')}
else if(note>=50 && note<60){console.log('D')}
else{console.log('F')}

//2
let season = prompt('Enter a month: ')
if(season=='September' || season=='October' || season=='November'){
    console.log('The season is Autumn')
}
else if(season=='December' || season=='January' || season=='February'){
    console.log('The season is Winter')
}
else if(season=='March' || season=='April' || season=='May'){
    console.log('The season is Spring')
}
else if(season=='June' || season=='July' || season=='August'){
    console.log('The season is Summer')
}
else{console.log("It's not a month")}

//3
let day = prompt('Enter a day: ')
if (day.toLowerCase == 'saturday' || day.toLowerCase == 'sunday'){
    console.log(`${day} is a work day`)
}
else{
    console.log(`${day} is a weekend day`)
}

//Level3
//1
let daysOfMonth = prompt('Enter a month: ')
daysOfMonth.toLowerCase
if(daysOfMonth == 'january' || daysOfMonth == 'march' ||daysOfMonth == 'may' ||daysOfMonth == 'july' ||daysOfMonth == 'august' ||daysOfMonth == 'october' ||daysOfMonth == 'december'){
    console.log(`${daysOfMonth} has 31 days`)
}
else if(daysOfMonth == 'february'){
    console.log(`${daysOfMonth} has 28 or 29 days`)
}
else {
    console.log(`${daysOfMonth} has 30 days`)
}