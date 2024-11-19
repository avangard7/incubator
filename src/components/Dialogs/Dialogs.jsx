import s from './Dialogs.module.css'; 

const Dialogs = (props) => {
    return (
        <div className={ s.dialogs }>
            <div className={ s.dialogsItem }>
                <div className={ s.dialog + ' ' + s.active }>
                    Dimych 
                </div>    
                <div className={ s.dialog }>
                    Andrey 
                </div>    
                <div className={ s.dialog }>
                    Sveta  
                </div>    
                <div className={ s.dialog }>
                    Sasha  
                </div>    
                <div className={ s.dialog }>
                    Viktor  
                </div>    
                <div className={ s.dialog }>
                    Valera  
                </div>    
            </div> 
            <div className={ s.messages }>
                <div className={ s.dialog}> Hi </div>
                <div className={ s.dialog}> How are you ? </div>
                <div className={ s.dialog}> Yo </div>
                <div className={ s.dialog}> kekw </div>
                <div className={ s.dialog}> What you'r name ? </div>
                <div className={ s.dialog}> How old are you ? </div>
            </div> 
        </div> 
    )
}

export default Dialogs; 
