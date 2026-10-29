import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AtmosphereOrbs from './AtmosphereOrbs';
import JoinCommunityModal from '../ui/JoinCommunityModal';

export default function MainLayout() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const location = useLocation();

  const isGlassVariant = location.pathname === '/' || location.pathname === '/events';

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      {/* Dynamic Ambient Mesh Glow Background */}
      <AtmosphereOrbs variant={isGlassVariant ? 'glass' : 'default'} />

      {/* Floating Header */}
      <Navbar onOpenJoinModal={() => setJoinModalOpen(true)} />

      {/* Main Page Outlet */}
      <main className="flex-1 w-full pt-16">
        <Outlet context={{ openJoinModal: () => setJoinModalOpen(true) }} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Join Community Onboarding Modal */}
      <JoinCommunityModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
      />
    </div>
  );
}
