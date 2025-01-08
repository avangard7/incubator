// import React from "react";
import profileReducer from "./profile-reducer";
import { Render } from "./Render";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";

const store = {

  _state: {
    profilePage: {
      // ------------------------------------------------
      posts: [

        { id: 1, message: "Hi, how are you?", likeCounts: "2" },
        { id: 2, message: "It's my first post", likeCounts: "326" },
        { id: 3, message: "Blabla", likeCounts: "56" },
        { id: 4, message: "Dada", likeCounts: "982" },

      ],
      newPostText: 'it-kamasutra.com',
      // ------------------------------------------------

    },
    dialogsPage: {
      // ------------------------------------------------
      dialogsData: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" }
      ],

      messages: [
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

      sidebar: {}

  },

  dispatch(action) { // { type: 'ADD-POST' }
    // debugger    
  
    store._state.profilePage = profileReducer(store._state.profilePage, action);        
    store._state.dialogsPage = dialogsReducer(store._state.dialogsPage, action);        
    store._state.sidebar = sidebarReducer(store._state.sidebar, action);        

    // store._callSubscriber(store._state); 
    Render(store._state);
  }

};






window.state = store;
export default store;
// ------------------------------------------------ // 
