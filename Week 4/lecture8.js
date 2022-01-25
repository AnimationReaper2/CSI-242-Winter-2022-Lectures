//// Really Basic Scope

// {
//     let i = 5
//     console.log(i)
// }
// console.log(i)
//
// {
//     const j = 5
//     console.log(j)
// }
// console.log(j)

// {
//     var k = 5
// }
// console.log(k)

// function example(){
//     var k = 5
// }
// example()
// console.log(k)

// This here is spooky we do not like this.
// function example(){
//     k = 5
// }
// example()
// console.log(k)

//// Closures

// {
//     let x = "hello" //show what happens when you change to let
//     var sayHello = function(){
//         console.log(x)
//     }
// }

// sayHello()
// console.log(x)

// //For each of these console.log's do you think they will error out or not.
// a = ()=>{
//     var x = "wrong number who dis"
//     var y = "hewwo"
//     // console.log(x,y,z)
//     b = ()=>{
//         var x = "wassup man"
//         var y = "hello"
//         var z = "howdy"
//         // console.log(x,y,z)
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
