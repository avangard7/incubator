import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  // debugger 

  let newPostElement = React.createRef();
  // ------------------------------------------------------
  let addPost = () => {
    // debugger   
    props.addPost();
  };
  // ------------------------------------------------------

  let onPostChange = () => {
    // console.log( 'work' )  
    let newText = newPostElement.current.value; 
    props.updateNewPostText(newText);  
  }  

  return (
    <div className={s.postsBlock}>
      <div>
        <div>
          <textarea 
          onChange={ onPostChange } 
          ref={newPostElement} 
          value={props.newPostText} />  
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
