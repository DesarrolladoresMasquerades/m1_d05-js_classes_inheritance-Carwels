
const person1 = {
    firstName: "Ali",
    age: 23
}

const person2 = {
    firstName: "Giovani",
    age: 55
}

class Person {

    constructor( firstName /*= ""*/, age /*= 0*/ ) { //The = "" and = 0 are the default values if forget to place one of the parameters
        this.firstName = firstName || "", // in the constructor we define and assign to create properties
        this.age = age || 0 // || "" and || 0 are the second way to declare Default value
    }
    tellAge() {
        return this.age
    }
}

const marco = new Person ( "Marco", 48 ) // Here you see the constructor function invoked
const carlos = new Person ( "Carlos", 25 ) // Here you see the constructor function invoked
const carol = new Person ( "Carol" ) // Missing argument

console.log(carol.tellAge())
console.log(marco.tellAge())
console.log(carlos.tellAge())

class Animal {
    constructor(nameOfAnimal, ageOfAnimal){
      this.fur = ""
      this.weight = 0
      this.age = ageOfAnimal
      this.legs = 4
      this.name = nameOfAnimal
    }
  
    speak(){
      return `Hello I am ${this.name}`
    }
  
    walk(){
      return `I am going out alone because I am ${this.age} years old`
    }
  }

  const snowflake = new Animal ( "Snowflake", 3 )

  console.log(
      snowflake.speak(),
      snowflake.walk()
  )

  class Cat extends Animal {
      constructor (nameOfAnimal, ageOfAnimal) {
        super(nameOfAnimal, ageOfAnimal)
        this.kind = "cat"
      }
      speak () {
          return super.speak + ` and I am ${this.kind}`
      }
  }

  class Dog extends Animal {
      constructor (nameOfAnimal, ageOfAnimal) {
        super(nameOfAnimal, ageOfAnimal)
        this.kind = "dog"
      }
      
      speak() {
          return super.speak() + ` and I am ${this.kind}`
      }
  }

  const martini = new Dog("Martini", 12)

  const santana = new Cat("Santana", 9)

  console.log("martini speaks and walks: ", martini.speak(), martini.walk())
  console.log("santana speaks and walks: ", santana.speak(), santana.walk())

  
