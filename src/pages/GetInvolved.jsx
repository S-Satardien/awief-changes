import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { 
  HeartHandshake, Users, Globe, ArrowRight, Building, 
  CheckCircle2, Handshake, Gift, Briefcase, Sparkles, 
  Target, Award, BookOpen 
} from 'lucide-react'

export default function GetInvolved() {
  return (
    <div className="min-h-screen font-body text-charcoal bg-warm overflow-x-hidden">
      <Navbar activePage="get-involved" />

      {/* Hero Section - Synchronized with Home/About */}
      <section className="relative bg-brand pt-40 pb-48 px-8 overflow-hidden text-center">
        <div className="african-pattern absolute inset-0 opacity-20 scale-150 rotate-12 brightness-200"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand/50 z-10 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-20">
          <p className="text-gold text-xs font-black tracking-[0.3em] uppercase mb-8 flex items-center justify-center gap-4">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            Join the Movement
            <span className="w-2 h-2 rounded-full bg-gold"></span>
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-10 uppercase font-heading">
            Be the <br />
            <span className="text-gold italic serif normal-case">Catalyst for Change</span>
          </h1>
          <p className="text-white/80 text-xl leading-relaxed mb-0 max-w-2xl mx-auto italic font-medium">
            Whether you are looking to donate, partner with us on strategic initiatives, or volunteer your time—your contribution drives Africa's sustainable growth.
          </p>
        </div>
      </section>

      {/* 1. INDIVIDUAL DONOR - Philanthropic Appeal */}
      <section className="section-spacing px-6 md:px-12 bg-white rounded-t-[64px] -mt-24 relative z-30" id="individual-donor">
        <div className="max-w-[1400px] mx-auto">
          <div className="editorial-grid items-center gap-24">
             <div className="col-span-12 lg:col-span-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/40 bg-brand/10 backdrop-blur mb-10">
                   <Gift size={14} className="text-brand"/>
                   <span className="text-brand text-[9px] font-black tracking-[0.3em] uppercase">Individual Giving</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-10 text-charcoal">
                   Individual <br/> <span className="text-brand">Philanthropy</span>
                </h2>
                <p className="text-xl md:text-2xl text-charcoal/60 leading-relaxed font-medium mb-12 italic border-l-8 border-brand pl-12">
                   Your personal contribution directly funds the infrastructure for Africa's female-led economic revolution.
                </p>
                <p className="text-lg text-charcoal/50 font-medium leading-relaxed mb-12 max-w-xl">
                   Join our circle of individual donors. From sponsoring a single entrepreneur's journey to funding research initiatives, your support provides the essential resources women need to scale beyond borders.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-12">
                   <div className="p-8 bg-warm rounded-3xl border border-charcoal/5">
                      <h4 className="text-2xl font-black uppercase font-heading text-brand">Tax</h4>
                      <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/40 mt-2 italic">Deductible Contributions</p>
                   </div>
                   <div className="p-8 bg-warm rounded-3xl border border-charcoal/5">
                      <h4 className="text-2xl font-black uppercase font-heading text-brand">100%</h4>
                      <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/40 mt-2 italic">Impact Transparency</p>
                   </div>
                </div>
                <a href="/donate" className="inline-flex items-center gap-6 bg-charcoal text-white px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-brand transition-editorial shadow-2xl">
                   MAKE AN INDIVIDUAL DONATION <ArrowRight size={18} />
                </a>
             </div>
             <div className="col-span-12 lg:col-span-6 relative">
                <div className="aspect-[4/5] rounded-[64px] overflow-hidden shadow-2xl relative group border-4 border-white/20">
                   <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1000&q=80" alt="Individual Donor" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000" />
                   <div className="absolute inset-0 bg-brand/20 group-hover:bg-transparent transition-editorial"></div>
                   <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold rounded-full flex flex-col items-center justify-center text-white text-center p-10 rotate-12 shadow-2xl border-4 border-white hidden md:flex">
                      <Sparkles size={40} className="mb-4" />
                      <p className="text-[10px] font-black uppercase tracking-widest leading-tight">Empower One. <br/> Transform Many.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. CORPORATE PARTNER & CSI - Strategic Appeal */}
      <section className="section-spacing px-6 md:px-12 bg-brand text-white relative overflow-hidden" id="corporate-partner">
        <div className="african-pattern absolute inset-0 opacity-30 scale-150 rotate-12 brightness-200"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-brand/50 pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
           <div className="editorial-grid items-center gap-24">
              <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
                 <div className="grid grid-cols-2 gap-6 relative">
                    <div className="aspect-[3/4] rounded-[48px] overflow-hidden border-4 border-white/20 rotate-3 shadow-2xl relative z-10 group bg-charcoal">
                       <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=800&q=80" alt="Corporate Partnership" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000" />
                       <div className="absolute inset-0 bg-brand/20 group-hover:bg-transparent transition-editorial"></div>
                    </div>
                    <div className="aspect-[3/4] rounded-[48px] overflow-hidden border-4 border-white/20 -rotate-3 translate-y-12 shadow-2xl relative z-0 group bg-charcoal">
                       <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" alt="CSI Impact" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000" />
                       <div className="absolute inset-0 bg-brand/20 group-hover:bg-transparent transition-editorial"></div>
                    </div>
                 </div>
                 <div className="mt-32 p-12 bg-white/10 border border-white/20 rounded-[48px] backdrop-blur-xl relative z-20">
                    <div className="flex items-center gap-4 mb-8">
                       <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center border border-white/30">
                          <Building size={24} className="text-gold" />
                       </div>
                       <h4 className="text-gold font-black uppercase font-heading text-xl tracking-tighter leading-none">CSI & CSR Alignment</h4>
                    </div>
                    <ul className="space-y-6">
                       {[
                         "UN ECOSOC Special Consultative Status",
                         "Measurable Sustainable Development Goals (SDGs)",
                         "Pan-African Brand Exposure at Flagship Events",
                         "Custom Program Co-creation & Implementation"
                       ].map((item, i) => (
                         <li key={i} className="flex items-start gap-4 text-[10px] font-black uppercase tracking-widest text-white/70 leading-relaxed italic">
                            <CheckCircle2 size={16} className="text-gold shrink-0" /> {item}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>
              <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/40 bg-gold/10 backdrop-blur mb-10">
                    <Handshake size={14} className="text-gold"/>
                    <span className="text-gold text-[9px] font-black tracking-[0.3em] uppercase">Corporate Strategic Investment</span>
                 </div>
                 <h2 className="text-5xl md:text-7xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-10">
                    Partner <br/> <span className="text-gold italic serif normal-case">With AWIEF</span>
                 </h2>
                 <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium mb-12 italic border-l-8 border-gold pl-12">
                    Drive systemic change. Align your corporate values with the future of African industry.
                 </p>
                 <p className="text-lg text-white/70 font-medium leading-relaxed mb-12">
                    We partner with forward-thinking organizations to design and implement tailored enterprise development programmes. From CSI initiatives to large-scale CSR campaigns, we provide the platform for you to deliver measurable socio-economic impact.
                 </p>
                 <a href="/contact-us" className="inline-flex items-center gap-6 bg-white text-charcoal px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-gold hover:text-white transition-editorial shadow-2xl">
                    EXPLORE CSI PARTNERSHIPS <ArrowRight size={18} />
                 </a>
              </div>
           </div>
        </div>
      </section>

      {/* 3. VOLUNTEER EXPERTISE - Patterned Section */}
      <section className="section-spacing px-6 md:px-12 bg-warm relative overflow-hidden" id="volunteer">
        <div className="african-pattern absolute inset-0 opacity-[0.03] scale-150 brightness-0"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
           <div className="editorial-grid items-center gap-24">
              <div className="col-span-12 lg:col-span-6">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/40 bg-brand/10 backdrop-blur mb-10">
                    <Users size={14} className="text-brand"/>
                    <span className="text-brand text-[9px] font-black tracking-[0.3em] uppercase">Expertise & Mentorship</span>
                 </div>
                 <h2 className="text-5xl md:text-7xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-10 text-charcoal">
                    Volunteer <br/> <span className="text-brand">Your Expertise</span>
                 </h2>
                 <p className="text-xl md:text-2xl text-charcoal/60 leading-relaxed font-medium mb-12 italic border-l-8 border-brand pl-12">
                    Share your intelligence. Guide the next generation of African business giants.
                 </p>
                 <div className="space-y-6 mb-12">
                    {[
                      { t: "Executive Mentorship", d: "One-on-one sessions with high-potential founders." },
                      { t: "Summit Speakers", d: "Leading panels and masterclasses on global stages." },
                      { t: "Technical Advisory", d: "Pro-bono legal, financial, and strategy consulting." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 items-center p-8 bg-white rounded-3xl group hover:border-brand transition-editorial shadow-sm hover:shadow-xl">
                         <div className="w-16 h-16 rounded-2xl bg-brand/5 flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-editorial border border-brand/10">
                            <CheckCircle2 size={32} strokeWidth={1.5} />
                         </div>
                         <div>
                            <h4 className="text-lg font-black uppercase font-heading text-charcoal mb-1">{item.t}</h4>
                            <p className="text-[10px] font-black tracking-widest uppercase text-charcoal/40 italic">{item.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
                 <a href="/contact-us" className="inline-flex items-center gap-6 bg-charcoal text-white px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-brand transition-editorial shadow-2xl">
                    APPLY TO VOLUNTEER <ArrowRight size={18} />
                 </a>
              </div>
              <div className="col-span-12 lg:col-span-6">
                 <div className="relative aspect-square rounded-[64px] overflow-hidden shadow-2xl group border-4 border-white/40 bg-brand">
                    <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&q=80" alt="Volunteer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000 scale-110 group-hover:scale-100" />
                    <div className="absolute inset-0 bg-brand/20 group-hover:bg-transparent transition-editorial"></div>
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold rounded-full flex flex-col items-center justify-center text-white text-center p-12 rotate-12 shadow-2xl border-4 border-white hidden md:flex">
                       <Briefcase size={40} className="mb-4" />
                       <p className="text-[10px] font-black uppercase tracking-widest leading-tight">Join our Technical Advisory Council</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. JOIN COMMUNITY - High Impact Pattern Section */}
      <section className="bg-brand py-32 px-8 relative overflow-hidden text-center" id="join-community">
        <div className="african-pattern absolute inset-0 opacity-30 scale-150 rotate-12 brightness-200"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mb-10 mx-auto border border-white/20 shadow-2xl">
            <Globe className="text-gold" size={48} strokeWidth={1.5} />
          </div>
          <p className="text-gold text-[10px] font-black tracking-[0.4em] uppercase mb-8 italic">Your Network is Your Net Worth</p>
          <h2 className="text-5xl md:text-8xl font-black text-white mb-10 leading-[0.85] tracking-tighter uppercase font-heading">
            Join the AWIEF <br/> <span className="text-gold italic serif normal-case">Community</span>
          </h2>
          <p className="text-white/80 text-xl font-medium leading-relaxed max-w-3xl mx-auto mb-20 italic">
            Step into a powerful, pan-African sisterhood of innovators, executives, and founders. Unlock exclusive access to resources, investor matchmaking, and year-round networking.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 text-left">
            {[
              { icon: BookOpen, t: "Exclusive Resources", d: "Gain access to members-only masterclasses, market research, and funding portals." },
              { icon: Users, t: "Global Networking", d: "Connect with peers across 48 countries through our dedicated community app." },
              { icon: Award, t: "Event Discounts", d: "Enjoy VIP pricing and early-bird access to the Annual AWIEF Conference." }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-10 rounded-[48px] border border-white/20 hover:border-gold transition-editorial group cursor-pointer hover:bg-white shadow-2xl">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:bg-brand/10 transition-editorial">
                  <item.icon className="text-white group-hover:text-brand" size={28} strokeWidth={1.5} />
                </div>
                <h4 className="text-white text-2xl font-black uppercase font-heading mb-4 group-hover:text-charcoal transition-editorial leading-tight">{item.t}</h4>
                <p className="text-white/60 font-medium leading-relaxed italic group-hover:text-charcoal/60 transition-editorial">{item.d}</p>
              </div>
            ))}
          </div>

          <button className="bg-white text-charcoal px-16 py-8 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-gold hover:text-white transition-editorial shadow-2xl flex items-center gap-6 mx-auto">
            BECOME A MEMBER TODAY <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
