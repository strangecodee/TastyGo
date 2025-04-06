// src/utils/auth.js

export const isAdminLoggedIn = () => {
    return !!localStorage.getItem("adminToken");
};

export const logoutAdmin = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/";
};
