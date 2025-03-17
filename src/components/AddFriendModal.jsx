import React, { useState } from 'react'
import { useLan } from "./LanguajeContext";


const addFriendModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  const { translate } = useLan();

  const handleAddFriend = () => {
    onClose(); 
  };

  const handleCancel = () => {
    setEmail(''); 
    onClose(); 
  };

  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center"
    style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo negro con opacidad del 50%
    }}
>    <div className="bg-[var(--darker-color)] text-[var(--text-color)]  p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-[var(--text-color)] ">{translate("addFriend")}</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-[var(--text-color)]  ">{translate("friendsEmail")}</label>
          <input
            type="email"
            id="email"
            className="mt-2 p-2 w-full border  text-[var(--text-color)] placeholder-[var(--text-color)]   rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-200 text-gray-400 rounded-md hover:bg-gray-300 hover:text-black"
          >
            {translate("cancelAccion")}
          </button>
          <button
            onClick={handleAddFriend}
            className="px-4 py-2 bg-[var(--theme-color)]  rounded-md hover:bg-[var(--lighter-color)]"
          >
            {translate("add")}
          </button>
        </div>
      </div>
    </div>
  )
}

export default addFriendModal