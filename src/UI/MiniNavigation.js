import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const MiniNavigation = () => {
   const [ theDestination, setDestination ]= useState(null);
   const history = useHistory("");
   const location = useLocation();
   
   const navigationHandler = (event) => {
      event.preventDefault();
      setDestination(event.target.value);
      history.push(`/${theDestination}`);
   };

   const hasChoosen = theDestination ? theDestination : location.pathname;

   return (
      <div className="mininavigation">
         <label htmlFor="hooks">hookHooker.yoyo</label>
         <select onChange={navigationHandler} name="hooks" id="hooks">
            <option value={theDestination}>{hasChoosen}</option>
            <option value="usestate">useState</option>
            <option value="usereducer">useReducer</option>
            <option value="useeffect">useEffect</option>
            <option value="audi">Audi</option>
         </select>
      </div>
   )
};
export default MiniNavigation;
