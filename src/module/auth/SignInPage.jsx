import React from 'react'
import { useNavigate } from 'react-router-dom'


const SignInPage = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
      const fakeUser = {
          token: "123456",
          usuario: {
              id_usuario: role === "admin" ? 1 : 2,
              nombre: role === "admin" ? "Admin" : "Usuario Normal",
          },
      };

      localStorage.setItem("user", JSON.stringify(fakeUser));
      setUser(fakeUser);

      navigate("/");
  };

  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
          <button
              className="px-4 py-2 bg-blue-500 text-white rounded mb-2"
              onClick={() => handleLogin("admin")}
          >
              Iniciar como Admin
          </button>
          <button
              className="px-4 py-2 bg-green-500 text-white rounded"
              onClick={() => handleLogin("user")}
          >
              Iniciar como Usuario Normal
          </button>
      </div>
  );
};

export default SignInPage