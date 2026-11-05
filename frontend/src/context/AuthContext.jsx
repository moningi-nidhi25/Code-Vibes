import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiLogin, apiRegister, apiUpdateProfile } from '../services/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('vibe_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem('vibe_token') || null;
  });

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [authCallback, setAuthCallback] = useState(null);
  const [authContextMessage, setAuthContextMessage] = useState('');
  const [targetEventTitle, setTargetEventTitle] = useState('');

  useEffect(() => {
    if (user) {
      localStorage.setItem('vibe_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('vibe_user');
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      localStorage.setItem('vibe_token', token);
    } else {
      localStorage.removeItem('vibe_token');
    }
  }, [token]);

  const login = async (email, password, role = 'member') => {
    const res = await apiLogin(email, password, role);
    if (res && res.user) {
      const verifiedUser = { ...res.user, isVerified: true };
      setUser(verifiedUser);
      setToken(res.token || `vibe_${Date.now()}`);
      return verifiedUser;
    }
    throw new Error('Login failed: invalid response.');
  };

  const register = async (name, email, password) => {
    const res = await apiRegister(name, email, password);
    if (res && res.user) {
      const verifiedUser = { ...res.user, isVerified: true };
      setUser(verifiedUser);
      setToken(res.token || `vibe_${Date.now()}`);
      return verifiedUser;
    }
    throw new Error('Registration failed.');
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setProfileModalOpen(false);
    localStorage.removeItem('vibe_user');
    localStorage.removeItem('vibe_token');
  };

  /**
   * Updates current builder's profile (name and WhatsApp number).
   */
  const updateProfile = async ({ name, whatsapp }) => {
    if (!user) throw new Error('Not authenticated.');
    const res = await apiUpdateProfile({
      email: user.email,
      name: name.trim(),
      whatsapp: whatsapp ? whatsapp.trim() : ''
    });

    const updatedUser = {
      ...user,
      name: (res.user && res.user.name) || name.trim(),
      whatsapp: (res.user && res.user.whatsapp !== undefined) ? res.user.whatsapp : (whatsapp ? whatsapp.trim() : '')
    };

    setUser(updatedUser);
    localStorage.setItem('vibe_user', JSON.stringify(updatedUser));
    return updatedUser;
  };

  const openProfileModal = () => setProfileModalOpen(true);
  const closeProfileModal = () => setProfileModalOpen(false);

  /**
   * Prompts authentication. If user is already authenticated, immediately executes callback.
   * Otherwise opens the AuthModal and executes callback upon successful login.
   */
  const requireAuth = (callback, contextMessage = 'Please sign in to verify your identity before registering.', eventTitle = '') => {
    if (user) {
      if (typeof callback === 'function') {
        callback(user);
      }
      return true;
    }

    setAuthCallback(() => callback);
    setAuthContextMessage(contextMessage);
    setTargetEventTitle(eventTitle);
    setAuthModalOpen(true);
    return false;
  };

  const handleAuthSuccess = (authenticatedUser) => {
    setAuthModalOpen(false);
    if (typeof authCallback === 'function') {
      authCallback(authenticatedUser);
      setAuthCallback(null);
    }
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
    setAuthCallback(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: Boolean(user),
        login,
        register,
        logout,
        updateProfile,
        requireAuth,
        authModalOpen,
        closeAuthModal,
        profileModalOpen,
        openProfileModal,
        closeProfileModal,
        handleAuthSuccess,
        authContextMessage,
        targetEventTitle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
