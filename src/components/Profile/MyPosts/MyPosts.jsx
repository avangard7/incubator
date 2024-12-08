import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  // debugger 

  let newPostElement = React.createRef();
  // ------------------------------------------------------
  let addPost = () => {
    // debugger   
    let text = newPostElement.current.value;
    props.addPost(text);
    // debugger 
  };
  // ------------------------------------------------------

  return (
    <div className={s.postsBlock}>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>

          <button className={s.postsButton} onClick={addPost} >
            Add post
          </button>

        </div>

      </div>
      <div className={s.posts}>

        <Post postsData={props.postsData} />

      </div>

    </div>

  )
}

export default MyPosts; 
