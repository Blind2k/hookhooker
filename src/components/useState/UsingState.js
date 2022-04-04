import { useState } from "react";

const UsingState = () => {
   const [counter, addCounter] = useState(0);
   const [name, addName] = useState("Change me");

   const addCounterHandler = () => {
      addCounter(counter + 1);
   };

   const addNameHandler = event => {
      addName(event.target.value);
   };

   return (
      <div>
         {counter}
         <button onClick={addCounterHandler}>Press me</button>
         <br/>
         <label htmlFor="name">Name: </label>
         <input id="name" placeholder="Change here" onChange={addNameHandler}/>
         {name}
      </div>
   );
};

export default UsingState;
