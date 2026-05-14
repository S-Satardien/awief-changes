import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Sparkles, Ticket, Calendar, MapPin, CheckCircle2, Star, ShieldCheck, CreditCard, ArrowRight, Network, Briefcase, Award, ArrowUpRight, X, ShoppingBag, ChevronRight, Zap, Globe, HeartHandshake } from 'lucide-react'

export default function PurchaseTickets() {
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [showCart, setShowCart] = useState(false)

  const tickets = [
    { 
      name: "Virtual Pass", 
      price: "$50", 
      description: "For global attendees joining remotely.",
      features: [
        "Live stream access to all main stage keynotes and panels",
        "Access to the official AWIEF networking app",
        "On-demand recordings for 30 days post-event"
      ],
      popular: false,
      color: "bg-white text-charcoal border-charcoal/5"
    },
    { 
      name: "General Delegate", 
      price: "$150", 
      description: "Full in-person conference experience.",
      regularPrice: "$200",
      features: [
        "Access to all keynotes, masterclasses, and workshops",
        "Entrance to the AWIEF Exhibition Hall",
        "Catered networking lunches and coffee breaks",
        "B2B matchmaking and investor pitch sessions"
      ],
      popular: true,
      color: "bg-brand text-white border-brand/30"
    },
    { 
      name: "VIP Delegate", 
      price: "$250", 
      description: "The ultimate premium networking experience.",
      features: [
        "Everything in General Delegate, plus:",
        "Ticket to the prestigious AWIEF Awards Gala Dinner",
        "Exclusive access to the VIP & Speakers Lounge",
        "Priority seating at all main stage sessions"
      ],
      popular: false,
      color: "bg-white text-charcoal border-charcoal/5"
    }
  ]

  const handleSelect = (ticket) => {
    setSelectedTicket(ticket)
    setShowCart(true)
  }

  return (
    <div className="min-h-screen font-body text-charcoal bg-cream overflow-x-hidden">
      <Navbar activePage="purchase-tickets" />

      {/* Minimal Editorial Header - Simplified as requested */}
      <header className="relative bg-cream pt-48 pb-24 px-6 md:px-12 text-center">
        <div className="max-w-5xl mx-auto relative z-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/20 bg-brand/5 backdrop-blur mb-8">
            <Ticket size={14} className="text-brand"/>
            <span className="text-brand text-[9px] font-black tracking-[0.3em] uppercase">Official Registration</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase font-heading leading-tight tracking-tighter mb-10 text-charcoal">
            Secure Your <span className="text-brand italic serif normal-case">Seat</span>
          </h1>
          <p className="text-lg md:text-2xl text-charcoal/60 leading-relaxed font-medium max-w-3xl mx-auto italic mb-12">
            Join 1,500+ female founders, global investors, and policymakers in Cape Town. Choose the pass that fits your journey.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-4 bg-brand px-10 py-5 rounded-full shadow-xl group hover:scale-105 transition-editorial">
              <Calendar className="text-white" size={20} />
              <span className="text-white text-[11px] font-black uppercase tracking-widest">November 10 - 11, 2026</span>
            </div>
            <div className="flex items-center gap-4 bg-brand px-10 py-5 rounded-full shadow-xl group hover:scale-105 transition-editorial">
              <MapPin className="text-white" size={20} />
              <span className="text-white text-[11px] font-black uppercase tracking-widest">Cape Town, South Africa</span>
            </div>
          </div>
        </div>
      </header>

      {/* 1. Beyond Access - Editorial Intro */}
      <section className="py-40 px-6 md:px-12 bg-white rounded-t-[60px] -mt-12 relative z-20 border-b border-charcoal/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7">
               <div className="flex items-center gap-3 text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-10">
                  <span className="w-10 h-0.5 bg-brand"></span>
                  The Premier Gathering
               </div>
               <h2 className="text-5xl md:text-7xl font-black uppercase font-heading leading-[0.8] tracking-tighter mb-12">
                 Beyond Access: <br/> <span className="text-brand italic serif">Empowerment</span>
               </h2>
               <div className="space-y-8 max-w-2xl">
                 <p className="text-2xl text-charcoal font-medium leading-relaxed italic">
                   The 2026 Annual AWIEF Conference is Africa's foremost event for women's economic empowerment. 
                 </p>
                 <p className="text-lg text-charcoal/50 font-medium leading-relaxed italic border-l-4 border-brand pl-8">
                   This year's theme focuses on moving beyond mere inclusion to ensure female founders are leading the digital transformation of the continent's economy. Over two transformative days, you will dive deep into actionable strategies for scaling your business.
                 </p>
                 <a href="#pricing" className="inline-flex items-center gap-4 bg-charcoal text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-brand transition-editorial shadow-xl mt-8">
                    RESERVE YOUR TICKET <ArrowRight size={18} />
                 </a>
               </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-6">
              {[
                { title: "B2B Matchmaking", desc: "Curated networking sessions connecting you with investors.", icon: <Network/> },
                { title: "Masterclasses", desc: "Actionable workshops on digital scaling and Series A funding.", icon: <Briefcase/> },
                { title: "The Exhibition", desc: "Showcasing innovative products from 100+ SMEs.", icon: <Star/> },
                { title: "AWIEF Awards", desc: "Prestigious gala dinner celebrating the continent's best.", icon: <Award/> }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-cream/30 rounded-[32px] border border-charcoal/5 group hover:bg-brand hover:text-white transition-editorial">
                   <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-brand mb-8 shadow-sm group-hover:scale-110 transition-editorial">
                     {item.icon}
                   </div>
                   <h4 className="text-lg font-black uppercase font-heading mb-3">{item.title}</h4>
                   <p className="text-xs font-medium italic opacity-40 group-hover:opacity-70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Keynote Teaser - Dark Editorial */}
      <section className="py-40 px-6 md:px-12 bg-brand text-white overflow-hidden relative">
        <div className="african-pattern absolute inset-0 opacity-20 scale-150 rotate-12 brightness-200"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <p className="text-gold font-black tracking-[0.4em] uppercase text-[10px] mb-8">World-Class Insights</p>
              <h2 className="text-5xl md:text-[6rem] font-black uppercase font-heading leading-none tracking-tighter">
                Hear from <span className="text-gold serif italic normal-case">Visionaries</span>
              </h2>
            </div>
            <a href="/2026-speakers" className="flex items-center gap-4 text-gold font-black tracking-widest text-[10px] uppercase group">
               View Full Lineup <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold group-hover:text-brand transition-editorial"><ArrowRight size={20}/></div>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1,2,3,4].map(i => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-square rounded-[32px] overflow-hidden mb-8 relative border-4 border-white/5 group-hover:border-gold/50 transition-editorial">
                   <img src={`https://images.unsplash.com/photo-${[
                     '1573496359142-b8d87734a5a2',
                     '1508214751196-bfd1414742e9',
                     '1589156191108-c7ea6f28f97b',
                     '1531123897727-8f129e1688ce'
                   ][i-1]}?w=600&q=80`} alt="Speaker" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-editorial duration-700"/>
                   <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-editorial"></div>
                </div>
                <h4 className="text-xl font-black uppercase font-heading mb-2">TBA</h4>
                <p className="text-gold font-black tracking-widest text-[9px] uppercase opacity-60">Industry Visionary</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Pricing Section - Refined Portal */}
      <section id="pricing" className="py-40 px-6 md:px-12 bg-cream rounded-t-[60px] -mt-12 relative z-30">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-5xl md:text-[6rem] font-black uppercase font-heading leading-none tracking-tighter mb-8">
               Choose Your <span className="text-brand serif italic normal-case">Pass</span>
             </h2>
             <p className="text-xl text-charcoal/40 font-medium italic">Secure your spot at the continent's most influential forum.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {tickets.map((pkg, i) => (
              <div key={pkg.name} className={`col-span-12 lg:col-span-4 p-12 rounded-[48px] flex flex-col border transition-editorial relative group overflow-hidden ${
                pkg.popular 
                ? 'bg-brand text-white border-brand/30 lg:-translate-y-8 shadow-[0_50px_100px_rgba(127,61,89,0.3)]' 
                : 'bg-white text-charcoal border-charcoal/5 shadow-xl hover:border-brand/20'
              }`}>
                {pkg.popular && (
                  <>
                    <div className="african-pattern absolute inset-0 opacity-20 scale-150 rotate-12 brightness-200"></div>
                    <div className="absolute top-0 right-0 bg-gold text-brand px-10 py-3 font-black text-[10px] tracking-[0.3em] uppercase rounded-bl-3xl z-20 shadow-xl">
                      Most Popular
                    </div>
                  </>
                )}
                
                <div className="relative z-10">
                  <div className="mb-10">
                    <h3 className={`text-3xl font-black uppercase font-heading mb-3 ${pkg.popular ? 'text-white' : 'text-charcoal'}`}>{pkg.name}</h3>
                    <p className={`text-sm font-medium italic opacity-60`}>{pkg.description}</p>
                  </div>
                  
                  <div className="mb-12">
                    <span className={`text-6xl font-black ${pkg.popular ? 'text-gold' : 'text-charcoal'}`}>{pkg.price}</span>
                    <span className="opacity-40 font-black tracking-widest text-xs uppercase ml-4">USD</span>
                    {pkg.regularPrice && (
                      <p className="text-[10px] font-black uppercase tracking-widest mt-4 line-through opacity-30 italic">Regular Price: {pkg.regularPrice}</p>
                    )}
                  </div>
                  
                  <ul className="space-y-6 mb-16 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-4 items-start">
                        <CheckCircle2 size={18} className={pkg.popular ? 'text-gold' : 'text-brand'} />
                        <span className="text-sm font-medium italic opacity-80 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => handleSelect(pkg)}
                    className={`w-full py-7 rounded-full font-black text-[10px] uppercase tracking-[0.3em] transition-editorial shadow-2xl ${
                      pkg.popular 
                      ? 'bg-gold text-brand hover:bg-white' 
                      : 'border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white'
                    }`}
                  >
                    SELECT {pkg.name.toUpperCase()}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-wrap items-center justify-center gap-10 opacity-40 grayscale">
             <div className="flex items-center gap-3">
                <ShieldCheck size={20} className="text-brand" />
                <span className="text-[10px] font-black uppercase tracking-widest">Secure Stripe / Paystack</span>
             </div>
             <div className="flex items-center gap-3">
                <CreditCard size={20} className="text-brand" />
                <span className="text-[10px] font-black uppercase tracking-widest">Global Card Support</span>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Group Bookings - High Authority Box */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-cream rounded-[48px] p-12 md:p-24 border border-charcoal/5 flex flex-col md:flex-row items-center justify-between gap-16 relative overflow-hidden group">
             <div className="african-pattern absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-editorial scale-150"></div>
             <div className="max-w-2xl relative z-10">
                <p className="text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-8">Team Presence</p>
                <h3 className="text-4xl md:text-5xl font-black uppercase font-heading leading-tight mb-8">Bringing your team or organization?</h3>
                <p className="text-lg text-charcoal/40 font-medium italic leading-relaxed">
                  We offer specialized discounts for corporate delegations and group bookings of 5 or more attendees. Contact our sales team directly to arrange a custom package and invoice.
                </p>
             </div>
             <a href="/contact-us" className="bg-charcoal text-white px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-brand transition-editorial shadow-2xl shrink-0 relative z-10">
                CONTACT SALES TEAM
             </a>
          </div>
        </div>
      </section>

      {/* 5. Discover Legacy Archive */}
      <section className="py-40 bg-brand text-white text-center px-6 rounded-t-[60px] relative overflow-hidden">
        <div className="african-pattern absolute inset-0 opacity-20 scale-150 rotate-12 brightness-200"></div>
        <div className="max-w-4xl mx-auto relative z-10">
           <h2 className="text-5xl md:text-[6rem] font-black uppercase font-heading leading-[0.8] tracking-tighter mb-12">
             Discover Our <span className="text-gold serif italic">Legacy</span>
           </h2>
           <p className="text-xl text-white/40 leading-relaxed font-medium italic mb-16">
             Curious about what happens at an AWIEF summit? Browse our archive to explore speaker line-ups, downloaded programmes, and photo galleries from our milestone events dating back to 2017.
           </p>
           <a href="/past-conferences" className="inline-flex items-center gap-4 bg-gold text-brand px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-white transition-editorial shadow-2xl">
              EXPLORE ARCHIVE <ArrowUpRight size={20} />
           </a>
        </div>
      </section>

      {/* Cart Popup Overlay */}
      {showCart && selectedTicket && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 overflow-hidden">
           <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-md animate-in fade-in duration-500" onClick={() => setShowCart(false)}></div>
           <div className="bg-white w-full max-w-4xl rounded-[48px] relative z-10 shadow-2xl overflow-hidden animate-in slide-in-from-bottom-24 duration-700">
              <div className="grid md:grid-cols-12">
                 <div className="md:col-span-5 bg-brand p-16 text-white relative">
                    <div className="african-pattern absolute inset-0 opacity-20 scale-150"></div>
                    <div className="relative z-10">
                       <ShoppingBag size={48} className="text-gold mb-8" />
                       <h3 className="text-4xl font-black uppercase font-heading leading-tight mb-8">Ready to <br/> <span className="text-gold">Secure</span> Your Seat?</h3>
                       <div className="space-y-6 pt-8 border-t border-white/10">
                          <div className="flex justify-between items-center">
                             <span className="text-xs font-black uppercase opacity-40">Pass Type</span>
                             <span className="text-sm font-black uppercase tracking-widest">{selectedTicket.name}</span>
                          </div>
                          <div className="flex justify-between items-center">
                             <span className="text-xs font-black uppercase opacity-40">Total</span>
                             <span className="text-4xl font-black text-gold">{selectedTicket.price}</span>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="md:col-span-7 p-16 bg-white flex flex-col justify-center">
                    <button onClick={() => setShowCart(false)} className="absolute top-10 right-10 w-12 h-12 rounded-full bg-cream flex items-center justify-center hover:bg-brand hover:text-white transition-editorial"><X size={24} /></button>
                    <div className="max-w-sm">
                       <h4 className="text-2xl font-black uppercase font-heading mb-10 flex items-center gap-3"><Zap size={24} className="text-brand" /> Checkout Flow</h4>
                       <div className="space-y-8 mb-12">
                          {["Personal Details", "Secure Payment", "Final Confirmation"].map((step, i) => (
                             <div key={step} className="flex gap-6 items-center">
                                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-black ${i === 0 ? 'bg-brand border-brand text-white' : 'border-charcoal/10 text-charcoal/20'}`}>{i+1}</div>
                                <span className={`text-sm font-black uppercase tracking-widest ${i === 0 ? 'text-charcoal' : 'text-charcoal/20'}`}>{step}</span>
                             </div>
                          ))}
                       </div>
                       <button className="w-full bg-brand text-white py-6 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-charcoal transition-editorial shadow-2xl">PROCEED TO CHECKOUT</button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
