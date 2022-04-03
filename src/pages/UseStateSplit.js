import React, { Fragment } from "react";
import UsingState from "../components/UsingState";
import CodedState from "../components/CodedState.js";

const useStateSplit = () => {
   return (
      <div className="splitcenter">
         <div className="split top">
            <div className="centered">
               <UsingState/>
            </div>
         </div>
         <div className="split bottom">
            <div className="centered">
               <CodedState/>
            </div>
         </div>
      </div>
   );
};
export default useStateSplit;
