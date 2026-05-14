import React from 'react'
import { Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand text-white/60 py-20 px-8 relative overflow-hidden">
      <div className="african-pattern absolute inset-0 opacity-10 pointer-events-none scale-150 rotate-12"></div>
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
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
            <div className="flex gap-4">
              {['f', 't', 'in', 'ig'].map((s) => (
                <a key={s} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-brand transition-editorial text-xs border border-white/10 font-black uppercase">{s}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-gold font-black mb-8 text-[10px] tracking-[0.3em] uppercase">Initiatives</h4>
            <ul className="space-y-4 text-xs font-black tracking-widest uppercase">
              <li><a href="/what-we-do#programmes" className="hover:text-gold transition-editorial">Growth Accelerator</a></li>
              <li><a href="/what-we-do#programmes" className="hover:text-gold transition-editorial">Enterprise Development</a></li>
              <li><a href="/what-we-do#awards" className="hover:text-gold transition-editorial">AWIEF Awards</a></li>
              <li><a href="/what-we-do#programmes" className="hover:text-gold transition-editorial">Digital Skills Training</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-black mb-8 text-[10px] tracking-[0.3em] uppercase">Contact</h4>
            <ul className="space-y-4 text-xs font-black tracking-widest uppercase">
              <li className="flex items-center gap-3"><Globe size={14} className="text-gold"/> info@awieforum.org</li>
              <li className="flex items-center gap-3"><Globe size={14} className="text-gold"/> +27 21 020 6022</li>
              <li><a href="/contact-us" className="hover:text-gold transition-editorial">Privacy Policy</a></li>
              <li><a href="/contact-us" className="hover:text-gold transition-editorial">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-black mb-8 text-[10px] tracking-[0.3em] uppercase">Newsletter</h4>
            <p className="text-xs font-medium italic mb-6">Join our global community for monthly impact updates.</p>
            <div className="flex flex-col gap-3">
              <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white focus:outline-none focus:border-gold placeholder:text-white/20 transition-editorial" />
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
