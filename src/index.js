import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import state from './components/Redux/State';

// -----------------------------------
let postsData = [
  { id: 1, message: "Hi, how are you?", likeCounts: "2" },
  { id: 2, message: "It's my first post", likeCounts: "326" },
  { id: 3, message: "Blabla", likeCounts: "56" },
]

let dialogsData = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Andrey" },
  { id: 3, name: "Sveta" },
  { id: 4, name: "Sasha" },
  { id: 5, name: "Viktor" },
  { id: 6, name: "Valera" }
];

let messagesData = [
  { id: 1, message: "  Hi " },
  { id: 2, message: "  How are you ? " },
  { id: 3, message: "  Yo " },
  { id: 4, message: "  kekw " },
  { id: 5, message: "  What you'r name ? " },
  { id: 6, message: "  How old are you ? " }
]
// -----------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
