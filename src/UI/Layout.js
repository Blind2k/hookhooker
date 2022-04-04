import React from "react";
import NavigationBar from "./NavigationBar.js";
import MiniNavbar from "./MiniNavigation.js";
import Particles from "../UI/Particles";

const Layout = props => {
   return (
      <div className="thescreen">
         <NavigationBar />
         <main>
            <MiniNavbar />
            {props.children}
         </main>
         {/* <Particles/> */}
      </div>
   );
};

export default Layout;
