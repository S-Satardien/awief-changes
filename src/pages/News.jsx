import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ArrowRight, Calendar, X, Search, Mail, MoveRight } from 'lucide-react'

const featured = {
  id: 'featured', category: "Partnerships", date: "April 28, 2026",
  title: "AWIEF and Victoria's Secret & Co. Partner to Launch Growth Accelerator",
  excerpt: "A groundbreaking collaboration to launch a high-impact investment readiness programme for female-led businesses.",
  content: "In a groundbreaking collaboration, AWIEF has joined forces with Victoria's Secret & Co. through The Tour Impact Fund to launch a high-impact investment readiness programme for innovative, growth-stage female-led businesses in Nigeria.\n\nThe AWIEF Growth Accelerator in Nigeria is designed to provide targeted capacity building, mentorship, and access to funding networks for women who are ready to scale their enterprises.",
  img: "photo-1573164713988-8665fc963095"
}

const newsData = [
  { id: 1, category: "Partnerships", date: "March 12, 2026", title: "AWIEF signs strategic cooperation agreement with China's Qingdao", excerpt: "Formalizing a landmark partnership to foster cross-border trade and investment.", img: "photo-1557804506-669a67965ba0" },
  { id: 2, category: "Insights", date: "Feb 22, 2026", title: "What it takes to actually back African women founders.", excerpt: "A deep dive into the tangible steps required for financial backing.", img: "photo-1573497019940-1c28c88b4f3e" },
  { id: 3, category: "Announcements", date: "Jan 15, 2026", title: "AWIEF appoints Advisory Board to drive phase of growth", excerpt: "Global leaders to steer its strategic direction for the next decade.", img: "photo-1531123897727-8f129e1688ce" },
  { id: 4, category: "Events", date: "Jan 10, 2026", title: "AWIEF 2026 Summit Venue Confirmed in Cape Town", excerpt: "The prestigious Cape Town International Convention Centre will host the 2026 summit.", img: "photo-1540317580384-e5d43867caa6" },
]

