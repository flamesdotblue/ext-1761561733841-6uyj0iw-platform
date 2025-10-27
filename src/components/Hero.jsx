import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, Image as ImageIcon, Bell } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-16 md:pt-24 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent"
            >
              Strengthen your bond through beautiful, real-time moments
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 text-slate-300/90 text-lg"
            >
              Bondpie is a modern couples platform helping partners connect with delightful interactions, private chats, and shared memories — all wrapped in a calming, glassy aesthetic.
            </motion.p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-5 py-3 font-medium text-slate-900 hover:opacity-95 transition shadow-[0_0_40px_rgba(34,197,94,0.25)]"
              >
                Get Started
                <Sparkles className="h-4 w-4" />
              </a>
              <button className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition">
                Learn More
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-xs text-slate-300/80">
              <div className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-3">
                <div className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-cyan-300"/> Real-time chat</div>
              </div>
              <div className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-3">
                <div className="flex items-center gap-2"><ImageIcon className="h-4 w-4 text-fuchsia-300"/> Shared gallery</div>
              </div>
              <div className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-3">
                <div className="flex items-center gap-2"><Bell className="h-4 w-4 text-emerald-300"/> Beep alerts</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl p-1 bg-gradient-to-br from-purple-400/40 via-cyan-400/40 to-emerald-400/40"
            >
              <div className="rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10 p-6">
                <div className="grid gap-4">
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-300">Live chat</div>
                      <div className="h-2 w-2 rounded-full bg-emerald-400" />
                    </div>
                    <div className="mt-3 space-y-2 text-sm">
                      <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-cyan-300"/><span className="text-slate-200">Hey love, thinking of you 💫</span></div>
                      <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-fuchsia-300"/><span className="text-slate-200">Same! Want to add photos from today?</span></div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-300">Beeps sent</div>
                      <div className="text-xs text-emerald-300">+1</div>
                    </div>
                    <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                      <div className="h-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 w-1/3" />
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-300">Shared memories</div>
                      <div className="text-xs text-cyan-300">42</div>
                    </div>
                    <div className="mt-3 grid grid-cols-6 gap-1">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/20 border border-white/10" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
