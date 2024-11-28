import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
     
  // let postsData = [

  //   { id: 1, message: "Hi, how are you?", likeCounts: "2" },
  //   { id: 2, message: "It's my first post", likeCounts: "326"  },
  //   { id: 3, message: "Blabla", likeCounts: "56" },
  //   { id: 4, message: "Dada", likeCounts: "982" },

  // ]

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
        <Post postsData={ props.postsData } />

      </div>

    </div>

  )
}

export default MyPosts; 
