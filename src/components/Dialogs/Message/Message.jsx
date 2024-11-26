import React from "react";

const Message = (props) => {
    
    const content = props.message.map((post) => 
    <div >
      <div>{post.message}</div>
    </div>
    );    

    // debugger 
    return (
        < div >
            { content }
        </div >
    )
}; 

export default Message; 
