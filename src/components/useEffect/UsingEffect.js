import React, { Fragment, useEffect, useState } from "react";

const UsingEffect = () => {
   const [button, buttonFunction] = useState(null);

   useEffect(() => {
      if (!button) {
         return;
      } else 
      return;
      alert('Clicking the button reinitiate the time point');
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
