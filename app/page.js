import Image from "next/image";

// =============================================================================
// GOAL HOMEPAGE — Static Build
// Following GOAL_Feature_List.md Section 1: Homepage Features
// Design System: GOAL_Modern_UI_Design_System.md v2.1
// =============================================================================

// --- SVG Icons ---
const MapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="1 6 1 22 8 18 16 22 21 18 21 2 16 6 8 2 1 6"/><line x1="8" x2="8" y1="2" y2="18"/><line x1="16" x2="16" y1="6" y2="22"/>
  </svg>
);

const AwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
  </svg>
);

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#E85D04" stroke="none" opacity="0.3">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const CheckBadgeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>
  </svg>
);

// --- Data ---
const stats = [
  { number: "64", label: "Districts Covered", suffix: "" },
  { number: "26,000+", label: "Retail Partners", suffix: "" },
  { number: "216+", label: "Product SKUs", suffix: "" },
  { number: "5", label: "International Brands", suffix: "" },
];

const brands = [
  { name: "Faber-Castell", country: "Germany", since: "1761", color: "#0066B3" },
  { name: "Casio", country: "Japan", since: "1946", color: "#000000" },
  { name: "Uni-ball", country: "Japan", since: "1887", color: "#003366" },
  { name: "Pentonic", country: "India", since: "2010", color: "#E31837" },
  { name: "Staedtler", country: "Germany", since: "1835", color: "#009EE0" },
  { name: "GOAL", country: "Bangladesh", since: "2005", color: "#E85D04" },
];

const valueProps = [
  {
    title: "Nationwide Distribution",
    description: "Comprehensive coverage across all 64 districts of Bangladesh, ensuring your products reach every corner of the country through our established network.",
    icon: MapIcon,
  },
  {
    title: "Premium Brands",
    description: "Authorized distributor for 5 world-renowned international brands — Faber-Castell, Casio, Uni-ball, Pentonic, and Staedtler — plus our own GOAL private label.",
    icon: AwardIcon,
  },
  {
    title: "Reliable Supply Chain",
    description: "State-of-the-art warehousing facilities and efficient logistics ensure consistent product availability and timely delivery to all our partners.",
    icon: TruckIcon,
  },
  {
    title: "Local Expertise",
    description: "Deep understanding of the Bangladesh market with 20+ years of experience, providing tailored solutions for education, corporate, and government sectors.",
    icon: UsersIcon,
  },
];

const testimonials = [
  {
    quote: "GOAL has been our trusted stationery partner for over 8 years. Their consistent supply of Faber-Castell and Staedtler products has helped us maintain quality standards across all our branches.",
    name: "Md. Rafiqul Islam",
    title: "Procurement Manager",
    organization: "Dhaka International School",
    initials: "RI",
  },
  {
    quote: "The reliability of GOAL's distribution network is unmatched. We operate in 12 districts and they've never failed to deliver on time. Their B2B support is exceptional.",
    name: "Farhana Rahman",
    title: "Operations Director",
    organization: "BrightStar Retail Chain",
    initials: "FR",
  },
  {
    quote: "As a government contractor, we need suppliers who understand compliance and scale. GOAL delivers both — their Casio calculator supply for our education project was flawless.",
    name: "Kamal Hossain",
    title: "Project Coordinator",
    organization: "Ministry of Education",
    initials: "KH",
  },
];

const news = [
  {
    title: "GOAL Expands Distribution to Three New Districts in Southern Bangladesh",
    excerpt: "Strategic expansion into Khulna, Barisal, and Patuakhali districts strengthens our nationwide coverage to all 64 districts.",
    date: "May 15, 2026",
    category: "Company News",
  },
  {
    title: "Faber-Castell Launches New Eco-Friendly Product Line in Bangladesh",
    excerpt: "Exclusive launch of Faber-Castell's sustainable stationery collection, reinforcing our commitment to environmental responsibility.",
    date: "April 28, 2026",
    category: "Product Launch",
  },
  {
    title: "GOAL Receives Excellence in Distribution Award 2026",
    excerpt: "Recognized by the Bangladesh Retail Association for outstanding distribution network performance and partner satisfaction.",
    date: "April 10, 2026",
    category: "Award",
  },
];

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Brands", href: "#brands" },
  { label: "Products", href: "#products" },
  { label: "Distribution", href: "#distribution" },
  { label: "Contact", href: "#contact" },
];

