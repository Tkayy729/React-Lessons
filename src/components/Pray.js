import React from 'react'

const Pray =() =>{
//      return(
//     <div>
//         <h1>I AM COOL</h1>

//     </div>
// )
return React.createElement(

    'div',
    {id: 'hello', className: 'dummyCLass'},
    React.createElement('h1', null ,'I AM COOL')
    
    )
}

export default Pray;