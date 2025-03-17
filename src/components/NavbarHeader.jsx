import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import AddFriendModal from "./AddFriendModal";
import { useLan } from "./LanguageContext";

const NavbarHeader = () => {
  const [isModalOpenFriend, setIsModalOpenFriend] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { translate } = useLan();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/"); // Redirige al login si no hay usuario
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const isSettingsPage = location.pathname === "/user/settings";
  const isProfilePage = location.pathname === "/user/profile";

  return (
    <div className="grid-rows-2 items-center justify-between p-3 border-b border-color-brown content-start text-white" style={{ color: "var(--text-color)" }}>
      <div className="row-start-1 mt-2 mb-5">
        <div className="grid grid-cols-6">
          <div className="col-span-5">
            <h2 className="text-4xl font-bold ">
              {isSettingsPage ? (
                <>
                  <NavLink to="/user/chat" className=" flex flex-col items-start m-2">
                    <span className="material-symbols-outlined text-4xl">arrow_back</span>
                  </NavLink>
                  <span>{translate("settings")}</span>
                </>
              ) : isProfilePage ? (
                <>
                  <NavLink to="/user/settings" className=" flex flex-col items-start m-2 " >
                    <span className="material-symbols-outlined text-4xl">arrow_back</span>
                  </NavLink>
                  <span>{translate("profile")}</span>
                </>
              ) : (
                <NavLink to="/user/chat">{translate("chats")}</NavLink>
              )}
            </h2>
          </div>

          {!isSettingsPage && !isProfilePage && (
            <>
              <div className="flex justify-end " >
                <NavLink to="/user/settings" className="pt-3 pb-2 px-3 rounded-full hover:bg-[var(--lighter-color)] ">
                  <span className="material-symbols-outlined text-4xl ">settings</span>
                </NavLink>

                <button
                  type="button"
                  onClick={() => setIsModalOpenFriend(true)}
                  className="p-2 rounded-full transition duration-300 cursor-pointer hover:bg-[var(--lighter-color)] "
                >
                  <span className="material-symbols-outlined  p-1 text-4xl">add_comment</span>
                </button>
              </div>

              <div className="mb-2 mt-3 w-full bg-amber-200  col-span-6">
                <form className="w-full max-w-lg mx-auto">
                  <label htmlFor="default-search" className="mb-2 text-sm font-medium  sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
                      <span className="material-symbols-outlined  text-2xl">search</span>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="placeholder-white block w-full pb-3 bt-4 pl-12 text-xm  border border-[#BCAFAA] rounded-sm bg-[var(--lighter-color)]  focus:ring-[#BCAFAA] focus:border-[#BCAFAA]"
                      placeholder={translate("search")}
                      required
                    />
                  </div>
                </form>
              </div>

            </>
          )}
        </div>
      </div>
      <AddFriendModal isOpen={isModalOpenFriend} onClose={() => setIsModalOpenFriend(false)} />
    </div>
  );
};

export default NavbarHeader;
