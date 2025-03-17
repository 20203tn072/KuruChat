import React from "react";
import { NavLink } from "react-router-dom";

const UserChatCard = ({ user, index }) => {
  return (
    <NavLink
      to={`/user/chat/${index + 1}`}
      className={({ isActive }) =>
        `flex items-center p-2 text-[var(--text-color)] relative ${
          isActive ? "bg-[var(--darker-color)]" : "hover:bg-[var(--darker-color)]  hover:text-black"
        }`
      }
    >
      <div className="flex flex-col w-full text-white">
        <span className="text-lg font-semibold">{user.name}</span>
        <span className="text- truncate mt-2">{user.lastMessage}</span>
        <span className="text-sm text-end">{user.lastMessageDate}</span>
      </div>
    </NavLink>
  );
};

export default UserChatCard;
