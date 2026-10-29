import React from 'react';

export default function AtmosphereOrbs({ variant = 'default' }) {
  if (variant === 'glass') {
    return (
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-secondary-container/25 via-primary-container/20 to-tertiary-container/30 blur-[120px] rounded-full" />
        <div className="absolute top-[28rem] -left-48 w-[550px] h-[550px] bg-secondary/15 blur-[130px] rounded-full" />
        <div className="absolute top-[52rem] -right-48 w-[600px] h-[600px] bg-tertiary/15 blur-[140px] rounded-full" />
        <div className="absolute top-[96rem] left-1/4 w-[700px] h-[500px] bg-primary-container/15 blur-[130px] rounded-full" />
        <div className="absolute bottom-32 -right-36 w-[650px] h-[650px] bg-secondary-container/20 blur-[140px] rounded-full" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      <div className="absolute -top-24 -left-20 w-[600px] h-[600px] rounded-full bg-secondary-container/20 blur-[130px]" />
      <div className="absolute top-1/4 -right-20 w-[650px] h-[650px] rounded-full bg-tertiary-container/15 blur-[140px]" />
      <div className="absolute top-2/4 left-10 w-[550px] h-[550px] rounded-full bg-primary-container/15 blur-[130px]" />
      <div className="absolute top-3/4 right-1/4 w-[600px] h-[600px] rounded-full bg-secondary-fixed/25 blur-[140px]" />
    </div>
  );
}
