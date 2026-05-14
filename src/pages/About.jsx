import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { 
  ChevronRight, ChevronDown, Sparkles, Target, Eye, 
  TrendingUp, Award, Users, Globe, BookOpen, HeartHandshake, Building2, X, ArrowRight
} from 'lucide-react'

export default function About() {
  const [selectedBoardMember, setSelectedBoardMember] = useState(null)
  const [expandedTier, setExpandedTier] = useState('strategic')

  const toggleTier = (tier) => {
    setExpandedTier(expandedTier === tier ? null : tier)
  }

  const advisoryBoardData = [
    {
      name: "Fatma Samoura",
      title: "Former FIFA Secretary General",
      img: "photo-1573496359142-b8d87734a5a2",
      bio: "Fatma Samoura is a globally respected leader with extensive experience across international development, governance, and sport. She made history as the first woman to serve as Secretary General of FIFA, holding the role from 2016 to 2023. Prior to joining FIFA, Ms Samoura spent 21 years with the United Nations, working across complex humanitarian, socio-economic, political, and security contexts. She served in senior leadership roles in seven countries. At FIFA, she played a pivotal role in transforming global football governance."
    },
    {
      name: "Nicolas Pompigne-Mognard",
      title: "Founder and Chairman, APO Group",
      img: "photo-1560250097-0b93528c311a",
      bio: "Nicolas Pompigne-Mognard is the Founder and Chairman of APO Group, the leading pan-African communications consultancy and press release distribution service. He is widely regarded as a trusted advisor and thought leader across Africa's business, policy, and media landscapes. Recognised among the 100 Most Influential Africans in both 2023 and 2024, Nicolas is known for his deep understanding of Africa's media ecosystem and his ability to build trusted relationships with senior business and political leaders globally."
    },
    {
      name: "Dalia Ibrahim",
      title: "CEO, Nahdet Misr Publishing House; Founder & CEO, EdVentures",
      img: "photo-1580489944761-15a19d654956",
      bio: "Dalia Ibrahim is a business leader, angel investor, and leading advocate for education, innovation, and entrepreneurship across the Middle East and Africa. As CEO of Nahdet Misr Publishing House, she leads one of the region's most established learning groups. She is also the Founder and CEO of EdVentures, the first education-focused corporate venture capital firm in the MENA region, which has supported over 95 startups and invested in 28 high-growth EdTech ventures."
    },
    {
      name: "Awa Ndiaye-Seck",
      title: "President, ADES-USA / Former UN Women Special Rep.",
      img: "photo-1508214751196-bfd1414742e9",
      bio: "Awa Ndiaye Seck is a seasoned development and governance leader with over 40 years of experience at national, regional, and international levels. Her expertise spans development, policy, governance, conflict prevention, peacebuilding, gender equality, and regional integration. She spent nearly two decades with the United Nations, serving as Regional Director for Africa at UNDP, UN Women Special Representative to the African Union, and UN Women Representative to the UN Economic Commission for Africa."
    }
  ]

  const team = [
    {name: "Irene Ochem", title: "Founder & CEO", img: "photo-1531123897727-8f129e1688ce"},
    {name: "Kumbirai Mapiye", title: "Finance & Admin Manager", img: "photo-1544005313-94ddf0286df2"},
    {name: "Ekene Ochem", title: "Project Manager", img: "photo-1531384441138-2736e62e0919"},
    {name: "Akpene Samiama", title: "Programmes Manager", img: "photo-1589156191108-c7ea6f28f97b"},
    {name: "Rebecca Ile", title: "Programmes Associate", img: "photo-1573496359142-b8d87734a5a2"},
    {name: "Riana Andrews", title: "Communications & Marketing", img: "photo-1534528741775-53994a69daeb"},
    {name: "Lou-Anne Daniels", title: "Events & Engagement", img: "photo-1508214751196-bfd1414742e9"},
    {name: "Dalia Diamond", title: "Social Media Expert", img: "photo-1573497019940-1c28c88b4f3e"},
  ]

  return (
    <div className="min-h-screen font-body text-charcoal bg-warm overflow-x-hidden">
      <Navbar activePage="about" />

      {/* Hero Section - Synchronized with Home - Main Brand Color */}
      <section className="relative bg-brand pt-40 pb-48 px-8 overflow-hidden text-center">
        <div className="african-pattern absolute inset-0 opacity-20 scale-150 rotate-12 brightness-200"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand/50 z-10 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-20">
          <p className="text-gold text-xs font-black tracking-[0.3em] uppercase mb-8 flex items-center justify-center gap-4">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            Who We Are
            <span className="w-2 h-2 rounded-full bg-gold"></span>
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-10 uppercase font-heading">
            Empowering Women <br />
            <span className="text-gold italic serif normal-case">Transforming Africa</span>
          </h1>
          <p className="text-white/80 text-xl leading-relaxed mb-0 max-w-2xl mx-auto italic font-medium">
            AWIEF is a non-profit organization dedicated to empowering women entrepreneurs across Africa, helping them scale their businesses and reach their absolute full potential.
          </p>
        </div>
      </section>

      {/* Mission & Vision - Editorial Overlay */}
      <section className="px-6 md:px-12 -mt-24 relative z-30 max-w-[1400px] mx-auto mb-32">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-charcoal border border-white/10 p-12 md:p-16 rounded-[48px] shadow-2xl relative overflow-hidden group">
            <div className="african-pattern absolute inset-0 opacity-5"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mb-10 border border-brand/20 group-hover:scale-110 transition-editorial">
                <Target className="text-brand" size={32} />
              </div>
              <h2 className="text-4xl font-black text-white mb-6 uppercase font-heading">Our Mission</h2>
              <p className="text-white/60 text-lg leading-relaxed font-medium">
                To advance economic rights and security for women through dedicated entrepreneurship support and development across the African continent.
              </p>
            </div>
          </div>

          <div className="bg-white border border-charcoal/5 p-12 md:p-16 rounded-[48px] shadow-xl relative overflow-hidden group">
            <div className="african-pattern absolute inset-0 opacity-[0.02] brightness-0"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-10 border border-gold/20 group-hover:scale-110 transition-editorial">
                <Eye className="text-gold" size={32} />
              </div>
              <h2 className="text-4xl font-black text-charcoal mb-6 uppercase font-heading">Our Vision</h2>
              <p className="text-charcoal/60 text-lg leading-relaxed font-medium">
                An inclusive and thriving Africa where women-owned businesses are empowered to create high-impact, sustainable enterprises that directly contribute to increasing Africa's GDP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Story - Editorial Spread */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto mb-24">
        <div className="editorial-grid items-center gap-24">
          <div className="col-span-12 lg:col-span-5 relative">
            <div className="relative z-10 rounded-[64px] overflow-hidden shadow-2xl bg-brand aspect-[4/5] border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80" 
                alt="Irene Ochem, Founder & CEO" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-editorial duration-1000"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand to-transparent p-12 pt-32">
                <h3 className="text-white text-3xl font-black uppercase font-heading mb-1">Irene Ochem</h3>
                <p className="text-gold font-black tracking-widest text-xs uppercase italic">Founder & CEO, AWIEF</p>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand rounded-full flex items-center justify-center text-white border-4 border-white rotate-12 shadow-2xl hidden md:flex z-20">
               <Sparkles size={48} className="opacity-50" />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <p className="text-brand text-[10px] font-black tracking-[0.4em] uppercase mb-6">Passion & Purpose</p>
            <h2 className="text-5xl md:text-7xl font-black text-charcoal mb-10 leading-[0.9] tracking-tighter uppercase font-heading">
              "If I can do it, <br/> <span className="text-brand">they can do it!</span>"
            </h2>
            <div className="space-y-8 text-charcoal/60 text-xl leading-relaxed font-medium italic border-l-8 border-brand pl-12">
              <p>
                Nothing is more exciting and fun than being an entrepreneur, chasing your dreams on your own terms. Yet, the entrepreneurial journey and building a thriving business isn't easy—especially for females in Africa.
              </p>
              <p className="not-italic text-charcoal/70">
                Growing up as an ambitious young girl in Nigeria, Irene Ochem understood first-hand the imperative of economically empowering women and girls. In 2015, she founded AWIEF, building a powerful platform driving inclusive economic transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Keys to Success - Clean Editorial Section */}
      <section className="bg-warm py-32 px-8 relative overflow-hidden border-y border-charcoal/5">
        <div className="african-pattern absolute inset-0 opacity-[0.03] scale-150 brightness-0"></div>
        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <div className="max-w-3xl mx-auto mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-charcoal mb-8 uppercase font-heading tracking-tighter leading-[0.9]">Our Keys to <span className="text-brand italic serif normal-case">Success</span></h2>
            <p className="text-charcoal/50 text-xl leading-relaxed font-medium italic">
              We facilitate, support, and inspire women entrepreneurs by providing knowledge, tools, resources, and valuable connections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: TrendingUp, t: "Enterprise Development", d: "Innovative products for enabling ecosystems." },
              { icon: Globe, t: "Annual Conference", d: "World-class networking and pan-African exhibitions." },
              { icon: Award, t: "AWIEF Awards", d: "Recognizing outstanding female achievement." },
              { icon: Users, t: "Online Community", d: "A digital space to rise and fulfill potential." },
              { icon: BookOpen, t: "Policy Advocacy", d: "Cross-cutting advocacy for gender equality." },
            ].map((key, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm border border-charcoal/5 hover:border-brand transition-editorial group flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-brand/5 flex items-center justify-center text-brand mb-8 group-hover:bg-brand group-hover:text-white transition-editorial border border-brand/10">
                  <key.icon size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-charcoal font-black uppercase font-heading text-sm mb-4 leading-tight">{key.t}</h4>
                <p className="text-charcoal/40 text-[10px] font-black tracking-widest uppercase leading-relaxed">{key.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board - Elevated Profile Grid */}
      <section className="py-32 px-8 bg-white relative" id="advisory-board">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <p className="text-brand text-[10px] font-black tracking-[0.4em] uppercase mb-6">Strategic Guidance</p>
              <h2 className="text-5xl md:text-7xl font-black text-charcoal mb-6 uppercase font-heading leading-[0.9] tracking-tighter">Our Advisory <span className="text-brand italic serif normal-case">Board</span></h2>
              <p className="text-charcoal/60 text-xl font-medium italic border-l-4 border-brand pl-8">
                A prestigious council of globally respected leaders driving inclusive growth and transforming the landscape of African business.
              </p>
            </div>
            <div className="hidden lg:block">
               <Sparkles size={64} className="text-gold/20" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisoryBoardData.map((member, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedBoardMember(member)}
                className="group relative h-[450px] rounded-[48px] overflow-hidden cursor-pointer shadow-xl hover:-translate-y-2 transition-editorial duration-700"
              >
                <img 
                  src={`https://images.unsplash.com/${member.img}?w=800&q=80`} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-80 group-hover:opacity-90 transition-editorial"></div>
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <h3 className="text-white font-black text-2xl uppercase font-heading mb-2">{member.name}</h3>
                  <p className="text-brand font-black text-[10px] tracking-[0.2em] uppercase leading-tight mb-6">{member.title}</p>
                  <div className="flex items-center gap-3 text-white text-[10px] font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-editorial">
                    View Full Bio <ArrowRight size={14} className="text-brand" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team - More Compact */}
      <section className="py-24 px-8 max-w-[1200px] mx-auto bg-warm rounded-[64px]" id="meet-the-team">
        <div className="text-center mb-20">
          <p className="text-brand text-[10px] font-black tracking-[0.4em] uppercase mb-6">Behind the Mission</p>
          <h2 className="text-5xl md:text-6xl font-black text-charcoal mb-6 uppercase font-heading leading-[0.9] tracking-tighter">Meet The <span className="text-brand">Team</span></h2>
          <p className="text-charcoal/40 text-lg font-medium italic max-w-xl mx-auto leading-relaxed">
            The dedicated professionals collaborating with partners and inspiring women to maximize their potential.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group text-center">
              <div className="relative aspect-square rounded-[40px] overflow-hidden mb-6 shadow-lg border-4 border-white group-hover:border-brand/20 transition-editorial duration-700">
                <img 
                  src={`https://images.unsplash.com/${member.img}?w=500&q=80`} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000 scale-110 group-hover:scale-100"
                />
              </div>
              <h4 className="text-lg font-black uppercase font-heading text-charcoal mb-1">{member.name}</h4>
              <p className="text-brand font-black tracking-widest text-[9px] uppercase italic">{member.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Partners Section - Restored from about.txt */}
      <section className="py-32 px-8 bg-white" id="our-partners">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <p className="text-brand text-[10px] font-black tracking-[0.4em] uppercase mb-6">An Ecosystem of Change</p>
            <h2 className="text-5xl md:text-7xl font-black text-charcoal mb-8 uppercase font-heading tracking-tighter leading-[0.9]">Our <span className="text-brand">Partners</span></h2>
            <p className="text-charcoal/50 text-xl font-medium italic max-w-2xl mx-auto">
              We are deeply grateful for the unwavering support of our strategic, institutional, and corporate partners who make our mission a reality across 48 countries.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { id: 'strategic', title: 'Strategic Partners', desc: 'Principal funders and co-creators driving continent-wide systemic change.' },
              { id: 'institutional', title: 'Institutional Partners', desc: 'Global and regional bodies providing structural backing and policy alignment.' },
              { id: 'supporting', title: 'Supporting Partners', desc: 'Valued contributors empowering our events and grassroots initiatives.' }
            ].map((tier) => (
              <div key={tier.id} className={`border ${expandedTier === tier.id ? 'border-brand' : 'border-charcoal/10'} rounded-[32px] overflow-hidden transition-editorial`}>
                <button 
                  onClick={() => toggleTier(tier.id)} 
                  className={`w-full flex items-center justify-between p-8 ${expandedTier === tier.id ? 'bg-brand/5' : 'bg-white hover:bg-warm'} transition-editorial text-left`}
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-2 h-10 rounded-full ${expandedTier === tier.id ? 'bg-brand' : 'bg-charcoal/20'}`}></div>
                    <div>
                      <h3 className={`text-xl font-black uppercase font-heading ${expandedTier === tier.id ? 'text-charcoal' : 'text-charcoal/40'}`}>
                        {tier.title}
                      </h3>
                      <p className="text-sm font-medium text-charcoal/40 mt-1">{tier.desc}</p>
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-editorial ${expandedTier === tier.id ? 'bg-brand text-white rotate-180 shadow-lg' : 'bg-warm text-charcoal/40'}`}>
                    <ChevronDown size={24} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${expandedTier === tier.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-10 bg-warm/30 border-t border-charcoal/5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div key={item} className="h-28 bg-white border border-charcoal/10 rounded-2xl flex items-center justify-center hover:border-brand transition-editorial shadow-sm hover:shadow-xl">
                         <span className="text-charcoal/20 text-[10px] font-black uppercase tracking-widest">Logo Placeholder</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support AWIEF Section - Restored from about.txt */}
      <section className="py-32 px-8 bg-brand relative overflow-hidden text-center" id="support">
        <div className="african-pattern absolute inset-0 opacity-30 scale-150 rotate-12 brightness-200"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <p className="text-gold text-[10px] font-black tracking-[0.4em] uppercase mb-6">Rise With Us</p>
          <h2 className="text-5xl md:text-8xl font-black text-white mb-10 leading-[0.9] tracking-tighter uppercase font-heading">
            Support AWIEF. <br/> <span className="text-gold italic serif normal-case">Be the Catalyst.</span>
          </h2>
          <p className="text-white/80 text-xl mb-20 max-w-2xl mx-auto italic font-medium">
            Your unique journey has brought you here. Whether your passion is to build, invest, or advocate, there is a prioritized place for you in our vibrant community. Let’s lift each other up.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { id: "donor-partner", icon: HeartHandshake, title: "Donate & Partner", desc: "Provide crucial financial backing or become a strategic corporate partner driving real change.", link: "/get-involved#corporate-partner" },
              { id: "volunteer", icon: Users, title: "Volunteer", desc: "Share your valuable time, technical expertise, and mentorship with early-stage founders.", link: "/get-involved#volunteer" },
              { id: "join-community", icon: Globe, title: "Join the Community", desc: "Step into Africa's most powerful network of female leaders, innovators, and investors.", link: "/get-involved#join-community" }
            ].map((card) => (
              <a href={card.link} key={card.id} className="bg-white/10 backdrop-blur-md p-10 rounded-[48px] border border-white/20 hover:border-gold transition-editorial group cursor-pointer hover:bg-white hover:shadow-2xl">
                <div className="w-16 h-16 rounded-[20px] bg-white/20 flex items-center justify-center mb-8 group-hover:bg-brand/10 transition-editorial">
                  <card.icon className="text-white group-hover:text-brand" size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-black text-2xl mb-4 uppercase font-heading group-hover:text-charcoal transition-editorial">{card.title}</h3>
                <p className="text-white/60 text-sm mb-10 leading-relaxed font-medium group-hover:text-charcoal/60 transition-editorial">{card.desc}</p>
                <div className="text-gold font-black text-[10px] tracking-widest uppercase flex items-center gap-3 group-hover:text-brand transition-editorial">
                  Take Action <ArrowRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board Bio Overlay */}
      {selectedBoardMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-500">
          <div className="absolute inset-0 bg-berry/95 backdrop-blur-xl" onClick={() => setSelectedBoardMember(null)}></div>
          <div className="bg-white rounded-[64px] max-w-5xl w-full relative z-10 shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[85vh]">
            <button 
              onClick={() => setSelectedBoardMember(null)}
              className="absolute top-10 right-10 w-14 h-14 bg-warm rounded-full flex items-center justify-center text-charcoal hover:bg-brand hover:text-white transition-editorial z-20 border border-charcoal/5 shadow-xl"
            >
              <X size={28} />
            </button>
            
            <div className="w-full md:w-2/5 h-[400px] md:h-auto relative bg-berry">
              <img 
                src={`https://images.unsplash.com/${selectedBoardMember.img}?w=800&q=80`} 
                alt={selectedBoardMember.name} 
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-berry via-transparent to-transparent"></div>
            </div>
            <div className="w-full md:w-3/5 p-12 md:p-20 flex flex-col justify-center overflow-y-auto">
              <div className="w-12 h-1 bg-brand mb-10"></div>
              <p className="text-brand text-[10px] font-black tracking-[0.4em] uppercase mb-6">Executive Advisory</p>
              <h3 className="text-4xl md:text-5xl font-black text-charcoal mb-4 uppercase font-heading tracking-tighter leading-tight">{selectedBoardMember.name}</h3>
              <p className="text-gold font-black text-xs tracking-widest uppercase mb-12 italic border-b border-charcoal/5 pb-10">{selectedBoardMember.title}</p>
              <p className="text-charcoal/60 leading-relaxed text-xl font-medium italic">
                {selectedBoardMember.bio}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
