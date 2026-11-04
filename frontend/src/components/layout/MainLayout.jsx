import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import JoinCommunityModal from '../ui/JoinCommunityModal';

export default function MainLayout() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <Navbar onOpenJoinModal={() => setJoinModalOpen(true)} />
      <main className="flex-1 w-full pt-16">
        <Outlet context={{ openJoinModal: () => setJoinModalOpen(true) }} />
      </main>
      <Footer />
      <JoinCommunityModal isOpen={joinModalOpen} onClose={() => setJoinModalOpen(false)} />
    </div>
  );
}
