//Exercises

//Level1
//1
function fullName(name, lastName){
    console.log(`${name} ${lastName}`)
}
fullName('Alicja', 'Krak')

//2
function fullName1(name, lastName){
    return `${name} ${lastName}`
}
console.log(fullName1('Alicja', 'Krak'))

//3
function addNumbers(param1, param2){
    return param1+param2
}
console.log(addNumbers(1, 2))

//4
function areaOfRectangle(length, width){
    return length*width
}
console.log(areaOfRectangle(2,5))

//5
function perimeterOfRectangle(length, width){
    return 2*(length + width)
}
console.log(perimeterOfRectangle(2,5))

//6
function volumeOfRectPrism(length, width, height){
    return length*width*height
}
console.log(volumeOfRectPrism(2,5,3))

//7
function areaOfCircle(radius){
    return Math.PI*radius**2
}
console.log(areaOfCircle(3))

//8
function circumOfCircle(radius){
    return 2*Math.PI*radius
}
console.log(circumOfCircle(3))

//9
function density(mass, volume){
    if(volume==0){
        return 'Volume = 0'
    }
    else{
        return mass/volume
    }
}
console.log(density(4,6))

//10
function speed(distance, time){
    if(time!=0){
        return distance/time
    }
}
console.log(speed(45, 3))

//11
function weight(mass, gravity){
    return mass*gravity
}
console.log(weight(3,9.81))

//12
function convertCelciusToFahrenheit(oC){
    return (oC*9/5)+32
}
console.log(convertCelciusToFahrenheit(14))

//13
function bmiCalc (weight, height){
    let bmi = weight/height**2
    if(bmi<18.5){return 'Underweight'}
    if(bmi<25){return 'Normal weight'}
    if(bmi<30){return 'Overweight'}
    if(bmi>=30){return 'Obese'}
}
console.log(bmiCalc(55, 1.7))

//15
function findMax(a,b,c){
    let max = a
    if(b>max){max=b}
    if(c>max){max=c}
    return max
} 
console.log(findMax(4,5,3))

//Level2
//2
function quadraticEquation(a,b,c){
    let delta = b**2-4*a*c
    if(delta<0){return `Delta <0`}
    else if(delta==0){return ` x0 = ${(-b/2*a)}`}
    else{ return `x1 = ${(-b-Math.sqrt(delta))/2*a}, x2 = ${(-b+Math.sqrt(delta))/2*a}`}
}
console.log(quadraticEquation(1,5,3))

//4
function date(){
    let today = new Date
    return ("0" + today.getDate()).slice(-2) + "-" + ("0"+(today.getMonth()+1)).slice(-2) + "-" +
    today.getFullYear() + " " + ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2);

}
console.log(date())

//5
function swapValues(x,y){
    let helpVar = x
    x=y
    y=helpVar
    console.log(`${x}, ${y}`)
}

swapValues(1,2)

//6
function reverseArray(arr){
    let revArr = []
    for(i=arr.length; i>=0; i--){
        revArr.push(arr[i])
    }
    return revArr
}
let arr = [1,2,3,4,5]
console.log(arr)
console.log(reverseArray(arr))

//7
function capitalizeArray(cA){
    return cA.map(function(x){return x.toUpperCase()})
   
}
capitalizeArr = ['a', 'b', 'c', 'd', 'g', 't', 'e', 'g', 'h', 's', 'j']
console.log(capitalizeArray(capitalizeArr))

//15
function randomUserIp(){
    return Math.random().toString(36).substr(2,9)
}
console.log(randomUserIp())

//16
var macAdd = 'xx:xx:xx:xx:xx:xx'.replace(/x/g, function(){
    return '0123456789abcdef'.charAt(Math.floor(Math.random()*16))
})
console.log(macAdd)

//18
function userIdGenerator(){
    return Math.random().toString(36).substr(2,7)
}

console.log(userIdGenerator())

