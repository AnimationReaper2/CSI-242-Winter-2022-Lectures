////*************************************************************************
////*************************************************************************
//// Lecture  9: Asynchronous Javascript. Callbacks, Promises, Async, & Await
////*************************************************************************
////*************************************************************************


// Generally speaking: There is only one JS thread and that can be a bit yikes at times.
// window.addEventListener('load', (event) => {
//     a = 0
//     setInterval(()=>{
//         console.log("hi", a);
//         a+=1;
//     }, 1000)


//     const btn = document.querySelector('button');
//     btn.addEventListener('click', () => {
//         alert('You clicked me!');
//         let pElem = document.createElement('p');
//         pElem.textContent = 'This is a newly-added paragraph.';
//         document.body.appendChild(pElem);
//     });
// })

// But with event listeners we've kind of seen that there can be two things going on "at the same time"
// Or have we? What's going on?

////**************
// The Event Queue
////**************

// setTimeout(function() {
//     console.log('World');
// }, 0);
  
// console.log('Hello');


// Three main types: user input, delayed code, and network events
// We've already talked about user input stuff a lot,
// And delayed code is funny/interesting but it's quirks 
// would end up being distracting
// Today we're going to focus primarily on the network events

////**********
//// Callbacks
////**********
// window.addEventListener('load', (event) => {
//     const btn = document.querySelector('button');

//     function displayImage(blob) {
//         // A blob is a chunk of binary data returned 
//         // in response to a XMLHttps Request
//         let objectURL = URL.createObjectURL(blob);

//         let image = document.createElement('img');
//         image.src = objectURL;
//         document.body.appendChild(image);
//         console.log("appended")
//     }
    
//     function loadAsset(url, type, callback) {
//         // worth noting: this will not work for external assets
//         // without additional work/tooling
//         let xhr = new XMLHttpRequest();
//         xhr.open('GET', url);
//         xhr.responseType = type;
    
//         xhr.onload = function() {
//             callback(xhr.response);
//         };
//         console.log("ready to send")
//         xhr.send(); //this is the asynchronous part. It sets up an event listener
//     }
  
//     btn.addEventListener('click', () => {
//         loadAsset('coffee.jpg', 'blob', displayImage);
//         console.log("loaded")
//     })
// })

//********************Challenge************************
// function printAll() { 
//     printString("A", () => {
//         printString("B", () => { 
//             printString("C", () => {
//             }) 
//         }) 
//     })}
// printAll()
//
// // Write a printString function such that "A", "B", 
// // and "C" are printed out in that order with a 1 
// // second gap between each printing. (Use setTimeout)
//*****************************************************


////*********
//// Promises
////*********
// window.addEventListener('load', (event) => {
//     fetch('coffee.json').then(function(response) {
//         return response.json();
//       }).then(function(json) {
//         let drinks = json;
//         console.log(drinks)
//       }).catch(function(err) {
//         console.log('Fetch problem: ' + err.message);
//     });
    

//     //How to get images via promises & reminder that this is async
//     console.log ('Starting');
//     let image;
    
//     fetch('coffee.jpg').then((response) => {
//         console.log('It worked :)')
//         return response.blob();
//     }).then((myBlob) => {
//         let objectURL = URL.createObjectURL(myBlob);
//         image = document.createElement('img');
//         image.src = objectURL;
//         document.body.appendChild(image);
//     }).catch((error) => {
//         console.log('There has been a problem with your fetch operation: ' + error.message);
//     }).finally(()=>{ console.log("this always runs")});
    
//     console.log ('All done!');


//     // Making your own promises
//     let timeoutPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Success!');
//         }, 2000);
//     });

//     timeoutPromise
//     .then((message) => {
//         alert(message);
//     })

//     timeoutPromise.then(alert)
// });

//********************Challenge************************
// function printAll() {
//     printString("A").then(() => {  
//        return printString("B") 
//     }).then(() => {  
//        return printString("C") 
//     })
// }
// printAll()
//
// // Write a printString promise such that "A", "B", 
// // and "C" are printed out in that order with a 1 
// // second gap between each printing. 
//*****************************************************

////****************
//// Async and Await
////****************
// window.addEventListener('load', (event) => {
//     async function hello() { return "Hello" };
//     hello().then(value => console.log(value));


//     async function myFetch() {
//         let response = await fetch('coffee.jpg');
      
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
      
//         let myBlob = await response.blob();
      
//         let objectURL = URL.createObjectURL(myBlob);
//         let image = document.createElement('img');
//         image.src = objectURL;
//         document.body.appendChild(image);
//       }
      
//       myFetch()
//         .catch(e => {
//           console.log('There has been a problem with your fetch operation: ' + e.message);
//         });
//     // This is pretty awesome the only real downside is that
//     // it might encourage you to do things sequentially that
//     // are better done in parallel

//     function timeoutPromise(interval) {
//         return new Promise((resolve, reject) => {
//             setTimeout(function(){
//                 resolve("done");
//             }, interval);
//         });
//     };

//     async function timeTest1() {
//         await timeoutPromise(1000);
//         await timeoutPromise(100);
//         await timeoutPromise(10);
//     }

//     let startTime = Date.now();
//     timeTest1()
//         .then(() => {
//             let finishTime = Date.now();
//             let timeTaken = finishTime - startTime;
//             console.log("sequential time: " + timeTaken+"ms");
//         })

//     async function timeTest2() {
//         const timeoutPromise1 = timeoutPromise(1000);
//         const timeoutPromise2 = timeoutPromise(100);
//         const timeoutPromise3 = timeoutPromise(10);
        
//         await timeoutPromise1;
//         await timeoutPromise2;
//         await timeoutPromise3;
//     }

//     startTime = Date.now();
//     timeTest2()
//         .then(() => {
//             let finishTime = Date.now();
//             let timeTaken = finishTime - startTime;
//             console.log("paralel time: " + timeTaken+"ms");
//         })
// });

//********************Challenge************************
// function printAll() {
//     await printString("A")  
//     await printString("B") 
//     await printString("C") 
// }
// printAll()
//
// // Write an async printString function such 
// // that "A", "B", and "C" are printed out in that 
// // order with a 1 second gap between each printing. 
//*****************************************************