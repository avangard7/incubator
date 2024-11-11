import s from './MyPosts.module.css'; 
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
          <div>
            <textarea></textarea>
            <button>Add post</button> 
          </div>
          <div className={ s.posts }>

          <Post message="Hi, how are you?" likecounts="2" /> 
          <Post message="It's my first post" likecounts="7" /> 

          </div>

        </div> 

    )
}

export default MyPosts; 
