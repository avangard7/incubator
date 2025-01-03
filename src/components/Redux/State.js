// import React from "react";
import { Render } from "./Render";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_DIALOG = 'ADD-DIALOG';
const UPDATE_NEW_DIALOG = 'UPDATE-NEW-DIALOG';

const store = {

  _state: {
    profilePage: {
      // ------------------------------------------------
      postsData: [

        { id: 1, message: "Hi, how are you?", likeCounts: "2" },
        { id: 2, message: "It's my first post", likeCounts: "326" },
        { id: 3, message: "Blabla", likeCounts: "56" },
        { id: 4, message: "Dada", likeCounts: "982" },

      ],
      newPostText: 'it-kamasutra.com',
      // ------------------------------------------------

    },
    messagesPage: {
      // ------------------------------------------------
      dialogsData: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" }
      ],

      messagesData: [
        { id: 1, message: "  Hi " },
        { id: 2, message: "  How are you ? " },
        { id: 3, message: "  Yo " },
        { id: 4, message: "  kekw " },
        { id: 5, message: "  What you'r name ? " },
        { id: 6, message: "  How old are you ? " }
      ],
      newPostMessage: 'Hi how are you ?',
      // ------------------------------------------------

    },

    navbar: {
      sitebar: [
        { id: 1, name: " Jessica " },
        { id: 2, name: " Alice " },
        { id: 3, name: " Viktoria " }
      ]
    }

  },

  dispatch(action) { // { type: 'ADD-POST' }
    // debugger    
    if (action.type === ADD_POST) {
      // debugger  
      let newPost = {
        id: 5,
        message: store._state.profilePage.newPostText,
        likeCounts: '0'
      }
      store._state.profilePage.postsData.push(newPost);
      store._state.profilePage.newPostText = '';
      Render(store._state);

    } else if (action.type === UPDATE_NEW_POST_TEXT) {

      store._state.profilePage.newPostText = action.newText;
      Render(store._state);

    } else if (action.type === ADD_DIALOG) {
      let newDialogObject = {
        id: 5,
        message: store._state.messagesPage.newPostMessage,
        likeCounts: '0'
      }
      store._state.messagesPage.messagesData.push(newDialogObject);
      store._state.messagesPage.newPostMessage = '';
      Render(store._state)

  } else if(action.type === UPDATE_NEW_DIALOG) {
    store._state.messagesPage.newPostMessage = action.newDialog;
    Render(store._state)
    }
  }

};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (newText) => {
  return {
    type: UPDATE_NEW_POST_TEXT, newText: newText
  }
}

export const addDialogActionCreator = () => ({ type: ADD_DIALOG });
export const updateNewDialogActionCreator = (newDialog) => {
  return {
    type: UPDATE_NEW_DIALOG, newDialog: newDialog
  }
}


window.state = store;
export default store;
// ------------------------------------------------ // 
