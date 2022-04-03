import React, { Fragment } from "react";
import UsingState from "../components/UsingState";

const useReducerSplit = () => {
   return (
      <Fragment>
         <div className="split left">
            <div className="centered">
               <UsingState/>
            </div>
         </div>
         <div className="split right">
            <div className="centered">
               <h2>John Doe</h2>
               <p>Some text here too.</p>
            </div>
         </div>
      </Fragment>
   );
};
export default useReducerSplit;
