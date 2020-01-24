//declaring a function
function square(){
    let num = 4
    let sq = num*num
    console.log(sq)
}

square()

function add(parm1, parm2){
    let sum = parm1+parm2
    return sum
}

console.log(add(3,4))

//unlimited params

const allNums=(...args)=>{
    console.log(args)
}

allNums(1,2,3,4,5,6,7,8,9)

//normal and arrow function
function s(n){
    return n*n
}
console.log(s(3))

const s1 = n => {return n*n}
console.log(s1(3))

