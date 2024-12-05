import React from "react";
import s from './Sitebar.module.css'; 
import image from './../../../img/ava_girl.jpg'; 

const Sitebar = (props) => {
    // debugger 
    let current = props.sitebar.map( (elem) => <div className={ s.item } >
           <div><img alt="girl" src={ image } /></div> 
        {elem.name}
    </div>)

    return (
        <div className={ s.sitebar }>
         
            {current} 

        </div>
    )
}

export default Sitebar; 
