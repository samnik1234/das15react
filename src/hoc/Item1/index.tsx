import React from "react";
import './style.scss'

export const Item1:React.FC<any>=React.memo((props:any):JSX.Element=>{
    console.log("item1", props);
    
    return(<div className="item1">
        <h3>Item1</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, explicabo.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, odio!</p>

    </div>)
})