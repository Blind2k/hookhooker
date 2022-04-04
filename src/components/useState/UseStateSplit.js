import React, { Fragment } from "react";
import UsingState from "./UsingState";
import UseDisplay from "../../hooks/useDisplay";
import ReactDOMServer from 'react-dom/server';

const useStateSplit = () => {
   const useStateCode = `
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
         <br />
         <label htmlFor="name">Name: </label>
         <input id="name" placeholder="Change here" onChange={addNameHandler}/>
         {name}
      </div>
   );
};

export default UsingState;`
   .trim();
   const StringedState = ReactDOMServer.renderToString(<UsingState/>)
   // console.log(reactElementToJSXString(UsingState);
   return (
      <Fragment>
         <h1 className="stateheader">use state to change one thing in the virtual Dom</h1>
            <div className="top">
               <UsingState/>
            </div>
            <div className="bottom">
               <UseDisplay exampleCode={useStateCode}/>
         </div>
      </Fragment>
   );
};
export default useStateSplit;
