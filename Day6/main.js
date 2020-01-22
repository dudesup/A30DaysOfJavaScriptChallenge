//Exercise

//Level1

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//1
for (let i=0; i<=10; i++){
    console.log(i)
}

let i =0
while(i<=10){
    console.log(i)
    i++
}

i =0
do {
    console.log(i)
    i++
}while(i<=10)

//2
for (i=10; i>=0; i--){
    console.log(i)
}

i =10
while(i>=0){
    console.log(i)
    i--
}

i =10
do {
    console.log(i)
    i--
}while(i>=0)

//3
let n=4
for (let j=0; j<=name; j++){
    console.log(j)
}

//4

let t='#'
for (let a=1; a<=7; a++){
    console.log(t)
    t+='#'
}

//5
for (i=0; i<=10; i++){
    console.log(`${i} x ${i} = ${i*i}`)
}

//6
console.log('i  i^2  i^3')
for (i=0; i<=10; i++){
    console.log(`${i} ${i*i} ${i*i*i}`)
}

//7
for(i=0; i<=100; i++){
    if(i%2){ console.log(i)}
}

//8
for(i=0; i<=100; i++){
    if(i%2==1){ console.log(i)}
}

//9
let arrayPrime = new Array(101)
arrayPrime.fill(true)
arrayPrime[0]=false
arrayPrime[1]=false
for(i=2; i<=100; i++){
    if(arrayPrime[i]==true){
         for(j=i+i; j<=100; j=j+i){
             arrayPrime[j]=false
        }
    }
}

for(i=0; i<=100; i++){
    if(arrayPrime[i]==true){
        console.log(i)
    }
}

//10
let sum = 0
for (i=0; i<=100; i++){
    sum+=i
}
console.log(sum)

//11
let sumO = 0
for(i=0; i<=100; i++){
    if(i%2==1){sumO+=i}
}
console.log(sumO)

//12
console.log(`[${sum-sumO}, ${sumO}]`)

//13
