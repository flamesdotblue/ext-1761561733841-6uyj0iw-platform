import React from 'react';
import { Heart, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <motion.div
            className="relative flex h-10 w-10 items-center justify-center rounded-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-300/50 to-fuchsia-300/50 blur-md" />
            <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-white/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6)] ring-1 ring-white/50 backdrop-blur-md">
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Heart className="h-5 w-5 text-fuchsia-600 drop-shadow" fill="currentColor" />
              </motion.div>
            </div>
          </motion.div>
          <span className="font-semibold tracking-tight text-slate-800 drop-shadow-sm">Bondpie</span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#features" className="text-sm text-slate-700/90 transition hover:text-slate-900">Features</a>
          <a href="#security" className="text-sm text-slate-700/90 transition hover:text-slate-900">Security</a>
          <a href="#pricing" className="text-sm text-slate-700/90 transition hover:text-slate-900">Pricing</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-xl bg-white/50 px-4 py-2 text-sm font-medium text-slate-800 shadow-sm ring-1 ring-white/60 backdrop-blur-md transition hover:shadow md:block">
            Sign In
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-teal-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-300/30 transition hover:brightness-110 active:scale-[0.99]">
            Get Started
          </button>
          <button className="rounded-xl p-2 ring-1 ring-white/60 backdrop-blur-md md:hidden">
            <Menu className="h-5 w-5 text-slate-700" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
