import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Rocket, Briefcase, Award, Globe, ArrowRight, MapPin, Users, Calendar, ShieldCheck, Zap, Sparkles, Target, Lightbulb, Mic, Star, X, Info, TrendingUp, MoveRight, Megaphone, Play, Layers } from 'lucide-react'

const programmesData = [
  {
    id: 1,
    title: "AWIEF Growth Accelerator (Nigeria) with AGF & FSDH",
    stage: "Growth & Scale",
    status: "Open",
    color: "bg-brand",
    desc: "A 12-month accelerator targeting women-owned SMEs in Nigeria.",
    details: "Partnered with African Guarantee Fund (AGF) and FSDH Merchant Bank Limited. Focuses on post-revenue, highly innovative businesses operating for 3+ years."
  },
  {
    id: 2,
    title: "Growth Accelerator for South Africa with Nedbank",
    stage: "Growth & Scale",
    status: "Ongoing",
    color: "bg-accent",
    desc: "Enhancing the investment readiness of South African female founders.",
    details: "For the 2024 cohort, supporting Exempt Micro Enterprises (EMEs) or Qualifying Small Enterprises (QSEs) in agribusiness and green energy."
  },
  {
    id: 3,
    title: "Victoria's Secret Growth Accelerator in Nigeria",
    stage: "Growth & Scale",
    status: "Closed",
    color: "bg-charcoal",
    desc: "High-impact investment readiness for innovative female-led businesses.",
    details: "Part of Victoria's Secret 'The Tour Impact Fund'. Priority for technology-based businesses in agriculture and health."
  },
  {
    id: 4,
    title: "Academy for Women Entrepreneurs (AWE LESA)",
    stage: "Idea & Launch",
    status: "Closed",
    color: "bg-brand-light",
    desc: "Empowering 100 young women entrepreneurs across Lesotho and South Africa.",
    details: "Supported by the U.S. Mission. Focuses on early-stage entrepreneurs using the 100 Million Learners curriculum."
  },
  {
    id: 5,
    title: "She-Commes: Digital Trade for Women in Africa",
    stage: "Idea & Launch",
    status: "Open",
    color: "bg-brand",
    desc: "Training on e-commerce and cross-border digital trade.",
    details: "Empowering women to leverage AfCFTA through digital platforms and global marketplaces."
  },
  {
    id: 6,
    title: "Green Energy Innovation Challenge",
    stage: "Growth & Scale",
    status: "Ongoing",
    color: "bg-accent",
    desc: "Funding and support for women-led renewable energy startups.",
    details: "Accelerating the transition to sustainable energy across sub-Saharan Africa."
  },
  {
    id: 7,
    title: "Agribusiness Value Chain Development",
    stage: "Idea & Launch",
    status: "Closed",
    color: "bg-charcoal",
    desc: "Building sustainable food systems through female leadership.",
    details: "Focusing on processing, storage, and logistics within the agricultural sector."
  },
  {
    id: 8,
    title: "Creative Industry Export Readiness",
    stage: "Growth & Scale",
    status: "Open",
    color: "bg-brand-light",
    desc: "Preparing fashion and arts brands for international markets.",
    details: "Direct mentorship from global luxury brands and supply chain experts."
  }
];

