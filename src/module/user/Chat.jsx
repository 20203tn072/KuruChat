import React from "react";
import { useParams } from "react-router-dom";

const Chat = ({ chatId: propChatId }) => {
  // Se obtiene el chatId de la URL, si existe
  const { chatId: routeChatId } = useParams();
  // Se utiliza el prop si existe, sino se usa el parámetro de la URL
  const effectiveChatId = propChatId || routeChatId;

  const chatsData = [
    {
      id: 1,
      name: "Juanita Perez",
      icon: "https://randomuser.me/api/portraits/women/1.jpg",
      messages: [
        { fromMe: false, text: "¡Hola! ¿Cómo estás?" },
        { fromMe: true, text: "¡Hola! Todo bien, ¿y tú?" },
        { fromMe: true, text: "¡Hola! Todo bien, ¿y tú?" },
        { fromMe: false, text: "Todo bien, gracias por preguntar" },
      ],
    },
    {
      id: 2,
      name: "Carlos Garcia",
      icon: "https://randomuser.me/api/portraits/men/2.jpg",
      messages: [
        { fromMe: false, text: "¡Buenos días!" },
        { fromMe: true, text: "¡Buenos días, Carlos!" },
      ],
    },
    // ...otros chats
  ];

  if (!effectiveChatId) {
    return <div className="text-white">Ningún chat seleccionado</div>;
  }

  const chat = chatsData.find(
    (chat) => chat.id === parseInt(effectiveChatId, 10)
  );

  if (!chat) {
    return <div className="text-white">Chat no encontrado</div>;
  }

  return (
 <> <h2 className="text-2xl font-bold mb-6 p-6 bg-[var(--theme-color)]">{chat.name}</h2>
      
 <div className="px-4">
   <div className="flex flex-col space-y-2">
     {chat.messages.map((message, index) => (
       <div
         key={index}
         className={`p-2 rounded max-w-xs ${
           message.fromMe
             ? "self-end bg-[var(--darker-color)]"
             : "self-start bg-[var(--theme-color)] border-1 border-[var(--border-color)]"
         }`} 
       >
         <p>{message.text}</p>
       </div>
     ))}
   </div>
 </div>
</>  
  );
};

export default Chat;
