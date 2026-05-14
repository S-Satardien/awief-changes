import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ArrowRight, Play, Globe, Sparkles, Calendar, FileText, Users, BookOpen, Quote } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen font-body text-charcoal bg-cream overflow-x-hidden">
      <Navbar activePage="home" />
      
      {/* Hero Section - Elevated to Brand Berry Identity */}
      <section className="relative bg-brand pt-24 pb-24 px-8 overflow-hidden">
        {/* Video Background Implementation */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-brand/60 z-10"></div>
          <iframe 
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none grayscale opacity-40"
            src="https://www.youtube.com/embed/qg1mfSal_Eg?autoplay=1&mute=1&controls=0&loop=1&playlist=qg1mfSal_Eg&showinfo=0&rel=0&modestbranding=1"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-20 pt-32 md:pt-20">
          <div className="max-w-4xl text-center md:text-left mx-auto md:mx-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-10 uppercase font-heading">
              Empowering Women <br />
              to Shape the <br />
              <span className="text-gold">
                Global Economy
              </span>
            </h1>

            {/* UN ECOSOC Consultative Status Badge - Kept in original position */}
            <div className="bg-white/5 backdrop-blur-md border border-gold/30 rounded-xl p-5 mb-6 max-w-xl mx-auto md:mx-0 flex items-center justify-between group hover:border-gold transition-editorial">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border-2 border-gold/60 rounded-full flex items-center justify-center">
                  <Globe className="text-gold" size={20} />
                </div>
                <div className="text-left">
                  <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-1">UN ECOSOC Consultative Status</h3>
                  <p className="text-white/40 text-xs">Accredited Since 2023 - United Nations Economic and Social Council</p>
                </div>
              </div>
              <div className="border border-gold/50 rounded-md px-3 py-1.5 text-gold text-xs font-bold tracking-wider shrink-0">
                2023
              </div>
            </div>

            <p className="text-white/40 text-xs flex items-center justify-center md:justify-start gap-2 mb-10">
               <span className="flex gap-1">
                 <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center"><Sparkles size={10}/></div>
                 <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center"><Globe size={10}/></div>
                 <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center"><Users size={10}/></div>
               </span>
               Highest UN Advisory Accreditation for Civil Society Organizations
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a href="/purchase-conference-tickets" className="bg-gradient-to-r from-brand-dark to-brand text-white px-8 py-3.5 rounded font-bold hover:opacity-90 transition-opacity flex items-center gap-2 text-sm shadow-lg">
                Register for Conference
                <ArrowRight size={16} />
              </a>
              <a href="https://www.youtube.com/watch?v=qg1mfSal_Eg" target="_blank" rel="noopener noreferrer" className="border border-white/60 text-white px-8 py-3.5 rounded font-bold hover:bg-white/10 transition-colors flex items-center gap-2 text-sm">
                <Play size={16} className="fill-current" />
                Watch Our Story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Refined Description Section */}
      <section className="bg-white py-24 px-8 relative overflow-hidden">
        <div className="african-pattern absolute inset-0 opacity-[0.03] pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <p className="text-xl md:text-3xl lg:text-4xl font-bold leading-[1.4] text-charcoal max-w-none md:text-left">
            Africa Women Innovation and Entrepreneurship Forum is a 
            non-profit, <span className="bg-brand text-white px-3 py-1 rounded-lg inline-block transition-all hover:scale-105 hover:shadow-xl cursor-default mx-1">award-winning</span> 
            pan-African organization dedicated to <span className="bg-brand text-white px-4 py-1 rounded-lg inline-block transition-all hover:scale-105 hover:shadow-xl cursor-default mx-1">women's economic empowerment</span>.
          </p>
        </div>
      </section>

      {/* Asymmetrical Action Section */}
      <section className="section-spacing px-6 md:px-12 bg-white mt-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div className="max-w-2xl">
              <p className="text-brand font-black tracking-[0.3em] uppercase text-xs mb-4">Our Ecosystem</p>
              <h2 className="text-4xl md:text-6xl font-black uppercase font-heading leading-[0.9] tracking-tighter">
                Accelerating <br/> Impact at <span className="text-brand">Scale</span>
              </h2>
            </div>
            <p className="text-charcoal/50 font-bold text-sm max-w-sm md:text-right">
              Join a movement that spans 48 African nations, providing direct access to mentorship, capital, and markets.
            </p>
          </div>            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Calendar, title: "Summits", label: "Attend", desc: "Connect with global leaders and influencers at our flagship events and summits.", bg: "bg-brand/5", link: "/purchase-conference-tickets" },
              { icon: FileText, title: "Programmes", label: "Apply", desc: "Access mentorship, training, and resources through our tailored accelerator and development programs.", bg: "bg-berry/5", link: "/what-we-do#programmes" },
              { icon: Users, title: "Partnerships", label: "Partner", desc: "Collaborate with forward-thinking organizations to drive real systemic change.", bg: "bg-charcoal/5", link: "/get-involved#corporate-partner" },
              { icon: BookOpen, title: "Resources", label: "Learn", desc: "Access our exclusive database of reports, training, and research on women's empowerment.", bg: "bg-brand-light/5", link: "/what-we-do#advocacy" },
            ].map((item, i) => (
              <a href={item.link} key={i} className={`p-10 rounded-[32px] ${item.bg} group hover:bg-brand transition-editorial h-auto flex flex-col justify-between cursor-pointer border border-transparent hover:shadow-2xl`}>
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-brand shadow-sm group-hover:scale-110 transition-editorial mb-8">
                    <item.icon size={32} strokeWidth={1.5} />
                  </div>
                  <p className="text-[10px] font-black tracking-widest uppercase mb-2 group-hover:text-white/70">{item.label}</p>
                  <h3 className="text-3xl font-black uppercase font-heading group-hover:text-white mb-4">{item.title}</h3>
                  <p className="text-charcoal/50 text-sm font-medium leading-relaxed group-hover:text-white/70 transition-editorial">{item.desc}</p>
                </div>
                <div className="mt-8 text-brand font-black tracking-widest text-[10px] uppercase group-hover:text-white transition-editorial flex items-center gap-2">
                   Explore <ArrowRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. STRATEGIC PARTNERSHIPS - Redesigned Editorial Section */}
      <section className="section-spacing px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
           <div className="editorial-grid items-center gap-24">
              <div className="col-span-12 lg:col-span-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/40 bg-brand/10 backdrop-blur mb-5">
                    <Users size={14} className="text-brand"/>
                    <span className="text-brand text-[9px] font-black tracking-[0.3em] uppercase">The Partnership Opportunity</span>
                 </div>
                 <h2 className="text-4xl md:text-6xl font-black uppercase font-heading leading-[0.9] tracking-tighter mb-5">
                    Invest in Africa's Most <br/> <span className="text-brand italic serif normal-case">Impactful</span> Women's Platform
                 </h2>
                 <p className="text-xl text-charcoal/60 leading-relaxed font-medium mb-6 italic border-l-8 border-brand pl-12">
                    Join a growing ecosystem of forward-thinking organizations driving real systemic change. Our partners gain unparalleled access to Africa's most influential women's network — from boardrooms to grassroots communities across 48 countries.
                 </p>
                 
                 <div className="space-y-8 mb-8">
                    {[
                      "Access 150+ partners across 50 countries in our strategic network",
                      "Brand presence at flagship UN-side events and the Annual AWIEF Conference",
                      "Co-create programmes with measurable social and economic impact outcomes"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 items-start group">
                         <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-editorial border border-brand/20">
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-editorial" />
                         </div>
                         <p className="text-sm font-bold uppercase tracking-widest text-charcoal/60 leading-relaxed group-hover:text-charcoal transition-editorial">{item}</p>
                      </div>
                    ))}
                 </div>

                 <a href="/get-involved" className="inline-flex items-center gap-6 bg-charcoal text-white px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-brand transition-editorial shadow-2xl">
                    EXPLORE PARTNERSHIP OPPORTUNITIES <ArrowRight size={18} />
                 </a>
              </div>
              <div className="col-span-12 lg:col-span-6">
                 <div className="relative aspect-square rounded-[64px] overflow-hidden shadow-2xl group border-4 border-white/40">
                    <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=1000&q=80" alt="Strategic Partnership" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000 scale-110 group-hover:scale-100" />
                    <div className="absolute inset-0 bg-brand/20 group-hover:bg-transparent transition-editorial"></div>
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold rounded-full flex flex-col items-center justify-center text-white text-center p-8 rotate-12 shadow-2xl border-4 border-white hidden md:flex">
                       <Sparkles size={40} className="mb-4" />
                       <p className="text-[10px] font-black uppercase tracking-widest">Co-Create for Systemic Change</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Redesigned Multi-Testimonial Section with Visible Patterned Background - Main Brand Color */}
      <section className="section-spacing relative bg-brand overflow-hidden rounded-[60px] my-12 mx-6 md:mx-12">
        <div className="african-pattern absolute inset-0 opacity-20 scale-150 pointer-events-none brightness-200 contrast-200"></div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
           <div className="text-center mb-12">
              <p className="text-gold font-black tracking-[0.4em] uppercase text-[10px] mb-4">Voice of the Ecosystem</p>
              <h2 className="text-4xl md:text-6xl font-black uppercase font-heading text-white">Impact <span className="text-gold italic serif normal-case">Stories</span></h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  q: "AWIEF gave me the tools, the network, and the courage to scale beyond borders. We are stronger together.",
                  n: "Sarah Adebayo",
                  t: "CEO, InnovateAfrica",
                  i: "photo-1531123897727-8f129e1688ce"
                },
                {
                  q: "The mentorship I received transformed my approach to tech innovation. AWIEF is a catalyst for African founders.",
                  n: "Fatima Yusuf",
                  t: "Founder, GreenTech Nigeria",
                  i: "photo-1573496359142-b8d87734a5a2"
                },
                {
                  q: "Being part of this pan-African network opened doors to global markets that I never thought possible.",
                  n: "Elena Mensah",
                  t: "Director, Accra Logistics",
                  i: "photo-1567532939604-b6b5b0ad2604"
                }
              ].map((item, idx) => (
                <div key={idx} className="glass-panel p-10 rounded-[48px] border border-white/10 hover:border-gold transition-editorial group">
                   <div className="flex gap-1 mb-8">
                      {[1,2,3,4,5].map(s => <Sparkles key={s} size={14} className="text-gold" />)}
                   </div>
                   <p className="text-xl text-white font-medium italic leading-relaxed mb-10 group-hover:text-gold transition-editorial">
                     "{item.q}"
                   </p>
                   <div className="flex items-center gap-6 pt-8 border-t border-white/5">
                      <img src={`https://images.unsplash.com/${item.i}?w=100&h=100&fit=crop`} alt={item.n} className="w-16 h-16 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-editorial shadow-xl" />
                      <div>
                         <h4 className="text-white font-black uppercase font-heading text-sm">{item.n}</h4>
                         <p className="text-white/40 font-black text-[9px] tracking-widest uppercase">{item.t}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="section-spacing px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-8">
            <div className="max-w-xl">
               <p className="text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-4">The Perspective</p>
               <h2 className="text-4xl md:text-7xl font-black uppercase font-heading leading-[0.85] tracking-tighter">
                 Latest <span className="text-brand">Insights</span>
               </h2>
            </div>
            <a href="/news" className="text-xs font-black uppercase tracking-widest border-b-2 border-brand pb-2 hover:text-brand transition-editorial">View All Press</a>
          </div>

          <div className="editorial-grid">
             {[
               { t: "AWIEF & Victoria's Secret Launch Nigeria Accelerator", c: "Partnerships", i: "photo-1573164713988-8665fc963095" },
               { t: "Building the Green Economy in South Africa", c: "Impact", i: "photo-1557804506-669a67965ba0" },
               { t: "The Future of Digital Trade for Women SMEs", c: "Advocacy", i: "photo-1573497019940-1c28c88b4f3e" }
             ].map((news, idx) => (
               <a href="/news" key={idx} className="col-span-12 lg:col-span-4 group cursor-pointer">
                  <div className="aspect-[16/9] rounded-[32px] overflow-hidden mb-8 shadow-xl">
                     <img src={`https://images.unsplash.com/${news.i}?w=600&q=80`} alt={news.t} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-700" />
                  </div>
                  <p className="text-brand font-black tracking-widest text-[9px] uppercase mb-4">{news.c}</p>
                  <h4 className="text-2xl font-black uppercase font-heading leading-tight group-hover:text-brand transition-editorial">{news.t}</h4>
               </a>
             ))}
          </div>
        </div>
      </section>

      {/* Final Editorial Call to Action */}
      <section className="section-spacing px-6 md:px-12 text-center relative overflow-hidden bg-cream">
        <div className="absolute inset-0 text-[20rem] font-black text-brand/5 flex items-center justify-center uppercase pointer-events-none -z-10 tracking-tighter">
          IMPACT
        </div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black uppercase font-heading mb-6 leading-[0.85] tracking-tighter">
            Join the <br/> <span className="text-brand">Movement</span>
          </h2>
          <p className="text-xl text-charcoal/60 mb-6 font-medium max-w-xl mx-auto leading-relaxed">
            Nurture your ambitions. Partner, learn, or invest with us to uplift the next generation of visionary African women.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/get-involved" className="bg-charcoal text-white px-12 py-5 rounded-full font-black tracking-widest text-xs hover:bg-brand transition-editorial shadow-2xl">
              GET INVOLVED
            </a>
            <a href="/about" className="border-2 border-charcoal text-charcoal px-12 py-5 rounded-full font-black tracking-widest text-xs hover:bg-charcoal hover:text-white transition-editorial">
              LEARN MORE
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
