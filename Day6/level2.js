var countries1 = [
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
  

//1
console.log(Math.random().toString(36))

//2
let hex = '0123456789abcdef'
let randomHexNum = ''

for(let i = 0; i<8; i++){
    let indx = Math.round(Math.random()*hex.length-1)
    randomHexNum += hex[indx]
}
console.log(randomHexNum)

//3
console.log(`rgb(${rgb()}, ${rgb()}, ${rgb()})`)

function rgb(){
    let x = Math.round(Math.random()*255)
    return x
}

//4
console.log(countries1.map(function(x){return x.toUpperCase()}))

//5
console.log(countries1.map(function(x){return x.length}))

//6
console.log(countries1.map(function(x){return [x, x.slice(0,3).toUpperCase(), x.length]}))

//7
let landArr = []
for (i = 0; i<countries1.length; i++){
    if(countries1[i].match(/land/)){
        landArr.push(countries1[i])
    }
}
console.log(landArr)

//8
let iaArr = []
for (i = 0; i<countries1.length; i++){
    if(countries1[i].match(/ia$/)){
        iaArr.push(countries1[i])
    }
}
console.log(iaArr)

//9
let maxLetter = countries1.map(function(x){return x.length})
maxLetter.sort()
console.log(maxLetter[maxLetter.length-1])