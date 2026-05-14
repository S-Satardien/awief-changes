import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { MapPin, Phone, Mail, Send, CheckCircle2, Heart, Scale, ShieldCheck, Globe, MoveRight } from 'lucide-react'

export default function ContactUs() {
  const [formStatus, setFormStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    setTimeout(() => setFormStatus('success'), 1500)
  }

  return (
    <div className="min-h-screen font-body text-charcoal bg-[#fcfbf9] overflow-x-hidden">
      <Navbar activePage="contact" />

      {/* Editorial Hero - High Visibility Berry Entrance */}
      <header className="relative bg-brand pt-56 pb-32 px-6 md:px-12 overflow-hidden">
        <div className="african-pattern absolute inset-0 opacity-30 scale-150 rotate-12 brightness-200"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/50 to-brand z-10 pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto relative z-20">
          <div className="editorial-grid items-center gap-16">
            <div className="col-span-12 lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/40 bg-gold/10 backdrop-blur mb-8">
                <Globe size={14} className="text-gold"/>
                <span className="text-gold text-[9px] font-black tracking-[0.3em] uppercase">Global Network</span>
              </div>
              <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black uppercase font-heading leading-[0.8] tracking-tighter mb-12 text-white">
                Get In <br/> <span className="text-gold italic serif normal-case">Touch</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium max-w-3xl italic">
                Whether you're looking to partner, have questions about our upcoming conference, or want to learn more about our programmes, our team is ready to connect.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Section - Proportions Refined */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16">
          
          {/* Form - Refined Scale */}
          <div className="lg:col-span-7 bg-white p-10 md:p-20 rounded-[48px] shadow-2xl border border-charcoal/5 relative overflow-hidden">
             {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-brand/10 text-brand rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-4xl font-black uppercase font-heading mb-3 leading-none">Message Sent</h3>
                <p className="text-charcoal/40 text-lg font-medium max-w-sm mb-10 italic">
                  We'll connect with you shortly.
                </p>
                <button onClick={() => setFormStatus('idle')} className="bg-brand text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-charcoal transition-editorial shadow-xl">
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="mb-10">
                   <h3 className="text-2xl font-black uppercase font-heading mb-3">Send us a Message</h3>
                   <p className="text-charcoal/40 font-medium italic border-l-2 border-brand pl-6 text-sm">
                     We review every inquiry within 24–48 hours.
                   </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="group relative">
                    <input required type="text" className="w-full bg-transparent border-b border-charcoal/10 py-3 focus:outline-none focus:border-brand transition-editorial text-lg font-medium placeholder-transparent peer" id="firstName" placeholder="First Name" />
                    <label htmlFor="firstName" className="absolute left-0 top-3 text-charcoal/30 text-[10px] font-black uppercase tracking-widest transition-editorial peer-focus:-top-4 peer-focus:text-brand peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-brand">First Name</label>
                  </div>
                  <div className="group relative">
                    <input required type="text" className="w-full bg-transparent border-b border-charcoal/10 py-3 focus:outline-none focus:border-brand transition-editorial text-lg font-medium placeholder-transparent peer" id="lastName" placeholder="Last Name" />
                    <label htmlFor="lastName" className="absolute left-0 top-3 text-charcoal/30 text-[10px] font-black uppercase tracking-widest transition-editorial peer-focus:-top-4 peer-focus:text-brand peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-brand">Last Name</label>
                  </div>
                </div>

                <div className="group relative">
                  <input required type="email" className="w-full bg-transparent border-b border-charcoal/10 py-3 focus:outline-none focus:border-brand transition-editorial text-lg font-medium placeholder-transparent peer" id="email" placeholder="Email Address" />
                  <label htmlFor="email" className="absolute left-0 top-3 text-charcoal/30 text-[10px] font-black uppercase tracking-widest transition-editorial peer-focus:-top-4 peer-focus:text-brand peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-brand">Email Address</label>
                </div>

                <div className="group relative">
                  <select required className="w-full bg-transparent border-b border-charcoal/10 py-3 focus:outline-none focus:border-brand transition-editorial text-lg font-medium text-charcoal/60 cursor-pointer appearance-none">
                    <option value="" disabled selected>Inquiry Subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="conference">Conference & Tickets</option>
                    <option value="partnership">Partnerships & Sponsorships</option>
                    <option value="accelerator">Accelerator Programmes</option>
                    <option value="media">Press & Media</option>
                  </select>
                </div>

                <div className="group relative">
                  <textarea required rows="3" className="w-full bg-transparent border-b border-charcoal/10 py-3 focus:outline-none focus:border-brand transition-editorial text-lg font-medium placeholder-transparent peer resize-none" id="message" placeholder="Your Message"></textarea>
                  <label htmlFor="message" className="absolute left-0 top-3 text-charcoal/30 text-[10px] font-black uppercase tracking-widest transition-editorial peer-focus:-top-4 peer-focus:text-brand peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-brand">Your Message</label>
                </div>

                <button type="submit" disabled={formStatus === 'submitting'} className="group bg-charcoal text-white px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-brand transition-editorial shadow-xl disabled:opacity-50 flex items-center gap-4">
                  {formStatus === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'} <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-editorial"/>
                </button>
              </form>
            )}
          </div>

          {/* Islands - High Impact Berry */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
             <div className="bg-brand p-12 rounded-[48px] text-white shadow-2xl relative overflow-hidden flex-grow flex flex-col justify-between border-2 border-white/5">
                <div className="african-pattern absolute inset-0 opacity-20 scale-150 rotate-12 brightness-200"></div>
                <div className="absolute top-0 right-0 p-8 opacity-5 rotate-12 pointer-events-none">
                   <Globe size={200} className="text-white"/>
                </div>
                
                <div className="space-y-12 relative z-10">
                   <div className="group">
                      <p className="text-gold font-black tracking-[0.4em] uppercase text-[10px] mb-6 flex items-center gap-3 italic">
                        <MapPin size={14}/> Headquarters
                      </p>
                      <h4 className="text-3xl font-black uppercase font-heading leading-tight mb-4 tracking-tight">Cape Town, ZA</h4>
                      <p className="text-white/60 text-lg font-medium leading-relaxed italic border-l-4 border-gold pl-8">
                         16 Bell Crescent, Westlake Business Park,<br/>
                         Tokai, Cape Town, 7945.
                      </p>
                   </div>
                   
                   <div className="grid md:grid-cols-2 gap-12">
                      <div className="group">
                         <p className="text-gold font-black tracking-[0.4em] uppercase text-[9px] mb-4 flex items-center gap-2">
                           <Phone size={12}/> Direct Line
                         </p>
                         <a href="tel:+27210206022" className="text-xl font-black uppercase font-heading hover:text-gold transition-editorial tracking-tighter">+27 21 020 6022</a>
                      </div>
                      <div className="group">
                         <p className="text-gold font-black tracking-[0.4em] uppercase text-[9px] mb-4 flex items-center gap-2">
                           <Mail size={12}/> Email Lead
                         </p>
                         <a href="mailto:info@awieforum.org" className="text-xl font-black uppercase font-heading hover:text-gold transition-editorial underline tracking-tighter decoration-gold/30">info@awieforum.org</a>
                      </div>
                   </div>
                </div>

                <div className="pt-12 mt-12 border-t border-white/10 flex items-center justify-between relative z-10">
                   <div className="flex gap-8">
                      {['f', 't', 'in', 'ig'].map(s => (
                        <a key={s} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[11px] font-black uppercase tracking-widest hover:bg-gold hover:text-brand transition-editorial">{s}</a>
                      ))}
                   </div>
                </div>
             </div>

             <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-xl border-4 border-white group relative max-w-sm mx-auto lg:max-w-none">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7725838048685!2d18.432655315217437!3d-34.04968808060645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc42171c6bbcd1%3A0x6a0f443b745fb313!2s16%20Bell%20Cres%2C%20Westlake%20Business%20Park%2C%20Cape%20Town%2C%207945%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1698765432100!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Thank You Section - Figma Editorial Copy */}
      <section className="py-40 px-6 md:px-12 bg-cream overflow-hidden relative border-y border-charcoal/5">
        <div className="african-pattern absolute inset-0 opacity-[0.03] scale-150 rotate-12"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
           <div className="w-24 h-24 rounded-full bg-brand/10 flex items-center justify-center mb-12 mx-auto border border-brand/5 shadow-inner">
              <Heart className="text-brand fill-current opacity-80" size={48} />
           </div>
           <h2 className="text-5xl md:text-[6rem] font-black uppercase font-heading leading-[0.8] tracking-tighter mb-12">
              Thank You to <br/> <span className="text-brand serif italic normal-case">Our Community</span>
           </h2>
           <p className="text-xl md:text-2xl font-medium text-charcoal/60 italic leading-relaxed max-w-4xl mx-auto">
             AWIEF is more than an organization; it is a movement. To our incredible donors, corporate partners, mentors, and the thousands of resilient women entrepreneurs who make up our network—<strong className="text-brand not-italic">thank you</strong>. Your continued support, expertise, and passion are the catalysts driving real systemic change across the African continent.
           </p>
        </div>
      </section>

      {/* Legal Spread - High Authority Editorial */}
      <section className="py-32 px-6 md:px-12 bg-white rounded-t-[60px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-12">
             <div className="w-10 h-0.5 bg-brand"></div>
             Governance Hub
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase font-heading leading-[0.8] tracking-tighter mb-20">
            Legal <br/> <span className="text-charcoal italic serif">Framework</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Terms & Conditions */}
            <div className="bg-cream p-12 md:p-16 rounded-[48px] border border-charcoal/5 shadow-xl flex flex-col h-[600px] group hover:border-brand/20 transition-editorial">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-brand shadow-sm group-hover:bg-brand group-hover:text-white transition-editorial">
                  <Scale size={28} />
                </div>
                <h3 className="text-3xl font-black uppercase font-heading leading-none">Terms & <span className="text-brand">Conditions</span></h3>
              </div>
              <div className="overflow-y-auto pr-6 space-y-10 custom-scrollbar flex-grow">
                <div>
                  <span className="text-brand font-black block mb-4 tracking-[0.3em] uppercase text-[9px]">01. Acceptance</span>
                  <p className="text-charcoal/60 font-medium leading-relaxed italic text-base">By accessing and using the AWIEF website, registering for events, or applying for our programmes, you accept and agree to be bound by these Terms and Conditions.</p>
                </div>
                <div>
                  <span className="text-brand font-black block mb-4 tracking-[0.3em] uppercase text-[9px]">02. Registration & Ticketing</span>
                  <p className="text-charcoal/60 font-medium leading-relaxed italic text-base">All tickets purchased for the AWIEF Annual Conference and related events are subject to availability. Early Bird pricing is time-sensitive. Tickets are generally non-refundable unless stated otherwise in specific event documentation.</p>
                </div>
                <div>
                  <span className="text-brand font-black block mb-4 tracking-[0.3em] uppercase text-[9px]">03. Intellectual Property</span>
                  <p className="text-charcoal/60 font-medium leading-relaxed italic text-base">All content, logos, graphics, and materials presented on this site and during our programmes are the intellectual property of AWIEF or its partners. You may not reproduce, distribute, or create derivative works without explicit written consent.</p>
                </div>
                <div>
                  <span className="text-brand font-black block mb-4 tracking-[0.3em] uppercase text-[9px]">04. User Conduct</span>
                  <p className="text-charcoal/60 font-medium leading-relaxed italic text-base">The AWIEF community is a safe, inclusive space. Any harassment, discriminatory behavior, or violation of our code of conduct during physical events or on our digital platforms will result in immediate termination of membership and access.</p>
                </div>
                <div>
                  <span className="text-brand font-black block mb-4 tracking-[0.3em] uppercase text-[9px]">05. Modifications</span>
                  <p className="text-charcoal/60 font-medium leading-relaxed italic text-base">AWIEF reserves the right to modify these terms at any time. Continued use of our platforms constitutes acceptance of any changes.</p>
                </div>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="bg-warm p-12 md:p-16 rounded-[48px] border border-charcoal/5 shadow-xl flex flex-col h-[600px] group hover:border-brand/20 transition-editorial">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-brand shadow-sm group-hover:bg-brand group-hover:text-white transition-editorial">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-3xl font-black uppercase font-heading leading-none">Privacy <span className="text-brand">Policy</span></h3>
              </div>
              <div className="overflow-y-auto pr-6 space-y-10 custom-scrollbar flex-grow">
                <div>
                  <span className="text-brand font-black block mb-4 tracking-[0.3em] uppercase text-[9px]">01. Data Collection</span>
                  <p className="text-charcoal/60 font-medium leading-relaxed italic text-base">We collect personal information (such as name, email, phone number, and company details) when you register for events, apply for accelerators, or subscribe to our newsletter.</p>
                </div>
                <div>
                  <span className="text-brand font-black block mb-4 tracking-[0.3em] uppercase text-[9px]">02. Data Usage</span>
                  <p className="text-charcoal/60 font-medium leading-relaxed italic text-base">Your data is used exclusively to facilitate event registration, manage programme applications, communicate important updates, and improve your user experience. We do not sell your personal data to third parties.</p>
                </div>
                <div>
                  <span className="text-brand font-black block mb-4 tracking-[0.3em] uppercase text-[9px]">03. Third-Party Sharing</span>
                  <p className="text-charcoal/60 font-medium leading-relaxed italic text-base">We may share necessary information with trusted third-party service providers (e.g., payment processors, event management platforms) strictly for the purpose of operating our services. These partners are bound by confidentiality agreements.</p>
                </div>
                <div>
                  <span className="text-brand font-black block mb-4 tracking-[0.3em] uppercase text-[9px]">04. Data Security</span>
                  <p className="text-charcoal/60 font-medium leading-relaxed italic text-base">AWIEF employs industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
                </div>
                <div>
                  <span className="text-brand font-black block mb-4 tracking-[0.3em] uppercase text-[9px]">05. Your Rights</span>
                  <p className="text-charcoal/60 font-medium leading-relaxed italic text-base">You have the right to access, correct, or request the deletion of your personal data at any time. To exercise these rights or to unsubscribe, please contact us at info@awieforum.org.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
