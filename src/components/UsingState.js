import { useState } from "react";

const UsingState = () => {
   const [counter, addCounter] = useState(0);
   const [name, addName] = useState("Pedro");

   const addCounterHandler = () => {
      addCounter(counter + 1);
   };

   const addNameHandler = event => {
      addName(event.target.value);
   };

   return (
      <div>
         {counter}
         <button onClick={addCounterHandler}>+1</button>
         <br />
         <label id="name">Name: </label>
         <input id="name" placeholder="Write here" onChange={addNameHandler}/>
         {name}
      </div>
   );
};

export default UsingState;
