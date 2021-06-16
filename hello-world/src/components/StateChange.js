import React,{useState} from 'react'

function StateChange() {
    const [myName,setMyName] = useState('sonu');

  const ChangeName =() =>{
      setMyName('rishu')
  }
    return (
        <div>
            <h1>{myName}</h1>
            <button onClick ={ChangeName}>Click Me</button>
            
        </div>
    )
}

export default StateChange

