import React, { useState, useEffect } from "react";
import SidebarUser from "../../components/SIdebar";
import NavbarHeader from "../../components/HeadersSidebar";
import Profile from "../../components/ProfileUser";
import Settings from "../../components/Settings";
import Chats from "../../components/Chats";

const UserLayout = () => {
  const [activeComponent, setActiveComponent] = useState("Chats");
  const navigate = (component) => {
    setActiveComponent(component);
  };

  useEffect(() => {

  }, [])

  return (
    <div className="grid grid-cols-6 bg-[var(--theme-color)]" id="contenedor-principal">
      {/* Sidebar */}
      <SidebarUser setActiveComponent={setActiveComponent} activeComponent={activeComponent} />

      <div className="col-span-2 bg-themedark ml-16 h-screen bg-red-800 " id="contenedor-secundario">
        <NavbarHeader activeComponent={activeComponent} />
        <div id="contenedor-tercero">
          {activeComponent === "Chats"  && <Chats />}
          {(activeComponent === "Perfil" || activeComponent === "Profile") && <Profile />}
          {(activeComponent === "Ajustes" || activeComponent === "Settings") && <Settings />}
          
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
