import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useFetch } from './hook/useFetch';
import { useBool } from './hook/useBool';
import { Item1 } from './hoc/Item1';
import { Item2 } from './hoc/Item2';
import { HOC } from './hoc/HOC';

// function App() {
//   const users=useFetch('https://jsonplaceholder.typicode.com/users')
//  const posts=useFetch('https://jsonplaceholder.typicode.com/posts')
//  console.log(users,posts);
//  const [x,setX]=useBool()
 
//   return (
//     <div className="App">
//       <h1 style={x?{color:'green'}:{color:'red'}}>das15 react</h1>
//       <button onClick={()=>setX()}>change</button>
      
//     </div>
//   );
// }


function App(){
  const Item1Hoc=HOC(Item1)
  const Item2Hoc=HOC(Item2)
  return(<div>
    <Item1Hoc str='hello'/>
    <Item2Hoc name="Anna"/>
    
  </div>)
}

export default App;
