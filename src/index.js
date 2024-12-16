import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import state from './components/Redux/State';
import { addPost } from './components/Redux/State';
import { updateNewPostText } from './components/Redux/State';
import { addDialog } from './components/Redux/State';
import { updateNewPostDialog } from './components/Redux/State';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = () => {
  root.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addDialog={addDialog} updateNewPostDialog={updateNewPostDialog} />
    </BrowserRouter>
  );
}

rerenderEntireTree()  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
