 import React, { useState } from 'react';
 
  const App = () => {
  const state= useState();
  const[count,setCount]= useState(0);
   const IncNum = () =>
   { 
     setCount(count + 5);
   }
   return(
     <>
     <div>
     <h1> {count} </h1>
     <button onClick={IncNum}>Click Me</button>
     </div>
     </>
   );
 };
export default App;