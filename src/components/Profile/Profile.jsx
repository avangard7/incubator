import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  // debugger 

  return (
    <div>

      <ProfileInfo />

      <div>
        <div className={s.posts}>

          <MyPosts postsData={props.postsData} />

        </div>
      </div>

    </div>
  )
}

export default Profile; 
