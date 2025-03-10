import React, { useContext, useState } from 'react';
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import ProfileUser from '../../components/ProfileUser';
import AddFriendModal from '../../components/AddFriendModal';
import Salir from "../../assets/img/logout.svg";
import Persona from "../../assets/img/person.svg";
import AddFriend from "../../assets/img/addFriend.svg";

const UserLayout = () => {
  const [isModalOpenProfile, setIsModalOpenProfile] = useState(false);
  const [isModalOpenFriend, setIsModalOpenFriend] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.clear();
    dispatch({ type: "SIGNOUT" });
    navigate("/");
  };

  const handleMouseEnter = (tooltipId) => {
    setActiveTooltip(tooltipId);
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  const users = [
    {
      name: "Juanita Perez",
      lastMessage: "Hola, ¿cómo estás?",
      lastMessageDate: "10:45 AM",
    },
    {
      name: "Carlos Garcia",
      lastMessage: "¡Buenos días, Carlos!",
      lastMessageDate: "Ayer",
    },
    {
      name: "Luna Evergreen",
      lastMessage: "¿Has probado el nuevo restaurante?",
      lastMessageDate: "12/10",
    },
    {
      name: "Phoenix Wilder",
      lastMessage: "Te envié el archivo.",
      lastMessageDate: "12/10",
    },
    {
      name: "Nova Frost",
      lastMessage: "¡Claro, nos vemos!",
      lastMessageDate: "12/09",
    },
    {
      name: "Seraphina Star",
      lastMessage: "Gracias por tu ayuda.",
      lastMessageDate: "12/08",
    },
    {
      name: "Aurora Sky",
      lastMessage: "¿Qué tal tu día?",
      lastMessageDate: "12/07",
    },
    {
      name: "Aurora Sky",
      lastMessage: "Te llamo más tarde.",
      lastMessageDate: "12/06",
    },
  ];

  return (
    <div className="flex">
      <aside className="fixed h-screen text-base top-0 left-0 z-40 flex-1 transition-transform w-64 overflow-visible bg-custom-purple">
        <div className="h-full">
          <ul className="space-y-2 p-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <li className="w-full relative">
              <button
                onClick={() => setIsModalOpenProfile(true)}
                className={`flex nav-a items-center p-2 text-white  relative w-full
                ${isModalOpenProfile ? "bg-custom-purple-selector" : "hover:bg-purple-500"}`}
              >
                <span
                  className={`absolute right-0 top-0 h-full w-1 transition-colors duration-200 `}
                  aria-hidden="true"
                ></span>
                <img
                  src={Persona}
                  alt="Persona"
                  className="w-6 h-6 ml-3"
                  onMouseEnter={() => handleMouseEnter("perfil")}
                  onMouseLeave={handleMouseLeave}
                />
                <span
                  className={`absolute left-8 ml-6 font-quicksand bg-purple-800 text-white text-sm py-1 px-3 rounded-md shadow-lg z-50 whitespace-nowrap transition-opacity duration-300 
                  ${activeTooltip === "perfil"
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                    }`}
                >
                  Mi Perfil
                </span>
              </button>
            </li>
            <li className="flex justify-end mt-4">
              <button
                type="button"
                onClick={() => setIsModalOpenFriend(true)}  // Abre el modal al hacer clic
                className="p-2 rounded-full transition duration-300 cursor-pointer"
              >
                <img src={AddFriend} alt="Añadir amigo" className="w-8 h-8" />
              </button>
            </li>
            {users.map((user, index) => (
              <li key={index} className="w-full border-b border-grey-400">

                <NavLink
                  to={`/chat/${index + 1}`}
                  className={({ isActive }) => {
                    const baseClasses = "flex nav-a items-center p-2 text-white  relative";
                    const activeClasses = "bg-custom-purple-selector";
                    const inactiveClasses = "hover:bg-purple-500";

                    return isActive
                      ? `${baseClasses} ${activeClasses}`
                      : `${baseClasses} ${inactiveClasses}`;
                  }}
                >
                  <div className="flex flex-col w-full">
                    <span className="text-lg font-semibold">{user.name}</span>
                    <span className="text-sm text-purple-200">{user.lastMessageDate}</span>
                    <span className="text-sm text-purple-200 truncate">{user.lastMessage}</span>
                  </div>
                </NavLink>
              </li>
            ))}



            <li className="absolute bottom-4 left-0 right-0 px-3 w-full">
              <div>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "flex nav-a items-center p-2 text-white rounded-lg "
                      : "flex nav-a items-center p-2 text-white rounded-lg  "
                  }
                  onClick={signOut}
                >
                  <img src={Salir} alt=" " className="w-6 h-6 ml-1"
                    onMouseEnter={() => handleMouseEnter("cerrarSesion")}
                    onMouseLeave={handleMouseLeave}
                  />
                  <span
                    className={`absolute left-8 ml-6 font-quicksand bg-custom-blue text-white text-sm py-1 px-3 rounded-md shadow-lg z-50 whitespace-nowrap transition-opacity duration-300 
                    ${activeTooltip === "cerrarSesion"
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                      }`}
                  >
                    Cerrar Sesión
                  </span>
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      <main style={{ flexGrow: 1, paddingTop: '2.5rem', marginLeft: '16rem', paddingLeft: '4rem', paddingRight: '4rem' }} className=''>
        <section>
          <Outlet />
        </section>
      </main>

      <ProfileUser
        isOpen={isModalOpenProfile}
        onClose={() => setIsModalOpenProfile(false)}
        datosPersonales={""}
      />

      <AddFriendModal
        isOpen={isModalOpenFriend}
        onClose={() => setIsModalOpenFriend(false)}
      />
    </div>
  );
};

export default UserLayout;