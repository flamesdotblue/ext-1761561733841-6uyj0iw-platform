import React from 'react';
import { Heart, Settings, Star } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-cyan-400/40 blur-md" />
            <div className="relative rounded-xl bg-gradient-to-br from-cyan-400 via-teal-300 to-emerald-400 p-1.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950/80">
                <Heart className="h-4 w-4 text-teal-200" />
              </div>
            </div>
          </div>
          <span className="font-semibold tracking-tight">Bondpie</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#" className="hover:text-white transition inline-flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-300" /> Reviews
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10 transition">
            <Settings className="h-4 w-4" />
            <span>Dashboard</span>
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 px-3 py-2 text-sm font-medium text-white shadow-[0_0_40px_rgba(168,85,247,0.2)] hover:scale-[1.01] active:scale-[0.99] transition">
            Get the App
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
