import React from 'react';
import { MessageSquareHeart, Images, BellRing, Shield, Zap, Sparkles } from 'lucide-react';

const features = [
  {
    title: 'Real-time chat',
    desc: 'Instant, secure messaging with typing indicators and reactions.',
    icon: MessageSquareHeart,
    color: 'from-cyan-400 to-emerald-400',
  },
  {
    title: 'Shared gallery',
    desc: 'Store photos and videos together with smooth previews.',
    icon: Images,
    color: 'from-fuchsia-400 to-purple-400',
  },
  {
    title: 'Beeps',
    desc: 'Send a quick pulse to say “I’m thinking of you”.',
    icon: BellRing,
    color: 'from-purple-400 to-cyan-400',
  },
  {
    title: 'Privacy first',
    desc: 'End-to-end best practices and private pairing codes.',
    icon: Shield,
    color: 'from-emerald-400 to-teal-400',
  },
  {
    title: 'Lightning fast',
    desc: 'Built with modern tech for smooth, fluid interactions.',
    icon: Zap,
    color: 'from-cyan-400 to-fuchsia-400',
  },
  {
    title: 'Delightful details',
    desc: 'Micro-animations and glassy visuals for a calming vibe.',
    icon: Sparkles,
    color: 'from-teal-300 to-emerald-400',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent">Designed for two, built with love</h2>
          <p className="mt-3 text-slate-300/80">A thoughtfully curated set of tools to help you stay close, no matter the distance.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:bg-white/10 transition">
              <div className={`inline-flex items-center justify-center rounded-xl p-2 bg-gradient-to-r ${f.color} text-slate-900 shadow-[0_0_30px_rgba(59,130,246,0.15)]`}>
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-white">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-300/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
