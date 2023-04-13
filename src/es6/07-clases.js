//declara
class user {};
//instancia de una clase
//const newUser = new user();

class User {
    //metodos
    greeting(){
        return "hello";
    }
};

const gndx = new User();
console.log(gndx.greeting());
const bebeloper = new User();
console.log(bebeloper.greeting());

// constructor 

class user{
    //constructor
    constructor(){
        console.log("nuevo usuario");
    }
    greeting(){
        return "hello";
    }
}

const david = new user();

//this
class user {
    constructor(nombre){
        this.nombre = nombre;
    }
    //metodos
    speak(){
        return "hello"
    }
    greeting(){
        return `${this.speak()} ${this.nombre}` ;
    }
}

const ana = new user("ana");
console.log(ana.greeting());

//setters getters

class user {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak(){
        return "hello"
    }
    greeting(){
        return `${this.speak()} ${this.nombre}` ;
    }
    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}
const bebeloper1 = new user("nicolas", 24);
console.log(bebeloper1.uAge)
console.log(bebeloper1.uAge = 20);



