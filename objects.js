// Hi, how to difine an object in java script?
// Can any one explain?
// An object syntax has always a {}

// Let's define an object

const myObj = {
   
    name : "Apon Roy",
    id : "22-46899-1",
    courseName : "Operating System",
    Section : "A"
}

// We can access an object via two ways.
// By a dot operation.
// By Third brackets

// console.log(typeof myObj);

// console.log(myObj.name);

console.log(myObj["name"]);

myObj.greetings = function() {

    console.log(`Helllo there, my name is ${this.name}`);
}

console.log(myObj.greetings());

// console.log(myObj);