export default function WhatWeDo() {
  const filterOptions = ['All', 'Idea & Launch Stage', 'Growth & Scale Stage', 'Open Applications'];
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProg, setSelectedProg] = useState(null);

  const filteredProgrammes = programmesData.filter(prog => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Open Applications') return prog.status === 'Open';
    // Match partial strings for 'Stage' variations
    return activeFilter.includes(prog.stage);
  });

  return (
    <div className="min-h-screen font-body text-charcoal bg-cream overflow-x-hidden">
      <Navbar activePage="what-we-do" />

      {/* Editorial Header - Synchronized Brand Identity */}
      <header className="relative bg-brand pt-56 pb-32 px-6 md:px-12 overflow-hidden text-center">
        <div className="african-pattern absolute inset-0 opacity-30 scale-150 rotate-12 brightness-200"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/50 to-brand z-10 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur mb-8">
            <Layers size={14} className="text-gold"/>
            <span className="text-gold text-[11px] font-black tracking-[0.2em] uppercase">Ecosystem of Growth</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-12 text-white">
            What We <span className="text-gold italic serif normal-case">Do</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium max-w-3xl mx-auto italic">
            From early-stage ideation to cross-border scaling, global networking, and policy reform—discover how we actively break down barriers for African women in business.
          </p>
        </div>
      </header>

      {/* Filterable Programmes Section */}
      <section className="py-32 px-6 md:px-12 bg-warm rounded-t-[60px] -mt-12 relative z-20" id="programmes">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <p className="text-brand font-black tracking-[0.3em] uppercase text-[10px] mb-4 italic">Capacity Building & Enterprise Development</p>
              <h2 className="text-4xl md:text-6xl font-black uppercase font-heading tracking-tighter leading-none">TAILORED <span className="text-brand">PROGRAMMES</span></h2>
              <p className="text-charcoal/50 text-lg mt-6 font-medium">Providing knowledge, tools, and connections to succeed at every stage.</p>
            </div>
            
            {/* Filter Bar */}
            <div className="flex flex-wrap gap-4">
              {filterOptions.map(option => (
                <button
                  key={option}
                  onClick={() => setActiveFilter(option)}
                  className={`px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-editorial border-2 ${
                    activeFilter === option 
                    ? 'bg-brand text-white border-brand shadow-[0_20px_50px_rgba(127,61,89,0.3)] scale-105' 
                    : 'bg-white text-charcoal/30 border-charcoal/5 hover:border-brand hover:text-brand shadow-sm hover:scale-105'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredProgrammes.map((p, i) => (
                <div 
                  key={p.id} 
                  onClick={() => setSelectedProg(p)}
                  className="bg-white border border-charcoal/5 p-5 rounded-[24px] group hover:border-brand hover:shadow-lg transition-editorial cursor-pointer flex flex-row items-center gap-5 relative overflow-hidden h-auto"
                >
                  <div className="african-pattern absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-editorial"></div>
                  
                  <div className="relative z-10 w-12 h-12 rounded-[14px] bg-warm flex items-center justify-center text-brand shrink-0 group-hover:bg-brand group-hover:text-white transition-editorial shadow-sm">
                    {p.stage.includes('Idea') ? <Rocket size={20} /> : <TrendingUp size={20} />}
                  </div>

                  <div className="relative z-10 flex-grow min-w-0">
                    <div className="flex justify-between items-center mb-1">
                       <span className="text-brand font-black tracking-[0.1em] uppercase text-[7px] truncate">{p.stage}</span>
                       <span className={`px-2 py-0.5 rounded-full text-[7px] font-black uppercase tracking-widest ${
                        p.status === 'Open' ? 'bg-green-100 text-green-700' :
                        p.status === 'Ongoing' ? 'bg-gold/10 text-gold' :
                        'bg-charcoal/5 text-charcoal/40'
                      }`}>
                        {p.status}
                      </span>
                    </div>
                    <h3 className="text-sm font-black leading-tight group-hover:text-brand transition-editorial mb-0.5">{p.title}</h3>
                    <p className="text-charcoal/40 text-[10px] font-medium italic line-clamp-1">{p.desc}</p>
                  </div>

                  <div className="relative z-10 shrink-0 opacity-0 group-hover:opacity-100 transition-editorial translate-x-4 group-hover:translate-x-0">
                    <MoveRight size={20} className="text-gold" />
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Immersive Summit Experience - High Impact Berry */}
      <section className="py-40 px-6 md:px-12 bg-brand text-white relative overflow-hidden" id="conference">
         <div className="african-pattern absolute inset-0 opacity-30 scale-150 rotate-12 brightness-200"></div>
         <div className="absolute top-0 right-0 p-24 opacity-10 pointer-events-none select-none text-[30rem] font-black rotate-12 text-white/10">2026</div>
         
         <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="grid lg:grid-cols-12 gap-24 items-center">
               <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/40 bg-brand/10 backdrop-blur mb-10">
                     <Sparkles size={12} className="text-brand animate-pulse"/>
                     <span className="text-brand text-[9px] font-black tracking-[0.3em] uppercase">Save The Date</span>
                  </div>
                  <h2 className="text-6xl md:text-[8rem] font-black uppercase font-heading leading-[0.75] tracking-tighter mb-10">
                    Beyond <br/> <span className="text-gold serif italic normal-case">Access</span>
                  </h2>
                  <p className="text-2xl md:text-3xl text-white/80 font-medium leading-tight italic max-w-2xl border-l-8 border-gold pl-12 mb-16">
                    Beyond Access: Owning Capital, Markets & Power. The nexus of policy, capital, and innovation.
                  </p>
                  <div className="flex flex-wrap gap-8 items-center mb-16">
                     <a href="/purchase-conference-tickets" className="bg-white text-charcoal px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-gold hover:text-white transition-editorial shadow-2xl">
                        GO TO AWIEF2026
                     </a>
                     <div className="flex items-center gap-6">
                        <div className="text-right">
                           <p className="text-[10px] font-black text-gold uppercase tracking-widest">10 – 11 November 2026</p>
                           <p className="text-sm font-black uppercase font-heading tracking-tight text-white">Cape Town, South Africa</p>
                        </div>
                     </div>
                  </div>
                  <div className="space-y-6 text-white/60 text-lg font-medium italic leading-relaxed">
                    <p>
                      The AWIEF Annual Conference and Awards is Africa’s premier platform for women in entrepreneurship, leadership, and innovation. 
                    </p>
                    <p>
                      Convening the continent’s most influential entrepreneurs, investors, corporates, policymakers, and ecosystem builders to accelerate collaboration and unlock new markets.
                    </p>
                  </div>
               </div>
               <div className="lg:col-span-5 relative">
                  <div className="aspect-video rounded-[48px] overflow-hidden shadow-[0_0_100px_rgba(127,61,89,0.3)] relative group border-4 border-white/5 bg-charcoal">
                    <iframe 
                      className="w-full h-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-editorial duration-700"
                      src="https://www.youtube.com/embed/qg1mfSal_Eg"
                      title="AWIEF Conference Highlights"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="mt-8 flex justify-center">
                    <a href="/past-conferences" className="text-white/40 font-black text-[10px] uppercase tracking-[0.4em] hover:text-gold transition-editorial flex items-center gap-3 group">
                        VIEW PAST CONFERENCES <MoveRight size={18} className="group-hover:translate-x-2 transition-editorial text-gold" />
                    </a>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Awards Hub - High Authority White Spread */}
      <section className="py-40 px-6 md:px-12 bg-white relative overflow-hidden" id="awards">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-24">
            
            {/* 1/3 Feature Block */}
            <div className="w-full lg:w-1/3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/20 bg-brand/5 backdrop-blur mb-8">
                <Award size={14} className="text-brand"/>
                <span className="text-brand text-[9px] font-black tracking-[0.3em] uppercase">Honouring Industry Leaders</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-10 text-charcoal">
                AWIEF <br/> <span className="text-brand italic serif normal-case">Awards</span>
              </h2>
              <p className="text-charcoal/60 text-xl font-medium leading-relaxed italic mb-12 border-l-8 border-gold pl-10">
                Spotlighting the pioneers, the visionaries, and the remarkable economic contributions of female founders across the continent.
              </p>
              
              <div className="bg-warm border border-charcoal/5 rounded-[48px] p-10 relative overflow-hidden shadow-sm group hover:shadow-xl transition-editorial">
                 <div className="absolute right-[-40px] top-[-40px] text-brand/5 group-hover:scale-110 transition-editorial">
                    <Star size={200} className="fill-current" />
                 </div>
                 <h4 className="text-charcoal font-black text-2xl uppercase font-heading mb-4 relative z-10 leading-tight tracking-tight">2026 Nominations <br/> <span className="text-brand italic serif normal-case">Now Open</span></h4>
                 <p className="text-charcoal/40 text-sm font-medium mb-8 relative z-10 italic">Do you know a trailblazer who deserves global recognition?</p>
                 <a href="/nominate" className="inline-flex items-center gap-4 bg-brand text-white px-8 py-4 rounded-full font-black text-[9px] uppercase tracking-[0.3em] hover:bg-gold transition-editorial relative z-10 shadow-lg">
                   SUBMIT NOMINATION <ArrowRight size={14}/>
                 </a>
              </div>
              
              <div className="mt-12">
                 <a href="/past-awards" className="inline-flex items-center gap-4 text-brand font-black tracking-widest text-[10px] uppercase group">
                   HALL OF FAME ALUMNI <div className="w-10 h-10 rounded-full border border-brand/20 flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-editorial"><ArrowRight size={16}/></div>
                 </a>
              </div>
            </div>

            {/* 2/3 Content Spread */}
            <div className="w-full lg:w-2/3 flex flex-col gap-12">
               <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { cat: "Tech Entrepreneur", icon: Zap, d: "For leveraging technology to create innovative, scalable solutions that address Africa's challenges." },
                    { cat: "Agri Entrepreneur", icon: TrendingUp, d: "Recognizing outstanding success and innovation in the agriculture and food security value chain." },
                    { cat: "Creative Industry", icon: Sparkles, d: "For disrupting and driving economic value within fashion, arts, media, and entertainment." },
                    { cat: "Social Entrepreneur", icon: Target, d: "Celebrating founders whose business models are fundamentally designed to solve social problems." }
                  ].map((item, i) => (
                    <div key={i} className="p-10 bg-warm/30 border border-charcoal/5 rounded-[40px] hover:border-brand/30 hover:shadow-2xl transition-editorial group backdrop-blur shadow-sm relative overflow-hidden">
                       <div className="african-pattern absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-editorial"></div>
                       <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 border border-charcoal/5 group-hover:bg-brand group-hover:text-white transition-editorial shadow-sm">
                          <item.icon size={24} />
                       </div>
                       <h4 className="text-2xl font-black uppercase font-heading text-charcoal mb-4 group-hover:text-brand transition-editorial leading-tight tracking-tight">{item.cat}</h4>
                       <p className="text-charcoal/50 text-sm font-medium leading-relaxed italic">{item.d}</p>
                    </div>
                  ))}
               </div>
               
               <div className="relative aspect-[21/9] rounded-[48px] overflow-hidden shadow-2xl group border-4 border-warm">
                  <img 
                    src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=1200&q=80" 
                    alt="Awards Gala" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand/60 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gold/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-editorial"></div>
                  <div className="absolute bottom-10 left-10">
                     <p className="text-gold font-black text-[10px] uppercase tracking-[0.4em] mb-2 italic">Annual Gala Celebration</p>
                     <h3 className="text-4xl font-black text-white uppercase font-heading italic">The Peak of <br/> Achievement</h3>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advocacy Section - Editorial Cream/Berry Split */}
      <section className="py-32 px-6 md:px-12 bg-warm rounded-t-[60px]" id="advocacy">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
             <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand/10 mb-8">
               <Megaphone className="text-brand" size={24} />
             </div>
             <p className="text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-4 italic">Driving Systemic Change</p>
             <h2 className="text-4xl md:text-6xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-8">
               Policy Advocacy & <br/> <span className="text-brand">Gender Equality</span>
             </h2>
             <p className="text-lg text-charcoal/60 leading-relaxed font-medium mb-10">
               We cannot empower women economically without simultaneously dismantling the structural barriers that hold them back. AWIEF works closely with governments, the African Union, and international bodies to champion policies that foster gender equality.
             </p>
             <div className="grid md:grid-cols-2 gap-8">
                {[
                  { t: "AfCFTA Integration", d: "Ensuring women-owned SMEs can participate in trade without tariffs." },
                  { t: "Financial Inclusion", d: "Removing collateral barriers specifically impacting female founders." }
                ].map((item, i) => (
                  <div key={i}>
                    <h4 className="font-black uppercase text-sm mb-2">{item.t}</h4>
                    <p className="text-xs font-medium text-charcoal/40 leading-relaxed">{item.d}</p>
                  </div>
                ))}
             </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
             <div className="aspect-square rounded-[32px] overflow-hidden shadow-xl border-4 border-white">
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80" alt="Advocacy" className="w-full h-full object-cover grayscale" />
             </div>
             <div className="aspect-square rounded-[32px] overflow-hidden shadow-xl border-4 border-white translate-y-8">
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80" alt="Advocacy" className="w-full h-full object-cover grayscale" />
             </div>
          </div>
        </div>
      </section>

      {/* Programme Modal - Refined Scale */}
      {selectedProg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-[#1d0b14]/95 backdrop-blur-xl" onClick={() => setSelectedProg(null)}></div>
          <div className="bg-white rounded-[40px] max-w-xl w-full relative z-10 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-500 border border-white/10">
            <button onClick={() => setSelectedProg(null)} className="absolute top-8 right-8 w-10 h-10 bg-warm rounded-full flex items-center justify-center hover:bg-brand hover:text-white transition-editorial z-20">
              <X size={20} />
            </button>
            <div className="p-10 md:p-12">
               <div className="w-12 h-1 bg-brand mb-8"></div>
               <p className="text-brand font-black tracking-[0.3em] uppercase text-[9px] mb-4">{selectedProg.stage}</p>
               <h3 className="text-2xl md:text-3xl font-black uppercase font-heading leading-tight mb-8">{selectedProg.title}</h3>
               <p className="text-xl text-charcoal/40 italic font-medium leading-relaxed mb-8">
                  "{selectedProg.desc}"
               </p>
               <p className="text-base text-charcoal/70 leading-relaxed font-medium mb-12">
                  {selectedProg.details}
               </p>
               <button className="w-full bg-brand text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-charcoal transition-editorial shadow-2xl">
                 APPLY NOW
               </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
