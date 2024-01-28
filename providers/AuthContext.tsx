"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface User {
  id: number;
  password: string;
  username: string;
  email: string;
  date_of_birth: string | null;
  profile_picture: string;
  name: string;
  phone: string;
  address: string;
  website: string | null;
  facebook: string;
  twitter: string;
  linkedin: string;
  category: string[];
  description: string;
  cv: string;
}

interface AuthContextProps {
  currentUser: User | null;
  isLoggedIn: boolean;
  googleUserId: number | null;
  lawyerCookie: string | null;
  adminToken: string | null;
  userId: number | null;
  lawyerObject: any | null; // New state for lawyer object
  setAuthUser: (user: User | null) => void;
  setLoggedIn: (loggedIn: boolean) => void;
  setGoogleUserId: (id: number | null) => void;
  setLawyerCookie: (cookie: string | null) => void;
  setAdminToken: (token: string | null) => void;
  setUserId: (id: number | null) => void;
  setLawyerObject: (lawyerObj: any | null) => void; // New function to set lawyer object
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [isLoggedIn, setLoggedIn] = useState<boolean>(() => {
    const storedLoggedIn = localStorage.getItem('isLoggedIn');
    return storedLoggedIn ? JSON.parse(storedLoggedIn) : false;
  });

  const [googleUserId, setGoogleUserId] = useState<number | null>(() => {
    const storedGoogleUserId = localStorage.getItem('googleUserId');
    return storedGoogleUserId ? JSON.parse(storedGoogleUserId) : null;
  });

  const [lawyerCookie, setLawyerCookie] = useState<string | null>(() => {
    const storedLawyerCookie = localStorage.getItem('lawyerCookie');
    return storedLawyerCookie ? JSON.parse(storedLawyerCookie) : null;
  });

  const [adminToken, setAdminToken] = useState<string | null>(() => {
    const storedAdminToken = localStorage.getItem('adminToken');
    return storedAdminToken ? JSON.parse(storedAdminToken) : null;
  });

  const [userId, setUserId] = useState<number | null>(() => {
    const storedUserId = localStorage.getItem('userId');
    return storedUserId ? JSON.parse(storedUserId) : null;
  });

  const [lawyerObject, setLawyerObject] = useState<any | null>(() => {
    const storedLawyerObject = localStorage.getItem('lawyerObject');
    return storedLawyerObject ? JSON.parse(storedLawyerObject) : null;
  });

  const setAuthUser = (user: User | null) => {
    setCurrentUser(user);
  };

  const setLoggedInStatus = (loggedIn: boolean) => {
    setLoggedIn(loggedIn);
  };

  const setGoogleUserIdValue = (id: number | null) => {
    setGoogleUserId(id);
  };

  const setLawyerCookieValue = (cookie: string | null) => {
    setLawyerCookie(cookie);
  };

  const setAdminTokenValue = (token: string | null) => {
    setAdminToken(token);
  };

  const setUserIdValue = (id: number | null) => {
    setUserId(id);
  };

  const setLawyerObjectValue = (lawyerObj: any | null) => {
    setLawyerObject(lawyerObj);
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('user');
    }
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  useEffect(() => {
    if (googleUserId !== null) {
      localStorage.setItem('googleUserId', JSON.stringify(googleUserId));
    }
  }, [googleUserId]);

  useEffect(() => {
    if (lawyerCookie !== null) {
      localStorage.setItem('lawyerCookie', JSON.stringify(lawyerCookie));
    } else {
      localStorage.removeItem('lawyerCookie');
    }
  }, [lawyerCookie]);

  useEffect(() => {
    if (adminToken !== null) {
      localStorage.setItem('adminToken', JSON.stringify(adminToken));
    } else {
      localStorage.removeItem('adminToken');
    }
  }, [adminToken]);

  useEffect(() => {
    if (userId !== null) {
      localStorage.setItem('userId', JSON.stringify(userId));
    }
  }, [userId]);

  useEffect(() => {
    if (lawyerObject !== null) {
      localStorage.setItem('lawyerObject', JSON.stringify(lawyerObject));
    } else {
      localStorage.removeItem('lawyerObject');
    }
  }, [lawyerObject]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isLoggedIn,
        googleUserId,
        lawyerCookie,
        adminToken,
        userId,
        lawyerObject,
        setAuthUser,
        setLoggedIn: setLoggedInStatus,
        setGoogleUserId: setGoogleUserIdValue,
        setLawyerCookie: setLawyerCookieValue,
        setAdminToken: setAdminTokenValue,
        setUserId: setUserIdValue,
        setLawyerObject: setLawyerObjectValue,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
