import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "../SystemAdministration/SystemAdminDataManage.css"; // Ensure global styles are applied

const SidebarLayout = () => {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarLayout;
