const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state, action) => {
    // debugger 
    if (action.type === SEND_MESSAGE) {  
   
      let body = {
        id: 5,
        message: state.newPostMessage,   
        likeCounts: '0'
      }
      state.messages.push(body);   
      state.newPostMessage = '';  
  
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {  
        
      state.newPostMessage = action.body;  
  
    }

    return state;  
}

export const addDialogActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY, body: body
  }
}

export default dialogsReducer;  
