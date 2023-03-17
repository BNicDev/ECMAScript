var lastName = "david";
lastName = " nicolas";

console.log(lastName);

let fruit = " apple";
fruit = "kiwi";

console.log(fruit);
//no se puede reasignar un valor con const, ya que es un valor constante
const animal = "dog";
animal = "cat";

console.log(animal);

const fruits = () => {
    if(true){
        var fruit = "apple"; // function scope, se puede accceder fuera de la funcion
        let fruit2 = "kiwi";//block scope, no tiene esa particularidad
        const fruit3 = "banana";//block scope, no tiene esa particularidad
    }
    console.log(fruit);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();