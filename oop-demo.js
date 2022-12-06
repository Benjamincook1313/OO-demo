

const meal = {
  appetizer: "chips & salsa",
  entree: "carne asada burrito",
  dessert: "churros",
  drink: "Dr. Pepper"
}

meal["entree"]

// Destructuring
// let {dessert, entree, appetizer, drink} = meal;

// renaming 
// let {drink: bestSodaEver, dessert, entree} = meal;

// let myEntree = meal.entree
// let dessert = meal.dessert
let order = 1;

// for(let key in meal){
//   console.log(`the key is ${key}, the value is ${meal[key]}`);
//   // order++
// }

const person = {
  firstName: "Benjamin",
  "lastName": "Cook",
  age: 30
}

person.job = "Devmountain Mentor";

// person["pets"] = ["Dog", "Fish", "Chipmunk"];
person["pets"] = {"dog": "Alaska", shrimp: "BubbaGump", "chipmunk": "chip"};


delete person.pets.shrimp

// console.log(person.pets);

let teams = {
  team1: ["ryan", "alex", "wyatt", "tj"],
  team2: ["henry", "cole", "charlie", "zeke"],
  team3: ["porter", "blake", "june", "owne"],
  team4: ["brian", "riley", "ezra", "jordan"],
  team5: ["grey", "milo", "mckay", "leo"],
}

// let {team1, team2, team3} = teams;

// let myObj = {team1, team2, team3}

delete teams.team4
teams.team1.shift()
// console.log(teams);


class Dog {
  constructor(name, breed, age){
    this.name = name,
    this.breed = breed,
    this.age = age
  }

  speak(){
    console.log(`My name is ${this.name}`)
  }

}

let dog1 = new Dog("Alaska", "Cockapoo", 3);
let dog2 = new Dog("Spot", "Poodle", 8);


// console.log(dog1.name, dog2.name);
// dog1.speak()
// dog2.speak()

class Puppy extends Dog {
  constructor(name, breed, age, level, matureAge){
    super(name, breed, age)
  
    this.level = level,
    this.matureAge = matureAge

  }

  levelUp(){
    this.level++
  }

  birthday(){
    this.age++
  }

  isMature(){
    if(this.age >= this.matureAge){
      return new Dog(this.name, this.breed, this.age)

    }else{
      console.log("this Puppy is not mature yet")
    }
  }
}

let myPuppy = new Puppy("Toby", "Lab", 2, 8, 3)

myPuppy.levelUp()
console.log(myPuppy.level);
myPuppy.speak()

myPuppy.birthday()

myPuppy = myPuppy.isMature()

console.log(myPuppy);
