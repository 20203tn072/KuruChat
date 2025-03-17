import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavbarHeader from "../../components/NavbarHeader";
import ChatContainer from "../../components/Chats";
import Profile from "../../components/ProfileUser";
import Settings from "../../components/Settings";
import Chat from "../../module/user/Chat";

const UserLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [user, setUser] = useState(null);

  // Aplicar color del tema al cargar la página
  useEffect(() => {
    const storedColor = localStorage.getItem("themeColor") || "#2D2523"; // Color por defecto
    document.documentElement.style.setProperty("--theme-color", storedColor);

    // Ajustar colores adicionales según el tema
    const getContrastColor = (hexColor) => {
      const r = parseInt(hexColor.substr(1, 2), 16);
      const g = parseInt(hexColor.substr(3, 2), 16);
      const b = parseInt(hexColor.substr(5, 2), 16);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness > 128 ? "#000000" : "#FFFFFF";
    };

    document.documentElement.style.setProperty("--text-color", getContrastColor(storedColor));
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/"); // Redirige al login si no hay usuario
    }
  }, [navigate]);

  useEffect(() => {
    const match = location.pathname.match(/^\/user\/chat\/(\d+)$/);
    if (match) {
      setSelectedChatId(match[1]);
      localStorage.setItem("selectedChatId", match[1]);
    } else {
      const storedChatId = localStorage.getItem("selectedChatId");
      if (storedChatId) {
        setSelectedChatId(storedChatId);
      }
    }
  }, [location.pathname]);

  let basePath = location.pathname;
  if (basePath.match(/^\/user\/(profile|settings|chat)\/\d+$/)) {
    basePath = "/user/" + basePath.split("/")[2];
  }

  let leftContent;
  switch (basePath) {
    case "/user/profile":
      leftContent = <Profile />;
      break;
    case "/user/settings":
      leftContent = <Settings />;
      break;
    case "/user/chat":
    default:
      leftContent = (
        <ChatContainer
          onSelectChat={(id) => {
            setSelectedChatId(id);
            navigate(`/user/chat/${id}`);
          }}
        />
      );
      break;
  }

  useEffect(() => {

  }, [])

  return (
    <div className="grid grid-cols-10 h-screen" id="contenedor-principal">
      {/* Sidebar */}
      <div className="col-span-3 bg-[var(--theme-color)] border-r border-1 border-[var(--border-color)] ">
        <NavbarHeader />
        {leftContent}
      </div>

      {/* Área de chat */}
      <div className="col-span-7 " style={{ backgroundColor: "var(--lighter-color)" }}>
        {selectedChatId ? (
          <Chat chatId={selectedChatId} />
        ) : (
          <div className="text-white text-center mt-10"></div>
        )}
  </div>
    </div>
  );
};

export default UserLayout;
