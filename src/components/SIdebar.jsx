import React from "react";

const SidebarUser = ({ setActiveComponent }) => {
  return (
    <div className="h-screen w-16 text-white bg-custom-brown fixed top-0 left-0 flex flex-col items-center border-r-1 border-color-brown">
      <button
        className="pt-3 pb-2 px-3 text-gray-900 rounded-full mt-6 hover:bg-amber-500"
        onClick={() => setActiveComponent("Chats")}
      >
        <span className="material-symbols-outlined text-white text-3xl">chat</span>
      </button>

      <button
        className=" pt-3 pb-2 px-3 text-gray-900 rounded-full hover:bg-amber-500 absolute bottom-18 "
        onClick={() => setActiveComponent("Ajustes")}
      >
        <span className="material-symbols-outlined text-3xl text-white">settings</span>
      </button>

      <button
        className="ml-2 absolute bottom-4 left-0"
        onClick={() => setActiveComponent("Perfil")}
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
