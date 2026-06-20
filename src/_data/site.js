module.exports = {
  // Identity
  name: "Abraham Otieno",
  role: "Executive Assistant, Chief of Staff & Operations Partner",
  tagline: "Founders focus on growth. I handle the rest.",
  domain: "abrahamotieno.com",
  url: "https://abrahamotieno.com",
  baseUrl: "https://abrahamotieno.com",
  locale: "en_KE",
  hreflang: [
    { code: "en-ke", label: "English (Kenya)" },
    { code: "en", label: "English" },
    { code: "x-default", label: "Default" },
  ],

  // Location
  city: "Nairobi",
  country: "Kenya",
  countryCode: "KE",
  region: "KE-110",
  geo: { lat: -1.2921, lng: 36.8219 },
  serviceAreas: [
    "Nairobi, Kenya",
    "East Africa",
    "Stockholm, Sweden",
    "United States",
    "European Union",
    "Africa",
    "Worldwide",
  ],

  // Contact
  email: "hello@abrahamotieno.com",
  phone: "+254757272468",
  phoneDisplay: "+254 757 272 468",
  whatsapp: "https://wa.me/254757272468",
  whatsappShort: "https://wa.link/tnusf3",
  linkedin: "https://linkedin.com/in/abraham-otieno-665678317",
  upwork: "https://www.upwork.com/freelancers/~016468049604acd788",

  // Headline metrics (do not invent — these stay accurate)
  metrics: [
    { value: "80%", label: "Faster team response", numeric: 80 },
    { value: "200+", label: "Agents onboarded", numeric: 200 },
    { value: "15+", label: "Hours/week reclaimed", numeric: 15 },
    { value: "100%", label: "Project success rate", numeric: 100 },
    { value: "3", label: "Continents served", numeric: 3 },
  ],

  // Role cluster — single source of truth for entity language across pages and schema.
  // Every role a hiring decision-maker might search for.
  roles: [
    "Executive Assistant",
    "Virtual Executive Assistant",
    "Executive Assistant to CEO",
    "Executive Assistant to Founders",
    "Chief of Staff",
    "Virtual Chief of Staff",
    "Fractional Chief of Staff",
    "Operations Manager",
    "Remote Operations Manager",
    "Operations Partner",
    "Fractional Operations Partner",
    "Executive Business Partner",
    "Business Operations Lead",
    "Startup Operations Lead",
  ],

  // Past clients (logo bar) — rendered as styled text, no external logo API.
  // `url` is optional; entries without it render as plain text (awaiting confirmed website).
  clients: [
    { name: "MSTRpay",                 country: "Sweden", url: "https://mstrpay.com" },
    { name: "Pioneer Outsourcing BPO", country: "Kenya",  url: "https://pioneeroutsourcingbpo.com" },
    { name: "M-KOPA",                  country: "Kenya",  url: "https://m-kopa.com" },
    { name: "OKash Kenya",             country: "Kenya",  url: "https://okash.co.ke" },
    { name: "Generation Kenya",        country: "Kenya",  url: "https://kenya.generation.org" },
    { name: "Auto Audit Group",        country: "Kenya",  url: "https://autoauditgroup.com" },
    { name: "Q360",                    country: "Kenya",  url: "https://autoauditgroup.com/companies/" },
    { name: "Axios",                   country: "Kenya",  url: "https://autoauditgroup.com/companies/" },
    { name: "Dotify",                  country: "Kenya",  url: "https://autoauditgroup.com/companies/" },
    { name: "Jivan Wellness",          country: "Kenya" },
    { name: "100 Acre Wood",           country: "Kenya" },
    { name: "Gregory Swarn Enterprises", country: "Kenya" },
  ],

  // Real testimonials only — provided by user
  testimonials: [
    {
      author: "Mathew",
      title: "Lead of Operations",
      company: "Generation Kenya",
      initial: "M",
      quote:
        "Abraham's exceptional coordination skills transformed our team dynamics. His ability to facilitate clear, effective communication between our stakeholders and CEO streamlined our operations significantly. He brings not just task execution, but strategic thinking to every project.",
      rating: 5,
      datePublished: "2025-09-01",
    },
    {
      author: "Abdul",
      title: "CEO",
      company: "Insight BPO",
      initial: "A",
      quote:
        "Working with Abraham during our service transition was remarkably smooth. His strategic planning and meticulous execution made what could have been a complex absorption process effortless. He anticipates challenges and comes prepared with solutions.",
      rating: 5,
      datePublished: "2025-07-15",
    },
    {
      author: "Salome",
      title: "Lead of Partnerships",
      company: "Dial Africa",
      initial: "S",
      quote:
        "Abraham's professionalism and collaborative approach made our partnership coordination exceptionally smooth. His attention to detail and responsive communication ensured our initiatives were executed flawlessly. He's more than an assistant; he's a true operations partner.",
      rating: 5,
      datePublished: "2025-10-10",
    },
  ],

  // Primary navigation
  nav: [
    { url: "/", label: "Home", key: "home" },
    { url: "/about/", label: "About", key: "about" },
    { url: "/services/", label: "Services", key: "services" },
    { url: "/portfolio/", label: "Portfolio", key: "portfolio" },
    { url: "/case-studies/", label: "Case Studies", key: "case-studies" },
    { url: "/blog/", label: "Blog", key: "blog" },
    { url: "/hire-me/", label: "Hire Me", key: "hire-me" },
    { url: "/booking/", label: "Book a call", key: "booking", primary: true },
  ],

  // Role landing pages — used by footer + internal-link hubs
  rolePages: [
    { url: "/executive-assistant-kenya/", label: "Executive Assistant Kenya" },
    { url: "/virtual-executive-assistant/", label: "Virtual Executive Assistant" },
    { url: "/executive-assistant-to-ceo/", label: "Executive Assistant to CEO" },
    { url: "/ea-to-founders/", label: "EA to Founders & Startup CEOs" },
    { url: "/chief-of-staff-kenya/", label: "Chief of Staff Kenya" },
    { url: "/virtual-chief-of-staff/", label: "Virtual Chief of Staff" },
    { url: "/fractional-chief-of-staff/", label: "Fractional Chief of Staff" },
    { url: "/operations-manager-kenya/", label: "Operations Manager Kenya" },
    { url: "/operations-partner/", label: "Fractional Operations Partner" },
    { url: "/executive-business-partner/", label: "Executive Business Partner" },
    { url: "/remote-executive-assistant-africa/", label: "Remote EA — Africa" },
    { url: "/hire-executive-assistant-nairobi/", label: "Hire EA in Nairobi" },
  ],

  // Form integration
  formspreeId: "mpqkbaaj",
  formspreeUrl: "https://formspree.io/f/mpqkbaaj",

  // Build metadata
  buildDate: new Date().toISOString(),
};
