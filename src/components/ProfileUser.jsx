import React from 'react'

const ProfileUser = ({ isOpen, onClose, datosPersonales }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Perfil de Usuario</h2>
        <p>{datosPersonales}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  )
}

export default ProfileUser