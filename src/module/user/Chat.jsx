import { useParams } from 'react-router-dom';

const Chat = () => {

  const chatsData = [
    {
        id: 1,
        name: 'Juanita Perez',
        icon: 'https://randomuser.me/api/portraits/women/1.jpg',
        messages: [
            { fromMe: false, text: '¡Hola! ¿Cómo estás?' },
            { fromMe: true, text: '¡Hola! Todo bien, ¿y tú?' },
            { fromMe: false, text: 'Todo bien, gracias por preguntar' },
        ],
    },
    {
        id: 2,
        name: 'Carlos Garcia',
        icon: 'https://randomuser.me/api/portraits/men/2.jpg',
        messages: [
            { fromMe: false, text: '¡Buenos días!' },
            { fromMe: true, text: '¡Buenos días, Carlos!' },
        ],
    },
];

  const { chatId } = useParams();

  // Asegúrate de que chatsData no esté vacío o undefined
  if (!chatsData) {
    return <div>Error: datos de chat no disponibles</div>;
  }

  const chat = chatsData.find((chat) => chat.id === parseInt(chatId));

  if (!chat) {
    return <div>Chat no encontrado</div>;
  }

  return (
    <div className="chat-container">
      <h2>{chat.name}</h2>
      {chat.messages.map((message, index) => (
        <div key={index} className={`message ${message.fromMe ? 'from-me' : ''}`}>
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  );
};


export default Chat;
