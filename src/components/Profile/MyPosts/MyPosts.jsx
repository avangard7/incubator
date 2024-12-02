import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  // debugger 

  return (
    <div className={s.postsBlock}>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>

          <button className={s.postsButton}>
            Add post
          </button>

        </div>

      </div>
      <div className={s.posts}>

        <Post postsData={ props.postsData } />

      </div>

    </div>

  )
}

export default MyPosts; 
