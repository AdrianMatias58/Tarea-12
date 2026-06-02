import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import React from 'react';

export default function MonitorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />

      <div className="flex pt-16">
        <Sidebar />

        <main className="flex-1 pl-64 min-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </div>
    </div>
  );
}