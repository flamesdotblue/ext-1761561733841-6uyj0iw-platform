import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      {/* Background gradients and glow orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,theme(colors.cyan.500/.35),transparent_60%)] blur-2xl" />
        <div className="absolute top-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,theme(colors.purple.500/.35),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-96 w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,theme(colors.fuchsia.500/.2),transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,theme(colors.white/0.04),transparent_70%)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <footer className="border-t border-white/10 py-8 mt-16">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Bondpie. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
