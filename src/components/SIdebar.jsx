import React from "react";
import { useLan } from "./LanguajeContext";

const SidebarUser = ({ setActiveComponent }) => {
   const { translate } = useLan();

  return (
    <div className="h-screen w-16 text-white bg-custom-brown fixed top-0 left-0 flex flex-col items-center border-r-1 border-color-brown">
      <button
>
        <span className="material-symbols-outlined text-white text-3xl">chat</span>
      </button>

      <button>
        <span className="material-symbols-outlined text-3xl text-white">settings</span>
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
