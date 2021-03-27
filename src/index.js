import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';

//ACTION
const increment = () =>{
  return{
    type: "Increment"
  }
}

const decrement = () =>{
  return{
    type: "Decrement"
  }
}

//REDUCER
const counter = (state = 0, action)=>{
  switch(action.type){
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
      return state
  }
}

//STORE
let store = createStore(counter);

//console
store.subscribe(() => console.log(store.getState()));

//DISPATCH
store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'))
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
