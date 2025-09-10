// src/context/AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const register = (userData) => {
    setRegisteredUsers([...registeredUsers, userData]);
  };

  const login = (email, password) => {
    const matchedUser = registeredUsers.find(
      user => user.email === email && user.password === password
    );
    if (matchedUser) {
      setUser(matchedUser);
      return matchedUser;
    }
    return null;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
