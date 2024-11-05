import More from './../../img/more.jpg'; 
import s from './Profile.module.css'; 

const Profile = () => {
    return (
        <div className={ s.content }>
       
        <div> 
          <img className={ s.More } src={More} /> 
        </div>  
        <div> 
          ava + description     
        </div> 
        <div> 
          My posts      
          <div>
            New post    
          </div> 
          <div className={ s.posts }>
            <div className={ s.item }>
              post 1   
            </div>
            <div className={ s.item }>
              post 2  
            </div>
          </div>
        </div> 

      </div> 
    )
}

export default Profile; 
