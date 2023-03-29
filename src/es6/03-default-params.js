function newUser(name, age, country){
    var name = name || "oscar";
    var age = age || 34;
    var country = country || "MX"
    console.log(name,age,country);
}

newUser();

function newAdmin(name="oscar", age = 32, country = "cl"){
    console.log(name,age,country);
}

newAdmin("nicolas", "25", "arg");