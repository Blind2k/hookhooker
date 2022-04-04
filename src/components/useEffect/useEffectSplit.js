import React, { Fragment } from "react";
import UsingEffect from "./UsingEffect";
import UseDisplay from "../../hooks/useDisplay";

const UseReducerSplit = () => {
   const useStateCode = 
   `const UsingEffect = () => {
      useEffect(() => {
         alert('You came, this is my time to shine');
      }, []);
   
      return <h4>Refresh the page to create a time point that some effect should happen</h4>
   };
   export default UsingEffect;`.trim();

   return (
      <Fragment>
         <h1 className="stateheader">use effect to set check-points when to change the virtual Dom</h1>
         <div className="top centered">
            <UsingEffect />
         </div>
         <div className="bottom">
            <UseDisplay exampleCode={useStateCode} />
         </div>
      </Fragment>
   );
};
export default UseReducerSplit;
