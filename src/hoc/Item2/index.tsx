import React from "react";
import './style.scss'

export const Item2:React.FC=React.memo((props:any):JSX.Element=>{
    console.log("item2", props);
    return(<div className="item2">
        <h3>Item2</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat a vel accusantium delectus odio odit est ullam quo qui error illo earum suscipit, voluptas sapiente laborum in cumque dolor. Unde.
        Ea ipsam dignissimos tenetur quos repellat illum nulla, possimus beatae molestias rerum ducimus in! Facilis sunt nesciunt placeat sed impedit quae, explicabo voluptatibus ut? Nostrum dicta unde voluptates reprehenderit illo.
        Odio asperiores soluta vel fugiat itaque? Exercitationem error architecto eligendi ipsa ut! Fuga esse maxime voluptates omnis assumenda vero aspernatur deleniti nesciunt porro, iste ducimus, quaerat ut perspiciatis, facilis fugiat.
        Laboriosam delectus nam ut nostrum id modi, beatae nisi corporis illo. Dolorem quibusdam incidunt similique nobis debitis sed quam delectus obcaecati, provident, minus impedit a iure deserunt itaque possimus velit?
        Voluptate rem laboriosam iumenda suscipit ducimus, aliquam repellat ab ipsa at voluptatum unde veritatis laborum, totam eum error qui. Quas, vel id! Aspernatur aliquam adipisci rem fuga temporeaut ut quia omnis voluptates molestias?</p>
    </div>)
})
