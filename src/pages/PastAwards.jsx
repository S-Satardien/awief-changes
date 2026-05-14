import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Award, ArrowRight, Search, X } from 'lucide-react'

const awardsData = [
  { year: "2025", category: "Lifetime Achievement", name: "Stella Nkomo", company: "Pan-African Holdings", img: "photo-1573496359142-b8d87734a5a2" },
  { year: "2025", category: "Tech Entrepreneur", name: "Aisha Pandor", company: "SweepSouth", img: "photo-1531123897727-8f129e1688ce" },
  { year: "2025", category: "Agri Entrepreneur", name: "Ndidi Nwuneli", company: "LEAP Africa", img: "photo-1589156191108-c7ea6f28f97b" },
  { year: "2024", category: "Social Entrepreneur", name: "Lilian Makoi", company: "Jamii Africa", img: "photo-1531384441138-2736e62e0919" },
]

export default function PastAwards() {
  const [filter, setFilter] = useState('All')

  return (
    <div className="min-h-screen font-body text-charcoal bg-cream overflow-x-hidden">
      <Navbar />

      {/* Editorial Header - High Impact Berry Hall of Fame */}
      <header className="relative bg-brand pt-56 pb-32 px-6 md:px-12 overflow-hidden text-center">
        <div className="african-pattern absolute inset-0 opacity-30 scale-150 rotate-12 brightness-200"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/50 to-brand z-10 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur mb-8">
            <Award size={14} className="text-gold"/>
            <span className="text-gold text-[11px] font-black tracking-[0.2em] uppercase">Industry Excellence</span>
          </div>
          <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black uppercase font-heading leading-[0.85] tracking-tighter mb-12 text-white">
            Hall <span className="text-gold italic serif normal-case">Of Fame</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium max-w-3xl mx-auto italic">
            A tribute to the visionaries and pioneers who have redefined the economic landscape for women across the African continent.
          </p>
        </div>
      </header>

      {/* Archive Portal - White Editorial Spread */}
      <section className="py-32 px-6 md:px-12 bg-white rounded-t-[60px] -mt-12 relative z-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-24">
            {/* Sidebar Filters */}
            <div className="col-span-12 lg:col-span-3">
              <div className="sticky top-32 space-y-16">
                <div>
                  <p className="text-brand font-black tracking-[0.3em] uppercase text-[10px] mb-8 italic border-l-4 border-gold pl-6">Timeline of Achievement</p>
                  <div className="space-y-6">
                    {['All', '2025', '2024', '2023', '2022'].map(y => (
                      <button 
                        key={y} 
                        onClick={() => setFilter(y)} 
                        className={`block text-4xl font-black uppercase font-heading transition-editorial hover:text-brand tracking-tighter ${filter === y ? 'text-brand' : 'text-charcoal/10'}`}
                      >
                        {y}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="p-10 bg-warm rounded-[48px] border border-charcoal/5 shadow-sm group hover:shadow-xl transition-editorial">
                   <h3 className="text-[10px] font-black tracking-[0.2em] uppercase text-charcoal/40 mb-8">Quick Search</h3>
                   <div className="flex items-center gap-4 border-b-2 border-charcoal/10 pb-4 focus-within:border-brand transition-editorial">
                     <Search size={18} className="text-charcoal/20"/>
                     <input type="text" placeholder="Search Winner..." className="bg-transparent focus:outline-none text-sm font-black uppercase tracking-widest w-full placeholder:text-charcoal/20"/>
                   </div>
                </div>
              </div>
            </div>

            {/* Winner Portrait Grid */}
            <div className="col-span-12 lg:col-span-9">
              <div className="grid md:grid-cols-2 gap-16">
                {awardsData.map((winner, i) => (
                  <div key={i} className={`group cursor-pointer relative ${i % 2 === 1 ? 'md:mt-32' : ''}`}>
                    <div className="relative aspect-[3/4] rounded-[64px] overflow-hidden shadow-2xl mb-10 border-4 border-warm transition-editorial group-hover:border-brand/20">
                      <img 
                        src={`https://images.unsplash.com/${winner.img}?w=800&q=80`} 
                        alt={winner.name} 
                        className="w-full h-full object-cover transition-editorial duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-editorial duration-700"></div>
                      <div className="absolute inset-0 bg-gold/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-editorial"></div>
                      
                      <div className="absolute top-10 right-10">
                         <div className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest">
                           {winner.year}
                         </div>
                      </div>

                      <div className="absolute bottom-12 left-12 right-12 translate-y-8 group-hover:translate-y-0 transition-editorial duration-700">
                         <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-px bg-gold"></div>
                            <p className="text-gold font-black tracking-[0.3em] uppercase text-[9px]">
                              {winner.category}
                            </p>
                         </div>
                         <h3 className="text-4xl font-black text-white uppercase font-heading leading-[0.85] tracking-tighter mb-4">
                           {winner.name}
                         </h3>
                         <p className="text-white/60 text-sm font-black uppercase tracking-widest italic">
                           {winner.company}
                         </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-32 text-center">
                 <button className="bg-brand text-white px-16 py-8 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-gold hover:text-white transition-editorial shadow-2xl flex items-center gap-6 mx-auto group">
                   VIEW FULL ARCHIVE <ArrowRight size={18} className="group-hover:translate-x-2 transition-editorial" />
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kinetic Typography Marquee - High Authority */}
      <section className="py-32 bg-brand overflow-hidden relative border-t border-white/10">
        <div className="african-pattern absolute inset-0 opacity-10 scale-150 rotate-12 brightness-200"></div>
        <div className="flex whitespace-nowrap animate-marquee relative z-10">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex items-center">
              <span className="text-[6rem] md:text-[12rem] font-black text-white/10 uppercase tracking-[0.2em] px-12">Excellence</span>
              <span className="text-[6rem] md:text-[12rem] font-black text-gold uppercase tracking-[0.2em] px-12 italic serif normal-case">Impact</span>
              <span className="text-[6rem] md:text-[12rem] font-black text-white/10 uppercase tracking-[0.2em] px-12">Resilience</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
