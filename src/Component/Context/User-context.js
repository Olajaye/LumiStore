
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChangedListiner, createUserDocumentFromAuth } from "../../Utills/Firebase/Firebase";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const Value = { currentUser, setCurrentUser }

  useEffect(() => {
    const onSubscribe = onAuthStateChangedListiner((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })
    return onSubscribe
  }, [])

  return <UserContext.Provider value={Value}>{children}</UserContext.Provider>
}

export const CurrentUserContext = () => {
  return useContext(UserContext)
}