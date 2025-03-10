import React, { useState } from 'react'

const addFriendModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  const handleAddFriend = () => {
    onClose(); 
  };

  const handleCancel = () => {
    setEmail(''); 
    onClose(); 
  };

  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Agregar Amigo</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo del amigo</label>
          <input
            type="email"
            id="email"
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Escribe el correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
          >
            Cancelar
          </button>
          <button
            onClick={handleAddFriend}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  )
}

export default addFriendModal