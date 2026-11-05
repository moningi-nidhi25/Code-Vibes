import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function AuthModal() {
  const {
    authModalOpen,
    closeAuthModal,
    login,
    register,
    handleAuthSuccess,
    authContextMessage,
    targetEventTitle,
  } = useAuth();

  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('member');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!authModalOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      let authedUser;
      if (mode === 'login') {
        authedUser = await login(email, password, role);
      } else {
        if (!name.trim()) {
          throw new Error('Please enter your full name.');
        }
        authedUser = await register(name, email, password);
      }
      handleAuthSuccess(authedUser);
    } catch (err) {
      setError(err.message || 'Authentication failed. Please verify credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleFillDemo = (demoEmail, demoPass, demoRole = 'member') => {
    setEmail(demoEmail);
    setPassword(demoPass);
    setRole(demoRole);
    setMode('login');
    setError('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1120]/50 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md glass-modal rounded-3xl shadow-2xl border border-white/80 overflow-hidden animate-scale-in">
        {/* Radiant linear accent top bar */}
        <div className="h-1.5 w-full gradient-core-action" />

        <div className="p-6 sm:p-8 space-y-5">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(0,229,255,0.12)] border border-[rgba(0,229,255,0.30)] text-[#006875] font-mono-sm text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                VERIFIED ACCESS REQUIRED
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-on-surface tracking-tight">
                {mode === 'login' ? 'Sign In to Register' : 'Create Verified Account'}
              </h2>
            </div>
            <button
              type="button"
              onClick={closeAuthModal}
              className="text-outline hover:text-on-surface p-1.5 rounded-lg hover:bg-black/5 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          {/* Context Notice Banner */}
          <div className="p-3.5 rounded-xl bg-white/70 border border-[#c2c6d7]/40 text-xs sm:text-sm text-on-surface-variant flex items-start gap-2.5 shadow-xs">
            <span className="material-symbols-outlined text-base text-[#0056c5] mt-0.5 shrink-0">verified_user</span>
            <div>
              {targetEventTitle ? (
                <>
                  To register for <strong className="text-on-surface font-semibold">{targetEventTitle}</strong>, please sign in with your verified profile.
                </>
              ) : (
                <span>{authContextMessage || 'Only verified community members can reserve event seats.'}</span>
              )}
            </div>
          </div>

          {/* Mode Tabs */}
          <div className="flex items-center p-1 rounded-xl bg-black/5 border border-white/50">
            <button
              type="button"
              onClick={() => { setMode('login'); setError(''); }}
              className={`flex-1 py-2 rounded-lg font-label-ui text-label-ui text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                mode === 'login'
                  ? 'bg-white text-[#0056c5] shadow-card-default'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => { setMode('register'); setError(''); }}
              className={`flex-1 py-2 rounded-lg font-label-ui text-label-ui text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                mode === 'register'
                  ? 'bg-white text-[#0056c5] shadow-card-default'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              New Registration
            </button>
          </div>

          {/* Error Notice */}
          {error && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <span className="material-symbols-outlined text-base shrink-0">error</span>
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-outline uppercase tracking-wider">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Chen"
                  className="w-full px-3.5 py-2.5 rounded-xl glass-input text-sm text-on-surface font-body-md"
                />
              </div>
            )}

            <div className="space-y-1">
              <label className="block text-xs font-semibold text-outline uppercase tracking-wider">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@thecodevibe.io"
                className="w-full px-3.5 py-2.5 rounded-xl glass-input text-sm text-on-surface font-body-md"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold text-outline uppercase tracking-wider">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 rounded-xl glass-input text-sm text-on-surface font-body-md"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl btn-gradient-primary shimmer-effect font-label-ui text-label-ui text-sm font-semibold shadow-sm active:scale-95 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Verifying credentials...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-base">verified</span>
                  <span>{mode === 'login' ? 'Sign In & Confirm Registration' : 'Create & Verify Account'}</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Logins Helper */}
          <div className="pt-2 border-t border-[#c2c6d7]/30 space-y-2">
            <span className="block font-mono-sm text-[11px] uppercase tracking-wider text-outline text-center">
              Quick One-Click Demo Credentials
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => handleFillDemo('builder@thecodevibe.io', 'builder123', 'member')}
                className="px-2.5 py-1 rounded-lg bg-white/80 border border-[#c2c6d7]/40 hover:bg-white text-xs font-mono-sm text-[#0056c5] transition-all cursor-pointer shadow-xs"
              >
                builder@thecodevibe.io
              </button>
              <button
                type="button"
                onClick={() => handleFillDemo('admin@thecodevibe.io', 'admin123', 'admin')}
                className="px-2.5 py-1 rounded-lg bg-white/80 border border-[#c2c6d7]/40 hover:bg-white text-xs font-mono-sm text-[#9700c6] transition-all cursor-pointer shadow-xs"
              >
                admin@thecodevibe.io
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
