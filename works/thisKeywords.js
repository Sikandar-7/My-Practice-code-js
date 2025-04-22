

console.log("sikandar")

function show() {
    console.log(this);
    
}
show();

//this Inside an Object Method

const person ={
    name: "ALi",
    greet: function () {
        console.log("hello " + this.name)
    },

};

person.greet();

// this with Arrow Functions

const person1 = {
    name: "Sikandar",
    greet: ()=> {
        console.log("hello " + this.name);
    },
};

person1.greet();


// promises
























