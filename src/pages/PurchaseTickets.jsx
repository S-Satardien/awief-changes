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
        "Live stream access to all keynotes",
        "Digital exhibition access",
        "Networking app connectivity",
        "30-day recordings"
      ],
      popular: false
    },
    { 
      name: "Standard Pass", 
      price: "$120", 
      description: "Full in-person summit experience.",
      regularPrice: "$150",
      features: [
        "All keynotes & workshops",
        "Exhibition Hall access",
        "Networking lunches",
        "B2B Matchmaking Portal"
      ],
      popular: true
    },
    { 
      name: "Premium Pass", 
      price: "$220", 
      description: "Includes Awards & Gala Dinner.",
      regularPrice: "$250",
      features: [
        "Everything in Standard Pass",
        "AWIEF Awards & Gala Dinner",
        "VIP Lounge Access",
        "Priority session seating"
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

      {/* 1. HERO - Immersive Summit Header */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-20 overflow-hidden bg-brand">
        <div className="african-pattern absolute inset-0 opacity-20 scale-150 rotate-12 brightness-200"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand/40 via-brand to-brand/90 z-10"></div>
        
        <div className="absolute inset-0 z-0">
           <img 
            src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?w=1920&q=80" 
            className="w-full h-full object-cover grayscale opacity-30" 
            alt="AWIEF Summit"
           />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-xl mb-10 animate-in fade-in slide-in-from-top-4 duration-1000">
            <Sparkles size={16} className="text-gold animate-pulse"/>
            <span className="text-gold text-[11px] font-black tracking-[0.4em] uppercase">Save the Date: 10 – 11 November 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-[7rem] lg:text-[9rem] font-black text-white leading-[0.8] tracking-tighter mb-12 uppercase font-heading">
            Beyond <span className="text-gold italic serif normal-case">Access</span>
          </h1>
          
          <p className="text-white text-lg md:text-2xl font-black tracking-[0.2em] uppercase mb-12 max-w-4xl mx-auto border-y border-white/10 py-6">
             Owning Capital, Markets & Power
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-16">
            <div className="flex flex-col items-center md:items-start">
               <div className="flex items-center gap-3 text-gold mb-1">
                  <Calendar size={20} />
                  <span className="font-black text-lg uppercase font-heading tracking-tight text-white">Nov 10 - 11, 2026</span>
               </div>
            </div>
            <div className="w-px h-10 bg-white/10 hidden md:block"></div>
            <div className="flex flex-col items-center md:items-start">
               <div className="flex items-center gap-3 text-gold mb-1">
                  <MapPin size={20} />
                  <span className="font-black text-lg uppercase font-heading tracking-tight text-white">Cape Town, SA</span>
               </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <a href="#tickets" className="bg-gold text-brand px-10 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white transition-editorial shadow-2xl">
                SECURE SUPER EARLY-BIRD
             </a>
             <a href="#speakers" className="text-white font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-3 group">
                LEARN MORE <ChevronRight size={16} className="group-hover:translate-x-1 transition-editorial"/>
             </a>
          </div>
        </div>
      </section>

      {/* 2. TICKETS & REGISTRATION - Moved higher for visibility */}
      <section id="tickets" className="py-16 px-6 md:px-12 bg-cream relative z-30">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
             <p className="text-brand font-black tracking-[0.4em] uppercase text-[9px] mb-4">Registration Open</p>
             <h2 className="text-4xl md:text-6xl font-black uppercase font-heading tracking-tighter mb-4">
               SECURE YOUR <span className="text-brand serif italic">SPOT</span>
             </h2>
             <p className="text-lg text-charcoal/40 font-medium italic">Super Early-Bird Rates valid until 25 May 2026.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            {tickets.map((pkg) => (
              <div key={pkg.name} className={`p-10 rounded-[40px] flex flex-col border transition-editorial relative group overflow-hidden ${
                pkg.popular 
                ? 'bg-brand text-white border-brand/30 shadow-[0_40px_80px_rgba(127,61,89,0.3)]' 
                : 'bg-white text-charcoal border-charcoal/5 shadow-xl hover:border-brand/20'
              }`}>
                {pkg.popular && <div className="african-pattern absolute inset-0 opacity-20 scale-150 rotate-12 brightness-200"></div>}
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-8">
                    <h3 className={`text-2xl font-black uppercase font-heading mb-2 ${pkg.popular ? 'text-white' : 'text-charcoal'}`}>{pkg.name}</h3>
                    <p className="text-[11px] font-medium italic opacity-60">{pkg.description}</p>
                  </div>
                  
                  <div className="mb-10">
                    <div className="flex items-baseline">
                      <span className={`text-5xl font-black ${pkg.popular ? 'text-gold' : 'text-brand'}`}>{pkg.price}</span>
                      <span className="opacity-40 font-black tracking-widest text-[8px] uppercase ml-4">USD / ACCESS</span>
                    </div>
                    {pkg.regularPrice && (
                      <p className="text-[9px] font-black uppercase tracking-widest mt-4 line-through opacity-30 italic">Regular: {pkg.regularPrice}</p>
                    )}
                  </div>
                  
                  <ul className="space-y-4 mb-12 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-4 items-start">
                        <CheckCircle2 size={16} className={pkg.popular ? 'text-gold' : 'text-brand'} />
                        <span className="text-xs font-medium italic opacity-80 leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => handleSelect(pkg)}
                    className={`w-full py-6 rounded-[24px] font-black text-[9px] uppercase tracking-[0.3em] transition-editorial shadow-xl ${
                      pkg.popular ? 'bg-gold text-brand hover:bg-white' : 'bg-charcoal text-white hover:bg-brand'
                    }`}
                  >
                    SELECT PASS
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VALUE PROPOSITION */}
      <section className="py-16 px-6 md:px-12 bg-white">
         <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div>
                  <p className="text-brand font-black tracking-[0.4em] uppercase text-[9px] mb-6">The Leading Platform</p>
                  <h2 className="text-4xl md:text-5xl font-black uppercase font-heading leading-tight tracking-tighter mb-8">
                    Shifting from <br/> Participation to <span className="text-brand italic serif">Ownership</span>
                  </h2>
                  <p className="text-lg text-charcoal font-medium leading-relaxed italic mb-8 border-l-4 border-brand pl-8">
                    Exploring how women can move beyond access to resources toward greater control of capital, stronger market positioning, and influence in economic decision-making.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-6">
                     <div className="p-6 bg-warm rounded-[24px] border border-charcoal/5">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand mb-4 shadow-sm"><Users2 size={18}/></div>
                        <h4 className="text-sm font-black uppercase font-heading mb-1">1000+ Delegates</h4>
                        <p className="text-[10px] text-charcoal/50 font-medium italic">From over 50 countries globally.</p>
                     </div>
                     <div className="p-6 bg-warm rounded-[24px] border border-charcoal/5">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand mb-4 shadow-sm"><Globe size={18}/></div>
                        <h4 className="text-sm font-black uppercase font-heading mb-1">Global Ecosystem</h4>
                        <p className="text-[10px] text-charcoal/50 font-medium italic">Connecting decision makers & investors.</p>
                     </div>
                  </div>
               </div>
               <div className="aspect-video rounded-[40px] overflow-hidden shadow-2xl relative">
                  <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1000&q=80" alt="Summit" className="w-full h-full object-cover grayscale opacity-80" />
                  <div className="absolute inset-0 bg-brand/10"></div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. SPEAKERS - High density, bg-brand */}
      <section id="speakers" className="py-16 px-6 md:px-12 bg-brand text-white overflow-hidden relative">
        <div className="african-pattern absolute inset-0 opacity-10 scale-150 rotate-12 brightness-200"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-gold font-black tracking-[0.4em] uppercase text-[9px] mb-4">World-Class Voices</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase font-heading tracking-tighter leading-none mb-6">THE <span className="text-gold italic serif">SPEAKERS</span></h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Dr. Amina J. Mohammed", role: "Deputy Sec-Gen, UN", img: "photo-1573496359142-b8d87734a5a2" },
              { name: "Winnie Byanyima", role: "Exec. Dir, UNAIDS", img: "photo-1508214751196-bfd1414742e9" },
              { name: "Arancha González", role: "Dean, PSIA", img: "photo-1589156191108-c7ea6f28f97b" },
              { name: "Vanessa Nakate", role: "Climate Activist", img: "photo-1531123897727-8f129e1688ce" },
              { name: "To Be Announced", role: "Industry Leader", img: "photo-1573164574572-cb89e39749b4" },
              { name: "To Be Announced", role: "Global Partner", img: "photo-1551818255-e6e10975bc17" }
            ].map((s, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] rounded-[24px] overflow-hidden mb-4 relative border-2 border-white/10 group-hover:border-gold/50 transition-editorial">
                   <img src={`https://images.unsplash.com/${s.img}?w=400&q=80`} alt={s.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-700"/>
                   <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-transparent to-transparent opacity-60"></div>
                </div>
                <h4 className="text-[11px] font-black uppercase font-heading mb-1 leading-tight">{s.name}</h4>
                <p className="text-gold/60 font-black tracking-widest text-[7px] uppercase">{s.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONDENSED AGENDA */}
      <section id="agenda" className="py-16 px-6 md:px-12 bg-cream">
         <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
               <h2 className="text-4xl md:text-5xl font-black uppercase font-heading tracking-tighter mb-4">SUMMIT <span className="text-brand italic serif">AGENDA</span></h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
               {[
                 { time: "08:30 AM", event: "Registration & Arrival", type: "Logistics" },
                 { time: "09:30 AM", event: "Opening Ceremony & Keynotes", type: "Main Stage" },
                 { time: "11:30 AM", event: "Panel: Owning the Digital Future", type: "Session" },
                 { time: "01:00 PM", event: "Networking Lunch", type: "Networking" },
                 { time: "02:30 PM", event: "Industry Masterclasses", type: "Workshop" },
                 { time: "04:30 PM", event: "B2B Matchmaking Sessions", type: "Networking" },
                 { time: "06:00 PM", event: "Day 1 Closing", type: "Logistics" },
                 { time: "07:30 PM", event: "Gala Dinner (Premium Only)", type: "Special" }
               ].map((item, i) => (
                 <div key={i} className="p-5 bg-white rounded-2xl border border-charcoal/5 flex items-center justify-between hover:border-brand transition-editorial group">
                    <div className="flex items-center gap-6">
                       <span className="text-brand font-black text-[9px] uppercase tracking-widest w-16">{item.time}</span>
                       <div>
                          <h4 className="text-xs font-black uppercase font-heading">{item.event}</h4>
                          <span className="text-[7px] font-black text-charcoal/30 uppercase tracking-[0.2em]">{item.type}</span>
                       </div>
                    </div>
                    <ChevronRight size={14} className="text-charcoal/10 group-hover:text-gold transition-editorial" />
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. EXHIBITION & SPONSORS */}
      <section id="exhibit" className="py-16 px-6 md:px-12 bg-white">
         <div className="max-w-[1400px] mx-auto">
            <div className="bg-brand rounded-[40px] overflow-hidden flex flex-col md:flex-row items-stretch border border-white/20 mb-16">
               <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center text-white">
                  <p className="text-gold text-[8px] font-black tracking-[0.4em] uppercase mb-6">Showcase | Connect | Grow</p>
                  <h2 className="text-3xl md:text-5xl font-black uppercase font-heading tracking-tighter mb-8 leading-tight">EXHIBIT <span className="text-gold italic serif">WITH US</span></h2>
                  <p className="text-white/60 text-sm font-medium italic mb-8">Showcase your brand to a global audience of decision-makers and investors.</p>
                  <a href="/contact-us" className="bg-gold text-brand px-8 py-4 rounded-full font-black text-[9px] uppercase tracking-[0.3em] hover:bg-white transition-editorial w-fit">BOOK STAND</a>
               </div>
               <div className="w-full md:w-1/2 relative min-h-[250px]">
                  <img src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=1000&q=80" className="w-full h-full object-cover grayscale opacity-50" alt="Exhibition"/>
               </div>
            </div>

            <div id="sponsors" className="text-center">
               <p className="text-brand font-black tracking-[0.4em] uppercase text-[8px] mb-8">Partners & Sponsors</p>
               <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-30 grayscale">
                  {[1,2,3,4,5,6].map(i => <div key={i} className="h-8 w-full bg-charcoal/10 rounded-lg"></div>)}
               </div>
            </div>
         </div>
      </section>

      {/* 7. TRAVEL & FOOTER PREP */}
      <section id="travel" className="py-16 px-6 md:px-12 bg-warm">
         <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-[32px] border border-charcoal/5 group hover:border-brand transition-editorial">
               <Hotel size={24} className="text-brand mb-6"/>
               <h3 className="text-xl font-black uppercase font-heading mb-4">Stay</h3>
               <p className="text-charcoal/50 text-sm italic mb-6">Discounted rates at leading Cape Town hotels.</p>
               <a href="/contact-us" className="text-brand font-black text-[8px] uppercase tracking-widest flex items-center gap-2">PARTNER HOTELS <ArrowUpRight size={14}/></a>
            </div>
            <div className="bg-white p-8 rounded-[32px] border border-charcoal/5 group hover:border-brand transition-editorial">
               <Plane size={24} className="text-brand mb-6"/>
               <h3 className="text-xl font-black uppercase font-heading mb-4">Travel</h3>
               <p className="text-charcoal/50 text-sm italic mb-6">Exclusive delegate flight promo codes.</p>
               <a href="/contact-us" className="text-brand font-black text-[8px] uppercase tracking-widest flex items-center gap-2">REQUEST CODES <ArrowUpRight size={14}/></a>
            </div>
         </div>
      </section>

      {/* Cart Popup Overlay */}
      {showCart && selectedTicket && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
           <div className="absolute inset-0 bg-charcoal/90 backdrop-blur-xl animate-in fade-in duration-500" onClick={() => setShowCart(false)}></div>
           <div className="bg-white w-full max-w-4xl rounded-[48px] relative z-10 shadow-2xl overflow-hidden animate-in slide-in-from-bottom-24 duration-700">
              <div className="grid md:grid-cols-12">
                 <div className="md:col-span-5 bg-brand p-12 text-white relative">
                    <div className="african-pattern absolute inset-0 opacity-20 scale-150"></div>
                    <div className="relative z-10">
                       <ShoppingBag size={48} className="text-gold mb-8" />
                       <h3 className="text-3xl font-black uppercase font-heading leading-tight mb-10">Secure <br/> <span className="text-gold">Your Seat</span></h3>
                       <div className="space-y-6 pt-8 border-t border-white/10">
                          <div className="flex justify-between items-center">
                             <span className="text-[9px] font-black uppercase opacity-40">Selected Pass</span>
                             <span className="text-sm font-black uppercase">{selectedTicket.name}</span>
                          </div>
                          <div className="flex justify-between items-center">
                             <span className="text-[9px] font-black uppercase opacity-40">Investment</span>
                             <span className="text-4xl font-black text-gold">{selectedTicket.price}</span>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="md:col-span-7 p-12 bg-white flex flex-col justify-center">
                    <button onClick={() => setShowCart(false)} className="absolute top-10 right-10 w-12 h-12 rounded-full bg-cream flex items-center justify-center hover:bg-brand hover:text-white transition-editorial"><X size={24} /></button>
                    <div className="max-w-sm mx-auto w-full">
                       <h4 className="text-xl font-black uppercase font-heading mb-8 flex items-center gap-3"><Zap size={24} className="text-brand" /> Checkout Portal</h4>
                       <div className="space-y-6 mb-10">
                          {["Attendee Info", "Payment Method", "Access Code Delivery"].map((step, i) => (
                             <div key={step} className="flex gap-6 items-center">
                                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-black ${i === 0 ? 'bg-brand border-brand text-white shadow-lg' : 'border-charcoal/10 text-charcoal/20'}`}>{i+1}</div>
                                <span className={`text-sm font-black uppercase tracking-[0.2em] ${i === 0 ? 'text-charcoal' : 'text-charcoal/20'}`}>{step}</span>
                             </div>
                          ))}
                       </div>
                       <button className="w-full bg-brand text-white py-6 rounded-2xl font-black text-[9px] uppercase tracking-[0.3em] hover:bg-charcoal transition-editorial shadow-xl">COMPLETE REGISTRATION</button>
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
