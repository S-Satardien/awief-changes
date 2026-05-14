import React from 'react'
import { Globe, MessageCircle, Mail, Phone } from 'lucide-react'

const SocialIcon = ({ d, label, href }) => (
  <a 
    href={href} 
    className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-brand transition-editorial border border-white/10 group"
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className="w-5 h-5 group-hover:scale-110 transition-transform"
    >
      <path d={d} />
    </svg>
  </a>
);

export default function Footer() {
  const socialIcons = [
    { 
      label: "Facebook", 
      href: "#", 
      d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" 
    },
    { 
      label: "Twitter", 
      href: "#", 
      d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298l13.312 17.404z" 
    },
    { 
      label: "LinkedIn", 
      href: "#", 
      d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM7.119 20.452H3.555V9h3.564v11.452z" 
    },
    { 
      label: "Instagram", 
      href: "#", 
      d: "M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.474 1.38.894.42.42.678.82.894 1.38.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.474.96-.894 1.38-.42.42-.82.678-1.38.894-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.474-1.38-.894-.42-.42-.678-.82-.894-1.38-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.56.474-.96.894-1.38.42-.42.82-.678 1.38-.894.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.741 0 12s.012 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126s1.35.935 2.126 1.384c.766.296 1.636.499 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.012 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384s1.384-1.35 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.012-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126s-1.35-1.384-2.126-1.384c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" 
    }
  ];

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
              <li><a href="/what-we-do#conference" className="hover:text-gold transition-editorial">Annual Conference & Expo</a></li>
              <li><a href="/what-we-do#awards" className="hover:text-gold transition-editorial">AWIEF Awards</a></li>
              <li><a href="/what-we-do#advocacy" className="hover:text-gold transition-editorial">Advocacy</a></li>
            </ul>
          </div>

          {/* Column 3: Social (Middle) */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-gold font-black mb-8 text-[10px] tracking-[0.3em] uppercase">Connect With Us</h4>
            <div className="flex gap-4 justify-center">
              {socialIcons.map((s, idx) => (
                <SocialIcon key={idx} {...s} />
              ))}
              <a 
                href="https://wa.me/27210206022" 
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-brand transition-editorial border border-white/10 group"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
              </a>
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
