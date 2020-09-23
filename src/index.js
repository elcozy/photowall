import React from "react";
import ReactDOM from "react-dom";
// import Main from "./Components/Main";
import "./styles/stylesheet.css";
import { BrowserRouter } from "react-router-dom";
import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./redux/reducer";
import { Provider } from "react-redux";
import App from "./Components/App";
import thunk from "redux-thunk";
import { database } from "./database/config";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,

  composeEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// const tasks = ["Greet me!", "Take me for a walk", "Feed the dogs!"];

// const element =
//   <div>
//     {" "}
//     <ol>
//       {tasks.map((task, index) => (
//         <li key={index}> {task} </li>
//       ))}
//     </ol>
// //   </div>
// class List extends Component {
//   render() {
//     return (
//       <ol>
//         {this.props.tasks.map((task, index) => (
//           <li key={index}> {task} </li>
//         ))}
//       </ol>
//     );
//   }
// }

// class Title extends Component {
//   render() {
//     return <h1> {this.props.title}</h1>;
//   }
// }

// class Main extends Component {
//   render() {
//     return (
//       <div>
//         <Title title={"To do"} />
//         <List tasks={["Mow the lawn", "Take a nap!", "Wash the car"]} />
//         <Title title={"To do later"} />
//         <List tasks={["Go to bed", "Read a book!", "Dry the car"]} />
//       </div>
//     );
//   }
// }
// const element = React.createElement(
//   "ol",
//   null,
//   React.createElement("li", null, "Hello Reynolds!"),
//   React.createElement("li", null, "Good morning Reynolds!"),
//   React.createElement(
//     "li",
//     null,
//     "What are you having for breakfast today Reynolds?"
//   )
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
