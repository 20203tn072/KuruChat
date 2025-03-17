import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../module/admin/AdminLayout";
import UserLayout from "../module/user/UserLayout";
import SignInPage from "../module/auth/SignInPage";
import Chat from "../module/user/Chat";

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
                {user?.token ? (
                    user?.usuario?.id_usuario === 1 ? (
                            <Route
                                path="*"
                                    element={<AdminLayout perfilData={""} />}
                            >
                                <Route path="chat/:chatId" element={<Chat />} />
                            </Route>
                    ) : (
                            <Route
                                path="*"
                                element={<UserLayout perfilData={""} />}
                            >
                                <Route path="chat/:chatId" element={<Chat />} />
                            </Route>
                    )
                ) : (
                    <>
                        <Route path="/" element={<SignInPage setUser={setUser}/>} />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
