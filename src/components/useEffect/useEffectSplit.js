import React, { Fragment } from "react";
import UsingReducer from "./UsingEffect";
import UseDisplay from "../../hooks/useDisplay";

const UseReducerSplit = () => {
   const useStateCode = `import React, { Fragment, useEffect, useState } from "react";

   const UsingEffect = () => {
      const [button, buttonFunction] = useState(false);
   
      useEffect(() => {
         if (button) {
            alert('Clicking the button reinitiate the time point');
         } else return;
      }, [button]);
   
      const connectButtonFunction = () => {
         buttonFunction(!button);
      };
   
      return (
         <Fragment>
            <h1>Hello</h1>
            <button onClick={connectButtonFunction}>is this a pointless button?</button>
         </Fragment>
      );
   };
   export default UsingEffect;
   `.trim();

   return (
      <Fragment>
         <h1 className="stateheader">use effect to set check-points when to change the virtual Dom</h1>
         <div className="top">
            <UsingReducer />
         </div>
         <div className="bottom">
            <UseDisplay exampleCode={useStateCode} />
         </div>
      </Fragment>
   );
};
export default UseReducerSplit;