//Level3
//7
  function acdsf(hor, num){
      let a = []
      if(hor=='hexa'){
          for(i=0; i<num; i++){
            var hex = '#xxxxxx'.replace(/x/g, function a(){
                return '0123456789abcdef'.charAt(Math.floor(Math.random()*16))
            })
            a.push(hex)
          }
        }
        else if(hor=='rgb'){
            for(i=0; i<num; i++){
                var rgb = 'rgb(a, a, a)'.replace(/a/g, function a(){
                return Math.floor(Math.random()*256)
            })
            a.push(rgb)
          }
      }
      return '['+a+']'
  }
console.log(acdsf('hexa', 3))

//8
function shuffleArray(randomArray){
    let napis = 'x '.repeat(Math.floor(Math.random()*20))+'x'
    napis =  napis.replace(/x/g, function b(){
        return Math.floor(Math.random()*500) // tablica z losowymi liczbami
        //return Math.random().toString(36).substr(2,1) // tablica z losowymi literami i cyframi
    })
    return napis.split(' ')
}

console.log(shuffleArray([]))

//9_ver1
function factorial(numb){
    if(numb==0 || numb==1){
        return 1
    }
    else{
        var result = (numb*factorial(numb-1))
        return result
    }
}

console.log(factorial(4))

//9_ver2
function factorial2(numb){
    if(numb==0 || numb==1){
        return 1
    }
    else{
        var result = 1
        for(i=1; i<=numb; i++)
            result*=i
    }
    return result
}

console.log(factorial2(4))

//11
function sum(){
    var sum = 0
    for(i=0; i<arguments.length; i++){
        if(typeof(arguments[i])==typeof(1)){
            sum+=arguments[i]
        }
        else {'It is not a number type'}     
    }
    return sum
}

console.log(sum(1,2,3,45,6,4,3))

//13
function average(){
    var sum = 0
    for(i=0; i<arguments.length; i++){
        if(typeof(arguments[i])==typeof(1)){
            sum+=arguments[i]
        }
        else { return 'One of items is not a number type'}     
    }
    if(arguments.length!=0){
        return sum/arguments.length
    }
    else{return 'You are not smart'}
}

console.log(average(2,4,11, 423, 132123, 112 ,43))

//14
function modifyArray(){
    if(arguments.length>=5 && typeof(arguments[4])==typeof('hello')){
        arguments[4]=arguments[4].toUpperCase()
        return arguments
    }
    else{return 'Not found'}
}

console.log(modifyArray('a', 'ha', 4, 3, 5, 3))

//16
function uniqueFunction(arr){
    arr.sort()
    for(i=0; i<arr.length-1; i++){
        if(arr[i]==arr[i+1])
            return'It is not unique'
    }
    return 'It is unique'
}

console.log(uniqueFunction([1,2,5, 3, 2, 2,3,4,5,6]))

//17
function sameDataType(arr){
    return  arr.every( (val,i, arr) => typeof val === typeof arr[0])
}
console.log(sameDataType([1, "hello", false]))
console.log(sameDataType([1, 2, 3]))

//19
function sevenRandomNumbers(){
    var range = [0,1,2,3,4,5,6,7,8,9]
    var rand7NumsArr = []
    for(i=0; i<7; i++){
        var anotherItem = Math.floor(Math.random()*(10-i))
        rand7NumsArr.push(range[anotherItem])
        range.splice(anotherItem,1)
    }
    return rand7NumsArr
}
console.log(sevenRandomNumbers())

//19_ver2
//if the order is not important then we can just delete 3 items
function sevenRandomNumbers1(){
    var range = [0,1,2,3,4,5,6,7,8,9]
    for(i=0; i<3; i++){
        var anotherItem = Math.floor(Math.random()*(10-i))
        range.splice(anotherItem,1)
    }
    return range
}
console.log(sevenRandomNumbers1())

