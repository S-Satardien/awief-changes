import React from 'react'
import { Globe, Facebook, Twitter, Linkedin, Instagram, MessageCircle, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand text-white/60 py-20 px-8 relative overflow-hidden">
      <div className="african-pattern absolute inset-0 opacity-10 pointer-events-none scale-150 rotate-12"></div>
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Column 1: About */}
          <div className="col-span-1">
            <div className="mb-8">
              <div className="bg-white p-3 rounded-2xl h-16 w-fit shadow-2xl border border-white/10">
                <img 
                  src="https://www.awieforum.org/wp-content/uploads/2023/08/cropped-AWIEF-logo_transparant-2048x1192-1.jpg" 
                  alt="AWIEF" 
                  className="h-full w-auto object-contain" 
                />
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-8 italic font-medium">
              A pan-African women's economic empowerment organization promoting and supporting female entrepreneurship.
            </p>
          </div>

          {/* Column 2: Pillars */}
          <div>
            <h4 className="text-gold font-black mb-8 text-[10px] tracking-[0.3em] uppercase">AWIEF Pillars</h4>
            <ul className="space-y-4 text-xs font-black tracking-widest uppercase">
              <li><a href="/what-we-do#programmes" className="hover:text-gold transition-editorial">Programmes</a></li>
              <li><a href="/what-we-do#conference" className="hover:text-gold transition-editorial">Annual Conference</a></li>
              <li><a href="/what-we-do#awards" className="hover:text-gold transition-editorial">AWIEF Awards</a></li>
              <li><a href="/what-we-do#advocacy" className="hover:text-gold transition-editorial">Advocacy</a></li>
            </ul>
          </div>

          {/* Column 3: Social (Middle) */}
          <div className="text-center md:text-left">
            <h4 className="text-gold font-black mb-8 text-[10px] tracking-[0.3em] uppercase">Connect With Us</h4>
            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              {[
                { icon: Facebook, url: "#", label: "Facebook" },
                { icon: Twitter, url: "#", label: "Twitter" },
                { icon: Linkedin, url: "#", label: "LinkedIn" },
                { icon: Instagram, url: "#", label: "Instagram" },
                { icon: MessageCircle, url: "https://wa.me/27210206022", label: "WhatsApp" }
              ].map((s, idx) => (
                <a 
                  key={idx} 
                  href={s.url} 
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-brand transition-editorial border border-white/10 group"
                  aria-label={s.label}
                >
                  <s.icon size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div>
            <h4 className="text-gold font-black mb-8 text-[10px] tracking-[0.3em] uppercase">Get In Touch</h4>
            <ul className="space-y-4 text-xs font-black tracking-widest uppercase mb-8">
              <li className="flex items-center gap-3"><Mail size={14} className="text-gold"/> info@awieforum.org</li>
              <li className="flex items-center gap-3"><Phone size={14} className="text-gold"/> +27 21 020 6022</li>
            </ul>
            <div className="flex flex-col gap-3">
              <input type="email" placeholder="Subscribe to Newsletter" className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white focus:outline-none focus:border-gold placeholder:text-white/20 transition-editorial" />
              <button className="bg-gold text-brand px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white transition-editorial shadow-2xl">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-black tracking-widest uppercase">
          <p>© 2026 African Women Innovation and Entrepreneurship Forum. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="/contact-us" className="hover:text-gold transition-editorial">Privacy Policy</a>
            <a href="/contact-us" className="hover:text-gold transition-editorial">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
