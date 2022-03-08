////**********************************************************
////**********************************************************
//// Lecture 18: React: wrapping up events, & Component Design
////**********************************************************
////**********************************************************bi

console.log("hi");
addEventListener("load",()=>{
    ReactDOM.render(<App />,
        document.getElementById("root"));

//**************************************
// Async setState and setState Callbacks
//**************************************

    // function App() {
    //     const [num, setNum] = React.useState(0);
        
    //     function up1() { setNum(num + 1); }
    //     function upN(n) {
    //         var a = 0;
    //         while(a < n){
    //             setNum(num + 1);
    //             a++;
    //         }
    //     }

    //     return (
    //         <div>
    //             <h3>Count: {num}</h3>
    //             <button onClick={up1}>Up By 1</button>
    //             <button onClick={()=>{upN(2)}}>Up By 2</button>
    //         </div>
    //     );

    // }
    // Doesn't work 
    // what happens here is that each setNum basically queue's up a update and rerender
    // but the second one get's queued up before the first one finishes
    // and has num as what ever it was when it got queued


    // Solution:
    // If you pass in a callback function to setNum, the callback will get placed on the queue
    // And so when the function comes off the queue all the updates will have happened
    // the callback function get's the current value of the State var
    // and so it has the most up to date one value and can update with that.
    
    // function upN(n) {
    //     var a = 0;
    //     while(a < n){
    //         setNum((n)=>{return n+1});
    //         a++;
    //     }
    // }
    
    // I'm gonna be honest, this is kinda dumb, idk it feels like a lot, and the documentation for this sucks
//   }


//   // More better mapping, rotating the state array

//     function App() {
//         console.log("app renders");
//         var [titles, setTitles] = React.useState(["pal", "friend", "dude", "colleague"]);
//         return (
//         <div>
//             <p>
//                 Hello my {titles[0]}
//             </p>
//             {titles.map(
//                 (title)=>{
//                     return(
//                     <button key={title} onClick={(event)=>{
//                         var rot = titles.indexOf(event.target.innerHTML);
//                         titles = titles.map((val, i) => titles[(i + rot) % 4])
//                         setTitles(titles);
//                         console.log(titles)
//                         // now this works
//                     }}>
//                         {title}
//                     </button>)}
//             )}
//         </div>
//         );
//     }

//     // filtering

//     function App() {
//         console.log("app renders");
//         var [titles, setTitles] = React.useState(["pal", "friend", "dude", "colleague"]);
//         return (
//         <div>
//             <p>
//                 Hello my {titles[0]}
//             </p>
//             {titles.map(
//                 (title)=>{
//                     return(
//                     <button key={title} onClick={(event)=>{
//                         var lastChar = title.charAt(title.length - 1);
//                         titles = titles.filter((val) => val.charAt(val.length - 1) !== lastChar)
//                         setTitles(titles);
//                         console.log(titles)
//                         // now this works
//                     }}>
//                         {title}
//                     </button>)}
//             )}
//         </div>
//         );
//     }

//**************************************
// Making stable keys
//**************************************

    // function rollDice(){
    //     return Math.floor(Math.random() * (6) + 1);
    // }

    // function DiceButton(props){
    //     return( 
    //         <button onClick={(event)=>{
                
    //             var updatedDice = props.dice.filter((die) => die !== props.die);
    //             // var updatedDice = props.dice.filter((die) => die.val !== props.die) // For stable version
    //             props.setDice(updatedDice);
    //         }}>
    //             {props.die}
    //         </button>
    //     )
    // }
    
    // function App() {
    //     console.log("app renders");
    //     var [dice, setDice] = React.useState([rollDice(),rollDice(),rollDice(),rollDice()]);
    //     // var [dice, setDice] = React.useState(
    //     //     [
    //     //         {val: rollDice(), id: uuid.v4()},
    //     //         {val: rollDice(), id: uuid.v4()},
    //     //         {val: rollDice(), id: uuid.v4()},
    //     //         {val: rollDice(), id: uuid.v4()}
    //     //     ]
    //     // );
    //     console.log("setup")
    //     return (
    //     <div>
    //         <p>
    //             Rolled: 
    //         {
    //             dice.map(
    //                 function(die, i){
    //                     // key = window.idCounter();
    //                     // console.log(key);
    //                     return(
    //                         <DiceButton 
    //                             key={i} // unstable
    //                             die = {die}
    //                             // look at how the same button has different keys at different times / filters
    //                             // key={uuid.v4()} // still unstable
    //                             // key={die.id} // stable w/ lines 139 to 146 uncommented
    //                             // die={die.val} 
    //                             setDice={setDice} 
    //                             dice = {dice}/>
    //                     )
    //                 }
    //             )
    //         }
    //         </p>
    //     </div>
    //     );
    // }


//*****************
// Component Design
//*****************

// function sum(array){
//     var ret = 0;
//     for (let i = 0; i < array.length; i++) {
//         ret += array[i];
//     }
//     return ret;
// }

// function getRolls(numDice){
//     var ret = [];
//     for(var i = 1; i <= numDice; i++){
//         console.log("getRolls",i);
//         ret.push(Math.floor(Math.random() * (6) + 1));
//     }
//     return ret;
// }

// function Die({ val }) {
//     var dieStyle = {
//         padding: "25px",  
//         backgroundColor: "tomato",  
//         width: "50px",  
//         height: "50px",  
//         borderRadius: "10%",
//         fontSize: "50px",
//         textAlign: "center",
//         color: "white",
//         margin: "2px"
//     }
//     return (
//         <div style={dieStyle} className="Die">
//             {val}
//         </div>
//     );
// }


// function Dice({ dice }) {
//     return (
//         <section className="Dice">
//             {dice.map((v, i) =>
//                 <Die key={i} val={v} />)}
//         </section>
//     );
// }

// function LuckyN({ numDice, goal }) {
//     const [dice, setDice] = React.useState(getRolls(numDice));
//     const won = sum(dice) === goal;
  
//     function roll() { setDice(getRolls(numDice)); }
  
//     return (
//         <main className="LuckyN">
//             <h1>Lucky{goal}: { won ? "You won!" : "You Lose"}</h1>
//             <Dice dice={dice} />
//             <button onClick={roll}>
//                 Roll Again!
//             </button>
//         </main>
//     );
// }

// function App() {
//     return (
//       <div className="App">
//         <LuckyN numDice={2} goal={7}/>
//       </div>
//     );
// }

//Design Principles
// * Lift state as high as needed but no higher *
//   - It is held by the "youngest" possible parent of everything that uses it
//     [App] - numDice and goal are set here as props. These will not change over the course of a game.
//       |     but may be different on other pages / Apps
//    [LuckyN] - State is stored here because we need it here to know if we win
//       |       and to use in it's children
//     [Dice]
//     /    \
//   [Die] [Die]
// * Try to Separate logical and presentational components *
//   - We use LuckyN and App here for our logic, with Dice and particularly Die
//     focused on presentation
// * Put utilities in their own file. In our case that would be getRolls and sum
//   should be in their own utils.js file
//   - One reason for that is that once they are in their own file they can be unit tested
//   - And then mocked for our testing of the components


//*****************************
// Passing a function as a prop

// function LuckyN({ numDice, winCheck, goal }) {
//     const [dice, setDice] = React.useState(getRolls(numDice));
//     const won = winCheck(dice);
  
//     function roll() { setDice(getRolls(numDice)); }
  
//     return (
//         <main className="LuckyN">
//             <h1>Lucky {goal}: { won ? "You won!" : "You Lose"}</h1>
//             <Dice dice={dice} />
//             <button onClick={roll}>
//                 Roll Again!
//             </button>
//         </main>
//     );
// }

// function rolledEven(dice){
//     return (sum(dice) % 2) === 0;
// }

// function App() {
//     return (
//       <div className="App">
//         <LuckyN 
//             numDice={2} 
//             winCheck={rolledEven} 
//             goal="even"
//         />
//       </div>
//     );
// }

// // Having the button and the h1 inside LuckyN is kind of against our design principles
// // about separating Presentation and Logic, especially if we make either of those 
// // components look nice.

// // Let's start with the button

// function Button({ label, roll }) {
//     var buttonStyle = {
//         padding: "15px",  
//         backgroundColor: "black",  
//         borderRadius: "10%",
//         fontSize: "20px",
//         textAlign: "center",
//         color: "white",
//         margin: "2px",
//         borderColor: "gray",
//     }
//     return (
//         <button
//             style={buttonStyle}
//             className="ReRollButton"
//             onClick={roll}>
//             {label}
//         </button>
//     );
// }

// function LuckyN({ numDice, winCheck, goal }) {
//     const [dice, setDice] = React.useState(getRolls(numDice));
//     const won = winCheck(dice);
  
//     function roll() { setDice(getRolls(numDice)); }
  
//     return (
//         <main className="LuckyN">
//             <h1>Lucky {goal}: { won ? "You won!" : "You Lose"}</h1>
//             <Dice dice={dice} />
//             <Button roll={roll} label="Roll Again!" />
//             {/* passing in the roll function here is great
//             because it allows the child component to modify State
//             but only to do so in exactly the way it's supposed to */}
//         </main>
//     );
// }

// // Now let's work on the title real quick

// function LuckyN({ numDice, winCheck, goal }) {
//     const [dice, setDice] = React.useState(getRolls(numDice));
//     function roll() { setDice(getRolls(numDice)); }
  
//     return (
//         <main className="LuckyN">
//             <Title label={`Lucky ${goal}`} won={winCheck(dice)}/>
//             <Dice dice={dice} />
//             <Button roll={roll} label="Roll Again!" />
//             {/* This right here is beautiful and 
//             what React is supposed to look like */}
//         </main>
//     );
// }

// function Title({label, won}){
//     return(
//         <h1>
//             {label}: { won ? "You Won!" : "You Lose"}
//         </h1>
//     )
// }

//***************************
// Re-Rolling individual Dice

// function d6(){
//     return Math.floor(Math.random() * (6) + 1);
// }

// function LuckyN({ numDice, winCheck, goal }) {
//     const [dice, setDice] = React.useState(getRolls(numDice));
//     function roll() { setDice(getRolls(numDice)); }
//     function reRoll(n) {
//         setDice(
//             dice => dice.map(
//                 function (v, idx){
//                     return (idx === n) ? d6() : v
//                 }
//             )
//         )
//     }
  
//     return (
//         <main className="LuckyN">
//             <Title label={`Lucky ${goal}`} won={winCheck(dice)}/>
//             <Dice dice={dice} reRoll={reRoll}/>
//             <Button roll={roll} label="Roll Again!" />
//         </main>
//     );
// }

// function Die({ val, reRoll, i }) {
//     var dieStyle = {
//         padding: "25px",  
//         backgroundColor: "tomato",  
//         width: "50px",  
//         height: "50px",  
//         borderRadius: "10%",
//         fontSize: "50px",
//         textAlign: "center",
//         color: "white",
//         margin: "2px"
//     }
//     function roll(){
//         reRoll(i);
//     }
//     return (
//         <div 
//             style={dieStyle} 
//             className="Die"
//             onClick={roll}
//         >
//             {val}
//         </div>
//     );
// }


// function Dice({ dice, reRoll}) {
//     return (
//         <section className="Dice">
//             {dice.map((v, i) =>
//                 <Die key={i} val={v} reRoll={reRoll} i={i}/>)}
//         </section>
//     );
// }

// How data flows in React:

// A parent component defines a function
// The function is passed as a prop to a child component
// The child component invokes the prop function
// The parent function is called, usually setting new state
// The parent component is re-rendered along with its children



//***************
// Design Wrap Up
//***************

// * List components should be based off of State and have uuid keys
//   - Those keys should be set during the useState initialization and 
//     the keys should stay associated with the same value / Component
// * Components should be small and do one generic thing
//   - Their specific behavior should be set by props
//   - This makes them reusable and less likely to break
// * Components should either Logical or Presentational
//   - Sometimes this line can be a bit unclear, sorry
//   - Generally presentational components are very small and dumb
//     i.e. they usually just return a bit jsx rather than doing any computation
//     maybe there will be ternary statement or something.
//   - Generally logical components will have more for loops, helper functions,
//     computation, and state associated with them. They often also will have 
//     several different component children.
// * Generally you want to have useState and wrapper functions for seState
//   defined in a logical component and then passed down those wrapper functions 
//   into their child/presentational components as props.
// * try to minimize the amount of stuff you are storing in State
//   - in particular don't store derivable info in State
});

