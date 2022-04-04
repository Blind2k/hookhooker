import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const MiniNavigation = () => {
   const [ theDestination, setDestination ]= useState();
   const history = useHistory("");
   const location = useLocation();

   const pathLocation = location.pathname;
   console.log(pathLocation);
   
   const navigationHandler = (event) => {
      event.preventDefault();
      setDestination(event.target.value);
      history.push(`/${theDestination}`);
   };

   const hasChoosen = theDestination ? theDestination : location.pathname;

   return (
      <div className="mininavigation">
         <label htmlFor="hooks">hookHooker.yoyo</label>
         <select onClick={navigationHandler}  name="hooks" id="hooks">
            <option value={theDestination}>{hasChoosen}</option>
            <option value="usestate">useState</option>
            <option value="usereducer">useReducer</option>
            <option value="useeffect">useEffect</option>
         </select>
      </div>
   )
};
export default MiniNavigation;
