import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { MapPin, ArrowRight, Calendar, Users, FileText, Image as ImageIcon } from 'lucide-react'

const conferencesData = [
  { year: "2025", theme: "Future for All: Leveraging Innovation", location: "Cape Town, ZA", img: "photo-1540317580384-e5d43867caa6" },
  { year: "2024", theme: "Empowerment through Enterprise", location: "Cape Town, ZA", img: "photo-1556761175-5973dc0f32d7" },
  { year: "2023", theme: "Leveraging the AfCFTA", location: "Kigali, RW", img: "photo-1573164574572-cb89e39749b4" },
  { year: "2022", theme: "Advancing Africa: Gender Integration", location: "Cairo, EG", img: "photo-1551818255-e6e10975bc17" },
]

export default function PastConferences() {
  const [filter, setFilter] = useState('All')

  return (
    <div className="min-h-screen font-body text-charcoal bg-cream overflow-x-hidden">
      <Navbar activePage="past-conferences" />

      {/* Editorial Header */}
      <header className="pt-48 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto text-center relative">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-[15rem] md:text-[25rem] font-black text-brand/5 select-none pointer-events-none uppercase tracking-tighter">
          Archive
        </div>
        <p className="text-brand font-black tracking-[0.4em] uppercase text-xs mb-8 relative z-10">Historical Legacy</p>
        <h1 className="text-5xl md:text-[8rem] font-black uppercase font-heading leading-[0.85] tracking-tighter mb-12 relative z-10">
          The <span className="text-brand">Timeline</span>
        </h1>
        <p className="text-xl text-charcoal/60 max-w-2xl mx-auto font-medium leading-relaxed relative z-10">
          A retrospective of global summits that have shaped the African female economic landscape since 2017.
        </p>
      </header>

      {/* Editorial Filter */}
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-[1400px] mx-auto flex flex-wrap justify-center gap-4">
           {['All', '2025', '2024', '2023', '2022', '2021', 'Older'].map(y => (
             <button key={y} onClick={() => setFilter(y)} className={`px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-editorial ${filter === y ? 'bg-brand text-white' : 'bg-white border border-charcoal/5 hover:bg-charcoal/5'}`}>
               {y}
             </button>
           ))}
        </div>
      </section>

      {/* Archive Gallery */}
      <section className="section-spacing px-6 md:px-12 bg-white rounded-t-[60px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="editorial-grid">
            {conferencesData.map((conf, i) => (
              <div key={i} className={`col-span-12 group cursor-pointer border-b border-charcoal/5 py-24 first:pt-0 last:border-none`}>
                <div className="editorial-grid items-center gap-12 md:gap-24">
                  <div className="col-span-12 md:col-span-1">
                    <span className="text-5xl md:text-7xl font-black text-charcoal/10 group-hover:text-brand transition-editorial font-heading">
                      {conf.year}
                    </span>
                  </div>
                  
                  <div className="col-span-12 md:col-span-6">
                    <div className="flex items-center gap-4 text-brand font-black tracking-widest text-[10px] uppercase mb-6">
                       <MapPin size={14}/> {conf.location}
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black uppercase font-heading leading-tight group-hover:text-brand transition-editorial mb-8">
                      {conf.theme}
                    </h2>
                    <div className="flex flex-wrap gap-8">
                       {[
                         { icon: Users, label: "Speakers" },
                         { icon: FileText, label: "Report" },
                         { icon: ImageIcon, label: "Gallery" }
                       ].map((action, j) => (
                         <div key={j} className="flex items-center gap-2 group/action cursor-pointer">
                            <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center group-hover/action:bg-brand group-hover/action:text-white transition-editorial">
                              <action.icon size={16}/>
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-charcoal/40 group-hover/action:text-charcoal transition-editorial">
                              {action.label}
                            </span>
                         </div>
                       ))}
                    </div>
                  </div>

                  <div className="col-span-12 md:col-span-5 relative">
                    <div className="rounded-[40px] overflow-hidden aspect-[4/3] shadow-2xl relative">
                      <img src={`https://images.unsplash.com/${conf.img}?w=1000&q=80`} alt={conf.theme} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-editorial"></div>
                      <div className="absolute bottom-8 right-8">
                         <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-editorial duration-500 shadow-2xl">
                           <ArrowRight size={24}/>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-charcoal text-white text-center px-6">
        <p className="text-brand font-black tracking-[0.4em] uppercase text-xs mb-8 italic">The Next Chapter</p>
        <h2 className="text-5xl md:text-8xl font-black uppercase font-heading leading-none tracking-tighter mb-12">
          Join Us in <br/> <span className="text-brand">2026</span>
        </h2>
        <a href="/purchase-conference-tickets" className="inline-block bg-white text-charcoal px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-brand hover:text-white transition-editorial shadow-2xl">
          SECURE YOUR PLACE
        </a>
      </section>

      <Footer />
    </div>
  )
}
