const anotherFunction = () =>{
    return new Promise((resolve, reject)=>{
        if(false){
            resolve("hey!");
        }else{
            reject("whoooops!");
        }
    })
}

anotherFunction()
.then(Response => console.log(Response))
.catch(err => console.log(err));
.finally(()=>console.log("finaly"));