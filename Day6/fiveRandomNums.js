//Exercise

//Level1
//13
let randomNums = new Array(5)
for(let i =0;i<randomNums.length; i++){
    randomNums[i]=Math.random()
}

console.log(randomNums)

//14
let randomNumsUnique = new Array(5)
for(let i =0;i<randomNumsUnique.length; i++){
    randomNumsUnique[i]=Math.random()+i
}

console.log(randomNumsUnique)

//15
console.log(Math.random().toString(36).substr(7))