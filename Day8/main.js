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
let users = {
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

