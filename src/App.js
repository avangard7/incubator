import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header /> 
      <Navbar /> 
      <div className="app-wrapper-content">  

        <Routes>
          <Route exact element={<Profile />} path="/"/>    
          <Route element={<Profile />} path="/profile"/>    
          <Route element={<Dialogs />} path="/dialogs"/>    
          <Route element={<News />} path="/news"/>    
          <Route element={<Music />} path="/music"/>    
          <Route element={<Settings />} path="/settings"/>    
        </Routes> 

      </div>  
    </div>
  );
}

export default App;