export default function News() {
  const [article, setArticle] = useState(null)
  const [filter, setFilter] = useState('All')

  return (
    <div className="min-h-screen font-body text-charcoal bg-cream overflow-x-hidden">
      <Navbar activePage="news" />

      {/* Editorial Magazine Hero - High Visibility Berry Entrance */}
      <header className="relative bg-brand pt-56 pb-32 px-6 md:px-12 overflow-hidden">
        <div className="african-pattern absolute inset-0 opacity-30 scale-150 rotate-12 brightness-200"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/50 to-brand z-10 pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto relative z-20">
          <div className="editorial-grid items-start gap-16">
            <div className="col-span-12 lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/40 bg-gold/10 backdrop-blur mb-8">
                <Search size={14} className="text-gold"/>
                <span className="text-gold text-[9px] font-black tracking-[0.3em] uppercase">Editorial Feed</span>
              </div>
              <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black uppercase font-heading leading-[0.8] tracking-tighter mb-16 text-white">
                News & <br/> <span className="text-gold italic serif normal-case">Insights</span>
              </h1>
              
              <div onClick={() => setArticle(featured)} className="group cursor-pointer">
                <div className="relative aspect-[16/9] rounded-[64px] overflow-hidden shadow-2xl mb-12 border-4 border-white/10 bg-charcoal">
                  <img src={`https://images.unsplash.com/${featured.img}?w=1200&q=80`} alt="Featured" className="w-full h-full object-cover transition-editorial duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-10 left-10 bg-gold text-brand px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg">
                     FEATURED STORY
                  </div>
                  <div className="absolute bottom-12 left-12 right-12 translate-y-8 group-hover:translate-y-0 transition-editorial duration-700">
                     <h2 className="text-3xl md:text-5xl font-black uppercase font-heading leading-[0.9] tracking-tight text-white mb-6">
                       {featured.title}
                     </h2>
                     <div className="flex items-center gap-4 text-gold font-black tracking-widest text-[10px] uppercase">
                       READ PERSPECTIVE <MoveRight size={18} className="group-hover:translate-x-2 transition-editorial" />
                     </div>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="col-span-12 lg:col-span-5 lg:pl-12">
              {/* The Digest - High Impact Berry */}
              <div className="p-12 bg-brand-dark rounded-[48px] text-white shadow-2xl relative overflow-hidden group border-2 border-white/10">
                 <div className="african-pattern absolute inset-0 opacity-20 group-hover:opacity-40 transition-editorial scale-150"></div>
                 <div className="absolute -right-16 -bottom-16 text-white/5 text-[15rem] font-black select-none rotate-12 group-hover:rotate-0 transition-editorial duration-1000">
                   @
                 </div>
                 <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-10 border border-gold/20">
                      <Mail size={32} />
                    </div>
                    <h3 className="text-3xl font-black uppercase font-heading mb-4 tracking-tight">The <span className="text-gold italic serif normal-case">Digest</span></h3>
                    <p className="text-white/40 text-sm font-black uppercase tracking-widest italic mb-10 leading-relaxed border-l-4 border-gold pl-6">
                      Receive weekly intelligence on African female entrepreneurship.
                    </p>
                    <div className="space-y-6">
                      <input type="email" placeholder="YOUR EMAIL ADDRESS" className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-6 text-[10px] font-black uppercase tracking-widest focus:outline-none focus:border-gold transition-editorial placeholder:text-white/20" />
                      <button className="w-full bg-gold text-brand py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white transition-editorial shadow-2xl">
                        SUBSCRIBE NOW
                      </button>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Asymmetrical Article Grid - White Editorial Spread */}
      <section className="py-40 px-6 md:px-12 bg-warm rounded-t-[60px] -mt-12 relative z-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Horizontal Theme Filter */}
          <div className="mb-24 flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-charcoal/5 pb-12">
            <div className="flex items-center gap-4">
              <div className="w-2 h-12 bg-gold"></div>
              <h3 className="text-xl font-black uppercase font-heading tracking-tight text-charcoal">
                Filter stories <br/> <span className="text-brand italic serif normal-case">according to theme</span>
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {['All', 'Partnerships', 'Insights', 'Announcements', 'Events'].map(f => (
                <button 
                  key={f} 
                  onClick={() => setFilter(f)} 
                  className={`px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-editorial border-2 ${
                    filter === f 
                    ? 'bg-brand text-white border-brand shadow-[0_20px_50px_rgba(127,61,89,0.3)] scale-105' 
                    : 'bg-white text-charcoal/30 border-charcoal/5 hover:border-brand hover:text-brand shadow-sm hover:scale-105'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="editorial-grid gap-16">
            {newsData.filter(a => filter === 'All' || a.category === filter).map((a, i) => (
              <div 
                key={a.id} 
                onClick={() => setArticle(a)}
                className={`col-span-12 md:col-span-6 lg:col-span-4 group cursor-pointer ${i % 3 === 1 ? 'lg:mt-32' : ''}`}
              >
                <div className="relative aspect-square rounded-[64px] overflow-hidden mb-10 shadow-xl border-4 border-white/20 bg-charcoal transition-editorial group-hover:border-brand/20">
                  <img src={`https://images.unsplash.com/${a.img}?w=800&q=80`} alt={a.title} className="w-full h-full object-cover transition-editorial duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-brand/20 group-hover:bg-transparent transition-editorial"></div>
                  <div className="absolute top-10 right-10">
                     <div className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-widest">
                       {a.category}
                     </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-brand font-black tracking-[0.3em] uppercase text-[9px] mb-6 border-l-2 border-gold pl-4">
                  <Calendar size={14} className="text-gold"/> {a.date}
                </div>
                <h3 className="text-3xl font-black uppercase font-heading leading-[1.1] tracking-tight group-hover:text-brand transition-editorial">
                  {a.title}
                </h3>
                <p className="text-charcoal/40 mt-6 font-medium leading-relaxed line-clamp-3 italic text-sm">
                  "{a.excerpt}"
                </p>
                <div className="mt-10 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-brand group-hover:gap-6 transition-editorial">
                   READ PERSPECTIVE <MoveRight size={18} className="group-hover:translate-x-2 transition-editorial text-gold" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal - Editorial Reader */}
      {article && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
          <div className="absolute inset-0 bg-charcoal/90 backdrop-blur-xl" onClick={() => setArticle(null)}></div>
          <div className="bg-white rounded-[40px] max-w-4xl w-full relative z-10 shadow-2xl overflow-y-auto max-h-[90vh] animate-in fade-in zoom-in duration-500">
            <button onClick={() => setArticle(null)} className="fixed top-8 right-8 w-12 h-12 bg-cream rounded-full flex items-center justify-center hover:bg-brand hover:text-white transition-editorial z-20 shadow-lg">
              <X size={24} />
            </button>
            <div className="p-10 md:p-20">
              <div className="flex items-center gap-4 text-brand font-black tracking-widest text-xs uppercase mb-8">
                 {article.category} — {article.date}
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase font-heading leading-tight mb-12">
                {article.title}
              </h2>
              <div className="rounded-[32px] overflow-hidden aspect-video mb-12 shadow-2xl">
                <img src={`https://images.unsplash.com/${article.img}?w=1200&q=80`} alt="Article" className="w-full h-full object-cover" />
              </div>
              <div className="prose prose-xl prose-charcoal max-w-none">
                <p className="text-xl text-charcoal/80 leading-relaxed font-medium">
                  {article.content || article.excerpt}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
