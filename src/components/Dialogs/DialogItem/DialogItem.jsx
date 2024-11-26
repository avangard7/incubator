import React from "react";
import { NavLink } from 'react-router-dom'; 

const DialogItem = (props) => {
    
    // console.log( props.name ); 
     
    const content = props.name.map((post) => 
    <div >
        <NavLink to={ "/dialogs/" + post.id }>  { post.name }  </NavLink>
    </div>    
    );    

    // let path = "/dialogs/" + props.id;
    return (
        <div >
            <div>  { content }  </div>
        </div> 
    )
}

export default DialogItem; 
