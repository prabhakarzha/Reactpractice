import React from 'react'

const Hello=()=>{
// return(
// <div className='dummyClass'>
//     <h1>
//         Hello Sonukashyap
//     </h1>
// </div>
// )

return React.createElement(
    'div',
    {id:'Hello', className:'dummyClass'},
    React.createElement('h1', null,'Hello sonu Kashyap')
)
}
export default Hello