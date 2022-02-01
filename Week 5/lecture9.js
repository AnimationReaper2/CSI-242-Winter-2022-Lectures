////**********************************************************************************************
////*********************************************************************************************
//// Lecture  9: More Scope, Closures, and maybe Iterator functions
////**********************************************************************************************
////**********************************************************************************************



////************
// Review Basics
////************

// //For each of these console.log's what will happen when they are called?
// a = ()=>{
//     var x = "wrong number who dis"
//     var y = "hewwo"
//     // console.log(x,y,z)
//     b = ()=>{
//         var x = "wassup man"
//         var y = "hello"
//         var z = "howdy"
//         console.log(x,y,z)
//         c = ()=>{
//             var x = "wassup"
//             var y = "hey"
//             // console.log(x,y,z)
//             d = ()=>{
//                 var x = "sup"
//                 // console.log(x,y,z)
//             }
//             d()
//         }
//         c()
//     }
//     b()
// }
// a()


// //********************Challenge************************
//What gets console.log'd out here and why.
// var a = 1
// function example1(){
//     {
//         let a = 2
//         function example2(){
//             console.log(a);
//             a = 3
//         }
//         function example3(){
//             console.log(a)
//         }
//     }
//     function example4(){
//         var a = 4
//         example2()
//         example3()
//         console.log(a)
//     }
//     a = 5
//     example4()
// }

// console.log(a)
// example1()
// console.log(a)


////*********
//// Closures
////*********
// {
//     x = "hello" //show what happens when you change to let
//     var sayHello = function(){
//         console.log(x)
//     }
// }

// sayHello()
// console.log(x)

// count = function(){
//     counter = 0
//     count = function(){
//         return counter += 1
//     }
//     return counter
// }
// console.log(count())
// console.log(count())
// console.log(count())
// console.log(count())


// {
//     let counter = 0
//     var count = ()=>{
//         counter +=1
//         return counter
//     }
// }

////***************************
//// Map, Reduce, Filter, Every
////***************************
// const numbers = [10, 5, 2, 1];
// function myMapper(num) {
//     return num * 10;
// }
// console.log(numbers.map(myMapper))

// function myReducer(total, num) {
//     // console.log("t,n:",total, num)
//     return total - num;
// }

// console.log(numbers.reduce(myReducer))

// function myFilter(num){
//     return num >= 3;
// }

// console.log(numbers.filter(myFilter))

// console.log(numbers.every(myFilter))

// function myEvery(num){
//     return num >= 0;
// }

// console.log(numbers.every(myEvery))