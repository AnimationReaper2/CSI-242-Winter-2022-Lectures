////***************************
////***************************
//// Lecture 16: Intro to React 
////***************************
////***************************

function Hello() {
    var a = 5+7;
    return <p>Sup 5+7 is {a}</p>;
}
  
// ReactDOM.render(<Hello />,
//     document.getElementById("root"));

////*******************************
//// JSX Rules
////*******************************

// Elements in JSX must either:
// Have an explicit closing tag: <b> ... </b>
// Be explicitly self-closed: <input name="msg" />
// Cannot leave off that / or will get syntax error

// JSX must be have a single top element:
// const out = <b>Hi</b>;

// They cannot have multiple top elements:
// const out = <b>Hi</b> <i>!!!</i>; //error

// You can always wrap those in a top-level element:

// const out = <div> <b>Hi</b> <i>!!!</i> </div>;

////*************
//// Applications
////*************

// function App() {
//     return (
//       <div>
//         <h1>Greetings!</h1>
//         <Hello />
//         <Hello />
//       </div>
//     );
//   }

ReactDOM.render(<App />,
    document.getElementById("root"));

////************************
//// Splitting up Components
////************************

ReactDOM.render(<App />,
    document.getElementById("root"));