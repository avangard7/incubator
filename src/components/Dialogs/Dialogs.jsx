import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    // debugger

    let newPostElement = React.createRef();  
    // ------------------------------------------------------
    let addDialog = () => {  
        // debugger   
        props.addDialog();  
    };
    // ------------------------------------------------------

    let onPostMessage = () => {
        // console.log( 'work' )  
        let newDialog = newPostElement.current.value;
        props.updateNewPostDialog(newDialog);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.text_area}>
                <textarea
                    onChange={onPostMessage}
                    ref={newPostElement}
                    value={props.newPostMessage} />

                <button className={s.postsButton} onClick={addDialog} >
                    Add post
                </button>
            </div>


            <div className={s.dialogsItem}>

                <DialogItem name={props.dialogsData} />

            </div>
            <div className={s.messages}>

                <Message message={props.messagesData} />

            </div>
        </div>
    )
}

export default Dialogs; 
