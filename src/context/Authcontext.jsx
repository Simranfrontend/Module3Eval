import { createContext, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("auth")) || null
    );

    const login = (email, password) => {
        if (email === "admin@gmail.com" && password === "admin1234") {
            setUser({ role: "admin" });
            localStorage.setItem("auth", JSON.stringify({ role: "admin" }));
            return "admin";
        }

        if (email === "customer@gmail.com" && password === "cusotmer1234") {
            setUser({ role: "customer" });
            localStorage.setItem("auth", JSON.stringify({ role: "customer" }));
            return "customer";
        }
        alert ("Invalid Credentials");
        return null;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("auth");
    };

    return (
        <AuthContext.Provider vlaue={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};