import { createContext, useState } from "react";



export const modalContext = createContext<any>({});

interface modalProviderProps {
  children: React.ReactElement;
}

//Values from Modals go here
export default function ModalProvider({ children }: modalProviderProps) {
  const [username, setUsername] = useState("");
  const [oldUsername, setOldUsername] = useState("");
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [firstName, setFirst] = useState("");
  const [oldFirst, setOldFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [oldLast, setOldLast] = useState("");
  

 //Username, Password, FirstName, LastName gets exported to Settings to be used
  return (
    <modalContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        firstName,
        setFirst,
        lastName,
        setLast,
        oldUsername,
        setOldUsername,
        oldPassword,
        setOldPassword,
        oldFirst,
        setOldFirst,
        oldLast,
        setOldLast
        
       
      }}
    >
      {children}
    </modalContext.Provider>
  );
}
