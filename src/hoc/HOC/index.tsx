import React from "react";
import './style.scss'

export const HOC=(Component:React.FC)=>(props:any):JSX.Element=>{
    console.log("props=>", props);
    
    return(<div className="HOC">
        <nav>
            <ul>
                <li>menu1</li>
                <li>menu2</li>
                <li>menu3</li>
                <li>menu4</li>
                <li>menu5</li>

            </ul>
        </nav>
        <div>
            <div>
                <ul>
                    <li>Item1</li>
                    <li>Item2</li>
                    <li>Item3</li>
                    <li>Item4</li>
                    <li>Item5</li>
                </ul>
            </div>
            <div>
            <Component {...props}/>
            </div>
                
        </div>
    </div>)

}