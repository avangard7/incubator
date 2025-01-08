import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import  { addDialogActionCreator, updateNewMessageBodyCreator } from './../Redux/dialogs-reducer';

const Dialogs = (props) => {
    // debugger

    let newPostElement = React.createRef();  
    // ------------------------------------------------------
    let addDialog = () => {  
        // debugger   
        props.dispatch(addDialogActionCreator());
    };
    // ------------------------------------------------------

    let onPostMessage = () => {
        let body = newPostElement.current.value;
        let action = updateNewMessageBodyCreator(body); 
        props.dispatch(action);  
    }

    return (
        <div className={s.dialogs}>
            <div className={s.text_area}>
                <textarea
                    onChange={onPostMessage}
                    ref={newPostElement}
                    value={props.dialogsPage.newPostMessage} />

                <button className={s.postsButton} onClick={addDialog} >
                    Add post
                </button>
            </div>


            <div className={s.dialogsItem}>

                <DialogItem name={props.dialogsPage.dialogsData} />

            </div>
            <div className={s.messages}>

                <Message message={props.dialogsPage.messages} />

            </div>
        </div>
    )
}

export default Dialogs; 
