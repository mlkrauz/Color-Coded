import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {

  // Create state variables
  const [user, setUser] = useState({});

  // Callback function that the login page can use to return the logged in user.
  const sendUserCallback = (incomingUser) => { setUser(incomingUser) };

  return (
    <UserContext.Provider value={{ user, sendUserCallback }}>
      { children }
    </UserContext.Provider>
  );
}