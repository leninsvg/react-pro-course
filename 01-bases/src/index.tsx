import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Counter} from "./bases/Counter";
import {CounterBy} from "./bases/CounterBy";
import {CounterEffect} from "./bases/CounterEffect";
import {CounterHook} from "./bases/CounterHook";
import {CounterReducerComponent} from "./counter-reducer/CounterReducer";
// import {CounterReducerComponent} from "./bases/CounterReducer";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Counter initialValue={15}></Counter>
    <CounterBy></CounterBy>
    <CounterEffect></CounterEffect>
    <CounterHook></CounterHook>
    <CounterReducerComponent></CounterReducerComponent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
