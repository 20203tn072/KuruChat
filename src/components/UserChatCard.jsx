import React from "react";
import { NavLink } from "react-router-dom";

const UserChatCard = ({ user, index }) => {
  return (
      <NavLink
        to={`/chat/${index + 1}`}
        className={({ isActive }) => `${"flex nav-a items-center p-2 text-white relative"} ${isActive ? "bg-custom-purple-selector" : "hover:bg-purple-500"}`}
      >
        <div className="flex flex-col w-full ">
          <span className="text-lg font-semibold">{user.name}</span>
          <span className="text-sm text-purple-200">{user.lastMessageDate}</span>
          <span className="text-sm text-purple-200 truncate">{user.lastMessage}</span>
        </div>
      </NavLink>
  );
};

export default UserChatCard;
