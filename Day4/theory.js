//if
let num = 3
if (num>0){
    console.log(`${num} is a positive number`)
} 
else if(num==0) {
    console.log(`${num} is zero`)
}
else {
    console.log(`${num} is a negative number`)
}

//switch
let wether = 'cloudy'
switch(wether) {
    case 'rainly':
        console.log('Rainly')
        break
    case 'cloudy':
        console.log('Cloudy')
        break
    default:
        console.log('Probably sunny')
}

//Ternary Operators
let isRaining = true
isRaining ? console.log('You need an umbrella') : console.log('Youd on not need an umbrella')

