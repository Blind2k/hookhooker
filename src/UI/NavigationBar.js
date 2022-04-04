import { NavLink } from "react-router-dom";

const NavigationBar = () => {
   return (
      <div className="sidenav">
         <NavLink activeClassName="activenavigation" to="/usestate">useState</NavLink>
         <NavLink activeClassName="activenavigation" to="/usereducer">useReducer</NavLink>
         <NavLink activeClassName="activenavigation" to="/useeffect">useEffect</NavLink>
         <NavLink activeClassName="activenavigation" to="/split">split</NavLink>
      </div>
   )
};
export default NavigationBar;