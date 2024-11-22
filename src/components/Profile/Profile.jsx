// import More from './../../img/more.jpg'; 
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div>

      <ProfileInfo />

      <div>
        <div className={s.posts}>

          <MyPosts />

        </div>
      </div>

    </div>
  )
}

export default Profile; 
