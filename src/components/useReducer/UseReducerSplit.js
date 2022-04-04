import React, { Fragment } from "react";
import UsingReducer from "./UsingReducer";
import UseDisplay from "../../hooks/useDisplay";

const UseReducerSplit = () => {
   const useStateCode = `import { Fragment, useReducer } from "react";

   const reducer = (state, stateAction) => {
      switch (stateAction.type) {
         case "addNumber":
            return { number: state.number + 1, text: state.text };
         case "showText":
            return { number: state.number, text: !state.text };
         default:
            return;
      }
   };
   
   const UsingReducer = () => {
      const [state, stateAction] = useReducer(reducer, { number: 0, text: true });
   
      const anotherAction = () => {
         stateAction({ type: "addNumber" });
         stateAction({ type: "showText" });
      };
   
      return (
         <Fragment>
            <h1>{state.number}</h1>
            <button onClick={anotherAction}>Click here to change something</button>
            {state.text}
            {!state.text && <p>Showing this text</p>}
         </Fragment>
      );
   };
   
   export default UsingReducer;
   `.trim();

   return (
      <Fragment>
         <h1 className="stateheader">use reducer to change more than one thing in the virtual Dom</h1>
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
