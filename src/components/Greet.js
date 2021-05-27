import React from 'react';

// function Greet (){
//     return<h1>HELLO VISHWAS</h1>

const Greet = (props) =>{
return(
    <div>
<h1>

    HELLO {props.name} a.k.a {props.heroName}
    
    </h1>

{ props.children }

</div>

)


} 
    
export default Greet