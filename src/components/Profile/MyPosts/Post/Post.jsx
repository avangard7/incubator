import s from './Post.module.css';
import ava_1 from './../../../../img/ava_1.png';

let array = ['sex 1000 rub', 'sex 900 rub', 'dont sex'];
let summ = -1;

const Post = (props) => {

  const listItems = array.map((item) =>

    <li>{item}</li>

  );
  // console.log(props);  
  console.log(summ += 0.5);

  return (
    <div>

      <div>

        <div className={s.item}>
          <img src={ava_1} alt='' />
          <ul>{listItems[summ]}</ul>
          <div> like: { props.likecounts } </div>
          <div>
            {props.message}
          </div>
        </div>

      </div>

      <input value='5' />
      <input value='6' />

    </div>
  )
}

export default Post; 
