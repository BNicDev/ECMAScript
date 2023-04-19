async function* anotherGenarator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenarator();
other.next().then(response=>console.log(response.value));
other.next().then(response=>console.log(response.value));
other.next().then(response=>console.log(response.value));
console.log("hello!")

async function arrayOfNames(array){
    for await (let value of array){
        console.log(value);
    }
}
const names = arrayOfNames(["oscar", "david", "ana"]);
console.log("after")
