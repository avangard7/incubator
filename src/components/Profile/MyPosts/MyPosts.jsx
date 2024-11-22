import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postsData = [

    { id: 1, message: "Hi, how are you?", likeCounts: "2" },
    { id: 2, message: "It's my first post", likeCounts: "326"  },

  ]

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

        <Post message={ postsData[0].message} likecounts={ postsData[0].likeCounts } />
        <Post message={ postsData[1].message} likecounts={ postsData[1].likeCounts } />

      </div>

    </div>

  )
}

export default MyPosts; 
