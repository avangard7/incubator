import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const News = () => <h2>Новости</h2>; 
const Music = () => <h2>Музыка</h2>;
const Settings = () => <h2>Настройки</h2>;  


const App = (props) => {
  // debugger 

  // let postsData = [
  //   { id: 1, message: "Hi, how are you?", likeCounts: "2" },
  //   { id: 2, message: "It's my first post", likeCounts: "326" },
  //   { id: 3, message: "Blabla", likeCounts: "56" },
  //   { id: 4, message: "Dada", likeCounts: "982" },
  // ]

  return (
    <div className="app-wrapper">
      <Header /> 
      <Navbar /> 
      <div className="app-wrapper-content">  

        <Routes>
          <Route exact element={<Profile postsData={props.postsData} />} path="/"/>    
          <Route element={<Profile postsData={props.postsData} />} path="/profile" />    
          <Route element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />} path="/dialogs"/>    
          <Route element={<News />} path="/news"/>    
          <Route element={<Music />} path="/music"/>    
          <Route element={<Settings />} path="/settings"/>    
        </Routes> 

      </div>  
    </div>
  );
}

export default App;
