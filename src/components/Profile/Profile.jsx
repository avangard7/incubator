import More from './../../img/more.jpg'; 
import MyPosts from './MyPosts/MyPosts';
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
          <div className={ s.posts }>

          <MyPosts /> 

          </div>
        </div> 

      </div> 
    )
}

export default Profile; 
