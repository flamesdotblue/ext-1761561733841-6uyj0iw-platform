import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 pb-20 pt-4 sm:px-6 lg:px-8">
      <motion.div
        className="relative overflow-hidden rounded-3xl bg-white/40 p-8 text-center shadow-xl ring-1 ring-white/60 backdrop-blur-xl md:p-12"
        initial={{ scale: 0.98, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-emerald-300/70 to-teal-300/70 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-300/70 to-purple-300/70 blur-2xl" />

        <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Create your private couple space</h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-700">
          Start free. Upgrade anytime for more storage, premium features, and infinite memories—without any red flags.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button className="rounded-2xl bg-gradient-to-br from-teal-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-300/30 transition hover:brightness-110 active:scale-[0.99]">
            Start for free
          </button>
          <button className="rounded-2xl bg-white/60 px-6 py-3 text-sm font-medium text-slate-800 ring-1 ring-white/70 backdrop-blur-md transition hover:bg-white/70">
            View plans
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
