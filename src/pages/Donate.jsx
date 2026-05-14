import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Heart, ShieldCheck, CreditCard, ArrowRight, CheckCircle2, Globe, Sparkles, Scale, Users, TrendingUp, HandHeart, Lock } from 'lucide-react'

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState('100')
  const [donationType, setDonationType] = useState('one-time')

  return (
    <div className="min-h-screen font-body text-charcoal bg-cream overflow-x-hidden">
      <Navbar activePage="donate" />

      {/* 1. "In Your Face" Hero Section - High Visibility Berry Entrance */}
      <header className="relative bg-brand pt-56 pb-32 px-6 md:px-12 overflow-hidden">
        <div className="african-pattern absolute inset-0 opacity-30 scale-150 rotate-12 brightness-200"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/50 to-brand z-10 pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto relative z-20">
          <div className="editorial-grid items-center gap-16">
            <div className="col-span-12 lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/40 bg-gold/10 backdrop-blur mb-8">
                <Sparkles size={14} className="text-gold"/>
                <span className="text-gold text-[9px] font-black tracking-[0.3em] uppercase">Impact Driven</span>
              </div>
              <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black uppercase font-heading leading-[0.8] tracking-tighter mb-12 text-white">
                Fuel the <br/> <span className="text-gold italic serif normal-case">Revolution</span>
              </h1>
              <p className="text-xl md:text-3xl text-white/80 leading-tight font-medium max-w-3xl italic border-l-4 border-gold pl-8">
                Your contribution is not just a donation; it's an investment in the architect of Africa's future economy—the female entrepreneur.
              </p>
              <div className="mt-16 flex flex-wrap gap-8">
                <a href="#donate-section" className="bg-gold text-brand px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-white transition-editorial shadow-2xl">
                  INVEST NOW
                </a>
                <div className="flex items-center gap-4 text-white/60">
                   <div className="flex -space-x-3">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full border-4 border-brand bg-charcoal overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Donor" className="w-full h-full object-cover grayscale" />
                        </div>
                      ))}
                   </div>
                   <p className="text-[10px] font-black uppercase tracking-widest leading-none">
                     Join 5,000+ <br/> Global Donors
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Why Your Donation Matters - High Authority Editorial Spread */}
      <section className="py-28 px-6 md:px-12 bg-white rounded-t-[60px] -mt-12 relative z-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5">
               <div className="flex items-center gap-3 text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-10">
                  <span className="w-10 h-0.5 bg-brand"></span>
                  The Impact Gap
               </div>
               <h2 className="text-5xl md:text-7xl font-black uppercase font-heading leading-[0.8] tracking-tighter mb-12">
                 Why Your <br/> <span className="text-brand italic serif">Gift Matters</span>
               </h2>
               <div className="space-y-12">
                  <div className="flex gap-8 group">
                    <div className="w-16 h-16 rounded-[24px] bg-warm flex items-center justify-center text-brand shrink-0 group-hover:bg-brand group-hover:text-white transition-editorial shadow-sm">
                      <TrendingUp size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-black uppercase font-heading mb-3">Market Acceleration</h4>
                      <p className="text-charcoal/40 font-medium italic leading-relaxed">Closing the gender financing gap which costs sub-Saharan Africa $95 billion annually.</p>
                    </div>
                  </div>
                  <div className="flex gap-8 group">
                    <div className="w-16 h-16 rounded-[24px] bg-warm flex items-center justify-center text-brand shrink-0 group-hover:bg-brand group-hover:text-white transition-editorial shadow-sm">
                      <Users size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-black uppercase font-heading mb-3">Community Resilience</h4>
                      <p className="text-charcoal/40 font-medium italic leading-relaxed">Women reinvest 90% of their income into their families and communities.</p>
                    </div>
                  </div>
                  <div className="flex gap-8 group">
                    <div className="w-16 h-16 rounded-[24px] bg-warm flex items-center justify-center text-brand shrink-0 group-hover:bg-brand group-hover:text-white transition-editorial shadow-sm">
                      <HandHeart size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-black uppercase font-heading mb-3">Legacy Building</h4>
                      <p className="text-charcoal/40 font-medium italic leading-relaxed">Creating sustainable mentorship loops for the next generation of African founders.</p>
                    </div>
                  </div>
               </div>
            </div>
            <div className="lg:col-span-7">
               <div className="relative rounded-[64px] overflow-hidden shadow-2xl border-[12px] border-warm aspect-[4/5] lg:aspect-auto lg:h-[800px]">
                  <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80" alt="Impact" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-editorial duration-1000 scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-16 left-16 right-16">
                    <div className="text-gold text-7xl font-black font-heading mb-4">90%</div>
                    <p className="text-white text-xl font-black uppercase tracking-widest leading-tight">Reinvestment Rate <br/> in local communities</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Make Your Donation Section - Refined Scale & Dynamic Impact */}
      <section id="donate-section" className="py-24 px-6 md:px-12 bg-warm relative overflow-hidden">
        <div className="african-pattern absolute inset-0 opacity-[0.03] scale-150 rotate-45"></div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-6xl font-black uppercase font-heading leading-none tracking-tighter mb-6">
               Select Your <span className="text-brand serif italic normal-case">Contribution</span>
             </h2>
             <div className="flex justify-center gap-3">
                {['one-time', 'monthly'].map(type => (
                  <button 
                    key={type}
                    onClick={() => setDonationType(type)}
                    className={`px-8 py-3 rounded-full text-[9px] font-black uppercase tracking-widest transition-editorial border-2 ${
                      donationType === type 
                      ? 'bg-brand text-white border-brand shadow-lg' 
                      : 'bg-white text-charcoal/30 border-charcoal/5 hover:border-brand hover:text-brand'
                    }`}
                  >
                    {type.replace('-', ' ')}
                  </button>
                ))}
             </div>
          </div>
          <div className="grid lg:grid-cols-12 gap-10 items-start">
             <div className="lg:col-span-8 bg-white p-10 md:p-16 rounded-[48px] shadow-xl border border-charcoal/5">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                   {['50', '100', '250', '500', '1000', 'Custom'].map(amt => (
                     <button
                        key={amt}
                        onClick={() => setSelectedAmount(amt)}
                        className={`py-8 rounded-[24px] text-xl font-black transition-editorial border-2 flex flex-col items-center justify-center gap-1 ${
                          selectedAmount === amt 
                          ? 'bg-brand border-brand text-white shadow-xl scale-105' 
                          : 'bg-cream/30 border-charcoal/5 text-charcoal hover:border-brand shadow-sm'
                        }`}
                     >
                        <span className="text-[8px] font-black tracking-widest opacity-60 uppercase">USD</span>
                        {amt === 'Custom' ? amt : `$${amt}`}
                     </button>
                   ))}
                </div>

                <div className="space-y-6">
                   <div className="group relative">
                      <input type="email" placeholder="Email Address" className="w-full bg-cream/30 border-b border-charcoal/20 py-5 px-4 focus:outline-none focus:border-brand transition-editorial text-base font-medium placeholder:text-charcoal" />
                   </div>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-8 border-t border-charcoal/5 pt-10">
                   <div className="flex items-center gap-2 opacity-60">
                      <Lock size={14} className="text-brand" />
                      <span className="text-[8px] font-black uppercase tracking-widest text-charcoal">256-bit Encryption</span>
                   </div>
                   <div className="flex items-center gap-2 opacity-60">
                      <ShieldCheck size={14} className="text-brand" />
                      <span className="text-[8px] font-black uppercase tracking-widest text-charcoal">Secure Checkout</span>
                   </div>
                   <div className="flex items-center gap-2 opacity-60">
                      <CreditCard size={14} className="text-brand" />
                      <span className="text-[8px] font-black uppercase tracking-widest text-charcoal">All Major Cards</span>
                   </div>
                </div>
             </div>

             <div className="lg:col-span-4 space-y-6">
                <div className="bg-brand p-10 rounded-[40px] text-white shadow-2xl relative overflow-hidden group min-h-[400px] flex flex-col justify-center">
                   <div className="african-pattern absolute inset-0 opacity-10 group-hover:opacity-20 transition-editorial scale-150"></div>
                   <div className="relative z-10">
                      <Heart className="text-gold mb-6" size={32} />
                      <h4 className="text-xl font-black uppercase font-heading mb-6 tracking-tight leading-tight">Your impact with <span className="text-gold">${selectedAmount === 'Custom' ? '500+' : selectedAmount}</span></h4>
                      <ul className="space-y-5">
                         {selectedAmount === '50' && [
                           "Full scholarship for 1 female founder",
                           "Digital skills toolkit access",
                           "Inclusion in community network"
                         ].map((item, i) => (
                           <li key={i} className="flex gap-3 items-start text-sm font-medium text-white/60 italic leading-snug">
                             <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0"></div>
                             {item}
                           </li>
                         ))}
                         {selectedAmount === '100' && [
                           "Training for 2 female entrepreneurs",
                           "Direct mentorship matching",
                           "Resource center premium access"
                         ].map((item, i) => (
                           <li key={i} className="flex gap-3 items-start text-sm font-medium text-white/60 italic leading-snug">
                             <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0"></div>
                             {item}
                           </li>
                         ))}
                         {selectedAmount === '250' && [
                           "Seed support for 1 early-stage startup",
                           "Intensive investment readiness training",
                           "Regional ecosystem networking events"
                         ].map((item, i) => (
                           <li key={i} className="flex gap-3 items-start text-sm font-medium text-white/60 italic leading-snug">
                             <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0"></div>
                             {item}
                           </li>
                         ))}
                         {selectedAmount === '500' && [
                           "Full accelerator sponsorship for 1 founder",
                           "Legal and technical advisory services",
                           "High-visibility showcase opportunities"
                         ].map((item, i) => (
                           <li key={i} className="flex gap-3 items-start text-sm font-medium text-white/60 italic leading-snug">
                             <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0"></div>
                             {item}
                           </li>
                         ))}
                         {selectedAmount === '1000' && [
                           "Scale support for 5 female founders",
                           "Establishment of a local digital hub",
                           "Advanced market intelligence reporting"
                         ].map((item, i) => (
                           <li key={i} className="flex gap-3 items-start text-sm font-medium text-white/60 italic leading-snug">
                             <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0"></div>
                             {item}
                           </li>
                         ))}
                         {(selectedAmount === 'Custom' || !['50', '100', '250', '500', '1000'].includes(selectedAmount)) && [
                           "Customized strategic impact allocation",
                           "Direct oversight from programme leads",
                           "Quarterly impact performance review"
                         ].map((item, i) => (
                           <li key={i} className="flex gap-3 items-start text-sm font-medium text-white/60 italic leading-snug">
                             <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0"></div>
                             {item}
                           </li>
                         ))}
                      </ul>
                   </div>
                </div>

                <button className="w-full bg-brand text-white py-8 rounded-[24px] font-black text-[10px] uppercase tracking-[0.4em] hover:bg-charcoal transition-editorial shadow-2xl flex items-center justify-center gap-4 group">
                   PROCEED TO SECURE GATEWAY <ArrowRight size={20} className="group-hover:translate-x-2 transition-editorial" />
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* 4. How Your Donation is Used - Transparency Visualization */}
      <section className="py-28 px-6 md:px-12 bg-white rounded-[60px] relative z-30">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-32">
             <div className="flex items-center justify-center gap-3 text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-8">
                <span className="w-10 h-0.5 bg-brand"></span>
                Fund Allocation
                <span className="w-10 h-0.5 bg-brand"></span>
             </div>
             <h2 className="text-5xl md:text-[6rem] font-black uppercase font-heading leading-none tracking-tighter">
               Direct <span className="text-brand serif italic normal-case">Utilization</span>
             </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
             {[
               { title: "75%", label: "Programmes", desc: "Directly funding accelerators, workshops, and skills training for women.", icon: <TrendingUp/> },
               { title: "15%", label: "Infrastructure", desc: "Building the digital ecosystems and physical hubs required for scale.", icon: <Globe/> },
               { title: "10%", label: "Operations", desc: "Ensuring high-fidelity delivery and rigorous impact monitoring.", icon: <ShieldCheck/> }
             ].map((stat, i) => (
               <div key={i} className="p-12 rounded-[48px] bg-cream/30 border border-charcoal/5 group hover:bg-brand hover:text-white transition-editorial duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-brand mb-10 shadow-sm group-hover:scale-110 transition-editorial">
                    {stat.icon}
                  </div>
                  <div className="text-6xl font-black font-heading mb-4 group-hover:text-gold transition-editorial">{stat.title}</div>
                  <h4 className="text-xl font-black uppercase font-heading mb-4 tracking-tight">{stat.label}</h4>
                  <p className="text-charcoal/40 font-medium italic group-hover:text-white/60 transition-editorial">{stat.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Our Commitment to Transparency */}
      <section className="py-28 px-6 md:px-12 bg-brand text-white overflow-hidden relative">
        <div className="african-pattern absolute inset-0 opacity-20 scale-150 rotate-12 brightness-200"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div>
                <h2 className="text-5xl md:text-7xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-10">
                  Our Unwavering <br/> <span className="text-gold serif italic normal-case">Commitment</span>
                </h2>
                <p className="text-2xl text-white/40 font-medium leading-relaxed italic mb-16 max-w-xl">
                  We believe radical transparency is the foundation of trust. Every dollar is tracked, every impact is measured.
                </p>
                <div className="grid grid-cols-2 gap-8">
                   <div className="p-8 rounded-[32px] bg-white/5 border border-white/10">
                      <Scale className="text-gold mb-6" size={32} />
                      <h4 className="text-sm font-black uppercase tracking-widest mb-2">Audited</h4>
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-wider">Annual Financial Reports</p>
                   </div>
                   <div className="p-8 rounded-[32px] bg-white/5 border border-white/10">
                      <CheckCircle2 className="text-gold mb-6" size={32} />
                      <h4 className="text-sm font-black uppercase tracking-widest mb-2">Certified</h4>
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-wider">Non-Profit Integrity</p>
                   </div>
                </div>
             </div>
             <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 md:p-20 rounded-[64px] shadow-2xl relative">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                   <h3 className="text-3xl font-black uppercase font-heading mb-10 tracking-tight">Radical Transparency</h3>
                   <div className="space-y-8">
                      {[
                        "Publicly accessible annual impact audits.",
                        "Direct reporting for corporate partners and major donors.",
                        "Zero-cost administrative overhead for specified programme grants.",
                        "Quarterly intelligence reports on ecosystem progress."
                      ].map((doc, i) => (
                        <div key={i} className="flex gap-6 items-center group cursor-pointer pb-6 border-b border-white/5">
                           <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold group-hover:text-brand transition-editorial shrink-0">
                              <ArrowRight size={16} />
                           </div>
                           <p className="text-lg font-medium italic text-white/60 group-hover:text-white transition-editorial">{doc}</p>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
