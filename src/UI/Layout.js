import React, { Fragment } from "react";
import NavigationBar from "./NavigationBar.js";

const Layout = (props) => {
  return (
    <div className="thescreen">
      <NavigationBar/>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