// --- Components ---

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 header-glass">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#003366] to-[#1A5276] flex items-center justify-center">
              <span className="text-white font-bold text-lg font-[family-name:var(--font-montserrat)]">G</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-[#003366] font-bold text-lg leading-tight block font-[family-name:var(--font-montserrat)]">GOAL</span>
              <span className="text-[#333333] text-[10px] leading-tight block font-[family-name:var(--font-open-sans)]">Global Office Automation Ltd.</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#003366] hover:text-[#E85D04] transition-colors rounded-lg hover:bg-[rgba(0,51,102,0.04)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex btn-primary text-sm py-2.5 px-5">
              Request a Catalog
            </a>
            <button className="lg:hidden p-2 text-[#003366] hover:bg-[rgba(0,51,102,0.04)] rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen gradient-hero pt-20 lg:pt-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[rgba(232,93,4,0.04)] to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[rgba(0,51,102,0.03)] to-transparent rounded-full blur-3xl" />
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-[rgba(232,93,4,0.2)] animate-float" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-[rgba(0,51,102,0.15)] animate-float delay-200" />
        <div className="absolute bottom-1/3 left-1/2 w-4 h-4 rounded-full bg-[rgba(232,93,4,0.1)] animate-float delay-400" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[rgba(232,93,4,0.1)] text-[#E85D04] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckBadgeIcon />
              <span>SMART Group Sister Concern</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.1] text-[#003366] mb-6 font-[family-name:var(--font-montserrat)]">
              Bangladesh&apos;s Trusted Partner for{" "}
              <span className="text-[#E85D04]">Premium Stationery</span>{" "}
              &amp; Office Solutions
            </h1>

            <p className="text-lg text-[#333333] leading-relaxed mb-8 max-w-xl">
              Representing 5 world-class international brands across all 64 districts of Bangladesh.
              Powering education, corporate offices, and government institutions with reliable supply
              chain excellence since 2005.
            </p>

            {/* Key stats inline */}
            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { value: "64", label: "Districts" },
                { value: "26,000+", label: "Retailers" },
                { value: "216+", label: "Products" },
                { value: "5", label: "Global Brands" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-[#E85D04] font-[family-name:var(--font-montserrat)]">{stat.value}</div>
                  <div className="text-xs text-[#333333] font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary animate-pulse-glow">
                Request a Catalog
                <ArrowRightIcon />
              </a>
              <a href="#brands" className="btn-outline">
                Learn About Our Brands
                <ChevronRightIcon />
              </a>
            </div>
          </div>

          {/* Right: Hero Image / Visual */}
          <div className="relative animate-fade-in-up delay-200">
            <div className="relative glass-card p-6 lg:p-8">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#EEF4FA] to-[#F4F6F8] rounded-2xl flex items-center justify-center overflow-hidden">
                {/* Placeholder for hero image - product showcase */}
                <div className="text-center p-8">
                  <div className="flex justify-center gap-4 mb-6">
                    {brands.slice(0, 5).map((brand) => (
                      <div
                        key={brand.name}
                        className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl bg-white shadow-lg flex items-center justify-center text-xs font-bold"
                        style={{ color: brand.color, border: `2px solid ${brand.color}20` }}
                      >
                        {brand.name.slice(0, 2)}
                      </div>
                    ))}
                  </div>
                  <p className="text-[#003366] font-semibold text-lg font-[family-name:var(--font-montserrat)]">
                    Premium Stationery &amp; Office Solutions
                  </p>
                  <p className="text-[#333333] text-sm mt-2">
                    Authorized Distributor in Bangladesh
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 lg:-right-6 glass-blue px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2ECC71] flex items-center justify-center">
                  <CheckBadgeIcon />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#003366]">Authorized</p>
                  <p className="text-xs text-[#333333]">Distributor — BD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section className="gradient-divider py-12 lg:py-16 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-blue p-6 lg:p-8 text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-3xl lg:text-4xl font-extrabold text-[#E85D04] mb-2 font-[family-name:var(--font-montserrat)]">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-sm text-[#003366] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandShowcase() {
  return (
    <section id="brands" className="gradient-warm py-16 lg:py-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[rgba(232,93,4,0.03)] rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[rgba(0,51,102,0.03)] rounded-full blur-3xl" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-[#E85D04] text-sm font-semibold uppercase tracking-wider mb-3">
            Our Portfolio
          </span>
          <h2 className="text-3xl lg:text-[40px] font-bold text-[#003366] mb-4 font-[family-name:var(--font-montserrat)]">
            World-Class Brands We Represent
          </h2>
          <p className="text-lg text-[#333333] max-w-2xl mx-auto">
            Exclusive authorized distributor for 5 international premium brands across Bangladesh,
            plus our own GOAL private label.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="glass-card p-6 lg:p-8 text-center group cursor-pointer relative overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Authorized badge */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="inline-flex items-center gap-1 bg-[#2ECC71] text-white text-[10px] font-bold px-2 py-1 rounded-full">
                  <CheckBadgeIcon />
                  Authorized
                </span>
              </div>

              {/* Logo placeholder */}
              <div
                className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-4 rounded-2xl flex items-center justify-center text-2xl lg:text-3xl font-bold transition-transform group-hover:scale-110"
                style={{
                  background: `${brand.color}10`,
                  color: brand.color,
                  border: `2px solid ${brand.color}20`,
                }}
              >
                {brand.name[0]}
              </div>

              <h3 className="text-lg font-bold text-[#003366] mb-1 font-[family-name:var(--font-montserrat)]">
                {brand.name}
              </h3>
              <p className="text-sm text-[#333333]">
                {brand.country} · Since {brand.since}
              </p>

              <div className="mt-4 pt-4 border-t border-[rgba(0,51,102,0.06)]">
                <span className="text-xs text-[#E85D04] font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Brand Page <ChevronRightIcon />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValuePropositions() {
  return (
    <section className="gradient-tech-blue py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[rgba(0,51,102,0.02)] rounded-full blur-3xl" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-[#E85D04] text-sm font-semibold uppercase tracking-wider mb-3">
            Why Choose GOAL
          </span>
          <h2 className="text-3xl lg:text-[40px] font-bold text-[#003366] mb-4 font-[family-name:var(--font-montserrat)]">
            The GOAL Advantage
          </h2>
          <p className="text-lg text-[#333333] max-w-2xl mx-auto">
            Two decades of excellence in distribution, backed by world-class brands and
            an unwavering commitment to our partners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <div
                key={prop.title}
                className="glass-blue p-8 lg:p-10 animate-fade-in-up group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#003366] to-[#1A5276] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#003366] mb-2 font-[family-name:var(--font-montserrat)]">
                      {prop.title}
                    </h3>
                    <p className="text-[#333333] leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DistributionSection() {
  return (
    <section id="distribution" className="gradient-tech-blue py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="animate-fade-in-up">
            <span className="inline-block text-[#E85D04] text-sm font-semibold uppercase tracking-wider mb-3">
              Our Reach
            </span>
            <h2 className="text-3xl lg:text-[40px] font-bold text-[#003366] mb-4 font-[family-name:var(--font-montserrat)]">
              Nationwide Distribution Network
            </h2>
            <p className="text-lg text-[#333333] leading-relaxed mb-8">
              From Dhaka to the farthest corners of Bangladesh, our distribution network
              ensures every retailer, school, and corporate office has access to premium
              stationery and office supplies.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { value: "8", label: "Regional Warehouses" },
                { value: "26,000+", label: "Active Retailers" },
                { value: "64", label: "Districts Covered" },
                { value: "48h", label: "Max Delivery Time" },
              ].map((item) => (
                <div key={item.label} className="glass-warm p-4 text-center">
                  <div className="text-2xl font-bold text-[#E85D04] font-[family-name:var(--font-montserrat)]">{item.value}</div>
                  <div className="text-xs text-[#333333]">{item.label}</div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-secondary inline-flex">
              Become a Retailer Partner
              <ArrowRightIcon />
            </a>
          </div>

          {/* Right: Bangladesh Map Visual */}
          <div className="animate-fade-in-up delay-200">
            <div className="glass-card p-6 lg:p-8">
              <div className="aspect-square bg-gradient-to-br from-[#EEF4FA] to-[#E0EBF5] rounded-2xl relative overflow-hidden flex items-center justify-center">
                {/* Simplified Bangladesh map representation */}
                <svg viewBox="0 0 400 500" className="w-full h-full max-w-[350px]" fill="none">
                  {/* Bangladesh outline approximation */}
                  <path
                    d="M180 30 C200 25, 220 35, 230 50 C240 65, 245 85, 240 105 C235 125, 240 145, 250 160 C260 175, 270 190, 265 210 C260 230, 250 250, 255 270 C260 290, 270 310, 265 330 C260 350, 250 370, 240 390 C230 410, 220 430, 210 450 C200 470, 190 480, 180 470 C170 460, 160 440, 155 420 C150 400, 145 380, 140 360 C135 340, 130 320, 125 300 C120 280, 115 260, 110 240 C105 220, 100 200, 105 180 C110 160, 120 140, 130 120 C140 100, 150 80, 160 60 C170 40, 175 35, 180 30Z"
                    fill="#003366"
                    opacity="0.1"
                    stroke="#003366"
                    strokeWidth="2"
                  />
                  {/* District dots */}
                  {Array.from({ length: 20 }).map((_, i) => {
                    const x = 130 + Math.random() * 120;
                    const y = 80 + Math.random() * 350;
                    return (
                      <circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="4"
                        fill="#E85D04"
                        opacity="0.7"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.4;0.9;0.4"
                          dur={`${2 + Math.random() * 2}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                    );
                  })}
                  {/* Dhaka highlight */}
                  <circle cx="195" cy="180" r="8" fill="#E85D04">
                    <animate
                      attributeName="r"
                      values="6;10;6"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <text x="210" y="185" fill="#003366" fontSize="12" fontWeight="bold">Dhaka HQ</text>
                </svg>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-[#333333]">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#E85D04]" />
                  Active Coverage
                </span>
                <span className="font-semibold text-[#003366]">All 64 Districts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="gradient-warm py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute top-20 left-20 w-80 h-80 bg-[rgba(232,93,4,0.03)] rounded-full blur-3xl" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-[#E85D04] text-sm font-semibold uppercase tracking-wider mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-[40px] font-bold text-[#003366] mb-4 font-[family-name:var(--font-montserrat)]">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-[#333333] max-w-2xl mx-auto">
            Real feedback from our partners across education, retail, and government sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className="glass-warm p-6 lg:p-8 relative animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E85D04] to-[#FF7A2F] rounded-t-2xl" />

              <div className="mb-4">
                <QuoteIcon />
              </div>

              <p className="text-[#333333] leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#003366] to-[#1A5276] flex items-center justify-center text-white font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#003366] text-sm">{t.name}</p>
                  <p className="text-xs text-[#333333]">{t.title}</p>
                  <p className="text-xs text-[#E85D04] font-medium">{t.organization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LatestNews() {
  return (
    <section className="gradient-divider py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16">
          <div>
            <span className="inline-block text-[#E85D04] text-sm font-semibold uppercase tracking-wider mb-3">
              Latest Updates
            </span>
            <h2 className="text-3xl lg:text-[40px] font-bold text-[#003366] font-[family-name:var(--font-montserrat)]">
              News &amp; Events
            </h2>
          </div>
          <a href="#" className="text-[#E85D04] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all mt-4 lg:mt-0">
            View All News <ArrowRightIcon />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {news.map((item, index) => (
            <article
              key={item.title}
              className="glass-card overflow-hidden animate-fade-in-up group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image placeholder */}
              <div className="aspect-[16/10] bg-gradient-to-br from-[#EEF4FA] to-[#F4F6F8] flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-xl bg-white shadow-md flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#003366]">{item.category[0]}</span>
                  </div>
                </div>
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-[#E85D04] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-[#333333] mb-3">
                  <CalendarIcon />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-[#003366] mb-2 line-clamp-2 group-hover:text-[#E85D04] transition-colors font-[family-name:var(--font-montserrat)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#333333] line-clamp-3 mb-4">
                  {item.excerpt}
                </p>
                <span className="text-sm font-semibold text-[#E85D04] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <ChevronRightIcon />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="gradient-cta py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[rgba(232,93,4,0.05)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[rgba(0,51,102,0.03)] rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-warm p-8 lg:p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-bold text-[#003366] mb-4 font-[family-name:var(--font-montserrat)]">
            Ready to Partner with Bangladesh&apos;s Leading Distributor?
          </h2>
          <p className="text-lg text-[#333333] mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a retailer looking to expand your product range, a corporate buyer
            seeking reliable supply, or a brand exploring the Bangladesh market — we&apos;re here to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#contact" className="btn-primary animate-pulse-glow">
              Request a Catalog
              <ArrowRightIcon />
            </a>
            <a href="#contact" className="btn-outline">
              Download Corporate Profile
              <DownloadIcon />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#333333]">
            <span className="flex items-center gap-2">
              <CheckBadgeIcon />
              Free catalog for verified businesses
            </span>
            <span className="flex items-center gap-2">
              <CheckBadgeIcon />
              Response within 24 hours
            </span>
            <span className="flex items-center gap-2">
              <CheckBadgeIcon />
              No obligation consultation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#003366] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E85D04] to-[#FF7A2F] flex items-center justify-center">
                <span className="text-white font-bold text-lg font-[family-name:var(--font-montserrat)]">G</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg block font-[family-name:var(--font-montserrat)]">GOAL</span>
                <span className="text-white/60 text-[10px] block font-[family-name:var(--font-open-sans)]">Global Office Automation Ltd.</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Bangladesh&apos;s leading stationery and office supplies distributor,
              representing world-class brands across all 64 districts.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#E85D04] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#E85D04] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#E85D04] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 font-[family-name:var(--font-montserrat)]">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Our Brands", "Products", "Distribution Network", "Case Studies", "Careers"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-[#E85D04] transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-white mb-4 font-[family-name:var(--font-montserrat)]">Product Categories</h4>
            <ul className="space-y-2">
              {["Writing Instruments", "Art Supplies", "Calculators & Electronics", "Office Supplies", "School Supplies"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-[#E85D04] transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 className="font-bold text-white mb-4 font-[family-name:var(--font-montserrat)]">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <span className="text-[#E85D04] mt-0.5 shrink-0"><MapPinIcon /></span>
                <span>Jahir Smart Tower, 205/1/A, West Kafrul, Begum Rokeya Sharani, Agargaon, Dhaka-1216</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <span className="text-[#E85D04] shrink-0"><PhoneIcon /></span>
                <a href="tel:+8801234567890" className="hover:text-[#E85D04] transition-colors">+880 1234-567890</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <span className="text-[#E85D04] shrink-0"><MailIcon /></span>
                <a href="mailto:info@globaloffice.com.bd" className="hover:text-[#E85D04] transition-colors">info@globaloffice.com.bd</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <span className="text-[#E85D04] shrink-0"><ClockIcon /></span>
                <span>Sun–Thu, 9:00 AM – 6:00 PM BST</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © 2026 Global Office Automation Ltd. (GOAL). A Sister Concern of SMART Group. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/50">
            <a href="#" className="hover:text-[#E85D04] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#E85D04] transition-colors">Terms &amp; Conditions</a>
            <a href="#" className="hover:text-[#E85D04] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/8801234567890?text=Hi%20GOAL%2C%20I%20would%20like%20to%20inquire%20about%20your%20products."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}

// =============================================================================
// MAIN PAGE
// =============================================================================

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <BrandShowcase />
        <ValuePropositions />
        <DistributionSection />
        <Testimonials />
        <LatestNews />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
