//Exercises

//Level1
//1
let firstName = 'Charlize', lastName = 'Therone', city = 'Hollywood',
    age = 36, isMarried = false
    
let date = new Date
let year = date.getFullYear()

console.log('first name: '+typeof firstName)
console.log('last name: '+typeof lastName)
console.log('city: '+typeof city)
console.log('age: '+typeof age)
console.log('isMarried: '+typeof isMarried)
console.log('year: '+typeof year)

//2 
console.log('10'==10)
console.log('10'===10)

//3
console.log(parseInt('9.8')==10)

//4
let isTrue = true
true ? console.log('It is true'): console.log('It is false')
isTrue ? console.log('Also true'): console.log('False')
5>3 ? console.log('5>3: true'): console.log('False')

isTrue=false

false ? console.log('Is true'): console.log('False is false')
isTrue ? console.log('Also true'): console.log('Now false')
5==3 ? console.log('You dumb'): console.log('Ofcourse it is false')

//5
console.log(4>3)
console.log(4>=3)
console.log(4<3)
console.log(4<=3)
console.log(4==4)
console.log(4===4)
console.log(4!=4)
console.log(4!==4)
console.log(4!='4')
console.log(4=='4')
console.log(4==='4')
console.log('python'.length!='jarson'.length)

//6
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

//7
let today = new Date

console.log(today.getFullYear())
console.log(today.getMonth()+1)
console.log(`${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`)
console.log(today.getDate())
console.log(today.getHours())
console.log(today.getMinutes())
console.log(today.getTime())

//Level2
//1
let base = prompt('Enter base of triangle: ')
let heigh = prompt('Enter height of triangle: ')
console.log('The area of the triangle is '+0.5*base*heigh)

//2
let a = prompt('Enter side a of triangle: ')
let b = prompt('Enter side b of triangle: ')
let c = prompt('Enter side c of triangle: ')
console.log('The perimeter of the triangle is '+(parseInt(a)+parseInt(b)+parseInt(c)))

//3
let length = prompt('Enter length of rectangle: ')
let width = prompt('Enter width of rectangle: ')
length=parseInt(length)
width=parseInt(width)
console.log('area='+length*width+' and perimeter='+(2*(length+width)))

//4
let radius = prompt('Enter radius of the circle: ')
radius=parseInt(radius)
console.log('area of circle='+Math.PI*radius*radius+' circumference of a circle='+2*Math.PI*radius)

//5
let varA=0
console.log('y='+(2*varA-2))
console.log('x='+((varA+2)/2))

//6
let x1=2
let y1=2
let x2=6
let y2=10
console.log('m='+(y2-y1)/(x2-x1))

//8
let deltaA = 1
let deltaB = 6
let deltaC=9
let delta = deltaB**2 - 4*deltaA*deltaC
delta==0 ? console.log(`x0=${-deltaB/2*deltaA}`) : console.log(`x1=${(-deltaB-Math.sqrt(delta))/2*deltaA}, x2=${(-deltaB+Math.sqrt(delta))/2*deltaA}`)

//9
let hours = prompt('Enter hours:')
let rate = prompt('Enter rate per hour: ')
console.log(parseInt(hours)*parseInt(rate))

//10
let myName = 'Daria'
myName.length>7 ? console.log('My name is long') : console.log('My name is short')

//11
let fName = 'Charlize'
let lName = 'Therone'
fName.length>lName.length ? console.log(`Your first name, ${fName} is longer than your family name, ${lName}`) 
: console.log(`Your first name, ${fName} is shorter than your family name, ${lName}`)

//12
let myAge = 250
let yourAge = 25
myAge>yourAge ? console.log(`I am ${myAge-yourAge} older than you`) : console.log(`You are ${yourAge-myAge} older than me`)

//13
let yourBirthYear = prompt('Enter your birth year: ')
let todayYear = today.getFullYear()
let myYears = todayYear - parseInt(yourBirthYear)
myYears>17 ? console.log(`You are ${myYears}. You are old enough to drive`) : console.log(`You are ${myYears}. You will be allowed to drive after ${18-myYears}`)

//14
let numberOfYoursYouLive = prompt('Enter number of yours you live: ')
console.log(`You lived ${parseInt(numberOfYoursYouLive)*365*24*60*60} seconds`)

//15
console.log(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}`)
console.log(`${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`)
console.log(`${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`)

//Level3 
//1
let h, min, mo, da
today.getDate()<10 ? da=`0${today.getDate()}` : da=`${today.getDate()}`
today.getMonth()+1<10 ? mo=`0${today.getMonth()+1}` : mo=`${today.getMonth()+1}`
today.getHours()<10 ? h=`0${today.getHours()}` : h=`${today.getHours()}`
today.getMinutes()<10 ? min=`0${today.getMinutes()}` : min=`${today.getMinutes()}`
console.log(`${today.getFullYear()}-${mo}-${da} ${h}:${min}`)
