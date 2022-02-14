// Your code here
class Cat {
    constructor(name,female){
        this.name = name;
        this.female = female;
    }
    speak(){
        return `${this.name} says meow!`;
    }
}
Cat.speak;

class Dog {
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
    }
    speak(){
        return `${this.name} says woof!`;
    }
}
Dog.speak;

class Bird {
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
    }
   
    speak() {
        if (this.sex == "male") {
          return `It's me! ${this.name}, the parrot!`
        } else {
          return `${this.name} says squawk!`
        }
      }
    }

