import React from "react";
import { Render } from "./Render";

const state = {
  profilePage: {
    // ------------------------------------------------
    postsData: [

      { id: 1, message: "Hi, how are you?", likeCounts: "2" },
      { id: 2, message: "It's my first post", likeCounts: "326" },
      { id: 3, message: "Blabla", likeCounts: "56" },
      { id: 4, message: "Dada", likeCounts: "982" },

    ],
    newPostText: 'it-kamasutra.com' 	 
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
    newPostMessage: 'Hi how are you ?'   	 
    // ------------------------------------------------
  }, 
  navbar: {
    // ------------------------------------------------
  sitebar: [
      { id: 1, name: " Jessica "},
      { id: 2, name: " Alice "},
      { id: 3, name: " Viktoria "}  
    ]
    // ------------------------------------------------
  }   
};

window.state = state; 

// ------------------------------------------------
// --------- MyPostPushMessage ----------
export let addPost = () => {
  // debugger 

  let newPost = {    
    id: 5, 
    message: state.profilePage.newPostText, 
    likeCounts: '0'  
  }  
  state.profilePage.postsData.push(newPost);  
  state.profilePage.newPostText = ''; 
  Render(state)     
};   

export let updateNewPostText = (newText) => {  

  state.profilePage.newPostMessage = newText; 
  Render(state)     

}; 
// ------------------------------------------------
// --------- MyDialogsMessage ----------
export let addDialog = () => {
  // debugger 

  let newDialogObject = {    
    id: 5, 
    message: state.messagesPage.newPostMessage, 
    likeCounts: '0'  
  }  
  state.messagesPage.messagesData.push(newDialogObject);  
  state.messagesPage.newPostMessage = '';   
  Render(state)     
};   

export let updateNewPostDialog = (newDialog) => {  
  // debugger 
  state.messagesPage.newPostMessage = newDialog; 
  Render(state)     

}; 

export default state;  
  