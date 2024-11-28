// import More from './../../img/more.jpg'; 
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
 
    let postsData = [

    { id: 1, message: "Hi, how are you?", likeCounts: "2" },
    { id: 2, message: "It's my first post", likeCounts: "326"  },
    { id: 3, message: "Blabla", likeCounts: "56" },
    { id: 4, message: "Dada", likeCounts: "982" },

  ]
  
  return (
    <div>

      <ProfileInfo />

      <div>
        <div className={s.posts}>

          <MyPosts postsData={ postsData } />

        </div>
      </div>

    </div>
  )
}

export default Profile; 
