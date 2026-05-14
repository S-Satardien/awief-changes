import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { 
  Globe, Users, Play, Award, ArrowRight, Video, 
  Calendar, Sparkles, ChevronRight, Target, TrendingUp 
} from 'lucide-react'

export default function OurImpact() {
  return (
    <div className="min-h-screen font-body text-charcoal bg-warm overflow-x-hidden">
      <Navbar activePage="our-impact" />

      {/* Hero Section - Synchronized Brand Identity */}
      <section className="relative bg-brand pt-40 pb-48 px-8 overflow-hidden text-center">
        <div className="african-pattern absolute inset-0 opacity-20 scale-150 rotate-12 brightness-200"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand/50 z-10 pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto relative z-20">
          <p className="text-gold text-xs font-black tracking-[0.3em] uppercase mb-8 flex items-center justify-center gap-4">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            Measuring Our Success
            <span className="w-2 h-2 rounded-full bg-gold"></span>
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-10 uppercase font-heading">
            Our <span className="text-gold italic serif normal-case">Impact</span>
          </h1>
          <p className="text-white/80 text-xl leading-relaxed mb-0 max-w-2xl mx-auto italic font-medium">
            We measure our success not just in numbers, but in the glass ceilings shattered, the communities uplifted, and the thriving enterprises built by African women.
          </p>
        </div>
      </section>

      {/* The Core Metrics - High Impact Panel */}
      <section className="px-6 md:px-12 -mt-24 relative z-30 max-w-[1400px] mx-auto mb-32">
        <div className="bg-brand border border-white/20 p-12 md:p-20 rounded-[48px] shadow-2xl relative overflow-hidden">
          <div className="african-pattern absolute inset-0 opacity-30 brightness-200 scale-150 rotate-12"></div>
          
          <div className="grid md:grid-cols-3 gap-16 text-center relative z-10">
            {/* Metric 1 */}
            <div className="flex flex-col items-center group">
              <div className="text-7xl md:text-8xl font-black text-gold mb-6 font-heading tracking-tighter group-hover:scale-110 transition-editorial">
                1M<span className="text-4xl text-white/20">+</span>
              </div>
              <h3 className="text-white font-black text-xl uppercase font-heading mb-4 tracking-tight">Individuals Reached</h3>
              <p className="text-white/80 text-sm font-medium leading-relaxed max-w-xs italic">
                Engaged and inspired through the Annual AWIEF Conference, digital platforms, and pan-African networking events.
              </p>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col items-center relative group">
              {/* Vertical Dividers */}
              <div className="hidden md:block absolute left-[-2rem] top-1/2 -translate-y-1/2 w-px h-32 bg-white/10"></div>
              <div className="hidden md:block absolute right-[-2rem] top-1/2 -translate-y-1/2 w-px h-32 bg-white/10"></div>
              
              <div className="text-7xl md:text-8xl font-black text-gold mb-6 font-heading tracking-tighter group-hover:scale-110 transition-editorial">
                6,000<span className="text-4xl text-white/20">+</span>
              </div>
              <h3 className="text-white font-black text-xl uppercase font-heading mb-4 tracking-tight">Entrepreneurs Trained</h3>
              <p className="text-white/80 text-sm font-medium leading-relaxed max-w-xs italic">
                Actively mentored and scaled through comprehensive AWIEF enterprise development and capacity-building programmes.
              </p>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col items-center group">
              <div className="text-7xl md:text-8xl font-black text-gold mb-6 font-heading tracking-tighter group-hover:scale-110 transition-editorial">
                60<span className="text-4xl text-white/20">+</span>
              </div>
              <h3 className="text-white font-black text-xl uppercase font-heading mb-4 tracking-tight">Leaders Recognised</h3>
              <p className="text-white/80 text-sm font-medium leading-relaxed max-w-xs italic">
                Outstanding women founders and entrepreneurs celebrated on the global stage through the prestigious AWIEF Awards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories - Video Editorial Spread */}
      <section className="py-24 px-8 bg-white relative overflow-hidden border-y border-charcoal/5">
        <div className="african-pattern absolute inset-0 opacity-[0.02] brightness-0"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <p className="text-brand text-[10px] font-black tracking-[0.4em] uppercase mb-6">Real Voices</p>
              <h2 className="text-5xl md:text-7xl font-black text-charcoal mb-8 uppercase font-heading tracking-tighter leading-[0.9]">
                Hear from the <br/> <span className="text-brand italic serif normal-case">Women Leading</span> the Charge
              </h2>
              <p className="text-charcoal/50 text-xl font-medium italic border-l-4 border-brand pl-8 max-w-xl">
                Discover the real-world impact of the AWIEF network through the voices of the resilient founders who are transforming their communities.
              </p>
            </div>
            <a href="https://www.youtube.com/watch?v=qg1mfSal_Eg" target="_blank" rel="noopener noreferrer" className="bg-charcoal text-white px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-brand transition-editorial shadow-2xl flex items-center gap-4 shrink-0">
               <Play size={18} fill="currentColor" /> Watch All Stories
            </a>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { 
                name: "Kedibone Tsiloane", 
                role: "Founder, Ramtsilo Manufacturing", 
                img: "photo-1573497019940-1c28c88b4f3e" 
              },
              { 
                name: "Aletha Sphere", 
                role: "Early Childhood Development Advocate", 
                img: "photo-1589156191108-c7ea6f28f97b" 
              },
              { 
                name: "Michelle Lyle", 
                role: "Learning Experience Designer & Developer", 
                img: "photo-1531123897727-8f129e1688ce" 
              }
            ].map((story, i) => (
              <a href="https://www.youtube.com/watch?v=qg1mfSal_Eg" target="_blank" rel="noopener noreferrer" key={i} className="group cursor-pointer">
                <div className="relative aspect-video rounded-[40px] overflow-hidden mb-8 shadow-xl border-4 border-white group-hover:border-brand/20 transition-editorial duration-700">
                  <img src={`https://images.unsplash.com/${story.img}?w=800&q=80`} alt={story.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000 scale-110 group-hover:scale-100"/>
                  <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-transparent transition-editorial duration-700"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-editorial transform translate-y-4 group-hover:translate-y-0">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-brand shadow-2xl scale-90 group-hover:scale-100 transition-editorial pl-1">
                      <Play size={32} fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute top-6 left-6 bg-gold text-charcoal text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest flex items-center gap-2 shadow-lg">
                    <Video size={14} /> Watch Story
                  </div>
                </div>
                <h3 className="text-2xl font-black text-charcoal mb-2 uppercase font-heading group-hover:text-brand transition-editorial">{story.name}</h3>
                <p className="text-brand font-black tracking-widest text-[10px] uppercase italic">{story.role}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* AWIEF Awards Showcase - Feature Spread */}
      <section className="py-32 px-8 max-w-[1400px] mx-auto">
        <div className="bg-brand rounded-[64px] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-2xl relative border border-white/20">
          <div className="african-pattern absolute inset-0 opacity-30 scale-150 rotate-12 brightness-200"></div>
          
          <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-auto order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1561489396-888724a1543d?w=1200&q=80" 
              alt="AWIEF Awards Celebration" 
              className="w-full h-full object-cover absolute inset-0 grayscale opacity-40"
            />
            <div className="absolute inset-0 bg-gold/20 mix-blend-multiply"></div>
            <div className="absolute bottom-12 left-12 z-20">
               <div className="bg-gold text-brand p-10 rounded-full shadow-2xl rotate-12 border-4 border-white animate-float">
                  <Award size={48} />
               </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-12 md:p-24 relative z-20 flex flex-col justify-center bg-brand order-1 lg:order-2">
            <p className="text-gold text-[10px] font-black tracking-[0.4em] uppercase mb-8">Excellence Unlocked</p>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase font-heading">
              Celebrating <br/> <span className="text-gold italic serif normal-case">The Visionaries</span>
            </h2>
            <p className="text-white/80 text-xl leading-relaxed mb-12 italic font-medium">
              The AWIEF Awards honour and celebrate the remarkable achievements of women entrepreneurs and business owners across Africa.
            </p>
            <div className="bg-white/10 border border-white/20 p-10 rounded-[40px] backdrop-blur-xl mb-12">
               <p className="text-white/80 text-lg leading-relaxed mb-0">
                 With over <strong className="text-gold font-black">60 past winners</strong>, these prestigious awards spotlight the ingenuity, resilience, and economic contributions of women in diverse sectors from Agri-Tech to Creative Industries.
               </p>
            </div>
            <div>
              <a href="/past-awards" className="inline-flex items-center gap-6 bg-white text-charcoal px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-gold hover:text-white transition-editorial shadow-2xl">
                VIEW PAST WINNERS <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Retrospective Gallery - Kinetic Layout */}
      <section className="py-32 px-8 bg-warm relative overflow-hidden">
        <div className="african-pattern absolute inset-0 opacity-[0.03] scale-150 brightness-0"></div>
        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <p className="text-brand text-[10px] font-black tracking-[0.4em] uppercase mb-8">A Decade of Change</p>
          <h2 className="text-5xl md:text-7xl font-black text-charcoal mb-10 uppercase font-heading leading-[0.9] tracking-tighter">
            Reflecting on <br/> <span className="text-brand">AWIEF 2025</span>
          </h2>
          <p className="text-charcoal/50 text-xl max-w-3xl mx-auto mb-20 italic font-medium">
            Last year, we convened the brightest minds, global policymakers, and ambitious founders. The conversations sparked have led to transformative policy recommendations across the continent.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
             {[
               { id: "qg1mfSal_Eg", title: "Conference Day 1 Highlights", year: "2025", img: "photo-1540317580384-e5d43867caa6" },
               { id: "qg1mfSal_Eg", title: "Conference Day 2 Highlights", year: "2025", img: "photo-1556761175-5973dc0f32d7" },
               { id: "qg1mfSal_Eg", title: "AWIEF Awards Highlights", year: "2025", img: "photo-1573164574572-cb89e39749b4" }
             ].map((video, i) => (
               <div key={i} className="group">
                  <a 
                    href={`https://www.youtube.com/watch?v=${video.id}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group relative aspect-video rounded-[32px] overflow-hidden shadow-xl border-4 border-white hover:border-brand/20 transition-editorial duration-700 block mb-6"
                  >
                      <img src={`https://images.unsplash.com/${video.img}?w=800&q=80`} alt={video.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-editorial duration-1000" />
                      <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-transparent transition-editorial duration-700"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand shadow-2xl scale-90 group-hover:scale-100 transition-editorial pl-1">
                          <Play size={24} fill="currentColor" />
                        </div>
                      </div>
                  </a>
                  <div className="text-center">
                    <p className="text-brand font-black text-[10px] uppercase tracking-[0.3em] mb-1 italic">{video.year} HIGHLIGHTS</p>
                    <h4 className="text-charcoal font-black text-lg uppercase font-heading tracking-tight group-hover:text-brand transition-editorial">{video.title}</h4>
                  </div>
               </div>
             ))}
          </div>

          <a href="/past-conferences" className="text-charcoal font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:text-brand transition-editorial group">
            Explore the 2025 Retrospective <ChevronRight size={18} className="group-hover:translate-x-2 transition-editorial" />
          </a>
        </div>
      </section>

      {/* Latest News - Editorial Grid */}
      <section className="py-32 px-8 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <p className="text-brand text-[10px] font-black tracking-[0.4em] uppercase mb-6">Industry Intelligence</p>
            <h2 className="text-5xl font-black text-charcoal uppercase font-heading tracking-tighter leading-none">Latest News <br/> <span className="text-brand">& Insights</span></h2>
          </div>
          <a href="/news" className="text-charcoal/40 font-black hover:text-brand flex items-center gap-4 text-[10px] uppercase tracking-widest transition-editorial">
            View Newsroom <ArrowRight size={18}/>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              date: "April 15, 2026",
              title: "New Pan-African Funding Initiative Announced for Tech Startups",
              desc: "In partnership with leading institutional investors, AWIEF launches a dedicated fund targeting female-led technology innovations.",
              img: "photo-1573164713988-8665fc963095"
            },
            {
              date: "March 22, 2026",
              title: "Policy Shifts: Advocating for Better Cross-Border Trade",
              desc: "A detailed look into AWIEF's latest report presented to the African Union on easing trade restrictions for SMEs.",
              img: "photo-1557804506-669a67965ba0"
            },
            {
              date: "February 10, 2026",
              title: "Masterclass Series: Bridging the Digital Divide",
              desc: "Over 500 women successfully complete the Q1 digital skills intensive, equipping them for the e-commerce economy.",
              img: "photo-1516321318423-f06f85e504b3"
            }
          ].map((news, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[16/10] rounded-[40px] overflow-hidden mb-8 shadow-lg border-2 border-white group-hover:border-brand/20 transition-editorial duration-700">
                <img src={`https://images.unsplash.com/${news.img}?w=800&q=80`} alt={news.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000 scale-110 group-hover:scale-100"/>
              </div>
              <div className="flex items-center gap-3 text-[9px] font-black text-brand mb-4 uppercase tracking-[0.2em] italic">
                <Calendar size={14} /> {news.date}
              </div>
              <h3 className="font-black text-2xl text-charcoal mb-4 leading-tight uppercase font-heading group-hover:text-brand transition-editorial">{news.title}</h3>
              <p className="text-charcoal/50 text-sm mb-8 line-clamp-2 font-medium italic">{news.desc}</p>
              <div className="text-gold font-black text-[10px] uppercase tracking-widest flex items-center gap-3 group-hover:text-brand transition-editorial">
                Read Article <ChevronRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </section>



      <Footer />
    </div>
  )
}
