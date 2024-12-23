import s from './Post.module.css';
import ava_1 from './../../../../img/ava_1.png';


const Post = (props) => {
  // debugger   

  let result = props.postsData.map((e) =>
    <div>
      <div>

        <div className={s.item}>
          <img src={ava_1} alt='' />

          <div>{e.message}</div>
          <div>{e.likeCounts}</div>
        </div>
        </div>


      <input value='5' />
      </div>
        )

        return (
        <div>

          <div>
            {result}
          </div>
        
        </div>

  )
}

export default Post; 
