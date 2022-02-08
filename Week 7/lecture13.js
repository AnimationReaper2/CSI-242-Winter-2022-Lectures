////*****************
////*****************
//// Lecture  9: this
////*****************
////*****************

////************************************
//// The Mystery of the Undefined Fluffy
////************************************

// class Cat {
//     constructor(firstName) {
//         this.firstName = firstName;
//     }
    
//     dance(style) {
//         console.log(`Meow, I am ${this.firstName}` +
//         ` and I like to ${style}`);
//         return `Meow, I am ${this.firstName}` +
//         ` and I like to ${style}`;
//     }
// }
// let fluffy = new Cat("Fluffy");

// fluffy.firstName;       // "Fluffy"
// fluffy.dance("tango");  // works!


// let fDance = fluffy.dance;
// fDance("salsa"); //error???

////********************************************
//// Solving the Mystery: JavaScript "Functions"
////********************************************
// JS doesn't really have functions, everything is kinda a method

// function whatIsThis() {
//     console.log("this =", this);
// }


// let o = { myFunc: whatIsThis };
// o.myFunc();  // get "this = o"

// whatIsThis() // get "this" = window aka the global object

// So what happened in the mystery is we called the dance method on nothing aka on the window object
// This means that when in the dance function we were looking for window.firstName which doesn't exist

// There are a few different solutions to this "this" problem
// The obvious one is to only every call methods on objects
// but because JS is hell and madness there are other ways too


////***********************
//// Call & Bind
////***********************

// let fDance = fluffy.dance;

// // fDance.call(fluffy, "tango"); // call on fluffy, passing "tango" as arg
// // whatIsThis.call(fluffy); 
// // fDance("tango");       // error -- this isn't the cat

// let betterDance = fDance.bind(fluffy);
// betterDance("tango");  // ok -- bound so that `this` is Fluffy

////***********************
//// Bind for functions

// function applySalesTax(taxRate, price) {
//     console.log(this, taxRate, price)
//     return price + price * taxRate;
//   }
  
// // "null" for "this" means it doesn't matter what "this" is
// const applyWASalesTax = applySalesTax.bind(null, 0.065);
// console.log(applyWASalesTax(50));  //53.25

// // This isn't exactly great though. As far as I can tell you can't bind later args while leaving initial args still available for input
// // So we can't make an apply local sales tax to $50 function with bind
// const applySalesTaxTo$50 = applySalesTax.bind(null, null, 50);
// console.log(applySalesTaxTo$50("hi"))

// And anyway default args are defined elsewhere so idk
// function applySalesTaxTo$50(taxRate, price = 50) {
//     console.log(this, taxRate, price)
//     return price + price * taxRate;
// }

////*************************************
//// Examples where this becomes relevant
////*************************************
// window.addEventListener('load', (event) => {
//     myBtn = document.querySelector('#main-button');
//     myBtn.addEventListener("click", fluffy.dance);
//     myBtn.addEventListener("click", fluffy.dance.bind(fluffy));
// })


// function popUp(msg) {
//     console.log("Secret message is " + msg);
// }
  
// function handleClick(evt) {
//     let id = evt.target.id;
  
//     if (id === "a") popUp("Apple");
//     else if (id === "b") popUp("Berry");
//     else if (id === "c") popUp("Cherry");
// }
  
// const get = document.getElementById.bind(document);
  
// window.addEventListener("load", ()=>{
//     get('a').addEventListener("click", handleClick);
//     get('b').addEventListener("click", handleClick);
//     get('c').addEventListener("click", handleClick);
// })

// //Alternatively 


// function popUp(msg) {
//     console.log("Secret message is " + msg);
// }
  
// const get = document.getElementById.bind(document);

// window.addEventListener("load", ()=>{
//     get('a').addEventListener("click", popUp.bind(null, "Apple"));
//     get('b').addEventListener("click", popUp.bind(null, "Berry"));
//     get('c').addEventListener("click", popUp.bind(null, "Cherry"));
// });

////****************
//// Arrow Functions
////****************
//// Arrow functions don’t make their own this

// class Cat {
//     constructor(name) {
//         this.name = name;
//     }
  
//     superGreet() {
//         console.log(`#1: I am ${this.name}`);   // works, obvs
    
//         setTimeout(function () {
//             console.log(`#2 I am ${this.name}`);  // ut oh
//             // console.log(this === window)
//             // it's because when the function is called it's being called on nothing aka window
//         }, 500);
    
//         setTimeout(() => {
//             console.log(`#3 I am ${this.name}`);  // yay!
//             // arrow functions carry the "this" with them from whatever space they were defined in
//         }, 1000);
//     }
// }

// let kitty = new Cat("Kitty");
// kitty.superGreet();


// thisArrow = ()=>{console.log("thisArrow:", this)}
// {
//     function hey(){
//         console.log("hey",this)
//         nestedArrow = ()=>{console.log("nestedArrow:", this)}
//         thisArrow()
//         nestedArrow()
//     };
//     hey.call({"hi":"hi"});
// }
// //Stressing here again arrow functions have this as the this in the environnement they were defined


////**************
//// Key Takeaways
////**************
/*  this is a reserved keyword whose value is determined 
    only at the point of function execution.
    If we aren’t calling a function ourselves and we’re 
    letting JavaScript do that work for us (through a 
    callback), we need to ensure JavaScript knows what 
    our this context should be.*/