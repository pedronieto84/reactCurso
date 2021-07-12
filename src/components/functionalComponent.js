import React, {useState} from 'react';
import './styles/functionalComp.css';

const FunctionalComponent = () => {

   const [count, setCount] = useState(0); 
    return (
      <>
        <h1> Ejemplo useState </h1>
        <h2> Contador { count } </h2>
        <button onClick={()=> { setCount(count + 1) }}>Aumentar Contador</button>
      </>
      )
  }

  export default FunctionalComponent;