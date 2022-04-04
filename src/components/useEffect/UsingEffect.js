import React, { useEffect } from "react";

const UsingEffect = () => {
   let test = 0;

   useEffect(() => {
      test++;
      console.log(test);
   }, []);

   console.log(test);

   return <h4>{test === 0 ? "Empty" : "Not empty"}</h4>
};
export default UsingEffect;
