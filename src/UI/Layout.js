import React from "react";
import NavigationBar from "./NavigationBar.js";
import MiniNavbar from "./MiniNavigation.js";

const Layout = props => {
   return (
      <div className="thescreen">
         <NavigationBar />
         <main>
            <MiniNavbar />
            {props.children}
         </main>
      </div>
   );
};

export default Layout;
