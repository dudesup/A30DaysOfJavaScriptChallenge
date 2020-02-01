//Exercises

//Level1
//1
let dog = {}

//2
console.log(dog)

//3
dog = {
    name: 'Leon',
    legs: 4,
    color: ['brown', 'white'],
    age: 1.5,
    bark: function(){
        return 'woof woof'
    }
}

//4
let dogValues = Object.values(dog)
console.log(dogValues)

//5
dog.breed = 'mongrel'
dog.getDogInfo = function(){
    let dogBark = this.bark()
    let dogFullColor = this.color.splice(0, this.color.length).join(' and ')
    return this.name + " " + "is "+dogFullColor + " "+dogBark 
}

console.log(dog)
console.log(dog.getDogInfo())

//Level2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

//1
function manySkills(object) {
  let count = 0;
  let arr = Object.entries(object);
  let name
  for (let i = 0; i < arr.length; i++) {
      if (arr[i][1].skills.length >count) {
          count=arr[i][1].skills.length
          name = arr[i][0]
      };
  };
  return name;
};

console.log(manySkills(users));

//2
function loggedUsers(object){
  let count = 0
  let point =0
  let arr = Object.entries(object);
  for (i=0; i< arr.length; i++){
    if(arr[i][1].isLoggedIn == true){
      count++
    }
    if(arr[i][1].points>=50){
      point++
    }
  }
  return [`Logged users: ${count}, users having 50 or more points: ${point}`]
}

console.log(loggedUsers(users))

//3
function mern(object){
  let name = []
  let arr = Object.entries(object);
  for (i=0; i< arr.length; i++){
    if(arr[i][1].skills.indexOf('MongoDB')>-1 &&
       arr[i][1].skills.indexOf('Express')>-1 &&
       arr[i][1].skills.indexOf('React')>-1 &&
       arr[i][1].skills.indexOf('Node')>-1 ){

      name.push(arr[i][0])
    }
  }
  return name
}

console.log(mern(users))

//4
let newName = Object.assign({ Alicia:{
  email: 'alicia@alicia.com',
  skills: ['Java', 'Python', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
  age: 23,
  isLoggedIn: false,
  points: 50
}}, users)
console.log(newName)

//5
let key = Object.entries(users)
console.log(key)

//6
let valuesOfUsers = Object.values(users)
console.log(valuesOfUsers)