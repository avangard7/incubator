import React from 'react';
import { /* BrowserRouter,*/ Route, Routes } from 'react-router-dom';
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

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar sitebar={props.store._state.navbar.sitebar} />
      <div className="app-wrapper-content">

        <Routes>
          <Route exact element={<Profile postsData={props.store._state.profilePage.postsData} />} path="/" />

          <Route element={<Profile
            postsData={props.store._state.profilePage.postsData}
            newPostText={props.store._state.profilePage.newPostText}
            addPost={props.store.addPost}
            updateNewPostText={props.store.updateNewPostText}
          />} path="/profile" />

          <Route element={<Dialogs
            dialogsData={props.store._state.messagesPage.dialogsData}
            messagesData={props.store._state.messagesPage.messagesData}
            newPostMessage={props.store._state.messagesPage.newPostMessage}
            addDialog={props.store.addDialog}
            updateNewPostDialog={props.store.updateNewPostDialog}
          />} path="/dialogs" />  
          
          <Route element={<News />} path="/news" />
          <Route element={<Music />} path="/music" />
          <Route element={<Settings />} path="/settings" />
        </Routes>

      </div>
    </div>
  );
}

export default App;
