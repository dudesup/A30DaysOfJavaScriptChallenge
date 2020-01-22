//Exercise 
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]


//Level1
//1
const emptyArr = new Array()
console.log(emptyArr)

//2
const xItemArr = new Array(7)
xItemArr.fill(7)
console.log(xItemArr)

//3
console.log(xItemArr.length)

//4
console.log(`first item: ${xItemArr[0]}, middle item: ${xItemArr[xItemArr.length/2]}, last item: ${xItemArr[xItemArr.length-1]}`)

//5
const mixedDataTypes = ['Nina', 3, 5.76, {city: ['New York', 'Los Angeles', 'Oslo']}, true]

//6
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//7
console.log(itCompanies)

//8
console.log(itCompanies.length)

//9
console.log(`first company: ${itCompanies[0]}, middle company: ${itCompanies[itCompanies.length/2]}, last company: ${itCompanies[itCompanies.length-1]}`)

//10
console.log(itCompanies.toString())

//11
console.log(itCompanies.toString().toUpperCase())

//12
console.log(itCompanies.toString()+ ' are big IT companies')

//13
let companyName = 'Facebook'
itCompanies.includes(companyName) ? console.log(companyName) : console.log(`A ${companyName} is not found`)

//14
for (let i = 0; i<companyName.length-1; i++){
    if(itCompanies[i].indexOf('o') == itCompanies[i].lastIndexOf('o')){
        console.log(itCompanies[i])
    }
}

//15
console.log(itCompanies.sort())

//16
console.log(itCompanies.reverse())

//17
console.log(itCompanies.slice(0, 3))

//18
console.log(itCompanies.slice(itCompanies-3, itCompanies.length-1))

//19
itCompanies.length%2 ?  console.log(itCompanies.slice(itCompanies.length/2, itCompanies.length/2+1)):console.log(itCompanies.length/2)

//20
console.log(itCompanies.shift())

//22
console.log(itCompanies.pop())

//23
console.log(itCompanies.splice())

//Level2
//1

console.log(countries)
console.log(webTechs)

//2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const textArr = text.slice('')
console.log(textArr)
console.log(textArr.length)

//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if(shoppingCart[0]!='Meat'){
    shoppingCart.unshift('Meat')
}
if(shoppingCart[shoppingCart.length-1]!='Sugar'){
    shoppingCart.push('Sugar')
}

shoppingCart[shoppingCart.indexOf('Tea')]='Green Tea'

//4
countries.includes('Ethiopia') ? console.log(countries[countries.indexOf('Ethiopia')].toUpperCase()): countries.push('Ethiopia')

//5
countries.includes('Sass') ? console.log('Sass is a CSS preprocess'): console.log(countries.push('Ethiopia'))

//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

//Level3
//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

console.log(ages.sort())
console.log(`min age=${ages[0]}, max age=${ages[ages.length-1]}`)

ages.length%2 ? console.log(`median=${(ages[ages.length/2]+ages[ages.length/2+1])/2}`): console.log(`median=${ages[ages.length/2]}`)

let sum=0
for(i=0; i<ages.length-1; i++){
    sum+=ages[i]
}
console.log(`sum=${sum}`)

console.log(`range=${ages[ages.length-1]-ages[0]}`)