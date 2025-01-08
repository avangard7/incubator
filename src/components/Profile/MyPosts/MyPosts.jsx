import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import  { addPostActionCreator, updateNewPostTextActionCreator } from './../../Redux/profile-reducer';


const MyPosts = (props) => {
  // debugger

  let newPostElement = React.createRef();
  // ------------------------------------------------------
  let addPost = () => {
    // debugger   
    props.dispatch(addPostActionCreator());
  };
  // ------------------------------------------------------

  let onPostChange = () => {
    let newText = newPostElement.current.value;  
     
    let action = updateNewPostTextActionCreator(newText); 
    props.dispatch(action);  
    
  }  

  return (
    <div className={s.postsBlock}>
      <div>
        <div>
          <textarea 
          onChange={ onPostChange } 
          ref={newPostElement} 
          value={props.profilePage.newPostText} />  
        </div>
        <div>

          <button className={s.postsButton} onClick={addPost} >
            Add post
          </button>

        </div>

      </div>
      <div className={s.posts}>

        <Post posts={props.profilePage.posts} />

      </div>

    </div>

  )
}

export default MyPosts; 
