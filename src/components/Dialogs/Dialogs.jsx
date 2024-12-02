import React from 'react'; 
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    // debugger 
    // let dialogsData = [ 
    //     { id: 1, name: "Dimych" },
    //     { id: 2, name: "Andrey" },
    //     { id: 3, name: "Sveta" },
    //     { id: 4, name: "Sasha" },
    //     { id: 5, name: "Viktor" },
    //     { id: 6, name: "Valera" }
    // ];

    // let messagesData = [
    //     { id: 1, message: "  Hi " },
    //     { id: 2, message: "  How are you ? " },
    //     { id: 3, message: "  Yo " },
    //     { id: 4, message: "  kekw " },
    //     { id: 5, message: "  What you'r name ? " },
    //     { id: 6, message: "  How old are you ? " }
    // ]

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
