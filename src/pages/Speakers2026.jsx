import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Sparkles, Mic, Calendar, MapPin, ArrowRight } from 'lucide-react'

export default function Speakers2026() {
  const speakers = [
    { name: "TBA", role: "Keynote Speaker", img: "photo-1573496359142-b8d87734a5a2" },
    { name: "TBA", role: "Industry Visionary", img: "photo-1508214751196-bfd1414742e9" },
    { name: "TBA", role: "Policy Leader", img: "photo-1589156191108-c7ea6f28f97b" },
    { name: "TBA", role: "Tech Innovator", img: "photo-1531123897727-8f129e1688ce" },
    { name: "TBA", role: "Investment Pioneer", img: "photo-1573497019940-1c28c88b4f3e" },
    { name: "TBA", role: "Social Entrepreneur", img: "photo-1534528741775-53994a69daeb" },
  ]

  return (
    <div className="min-h-screen font-body text-charcoal bg-cream overflow-x-hidden">
      <Navbar activePage="what-we-do" />

      {/* Hero Section */}
      <header className="relative bg-brand pt-56 pb-32 px-6 md:px-12 overflow-hidden text-center">
        <div className="african-pattern absolute inset-0 opacity-30 scale-150 rotate-12 brightness-200"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/50 to-brand z-10 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur mb-8">
            <Mic size={14} className="text-gold"/>
            <span className="text-gold text-[11px] font-black tracking-[0.2em] uppercase">Conference Speakers</span>
          </div>
          <h1 className="text-6xl md:text-[8rem] font-black uppercase font-heading leading-[0.85] tracking-tighter mb-12 text-white">
            2026 <span className="text-gold italic serif normal-case">Speakers</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium max-w-3xl mx-auto italic mb-12">
            Meet the visionaries, policymakers, and industry titans who will be shaping the conversation at AWIEF 2026.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur px-10 py-5 rounded-full border border-white/20">
              <Calendar className="text-gold" size={20} />
              <span className="text-white text-[11px] font-black uppercase tracking-widest">November 10 - 11, 2026</span>
            </div>
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur px-10 py-5 rounded-full border border-white/20">
              <MapPin className="text-gold" size={20} />
              <span className="text-white text-[11px] font-black uppercase tracking-widest">Cape Town, South Africa</span>
            </div>
          </div>
        </div>
      </header>

      {/* Speakers Grid */}
      <section className="py-32 px-6 md:px-12 bg-white rounded-t-[60px] -mt-12 relative z-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24">
            <p className="text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-8 italic">Coming Soon</p>
            <h2 className="text-5xl md:text-7xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-8">
              Speaker <span className="text-brand italic serif normal-case">Lineup</span>
            </h2>
            <p className="text-xl text-charcoal/40 font-medium italic max-w-2xl mx-auto">
              Our speaker lineup is being finalized. Check back soon for the full roster of world-class presenters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {speakers.map((speaker, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-square rounded-[48px] overflow-hidden mb-8 relative border-4 border-cream group-hover:border-brand/20 transition-editorial shadow-xl">
                  <img 
                    src={`https://images.unsplash.com/${speaker.img}?w=600&q=80`} 
                    alt={speaker.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-editorial duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-editorial"></div>
                  <div className="absolute top-8 right-8">
                    <div className="bg-gold/10 backdrop-blur-xl border border-gold/30 text-gold px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
                      <Sparkles size={10} /> Coming Soon
                    </div>
                  </div>
                </div>
                <h4 className="text-2xl font-black uppercase font-heading mb-2 group-hover:text-brand transition-editorial">{speaker.name}</h4>
                <p className="text-brand font-black tracking-widest text-[10px] uppercase italic">{speaker.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-brand text-white text-center px-6 relative overflow-hidden">
        <div className="african-pattern absolute inset-0 opacity-20 scale-150 rotate-12 brightness-200"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl font-black uppercase font-heading leading-none tracking-tighter mb-12">
            Secure Your <br/> <span className="text-gold italic serif normal-case">Seat</span>
          </h2>
          <p className="text-xl text-white/40 font-medium italic mb-16 max-w-xl mx-auto">
            Don't miss the opportunity to connect with these visionaries in person.
          </p>
          <a href="/purchase-conference-tickets" className="inline-flex items-center gap-4 bg-gold text-brand px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-white transition-editorial shadow-2xl">
            REGISTER NOW <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
