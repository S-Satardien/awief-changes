import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Award, Send, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react'

export default function Nominate() {
  const [formStatus, setFormStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    setTimeout(() => setFormStatus('success'), 1500)
  }

  return (
    <div className="min-h-screen font-body text-charcoal bg-cream overflow-x-hidden">
      <Navbar activePage="what-we-do" />

      {/* Hero Section */}
      <header className="relative bg-brand pt-56 pb-32 px-6 md:px-12 overflow-hidden text-center">
        <div className="african-pattern absolute inset-0 opacity-30 scale-150 rotate-12 brightness-200"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/50 to-brand z-10 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur mb-8">
            <Award size={14} className="text-gold"/>
            <span className="text-gold text-[11px] font-black tracking-[0.2em] uppercase">AWIEF Awards 2026</span>
          </div>
          <h1 className="text-6xl md:text-[8rem] font-black uppercase font-heading leading-[0.85] tracking-tighter mb-12 text-white">
            Submit a <span className="text-gold italic serif normal-case">Nomination</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium max-w-3xl mx-auto italic">
            Know a trailblazer who deserves global recognition? Nominate an outstanding African woman entrepreneur for the prestigious AWIEF Awards.
          </p>
        </div>
      </header>

      {/* Nomination Form Section */}
      <section className="py-32 px-6 md:px-12 bg-white rounded-t-[60px] -mt-12 relative z-20">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Info Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-12">
                <div>
                  <p className="text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-6 italic">Award Categories</p>
                  <div className="space-y-4">
                    {[
                      "Tech Entrepreneur",
                      "Agri Entrepreneur",
                      "Creative Industry",
                      "Social Entrepreneur",
                      "Young Entrepreneur",
                      "Lifetime Achievement"
                    ].map((cat, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className="w-6 h-6 rounded-full bg-brand/5 flex items-center justify-center border border-brand/10 group-hover:bg-brand group-hover:text-white transition-editorial">
                          <Sparkles size={10} className="text-brand group-hover:text-white" />
                        </div>
                        <span className="text-sm font-black uppercase tracking-widest text-charcoal/40 group-hover:text-charcoal transition-editorial">{cat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-10 bg-brand rounded-[40px] text-white relative overflow-hidden">
                  <div className="african-pattern absolute inset-0 opacity-10 scale-150"></div>
                  <div className="relative z-10">
                    <Award className="text-gold mb-6" size={32} />
                    <h4 className="text-xl font-black uppercase font-heading mb-4">Nominations Close</h4>
                    <p className="text-3xl font-black text-gold font-heading">August 31, 2026</p>
                    <p className="text-white/40 text-xs font-bold mt-4 italic">Winners announced at the AWIEF Conference Gala Dinner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <div className="bg-cream/30 p-10 md:p-16 rounded-[48px] border border-charcoal/5 shadow-xl">
                {formStatus === 'success' ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-brand/10 text-brand rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-4xl font-black uppercase font-heading mb-3 leading-none">Nomination Received</h3>
                    <p className="text-charcoal/40 text-lg font-medium max-w-sm mb-10 italic">
                      Thank you for your nomination. Our panel will review it shortly.
                    </p>
                    <button onClick={() => setFormStatus('idle')} className="bg-brand text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-charcoal transition-editorial shadow-xl">
                      SUBMIT ANOTHER
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="mb-10">
                      <h3 className="text-2xl font-black uppercase font-heading mb-3">Nomination Details</h3>
                      <p className="text-charcoal/40 font-medium italic border-l-2 border-brand pl-6 text-sm">
                        Please provide the nominee's details and a brief motivation.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="group relative">
                        <input required type="text" className="w-full bg-transparent border-b border-charcoal/10 py-3 focus:outline-none focus:border-brand transition-editorial text-lg font-medium placeholder-transparent peer" id="nomineeName" placeholder="Nominee Full Name" />
                        <label htmlFor="nomineeName" className="absolute left-0 top-3 text-charcoal/30 text-[10px] font-black uppercase tracking-widest transition-editorial peer-focus:-top-4 peer-focus:text-brand peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-brand">Nominee Full Name</label>
                      </div>
                      <div className="group relative">
                        <input required type="text" className="w-full bg-transparent border-b border-charcoal/10 py-3 focus:outline-none focus:border-brand transition-editorial text-lg font-medium placeholder-transparent peer" id="nomineeCompany" placeholder="Company / Organisation" />
                        <label htmlFor="nomineeCompany" className="absolute left-0 top-3 text-charcoal/30 text-[10px] font-black uppercase tracking-widest transition-editorial peer-focus:-top-4 peer-focus:text-brand peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-brand">Company / Organisation</label>
                      </div>
                    </div>

                    <div className="group relative">
                      <select required className="w-full bg-transparent border-b border-charcoal/10 py-3 focus:outline-none focus:border-brand transition-editorial text-lg font-medium text-charcoal/60 cursor-pointer appearance-none">
                        <option value="" disabled selected>Select Award Category</option>
                        <option value="tech">Tech Entrepreneur</option>
                        <option value="agri">Agri Entrepreneur</option>
                        <option value="creative">Creative Industry</option>
                        <option value="social">Social Entrepreneur</option>
                        <option value="young">Young Entrepreneur</option>
                        <option value="lifetime">Lifetime Achievement</option>
                      </select>
                    </div>

                    <div className="group relative">
                      <input required type="text" className="w-full bg-transparent border-b border-charcoal/10 py-3 focus:outline-none focus:border-brand transition-editorial text-lg font-medium placeholder-transparent peer" id="nomineeCountry" placeholder="Country" />
                      <label htmlFor="nomineeCountry" className="absolute left-0 top-3 text-charcoal/30 text-[10px] font-black uppercase tracking-widest transition-editorial peer-focus:-top-4 peer-focus:text-brand peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-brand">Country</label>
                    </div>

                    <div className="group relative">
                      <textarea required rows="4" className="w-full bg-transparent border-b border-charcoal/10 py-3 focus:outline-none focus:border-brand transition-editorial text-lg font-medium placeholder-transparent peer resize-none" id="motivation" placeholder="Motivation for Nomination"></textarea>
                      <label htmlFor="motivation" className="absolute left-0 top-3 text-charcoal/30 text-[10px] font-black uppercase tracking-widest transition-editorial peer-focus:-top-4 peer-focus:text-brand peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-brand">Motivation for Nomination</label>
                    </div>

                    <div className="border-t border-charcoal/5 pt-12">
                      <p className="text-brand font-black tracking-[0.3em] uppercase text-[10px] mb-6">Your Contact Details</p>
                      <div className="grid md:grid-cols-2 gap-12">
                        <div className="group relative">
                          <input required type="text" className="w-full bg-transparent border-b border-charcoal/10 py-3 focus:outline-none focus:border-brand transition-editorial text-lg font-medium placeholder-transparent peer" id="yourName" placeholder="Your Name" />
                          <label htmlFor="yourName" className="absolute left-0 top-3 text-charcoal/30 text-[10px] font-black uppercase tracking-widest transition-editorial peer-focus:-top-4 peer-focus:text-brand peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-brand">Your Name</label>
                        </div>
                        <div className="group relative">
                          <input required type="email" className="w-full bg-transparent border-b border-charcoal/10 py-3 focus:outline-none focus:border-brand transition-editorial text-lg font-medium placeholder-transparent peer" id="yourEmail" placeholder="Your Email" />
                          <label htmlFor="yourEmail" className="absolute left-0 top-3 text-charcoal/30 text-[10px] font-black uppercase tracking-widest transition-editorial peer-focus:-top-4 peer-focus:text-brand peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-brand">Your Email</label>
                        </div>
                      </div>
                    </div>

                    <button type="submit" disabled={formStatus === 'submitting'} className="group bg-brand text-white px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-charcoal transition-editorial shadow-xl disabled:opacity-50 flex items-center gap-4">
                      {formStatus === 'submitting' ? 'SUBMITTING...' : 'SUBMIT NOMINATION'} <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-editorial"/>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
