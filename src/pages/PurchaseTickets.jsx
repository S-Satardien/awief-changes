import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { 
  Sparkles, Ticket, Calendar, MapPin, CheckCircle2, Star, 
  ShieldCheck, CreditCard, ArrowRight, Network, Briefcase, 
  Award, ArrowUpRight, X, ShoppingBag, ChevronRight, Zap, 
  Globe, HeartHandshake, Mic2, Users2, Rocket, Building2,
  Plane, Hotel, Coffee, Presentation
} from 'lucide-react'

export default function PurchaseTickets() {
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [showCart, setShowCart] = useState(false)

  const tickets = [
    { 
      name: "Virtual Pass", 
      price: "$50", 
      description: "For global attendees joining remotely.",
      features: [
        "Live stream access to all main stage keynotes",
        "Digital exhibition hall access",
        "Networking app connectivity",
        "30-day session recordings"
      ],
      popular: false
    },
    { 
      name: "General Delegate", 
      price: "$150", 
      description: "Full in-person summit experience.",
      regularPrice: "$200",
      features: [
        "All keynotes, masterclasses & workshops",
        "Physical Exhibition Hall access",
        "Daily networking lunches & breaks",
        "B2B Matchmaking & Business Portal"
      ],
      popular: true
    },
    { 
      name: "VIP Delegate", 
      price: "$250", 
      description: "Premium access and networking.",
      features: [
        "Everything in General Delegate",
        "AWIEF Awards Gala Dinner Ticket",
        "VIP & Speakers Lounge Access",
        "Front-row priority seating"
      ],
      popular: false
    }
  ]

  const handleSelect = (ticket) => {
    setSelectedTicket(ticket)
    setShowCart(true)
  }

  return (
    <div className="min-h-screen font-body text-charcoal bg-white overflow-x-hidden">
      <Navbar activePage="conference" />

      {/* 1. IMMERSIVE HERO - The Summit Experience */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-brand">
        <div className="african-pattern absolute inset-0 opacity-20 scale-150 rotate-12 brightness-200"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand/50 via-brand to-brand/90 z-10"></div>
        
        {/* Background Video or Large Image Placeholder */}
        <div className="absolute inset-0 z-0">
           <img 
            src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?w=1920&q=80" 
            className="w-full h-full object-cover grayscale opacity-30" 
            alt="AWIEF Summit"
           />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-xl mb-12 animate-in fade-in slide-in-from-top-4 duration-1000">
            <Sparkles size={16} className="text-gold animate-pulse"/>
            <span className="text-gold text-[11px] font-black tracking-[0.4em] uppercase">The 12th Annual AWIEF Summit</span>
          </div>
          
          <h1 className="text-6xl md:text-[8rem] lg:text-[11rem] font-black text-white leading-[0.8] tracking-tighter mb-16 uppercase font-heading animate-in fade-in zoom-in duration-1000 delay-100">
            Beyond <br/> <span className="text-gold italic serif normal-case">Boundaries</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
               <div className="flex items-center gap-3 text-gold mb-2">
                  <Calendar size={24} />
                  <span className="font-black text-xl uppercase font-heading tracking-tight text-white">Nov 10 - 11, 2026</span>
               </div>
               <p className="text-white/40 text-[10px] font-black tracking-widest uppercase ml-9">Two Transformative Days</p>
            </div>
            
            <div className="w-px h-16 bg-white/10 hidden md:block"></div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left">
               <div className="flex items-center gap-3 text-gold mb-2">
                  <MapPin size={24} />
                  <span className="font-black text-xl uppercase font-heading tracking-tight text-white">Cape Town, SA</span>
               </div>
               <p className="text-white/40 text-[10px] font-black tracking-widest uppercase ml-9">CTICC - International Center</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
             <a href="#tickets" className="bg-gold text-brand px-12 py-7 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-white transition-editorial shadow-[0_20px_50px_rgba(212,175,55,0.3)]">
                REGISTER NOW
             </a>
             <a href="#agenda" className="text-white font-black text-[10px] uppercase tracking-[0.4em] flex items-center gap-4 group">
                EXPLORE AGENDA <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-brand transition-editorial"><ChevronRight size={20}/></div>
             </a>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-20 left-12 right-12 z-20 hidden lg:flex justify-between items-end">
           <div className="text-white/20 font-black text-8xl tracking-tighter uppercase font-heading">SUMMIT26</div>
           <div className="flex gap-12 text-right">
              <div>
                 <div className="text-4xl font-black text-gold mb-1">1,500+</div>
                 <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">Global Delegates</div>
              </div>
              <div>
                 <div className="text-4xl font-black text-gold mb-1">60+</div>
                 <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">Expert Speakers</div>
              </div>
           </div>
        </div>
      </section>

      {/* 2. THE VALUE PROPOSITION - Why Attend? */}
      <section id="why-attend" className="py-40 px-6 md:px-12 bg-white relative z-20">
         <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
               <div>
                  <p className="text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-8">Strategic Opportunity</p>
                  <h2 className="text-5xl md:text-7xl font-black uppercase font-heading leading-[0.9] tracking-tighter mb-12">
                    Where Business <br/> Meets <span className="text-brand italic serif">Impact</span>
                  </h2>
                  <p className="text-2xl text-charcoal font-medium leading-relaxed italic mb-10">
                    The AWIEF Conference is more than just a meeting; it is a powerful ecosystem designed to accelerate your growth and network.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-8">
                     <div className="p-8 bg-warm rounded-[32px] border border-charcoal/5">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand mb-6 shadow-sm"><Network size={20}/></div>
                        <h4 className="text-base font-black uppercase font-heading mb-2">Networking</h4>
                        <p className="text-[11px] text-charcoal/50 font-medium italic">Connect with founders from 40+ African nations.</p>
                     </div>
                     <div className="p-8 bg-warm rounded-[32px] border border-charcoal/5">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand mb-6 shadow-sm"><HeartHandshake size={20}/></div>
                        <h4 className="text-base font-black uppercase font-heading mb-2">Matchmaking</h4>
                        <p className="text-[11px] text-charcoal/50 font-medium italic">Curated 1-on-1 sessions with global investors.</p>
                     </div>
                  </div>
               </div>
               <div className="relative">
                  <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl relative">
                     <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1000&q=80" alt="Networking" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-editorial duration-1000" />
                     <div className="absolute inset-0 bg-brand/20 mix-blend-multiply"></div>
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-gold p-12 rounded-[40px] shadow-2xl border-8 border-white hidden md:block">
                     <div className="text-5xl font-black text-brand mb-1">12th</div>
                     <div className="text-xs font-black text-brand/60 uppercase tracking-widest">Edition Milestone</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 3. SPEAKERS - The Visionaries */}
      <section id="speakers" className="py-40 px-6 md:px-12 bg-charcoal text-white overflow-hidden relative">
        <div className="african-pattern absolute inset-0 opacity-10 scale-150 rotate-12 brightness-200"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-24">
            <p className="text-gold font-black tracking-[0.4em] uppercase text-[10px] mb-8">Voices of Authority</p>
            <h2 className="text-5xl md:text-8xl font-black uppercase font-heading tracking-tighter mb-8 leading-none">THE <span className="text-gold italic serif">VISIONARIES</span></h2>
            <p className="text-white/40 text-xl font-medium italic max-w-2xl mx-auto">Global leaders, policy architects, and industry disruptors sharing actionable insights.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Dr. Amina J. Mohammed", role: "Deputy Secretary-General, UN", img: "photo-1573496359142-b8d87734a5a2" },
              { name: "Winnie Byanyima", role: "Exec. Director, UNAIDS", img: "photo-1508214751196-bfd1414742e9" },
              { name: "Arancha González", role: "Dean, PSIA", img: "photo-1589156191108-c7ea6f28f97b" },
              { name: "Vanessa Nakate", role: "Climate Activist", img: "photo-1531123897727-8f129e1688ce" }
            ].map((s, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] rounded-[40px] overflow-hidden mb-8 relative border-4 border-white/5 group-hover:border-gold/50 transition-editorial duration-700">
                   <img src={`https://images.unsplash.com/${s.img}?w=600&q=80`} alt={s.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-editorial duration-1000"/>
                   <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-editorial"></div>
                   <div className="absolute bottom-8 left-8 right-8 text-center translate-y-4 group-hover:translate-y-0 transition-editorial">
                      <div className="w-12 h-12 rounded-full bg-gold mx-auto flex items-center justify-center text-brand opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-editorial shadow-xl">
                         <Mic2 size={20} />
                      </div>
                   </div>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-black uppercase font-heading mb-2 group-hover:text-gold transition-editorial">{s.name}</h4>
                  <p className="text-gold/40 font-black tracking-widest text-[9px] uppercase">{s.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AGENDA - Peak Into the Summit */}
      <section id="agenda" className="py-40 px-6 md:px-12 bg-cream">
         <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-20">
               <div className="lg:col-span-4">
                  <div className="sticky top-40">
                    <p className="text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-8">The Flow</p>
                    <h2 className="text-5xl md:text-7xl font-black uppercase font-heading leading-[0.9] tracking-tighter mb-12">
                      SUMMIT <br/> <span className="text-brand italic serif">AGENDA</span>
                    </h2>
                    <p className="text-charcoal/40 text-lg font-medium italic mb-12">
                      A curated experience blending high-level policy panels with technical masterclasses.
                    </p>
                    <div className="space-y-4">
                       {["Day 1: Innovation", "Day 2: Scale"].map((day, i) => (
                          <button key={i} className={`w-full text-left px-8 py-6 rounded-2xl font-black text-[10px] uppercase tracking-widest border transition-editorial ${i === 0 ? 'bg-brand text-white border-brand' : 'bg-white text-charcoal border-charcoal/5 hover:border-brand'}`}>
                             {day}
                          </button>
                       ))}
                    </div>
                  </div>
               </div>
               <div className="lg:col-span-8 space-y-4">
                  {[
                    { time: "08:00 AM", event: "Registration & Networking", icon: <Users2/> },
                    { time: "09:30 AM", event: "Grand Opening Keynote", icon: <Presentation/> },
                    { time: "11:00 AM", event: "Panel: Scaling Tech in Africa", icon: <Rocket/> },
                    { time: "12:30 PM", event: "Networking Lunch", icon: <Coffee/> },
                    { time: "02:00 PM", event: "Investor Masterclass Series", icon: <Briefcase/> },
                    { time: "04:30 PM", event: "B2B Matchmaking Portal Opens", icon: <Network/> },
                    { time: "07:00 PM", event: "Welcome Cocktail Reception", icon: <HeartHandshake/> }
                  ].map((item, i) => (
                    <div key={i} className="p-10 bg-white rounded-[32px] border border-charcoal/5 flex flex-col md:flex-row items-center gap-10 hover:shadow-xl transition-editorial group">
                       <div className="text-brand font-black text-xs uppercase tracking-widest shrink-0 w-24">{item.time}</div>
                       <div className="w-px h-12 bg-charcoal/5 hidden md:block"></div>
                       <div className="flex-grow flex items-center gap-6">
                          <div className="w-12 h-12 rounded-xl bg-warm flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-editorial shadow-sm">{item.icon}</div>
                          <h4 className="text-xl font-black uppercase font-heading tracking-tight">{item.event}</h4>
                       </div>
                       <ChevronRight size={20} className="text-charcoal/20 group-hover:text-gold transition-editorial" />
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 5. EXHIBITION & SPONSORS */}
      <section id="exhibit" className="py-40 px-6 md:px-12 bg-white border-y border-charcoal/5">
         <div className="max-w-[1400px] mx-auto">
            <div className="bg-brand rounded-[64px] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-2xl border border-white/20 mb-40">
               <div className="w-full lg:w-1/2 p-12 md:p-24 relative z-20 flex flex-col justify-center text-white">
                  <p className="text-gold text-[10px] font-black tracking-[0.4em] uppercase mb-8">Showcase Your Brand</p>
                  <h2 className="text-5xl md:text-7xl font-black uppercase font-heading leading-[0.9] tracking-tighter mb-12">
                    EXHIBIT <br/> <span className="text-gold italic serif">WITH US</span>
                  </h2>
                  <p className="text-white/60 text-xl font-medium italic mb-12 leading-relaxed">
                    Join 100+ innovative SMEs and corporate giants in our high-traffic Exhibition Hall. The perfect platform for lead generation and product discovery.
                  </p>
                  <a href="/contact-us" className="inline-flex items-center gap-4 bg-gold text-brand px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white transition-editorial shadow-2xl w-fit">
                    BOOK YOUR STAND <ArrowRight size={18} />
                  </a>
               </div>
               <div className="w-full lg:w-1/2 relative min-h-[400px]">
                  <img src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=1000&q=80" className="w-full h-full object-cover grayscale opacity-50" alt="Exhibition"/>
                  <div className="absolute inset-0 bg-brand/30 mix-blend-multiply"></div>
               </div>
            </div>

            <div id="sponsors" className="text-center">
               <p className="text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-16">Global Partners & Sponsors</p>
               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-editorial duration-1000">
                  {[1,2,3,4,5,6].map(i => (
                    <div key={i} className="h-12 w-full bg-charcoal/10 rounded-lg animate-pulse"></div>
                  ))}
               </div>
               <p className="mt-20 text-[10px] font-black text-charcoal/40 uppercase tracking-widest">Interested in sponsoring? <a href="/contact-us" className="text-brand underline underline-offset-4 decoration-2">Download Prospectus</a></p>
            </div>
         </div>
      </section>

      {/* 6. TRAVEL & ACCOMMODATION */}
      <section id="travel" className="py-40 px-6 md:px-12 bg-warm">
         <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-24">
               <h2 className="text-5xl md:text-7xl font-black uppercase font-heading tracking-tighter mb-8 leading-none">TRAVEL <span className="text-brand italic serif">& STAY</span></h2>
               <p className="text-charcoal/40 text-xl font-medium italic max-w-2xl mx-auto">Planning your trip to the Mother City? We've secured exclusive rates for delegates.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
               <div className="bg-white p-12 rounded-[48px] border border-charcoal/5 shadow-xl group hover:border-brand transition-editorial">
                  <div className="w-20 h-20 rounded-3xl bg-warm flex items-center justify-center text-brand mb-10 group-hover:bg-brand group-hover:text-white transition-editorial"><Hotel size={32}/></div>
                  <h3 className="text-3xl font-black uppercase font-heading mb-6 tracking-tight">Preferential Hotels</h3>
                  <p className="text-charcoal/50 text-lg italic leading-relaxed mb-10">We have partnered with leading hotels within walking distance of the CTICC to offer discounted rates.</p>
                  <a href="/contact-us" className="text-brand font-black text-[10px] uppercase tracking-widest flex items-center gap-3">EXPLORE PARTNER HOTELS <ArrowUpRight size={18}/></a>
               </div>
               <div className="bg-white p-12 rounded-[48px] border border-charcoal/5 shadow-xl group hover:border-brand transition-editorial">
                  <div className="w-20 h-20 rounded-3xl bg-warm flex items-center justify-center text-brand mb-10 group-hover:bg-brand group-hover:text-white transition-editorial"><Plane size={32}/></div>
                  <h3 className="text-3xl font-black uppercase font-heading mb-6 tracking-tight">Flight Discounts</h3>
                  <p className="text-charcoal/50 text-lg italic leading-relaxed mb-10">Exclusive promo codes for regional and international flights to Cape Town for registered delegates.</p>
                  <a href="/contact-us" className="text-brand font-black text-[10px] uppercase tracking-widest flex items-center gap-3">REQUEST PROMO CODES <ArrowUpRight size={18}/></a>
               </div>
            </div>
         </div>
      </section>

      {/* 7. TICKETS & REGISTRATION - The Closing Portal */}
      <section id="tickets" className="py-40 px-6 md:px-12 bg-cream rounded-t-[80px] -mt-12 relative z-30">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-32">
             <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-brand/20 bg-brand/5 mb-8">
                <Ticket size={16} className="text-brand"/>
                <span className="text-brand text-[10px] font-black tracking-[0.3em] uppercase">Registration Open</span>
             </div>
             <h2 className="text-6xl md:text-[8rem] font-black uppercase font-heading leading-none tracking-tighter mb-8">
               SECURE YOUR <span className="text-brand serif italic">SPOT</span>
             </h2>
             <p className="text-2xl text-charcoal/40 font-medium italic">Join 1,500+ visionaries. Choose your pass below.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            {tickets.map((pkg, i) => (
              <div key={pkg.name} className={`col-span-12 lg:col-span-4 p-16 rounded-[60px] flex flex-col border transition-editorial relative group overflow-hidden ${
                pkg.popular 
                ? 'bg-brand text-white border-brand/30 lg:-translate-y-8 shadow-[0_60px_120px_rgba(127,61,89,0.4)]' 
                : 'bg-white text-charcoal border-charcoal/5 shadow-2xl hover:border-brand/20'
              }`}>
                {pkg.popular && (
                  <>
                    <div className="african-pattern absolute inset-0 opacity-20 scale-150 rotate-12 brightness-200"></div>
                    <div className="absolute top-0 right-0 bg-gold text-brand px-12 py-4 font-black text-[11px] tracking-[0.4em] uppercase rounded-bl-[40px] z-20 shadow-xl">
                      Bestseller
                    </div>
                  </>
                )}
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-12">
                    <h3 className={`text-4xl font-black uppercase font-heading mb-4 ${pkg.popular ? 'text-white' : 'text-charcoal'}`}>{pkg.name}</h3>
                    <p className={`text-base font-medium italic opacity-60`}>{pkg.description}</p>
                  </div>
                  
                  <div className="mb-16">
                    <div className="flex items-baseline">
                      <span className={`text-7xl font-black ${pkg.popular ? 'text-gold' : 'text-brand'}`}>{pkg.price}</span>
                      <span className="opacity-40 font-black tracking-[0.3em] text-[10px] uppercase ml-6">USD / ALL ACCESS</span>
                    </div>
                    {pkg.regularPrice && (
                      <p className="text-[11px] font-black uppercase tracking-[0.3em] mt-6 line-through opacity-30 italic">Value: {pkg.regularPrice}</p>
                    )}
                  </div>
                  
                  <ul className="space-y-8 mb-20 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-6 items-start">
                        <CheckCircle2 size={24} className={pkg.popular ? 'text-gold' : 'text-brand'} />
                        <span className="text-base font-medium italic opacity-80 leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => handleSelect(pkg)}
                    className={`w-full py-8 rounded-[32px] font-black text-[11px] uppercase tracking-[0.4em] transition-editorial shadow-2xl ${
                      pkg.popular 
                      ? 'bg-gold text-brand hover:bg-white' 
                      : 'bg-charcoal text-white hover:bg-brand'
                    }`}
                  >
                    GET MY {pkg.name.toUpperCase()}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Popup Overlay */}
      {showCart && selectedTicket && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
           <div className="absolute inset-0 bg-charcoal/90 backdrop-blur-xl animate-in fade-in duration-500" onClick={() => setShowCart(false)}></div>
           <div className="bg-white w-full max-w-5xl rounded-[64px] relative z-10 shadow-[0_50px_200px_rgba(0,0,0,0.5)] overflow-hidden animate-in slide-in-from-bottom-24 duration-700">
              <div className="grid md:grid-cols-12">
                 <div className="md:col-span-5 bg-brand p-16 md:p-24 text-white relative">
                    <div className="african-pattern absolute inset-0 opacity-20 scale-150"></div>
                    <div className="relative z-10">
                       <ShoppingBag size={64} className="text-gold mb-10" />
                       <h3 className="text-5xl font-black uppercase font-heading leading-tight mb-12">Secure <br/> <span className="text-gold">Your Seat</span></h3>
                       <div className="space-y-8 pt-10 border-t border-white/10">
                          <div className="flex justify-between items-center">
                             <span className="text-[10px] font-black uppercase opacity-40 tracking-widest">Selected Pass</span>
                             <span className="text-lg font-black uppercase tracking-tight">{selectedTicket.name}</span>
                          </div>
                          <div className="flex justify-between items-center">
                             <span className="text-[10px] font-black uppercase opacity-40 tracking-widest">Investment</span>
                             <span className="text-6xl font-black text-gold">{selectedTicket.price}</span>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="md:col-span-7 p-16 md:p-24 bg-white flex flex-col justify-center relative">
                    <button onClick={() => setShowCart(false)} className="absolute top-12 right-12 w-16 h-16 rounded-full bg-cream flex items-center justify-center hover:bg-brand hover:text-white transition-editorial"><X size={32} /></button>
                    <div className="max-w-md mx-auto w-full">
                       <h4 className="text-3xl font-black uppercase font-heading mb-12 flex items-center gap-4"><Zap size={32} className="text-brand" /> Checkout Portal</h4>
                       <div className="space-y-10 mb-16">
                          {["Attendee Info", "Payment Method", "Access Code Delivery"].map((step, i) => (
                             <div key={step} className="flex gap-8 items-center">
                                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-black ${i === 0 ? 'bg-brand border-brand text-white shadow-lg' : 'border-charcoal/10 text-charcoal/20'}`}>{i+1}</div>
                                <span className={`text-base font-black uppercase tracking-[0.2em] ${i === 0 ? 'text-charcoal' : 'text-charcoal/20'}`}>{step}</span>
                             </div>
                          ))}
                       </div>
                       <button className="w-full bg-brand text-white py-8 rounded-[32px] font-black text-[11px] uppercase tracking-[0.4em] hover:bg-charcoal hover:shadow-2xl transition-editorial shadow-xl">COMPLETE REGISTRATION</button>
                       <p className="text-center mt-10 text-[9px] font-black text-charcoal/20 uppercase tracking-[0.3em]">Encrypted • Secure • Powered by AWIEF Global</p>
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
