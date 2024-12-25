// import React from "react";
import { Render } from "./Render";

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

  addDialog() {
    // debugger 

    let newDialogObject = {
      id: 5,
      message: store._state.messagesPage.newPostMessage,
      likeCounts: '0'
    }
    store._state.messagesPage.messagesData.push(newDialogObject);
    store._state.messagesPage.newPostMessage = '';
    Render(store._state)
  },

  updateNewPostDialog(newDialog) {
    // debugger 
    store._state.messagesPage.newPostMessage = newDialog;
    Render(store._state)

  },

  dispatch(action) { // { type: 'ADD-POST' }
    // debugger    
    if (action.type === 'ADD-POST') {
      // debugger  
      let newPost = {
        id: 5,
        message: store._state.profilePage.newPostText,
        likeCounts: '0'
      }
      store._state.profilePage.postsData.push(newPost);
      store._state.profilePage.newPostText = '';
      Render(store._state);

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {

      store._state.profilePage.newPostText = action.newText;
      Render(store._state);

    }
  }

};

window.state = store;
export default store;
// ------------------------------------------------ // 
