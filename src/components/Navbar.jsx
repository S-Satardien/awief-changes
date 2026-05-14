import React, { useState, useEffect } from 'react'
import { Sparkles, ChevronDown, Menu, X } from 'lucide-react'

export default function Navbar({ activePage = '' }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (page) => {
    if (activePage === page) return 'text-gold font-black' 
    
    // If we are on a light-header page and haven't scrolled yet, use brand color for visibility
    const isLightHeaderPage = activePage === 'past-conferences' || activePage === 'purchase-tickets'
    
    if (isScrolled) return 'text-charcoal/70 hover:text-brand transition-editorial'
    
    return isLightHeaderPage 
      ? 'text-brand hover:text-charcoal transition-editorial' 
      : 'text-white/80 hover:text-white transition-editorial'
  }

  const NavItemWithDropdown = ({ label, mainHref, links, active }) => (
    <div className="relative group/nav">
      <a href={mainHref} className={`flex items-center gap-1 py-2 ${isActive(active)}`}>
        {label} <ChevronDown size={14} className="group-hover/nav:rotate-180 transition-editorial" />
      </a>
      <div className="absolute top-[calc(100%-10px)] left-0 pt-4 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-editorial z-50">
        <div className="w-64 bg-white rounded-[32px] shadow-2xl border border-charcoal/5 overflow-hidden p-4">
          {links.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              className="block px-6 py-4 text-[11px] font-black uppercase tracking-widest text-charcoal/60 hover:text-brand hover:bg-brand/5 rounded-2xl transition-editorial"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Top Banner */}
      <div className="bg-brand text-white py-3 px-6 text-center text-[10px] font-black tracking-[0.3em] flex justify-center items-center gap-4 relative z-[70] uppercase">
        <Sparkles size={12} className="text-gold animate-pulse" />
        <span>AWIEF 2026 Conference Tickets are now on sale</span>
        <a href="/purchase-conference-tickets" className="text-gold hover:text-white transition-editorial underline decoration-2 underline-offset-4 italic">Secure your spot</a>
      </div>

      <header className={`fixed left-0 right-0 z-[60] transition-editorial px-6 md:px-12 ${isScrolled ? 'top-4' : 'top-14'}`}>
        <nav className={`max-w-[1400px] mx-auto transition-editorial ${isScrolled ? 'bg-warm/80 backdrop-blur-md rounded-full py-2 px-8 border border-charcoal/5 shadow-lg' : 'bg-transparent py-4'}`}>
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="block group">
                <div className={`transition-editorial bg-white p-2 rounded-2xl flex items-center ${isScrolled ? 'h-16 px-4' : 'h-24 px-6 shadow-2xl border border-charcoal/5'}`}>
                  <img 
                    src="https://www.awieforum.org/wp-content/uploads/2023/08/cropped-AWIEF-logo_transparant-2048x1192-1.jpg" 
                    alt="AWIEF" 
                    className="h-full w-auto object-contain scale-110" 
                  />
                </div>
              </a>
            </div>
            
            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-10 text-[11px] font-black tracking-[0.2em]">
              <a href="/" className={isActive('home')}>HOME</a>
              
              <NavItemWithDropdown 
                label="ABOUT" 
                mainHref="/about"
                active="about"
                links={[
                  { label: "ABOUT AWIEF", href: "/about" },
                  { label: "ADVISORY BOARD", href: "/about#advisory-board" },
                  { label: "MEET THE TEAM", href: "/about#meet-the-team" },
                  { label: "OUR PARTNERS", href: "/about#our-partners" },
                  { label: "ALUMNI NETWORK", href: "/get-involved#join-community" }
                ]}
              />

              <NavItemWithDropdown 
                label="WHAT WE DO" 
                mainHref="/what-we-do"
                active="what-we-do"
                links={[
                  { label: "PROGRAMMES", href: "/what-we-do" },
                  { label: "ANNUAL CONFERENCE & EXPO", href: "/what-we-do#conference" },
                  { label: "AWIEF AWARDS", href: "/what-we-do#awards" },
                  { label: "ADVOCACY", href: "/what-we-do#advocacy" }
                ]}
              />

              <NavItemWithDropdown 
                label="AWIEF2026 CONFERENCE & EXPO" 
                mainHref="/purchase-conference-tickets"
                active="conference"
                links={[
                  { label: "AGENDA", href: "/purchase-conference-tickets#agenda" },
                  { label: "SPEAKERS", href: "/purchase-conference-tickets#speakers" },
                  { label: "SPONSORS & PARTNERS", href: "/purchase-conference-tickets#sponsors" },
                  { label: "EXHIBIT", href: "/purchase-conference-tickets#exhibit" },
                  { label: "HOTEL & FLIGHT INFORMATION", href: "/purchase-conference-tickets#travel" },
                  { label: "PAST CONFERENCES", href: "/past-conferences" }
                ]}
              />

              <a href="/our-impact" className={isActive('our-impact')}>OUR IMPACT</a>

              <a href="/news" className={isActive('news')}>NEWS</a>

              <NavItemWithDropdown 
                label="GET INVOLVED" 
                mainHref="/get-involved"
                active="get-involved"
                links={[
                  { label: "VOLUNTEER WITH AWIEF", href: "/get-involved#volunteer" },
                  { label: "PARTNER WITH US", href: "/get-involved#corporate-partner" },
                  { label: "DONATE", href: "/donate" },
                  { label: "JOIN THE COMMUNITY", href: "/get-involved#join-community" }
                ]}
              />
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <a href="/donate" className="bg-brand text-white px-8 py-3.5 rounded-full text-[10px] font-black tracking-[0.2em] hover:bg-brand-dark transition-editorial shadow-2xl shadow-brand/20">
                DONATE
              </a>
            </div>

            {/* Mobile Toggle */}
            <button className="lg:hidden p-2 text-charcoal" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-[100] bg-cream p-12 flex flex-col items-center justify-center space-y-12 animate-in fade-in zoom-in duration-500 overflow-y-auto">
            <button className="absolute top-8 right-8 p-2 text-charcoal/40 hover:text-charcoal transition-editorial" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-8">
              <a href="/" className="text-4xl font-heading font-black text-charcoal hover:text-brand tracking-tighter">HOME</a>
              <a href="/about" className="text-4xl font-heading font-black text-charcoal hover:text-brand tracking-tighter">ABOUT</a>
              <a href="/what-we-do" className="text-4xl font-heading font-black text-charcoal hover:text-brand tracking-tighter">WHAT WE DO</a>
              <a href="/purchase-conference-tickets" className="text-4xl font-heading font-black text-charcoal hover:text-brand tracking-tighter text-center">AWIEF2026 CONFERENCE & EXPO</a>
              <a href="/our-impact" className="text-4xl font-heading font-black text-charcoal hover:text-brand tracking-tighter">OUR IMPACT</a>
              <a href="/news" className="text-4xl font-heading font-black text-charcoal hover:text-brand tracking-tighter">NEWS</a>
              <a href="/get-involved" className="text-4xl font-heading font-black text-charcoal hover:text-brand tracking-tighter">GET INVOLVED</a>
              <a href="/donate" className="bg-brand text-white px-12 py-5 rounded-full font-black tracking-widest text-xs shadow-2xl">DONATE</a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
