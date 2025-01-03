import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import  { addDialogActionCreator, updateNewDialogActionCreator } from './../Redux/State';

const Dialogs = (props) => {
    // debugger

    let newPostElement = React.createRef();  
    // ------------------------------------------------------
    let addDialog = () => {  
        // debugger   
        // props.addDialog();  
        props.dispatch(addDialogActionCreator());
    };
    // ------------------------------------------------------

    let onPostMessage = () => {
        // console.log( 'work' )  
        let newDialog = newPostElement.current.value;
        // props.updateNewPostDialog(newDialog);
        console.log(newDialog)  
        let action = updateNewDialogActionCreator(newDialog); 
        props.dispatch(action);  
    }

    return (
        <div className={s.dialogs}>
            <div className={s.text_area}>
                <textarea
                    onChange={onPostMessage}
                    ref={newPostElement}
                    value={props.messagesPage.newPostMessage} />

                <button className={s.postsButton} onClick={addDialog} >
                    Add post
                </button>
            </div>


            <div className={s.dialogsItem}>

                <DialogItem name={props.messagesPage.dialogsData} />

            </div>
            <div className={s.messages}>

                <Message message={props.messagesPage.messagesData} />

            </div>
        </div>
    )
}

export default Dialogs; 
