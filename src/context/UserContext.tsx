import { ReactNode, createContext, useState } from "react";

interface Props {
    children?: ReactNode
}

export const UserContext = createContext({});

export function UserContextProvider({ children}: Props ) {
  const [userName, setUserName] = useState(null);
  const [id, setId] = useState(null);
  return (
    <UserContext.Provider value={{userName, setUserName, id, setId}}>
      {children}
    </UserContext.Provider>
  );
}
