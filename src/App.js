import Logo from './img/neon-cocktail.png'; 
import More from './img/more.jpg'; 
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
        <div className="header">
          <img className="Logo" src={Logo} /> 
        </div>
      <nav className="navbar">
        
        <div><a>Profile</a></div>    
        <div><a>Messages</a></div>    
        <div><a>News</a></div>    
        <div><a>Music</a></div>    
        <div><a>Settings</a></div>    
      
      </nav> 
      <div className="content">
       
        <div> 
          <img className="More" src={More} /> 
        </div>  
        <div> 
          ava + description     
        </div> 
        <div> 
          My posts      
          <div>
            New post    
          </div> 
          <div>
            <div>
              post 1   
            </div>
            <div>
              post 2  
            </div>
          </div>
        </div> 

      </div> 
    </div>
  );
}

export default App;
