import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import SidebarList from "@/components/SidebarList";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen}>
        <SidebarList />
      </Sidebar>
      <>
        <Navbar onToggleSidebar={toggleSidebar} />
        <div className="grid place-items-center py-8">
          <Outlet />
        </div>
      </>
    </>
  );
};

export default Layout;
