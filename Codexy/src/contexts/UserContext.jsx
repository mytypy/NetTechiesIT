import { createContext, useContext } from "react";
import useLocalStoarge  from '../hooks/useLocalStorage'


const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStoarge('user', null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);