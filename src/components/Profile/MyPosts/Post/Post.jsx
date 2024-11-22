import s from './Post.module.css';
import ava_1 from './../../../../img/ava_1.png';


const Post = (props) => {

  return (
    <div>

      <div>

        <div className={s.item}>
          <img src={ava_1} alt='' />

          <div> like: {props.likecounts} </div>
          <div>
            {props.message}
          </div>
        </div>

      </div>

      <input value='5' />


    </div>
  )
}

export default Post; 
