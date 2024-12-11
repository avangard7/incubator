import React from "react"
import { rerenderEntireTree } from './../../index'; 

export const Render = (props) => {
    // debugger 

    rerenderEntireTree(props.profilePage.postsData)  

}

// export default Render; 
