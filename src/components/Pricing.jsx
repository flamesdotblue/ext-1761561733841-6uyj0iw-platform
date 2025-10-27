import React from 'react';
import { Check, Star } from 'lucide-react';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    tagline: 'Start your journey',
    features: ['Private pairing', 'Daily beeps', 'Basic chat', 'Limited gallery'],
    gradient: 'from-cyan-400 to-emerald-400',
    highlight: false,
  },
  {
    name: 'Plus',
    price: '$4.99',
    tagline: 'More moments',
    features: ['Unlimited beeps', 'HD gallery uploads', 'Voice notes', 'Priority support'],
    gradient: 'from-fuchsia-400 to-purple-400',
    highlight: true,
  },
  {
    name: 'Premium',
    price: '$9.99',
    tagline: 'All the feels',
    features: ['Enhanced storage', 'Advanced reactions', 'Activity history', 'Custom themes'],
    gradient: 'from-purple-400 to-cyan-400',
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent">Choose your vibe</h2>
          <p className="mt-3 text-slate-300/80">Flexible plans crafted for every relationship stage.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 ${t.highlight ? 'ring-2 ring-fuchsia-400/40' : ''}`}>
              {t.highlight && (
                <div className="absolute -top-3 right-4 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 px-3 py-1 text-xs font-medium text-white shadow-[0_0_30px_rgba(217,70,239,0.35)]">
                  <Star className="h-3 w-3" /> Popular
                </div>
              )}
              <div className={`inline-flex items-center justify-center rounded-2xl p-2 bg-gradient-to-r ${t.gradient} text-slate-900`}>
                <span className="text-sm font-semibold">{t.name}</span>
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <div className="text-4xl font-extrabold">{t.price}</div>
                <div className="text-slate-400">/mo</div>
              </div>
              <p className="mt-2 text-sm text-slate-300/80">{t.tagline}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-200">
                    <span className="inline-flex items-center justify-center rounded-md bg-white/10 border border-white/10 p-1">
                      <Check className="h-3.5 w-3.5 text-emerald-300" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-4 py-2.5 font-medium text-slate-900 hover:opacity-95 transition">
                Choose {t.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
