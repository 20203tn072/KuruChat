import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../module/admin/AdminLayout";
import UserLayout from "../module/user/UserLayout";
import SignInPage from "../module/auth/SignInPage";
import Chat from "../module/user/Chat";

// Componente para proteger rutas según el rol
const ProtectedRoute = ({ element, user, allowedRoles }) => {
    if (!user?.token) return <Navigate to="/" replace />;
    if (!allowedRoles.includes(user.usuario.id_usuario)) return <Navigate to="/" replace />;
    return element;
};

const AppRouter = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Escucha cambios en localStorage
    useEffect(() => {
        const handleStorageChange = () => {
            const storedUser = localStorage.getItem("user");
            setUser(storedUser ? JSON.parse(storedUser) : null);
        };
        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                {/* Ruta de inicio de sesión */}
                <Route path="/" element={<SignInPage setUser={setUser} />} />

                {/* Rutas protegidas */}
                <Route
                    path="/admin/*"
                    element={<ProtectedRoute user={user} allowedRoles={[1]} element={<AdminLayout perfilData={""} />} />}
                >
                    <Route path="chat/:chatId" element={<Chat />} />
                </Route>

                <Route
                    path="/user/*"
                    element={<ProtectedRoute user={user} allowedRoles={[2]} element={<UserLayout perfilData={""} />} />}
                >
                    <Route path="chat/:chatId" element={<Chat />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
