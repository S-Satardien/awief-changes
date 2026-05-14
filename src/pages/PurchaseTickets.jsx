import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { 
  Sparkles, Ticket, Calendar, MapPin, CheckCircle2, Star, 
  ShieldCheck, CreditCard, ArrowRight, Network, Briefcase, 
  Award, ArrowUpRight, X, ShoppingBag, ChevronRight, Zap, 
  Globe, HeartHandshake, Mic2, Users2, Rocket, Building2,
  Plane, Hotel, Coffee, Presentation, Target, Lightbulb, TrendingUp
} from 'lucide-react'

export default function PurchaseTickets() {
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [showCart, setShowCart] = useState(false)
  const [activeDay, setActiveDay] = useState(1)

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

  const agendaDays = {
    1: [
      { time: "08:30 AM", event: "Registration & Morning Networking", type: "Logistics" },
      { time: "09:30 AM", event: "Grand Opening: Beyond Access", type: "Main Stage" },
      { time: "11:30 AM", event: "Panel: Owning the Digital Future", type: "Session" },
      { time: "01:00 PM", event: "Networking Lunch & Exhibition", type: "Networking" },
      { time: "02:30 PM", event: "Masterclass: Scaling Venture Capital", type: "Workshop" },
      { time: "04:30 PM", event: "B2B Matchmaking Sessions", type: "Networking" },
      { time: "06:00 PM", event: "Day 1 Closing Reception", type: "Logistics" }
    ],
    2: [
      { time: "09:00 AM", event: "Policy Roundtable: Markets & Power", type: "High-Level" },
      { time: "11:00 AM", event: "Fireside Chat: Global Connectivity", type: "Main Stage" },
      { time: "12:30 PM", event: "Networking Lunch", type: "Networking" },
      { time: "02:00 PM", event: "Workshop: Building Power Networks", type: "Interactive" },
      { time: "04:00 PM", event: "Final Keynote & Call to Action", type: "Main Stage" },
      { time: "07:30 PM", event: "AWIEF Awards & Gala Dinner", type: "Prestigious" }
    ]
  }

  const handleSelect = (ticket) => {
    setSelectedTicket(ticket)
    setShowCart(true)
  }

  return (
    <div className="min-h-screen font-body text-charcoal bg-white overflow-x-hidden">
      <Navbar activePage="conference" />

      {/* 1. HERO */}
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
             The Leading Platform for Women Entrepreneurship in Africa
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-16">
            <div className="flex flex-col items-center text-center">
               <div className="flex items-center gap-3 text-gold mb-1">
                  <Calendar size={20} />
                  <span className="font-black text-lg uppercase font-heading tracking-tight text-white">Nov 10 - 11, 2026</span>
               </div>
            </div>
            <div className="w-px h-10 bg-white/10 hidden md:block"></div>
            <div className="flex flex-col items-center text-center">
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
             <a href="#about-conference" className="text-white font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-3 group">
                LEARN MORE <ChevronRight size={16} className="group-hover:translate-x-1 transition-editorial"/>
             </a>
          </div>
        </div>
      </section>

      {/* 2. INTRO & THEME */}
      <section id="about-conference" className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-8">Where Africa’s entrepreneurship ecosystem connects</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase font-heading leading-tight mb-12">
            Leading <span className="text-brand italic serif">Change</span>
          </h2>
          <div className="space-y-8 text-lg text-charcoal/70 font-medium italic leading-relaxed max-w-4xl mx-auto">
            <p>
              AWIEF returns in 2026 as Africa’s premier platform for women in entrepreneurship, leadership, and innovation — convening the continent’s most influential entrepreneurs, investors, corporates, policymakers, and ecosystem builders.
            </p>
            <p className="text-charcoal font-bold">
              Under the theme <span className="text-brand">“Beyond Access: Owning Capital, Markets & Power,”</span> AWIEF2026 shifts the conversation from participation to ownership — exploring how women can move beyond access to resources toward greater control of capital, stronger market positioning, and influence in economic decision-making.
            </p>
            <p>
              Bringing together a high-level conference and a dynamic exhibition, AWIEF2026 creates a powerful space where ideas, business, and opportunity meet. From thought-provoking discussions and practical insights to solution-driven showcases and strategic partnerships, the event is designed to accelerate collaboration, unlock new markets, and drive inclusive growth across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* 3. TICKETS & REGISTRATION */}
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

      {/* 4. WHAT TO EXPECT */}
      <section className="py-16 px-6 md:px-12 bg-white">
         <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
               <p className="text-brand font-black tracking-[0.4em] uppercase text-[9px] mb-4">The Experience</p>
               <h2 className="text-4xl md:text-5xl font-black uppercase font-heading tracking-tighter mb-4">WHAT TO <span className="text-brand serif italic">EXPECT</span></h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {[
                 { label: "Delegates", val: "1000+", icon: <Users2/> },
                 { label: "Countries", val: "50+", icon: <Globe/> },
                 { label: "Sectors Covered", val: "All", icon: <Building2/> },
                 { label: "Format", val: "Multimodal", icon: <Presentation/> }
               ].map((item, i) => (
                 <div key={i} className="p-8 bg-warm rounded-[32px] border border-charcoal/5 text-center group hover:bg-brand hover:text-white transition-editorial">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand mb-6 shadow-sm mx-auto group-hover:scale-110 transition-editorial">{item.icon}</div>
                    <div className="text-3xl font-black uppercase font-heading mb-2">{item.val}</div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-70">{item.label}</p>
                 </div>
               ))}
            </div>
            <p className="text-center mt-12 text-sm text-charcoal/40 italic">
               Event Format: Keynotes, Panels, Exhibitions, Workshops & Masterclasses
            </p>
         </div>
      </section>

      {/* 5. WHY ATTEND */}
      <section className="py-16 px-6 md:px-12 bg-brand text-white overflow-hidden relative">
        <div className="african-pattern absolute inset-0 opacity-10 scale-150 rotate-12 brightness-200"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-gold font-black tracking-[0.4em] uppercase text-[9px] mb-4">Strategic Value</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase font-heading tracking-tighter leading-none mb-6">WHY <span className="text-gold italic serif">ATTEND</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "Thought Leadership", icon: <Lightbulb/> },
              { title: "Unrivalled Networking", icon: <Network/> },
              { title: "Industry Trends", icon: <TrendingUp/> },
              { title: "Business Growth", icon: <Target/> },
              { title: "Skills Development", icon: <Rocket/> }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white/5 backdrop-blur border border-white/10 rounded-[32px] text-center hover:bg-gold hover:text-brand transition-editorial group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-brand group-hover:text-white transition-editorial">
                  {item.icon}
                </div>
                <h4 className="text-[11px] font-black uppercase font-heading leading-tight">{item.title}</h4>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-[9px] font-black uppercase tracking-[0.3em] text-white/40">
             Learning & skills development through engaging workshops & masterclasses
          </p>
        </div>
      </section>

      {/* 6. SPEAKERS */}
      <section id="speakers" className="py-16 px-6 md:px-12 bg-white overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-brand font-black tracking-[0.4em] uppercase text-[9px] mb-4">World-Class Voices</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase font-heading tracking-tighter leading-none mb-6">THE <span className="text-brand italic serif">SPEAKERS</span></h2>
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
                <div className="aspect-[4/5] rounded-[24px] overflow-hidden mb-4 relative border-2 border-charcoal/5 group-hover:border-brand transition-editorial">
                   <img src={`https://images.unsplash.com/${s.img}?w=400&q=80`} alt={s.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-700"/>
                </div>
                <h4 className="text-[11px] font-black uppercase font-heading mb-1 leading-tight">{s.name}</h4>
                <p className="text-brand/40 font-black tracking-widest text-[7px] uppercase">{s.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONDENSED AGENDA */}
      <section id="agenda" className="py-16 px-6 md:px-12 bg-cream">
         <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
               <h2 className="text-4xl md:text-5xl font-black uppercase font-heading tracking-tighter mb-8">SUMMIT <span className="text-brand italic serif">AGENDA</span></h2>
               <div className="flex justify-center gap-4">
                  {[1, 2].map(day => (
                    <button 
                      key={day}
                      onClick={() => setActiveDay(day)}
                      className={`px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-editorial border-2 ${
                        activeDay === day 
                        ? 'bg-brand text-white border-brand shadow-lg scale-105' 
                        : 'bg-white text-charcoal/30 border-charcoal/5 hover:border-brand hover:text-brand'
                      }`}
                    >
                      Day {day}
                    </button>
                  ))}
               </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
               {agendaDays[activeDay].map((item, i) => (
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

      {/* 8. EXHIBITION OPPORTUNITIES */}
      <section id="exhibit" className="py-16 px-6 md:px-12 bg-white">
         <div className="max-w-[1400px] mx-auto">
            <div className="bg-brand rounded-[40px] overflow-hidden flex flex-col md:flex-row items-stretch border border-white/20 mb-16 shadow-2xl">
               <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center text-white relative">
                  <div className="african-pattern absolute inset-0 opacity-10 scale-150"></div>
                  <div className="relative z-10">
                    <p className="text-gold text-[8px] font-black tracking-[0.4em] uppercase mb-6">Showcase | Connect | Grow</p>
                    <h2 className="text-3xl md:text-5xl font-black uppercase font-heading tracking-tighter mb-8 leading-tight">EXHIBITION <span className="text-gold italic serif">OPPORTUNITIES</span></h2>
                    <ul className="space-y-6 mb-12">
                      {[
                        "SHOWCASE PRODUCTS AND SERVICES TO A HIGH-PROFILE AUDIENCE OF BUSINESS LEADERS, INVESTORS, AND GOVERNMENT OFFICIALS",
                        "BUILD STRATEGIC CONNECTIONS THROUGH CURATED NETWORKING AND BUSINESS MATCHMAKING",
                        "BOOST BRAND VISIBILITY WITH EXPOSURE ACROSS AWIEF’S MEDIA, DIGITAL, AND MARKETING CHANNELS"
                      ].map((text, idx) => (
                        <li key={idx} className="flex gap-4 items-start">
                          <CheckCircle2 size={16} className="text-gold shrink-0 mt-1" />
                          <span className="text-[10px] font-black uppercase tracking-widest leading-relaxed opacity-80">{text}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="/contact-us" className="bg-gold text-brand px-8 py-4 rounded-full font-black text-[9px] uppercase tracking-[0.3em] hover:bg-white transition-editorial w-fit">BOOK YOUR STAND</a>
                  </div>
               </div>
               <div className="w-full md:w-1/2 relative min-h-[350px]">
                  <img src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=1000&q=80" className="w-full h-full object-cover grayscale opacity-50" alt="Exhibition"/>
                  <div className="absolute inset-0 bg-brand/20"></div>
               </div>
            </div>

            <div id="sponsors" className="space-y-16">
               <div className="text-center">
                  <p className="text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-4">Strategic Partnership</p>
                  <h2 className="text-3xl md:text-5xl font-black uppercase font-heading tracking-tighter mb-4 leading-none">OUR <span className="text-brand italic serif">PARTNERS</span></h2>
               </div>

               {[
                 { cat: "Diamond", count: 1 },
                 { cat: "Platinum", count: 2 },
                 { cat: "Silver", count: 4 },
                 { cat: "Bronze", count: 6 },
                 { cat: "Technology", count: 2 },
                 { cat: "Airline", count: 1 },
                 { cat: "Media", count: 8 },
                 { cat: "Knowledge", count: 3 }
               ].map((branch) => (
                 <div key={branch.cat} className="space-y-8">
                   <div className="flex items-center gap-6">
                      <div className="h-px bg-charcoal/5 flex-grow"></div>
                      <span className="text-[10px] font-black text-brand uppercase tracking-[0.4em] italic">{branch.cat} Partners</span>
                      <div className="h-px bg-charcoal/5 flex-grow"></div>
                   </div>
                   <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 items-center justify-center opacity-40 hover:opacity-100 transition-editorial duration-1000 px-12">
                      {Array.from({ length: branch.count }).map((_, i) => (
                        <img 
                          key={i} 
                          src="https://www.awieforum.org/wp-content/uploads/2023/08/cropped-AWIEF-logo_transparant-2048x1192-1.jpg" 
                          alt="Partner" 
                          className="h-6 md:h-8 w-auto object-contain grayscale hover:grayscale-0 transition-editorial mx-auto"
                        />
                      ))}
                   </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 9. TRAVEL & ACCOMMODATION */}
      <section id="travel" className="py-16 px-6 md:px-12 bg-warm">
         <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-black uppercase font-heading tracking-tighter mb-4 leading-none">TRAVEL <span className="text-brand italic serif">& STAY</span></h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-white p-10 rounded-[32px] border border-charcoal/5 group hover:border-brand transition-editorial shadow-xl">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-warm flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-editorial"><Hotel size={28}/></div>
                    <h3 className="text-2xl font-black uppercase font-heading tracking-tight">Preferred Hotels</h3>
                  </div>
                  <div className="space-y-4 mb-10">
                    {[
                      { name: "The Westin Cape Town", dist: "Direct CTICC Access", rate: "Premium Partner" },
                      { name: "Southern Sun The Cullinan", dist: "5 min walk", rate: "Preferred Rate" },
                      { name: "AC Hotel by Marriott", dist: "7 min walk", rate: "Special Offer" }
                    ].map((hotel, i) => (
                      <div key={i} className="flex justify-between items-center py-3 border-b border-charcoal/5">
                        <div>
                          <p className="text-xs font-black uppercase">{hotel.name}</p>
                          <p className="text-[9px] text-charcoal/40 font-medium italic">{hotel.dist}</p>
                        </div>
                        <span className="text-[9px] font-black text-brand border border-brand/20 px-3 py-1 rounded-full uppercase">{hotel.rate}</span>
                      </div>
                    ))}
                  </div>
                  <a href="/contact-us" className="text-brand font-black text-[9px] uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-editorial">BOOK PARTNER RATES <ArrowUpRight size={16}/></a>
               </div>
               <div className="bg-white p-10 rounded-[32px] border border-charcoal/5 group hover:border-brand transition-editorial shadow-xl">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-warm flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-editorial"><Plane size={28}/></div>
                    <h3 className="text-2xl font-black uppercase font-heading tracking-tight">Official Airline</h3>
                  </div>
                  <div className="space-y-6 mb-10">
                    <div className="p-6 bg-warm rounded-2xl border border-charcoal/5">
                      <h4 className="text-xs font-black uppercase mb-2">Discounted Fares</h4>
                      <p className="text-[11px] text-charcoal/50 font-medium leading-relaxed italic">
                        Registered delegates qualify for up to <strong className="text-brand">15% discount</strong> on flights.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-cream p-4 rounded-xl text-center">
                         <p className="text-[8px] font-black text-brand uppercase mb-1">Code</p>
                         <p className="text-xs font-black text-charcoal">AWIEF2026</p>
                      </div>
                      <div className="bg-cream p-4 rounded-xl text-center">
                         <p className="text-[8px] font-black text-brand uppercase mb-1">Valid</p>
                         <p className="text-xs font-black text-charcoal">Nov 5-15</p>
                      </div>
                    </div>
                  </div>
                  <a href="/contact-us" className="text-brand font-black text-[9px] uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-editorial">REQUEST FLIGHT CODES <ArrowUpRight size={16}/></a>
               </div>
            </div>
         </div>
      </section>

      {/* Cart Popup */}
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
                       <div className="space-y-6 pt-8 border-t border-white/10 text-sm">
                          <div className="flex justify-between items-center"><span className="opacity-40 uppercase">Pass</span><span>{selectedTicket.name}</span></div>
                          <div className="flex justify-between items-center"><span className="opacity-40 uppercase">Total</span><span className="text-4xl font-black text-gold">{selectedTicket.price}</span></div>
                       </div>
                    </div>
                 </div>
                 <div className="md:col-span-7 p-12 bg-white flex flex-col justify-center">
                    <button onClick={() => setShowCart(false)} className="absolute top-10 right-10 w-12 h-12 rounded-full bg-cream flex items-center justify-center hover:bg-brand hover:text-white transition-editorial"><X size={24} /></button>
                    <div className="max-w-sm mx-auto w-full">
                       <h4 className="text-xl font-black uppercase font-heading mb-8">Checkout</h4>
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
