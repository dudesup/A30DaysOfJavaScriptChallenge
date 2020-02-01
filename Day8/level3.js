//Level3
//1
const personAccount = {
    firstName: "Charlize",
    lastName: "Therone",
    incomes: {
      salary: 10000,
      bonus: 1000,
      overtime: 120
    },
    expenses: {
      netflix: 16,
      food: 300,
      hobbys: 300
    },
    totalIncome: function() {
      return this.addIncome();
    },
  totalExpense: function() {
      return this.addExpense();
    },
  accountInfo: function() {
      return `${this.firstName} ${this.lastName}`;
    },
  addIncome: function() {
      return this.incomes.salary + this.incomes.bonus;
    },
  addExpense: function() {
      return this.expenses.food + this.expenses.netflix + this.expenses.hobbys;
    },
  accountBalance: function() {
      return this.totalIncome() - this.totalExpense();
    }
  }
  
  console.log(`totalIncome ${personAccount.totalIncome()}`);
  console.log(`totalExpense`, personAccount.totalExpense());
  console.log(`accountInfo`, personAccount.accountInfo());
  console.log('addIncome', personAccount.addIncome());
  console.log('addExpense', personAccount.addExpense());
  console.log(`Account Balance:`, personAccount.accountBalance());
  
  

let users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

//2.a
function signUp(user) {
    let check = false
    users.forEach(e => {
        if (e.email.indexOf(user.email) == -1) {
            check=true
        }
    });
    if (check) {
        users[users.length] = user
    }
}

let newUser1 =  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt:'08/01/2020 9:00 AM',
    isLoggedIn: false
}

let newUser2 = {
    _id: 'abcd',
    username: 'Witcher',
    email: 'geralt@rivia.com',
    password: '12345',
    createdAt:'28/01/2020 12:00 AM',
    isLoggedIn: true
}
console.log(signUp(newUser1))
console.log(signUp(newUser2))


//2.b
function signIn(userName, password){
  let check=false
  users.forEach(e=>{
    if((userName == e.email || userName == e.username)&& password==e.password){
      check=true
    }
  })
  if(check){
    return `Hello, ${userName}`
  }
  else{ return "You do not have an account"}
}


let newUser3 =  {
  _id: 'ab12ex',
  username: 'Alex',
  email: 'alex@alex.com',
  password: '123123',
  createdAt:'08/01/2020 9:00 AM',
  isLoggedIn: false
}

let newUser4 = {
  _id: 'abcd',
  username: 'Triss',
  email: 'triss@triss.com',
  password: '54321',
  createdAt:'29/01/2020 02:30 PM',
  isLoggedIn: true
}

console.log(signIn(newUser3.email, newUser3.password))
console.log(signIn(newUser3.username, newUser3.password))
console.log(signIn(newUser4.username, newUser4.password))


//3.a
function rateProduct(product, userID, rating) {
  products.forEach(e => {
      if (e.name === product) {
          e.ratings.push({ userId: userID, rate: rating })
      }
  });
}


rateProduct('TV','asdfc', 3)
console.log(products)

//3.b
function getRate(productName){
  return products.filter(function(item){return item.name==productName}).
  map(function(item){return item.ratings}).
    flat().
      map(function(item){return item.rate}) 

}

function averag ({avg, n}, x){
  return {
    avg: (x + n * avg) / (n+1),
    n: n+1
  }
}

const totalAvg = function(productName){
  if(getRate(productName).length!=0){
    return getRate(productName).reduce(averag, {avg: 0, n: 0}).avg
  }
  else{return 'None rates'}
}
console.log("Total avgerage mobile phone: "+totalAvg('mobile phone'))
console.log("Total avgerage Laptop: "+totalAvg('Laptop'))
console.log("Total avgerage TV: "+totalAvg('TV'))
console.log(products)

//4
//let newProduct = Object.assign({}, products)
//console.log(newProduct)
function likeProduct(productName, userName) {
  products.forEach(e => {
      if (e.name === productName) {                          
          e.likes.length !== 0 ?
              e.likes.shift() :                 
              e.likes.push(userName);
      }            
  });

  return products;
}

likeProduct('mobile phone', 'abcd');
likeProduct('TV', 'defg');
likeProduct('Laptop', 'hij');
likeProduct('Laptop', 'hij');

