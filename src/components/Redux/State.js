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
    ]
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


export let addPost = (postMessage) => {
  // debugger 

  let newPost = {    
    id: 5, 
    message: postMessage, 
    likeCounts: '0'  
  }  
  state.profilePage.postsData.push(newPost);  
  Render(state)     
};   


export default state;  
  