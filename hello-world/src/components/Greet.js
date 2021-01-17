
//functional components
import React from 'react' 

// function Greet(){
//     return <h1>Hello sonu</h1>

// }

 const Greet =(props)=> {
     console.log(props)
     
 return (
     <div>
 <h1>
     Hello {props.name}    {props.heroname}
     </h1>
     {props.children}
    </div>
 )
 }
export default Greet