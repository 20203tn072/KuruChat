import React from "react";
import UserChatCard from "./UserChatCard";

const users = [
  { name: "Juanita Perez", lastMessage: "Hola, ¿cómo estás?", lastMessageDate: "10:45 AM" },
  { name: "Carlos Garcia", lastMessage: "¡Buenos días, Carlos!", lastMessageDate: "Ayer" },
  { name: "Luna Evergreen", lastMessage: "¿Has probado el nuevo restaurante?", lastMessageDate: "12/10" },
  { name: "Phoenix Wilder", lastMessage: "Te envié el archivo.", lastMessageDate: "12/10" },
  { name: "Nova Frost", lastMessage: "¡Claro, nos vemos!", lastMessageDate: "12/09" },
  { name: "Seraphina Star", lastMessage: "Gracias por tu ayuda.", lastMessageDate: "12/08" },
  { name: "Aurora Sky", lastMessage: "¿Qué tal tu día?", lastMessageDate: "12/07" },
  { name: "Aurora Sky", lastMessage: "Te llamo más tarde.", lastMessageDate: "12/06" },
];

const Chats = () => {
  return (
    <div className="overflow-y-auto h-[468px] mr-1.5">
      {users.map((user, index) => (
        <div key={index} className="border-b border-1 border-[var(--border-color)] bg-[var(--theme-color)]">
          <UserChatCard user={user} index={index} />
        </div>
      ))}
    </div>
  );
};

export default Chats;
