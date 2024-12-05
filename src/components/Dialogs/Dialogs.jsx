import React from 'react'; 
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    // debugger 

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                
                <DialogItem name={ props.dialogsData } />

            </div>
            <div className={s.messages}>
                
                <Message message={ props.messagesData } />  

            </div>
        </div>
    )
}

export default Dialogs; 
