import { useState, createContext, useContext, useEffect } from 'react';
import { auth } from '../Firebase';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const signup = (email, password) => {
    return auth.createUserWithEmailandPassword(email, password);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
