'use client';

import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 flex h-16 items-center justify-between border-b border-zinc-800 bg-zinc-950 px-6">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-white">
          Panel de Monitoreo
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-zinc-700 flex items-center justify-center font-medium text-zinc-200">
            U
          </div>
          <span className="text-sm font-medium text-zinc-300">
            Usuario
          </span>
        </div>
      </div>
    </header>
  );
}