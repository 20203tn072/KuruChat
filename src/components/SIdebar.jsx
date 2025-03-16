import React from "react";
import { useLan } from "./LanguajeContext";

const SidebarUser = ({ setActiveComponent }) => {
   const { translate } = useLan();

  return (
    <div className="h-screen w-16 bg-amber-600 fixed top-0 left-0 flex flex-col items-center p-3">
      <button
        className="p-3 text-gray-900 rounded-full mt-6 hover:bg-amber-500"
        onClick={() => setActiveComponent(`${translate("chats")}`)}
      >
        <span className="material-symbols-outlined text-white text-2xl">chat</span>
      </button>

      <button
        className="p-3 text-4xl text-gray-900 rounded-full hover:bg-amber-500 absolute bottom-16 left-0"
        onClick={() => setActiveComponent(`${translate("settings")}`)}
      >
        <span className="material-symbols-outlined">settings</span>
      </button>

      <button
        className="p-3 absolute bottom-4 left-0"
        onClick={() => setActiveComponent(`${translate("profile")}`)}
      >
        <img
          src="https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg"
          className="h-12 w-12 rounded-full"
          alt="Foto de perfil"
        />
      </button>
    </div>
  );
};

export default SidebarUser;
