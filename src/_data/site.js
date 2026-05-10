module.exports = {
  // Identity
  name: "Abraham Otieno",
  role: "Executive Assistant & Virtual Chief of Staff",
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

  // Past clients (logo bar) — for Organization schema
  clients: [
    { name: "MSTRpay", country: "Sweden", file: "mstrpay" },
    { name: "Pioneer Outsourcing BPO", country: "Kenya", file: "pioneer" },
    { name: "M-KOPA", country: "Kenya", file: "mkopa" },
    { name: "OKash Kenya", country: "Kenya", file: "okash" },
    { name: "Generation Kenya", country: "Kenya", file: "generation-kenya" },
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
    { url: "/services/", label: "Services", key: "services" },
    { url: "/portfolio/", label: "Portfolio", key: "portfolio" },
    { url: "/case-studies/", label: "Case Studies", key: "case-studies" },
    { url: "/contact/", label: "Contact", key: "contact" },
    { url: "/booking/", label: "Book a call", key: "booking", primary: true },
  ],

  // Form integration
  formspreeId: "mpqkbaaj",
  formspreeUrl: "https://formspree.io/f/mpqkbaaj",

  // Build metadata
  buildDate: new Date().toISOString(),
};
