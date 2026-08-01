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

  // Location: NAP must match Google Business Profile exactly
  streetAddress: "Fedha Plaza, Mpaka Road, Westlands",
  city: "Nairobi",
  addressRegion: "Nairobi County",
  postalCode: "00100",
  country: "Kenya",
  countryCode: "KE",
  region: "KE-110",
  geo: { lat: -1.2582912, lng: 36.8050176 },
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
  facebook: "https://www.facebook.com/abrahamotieno",

  // Headline metrics (do not invent, these stay accurate)
  metrics: [
    { value: "80%", label: "Faster team response", numeric: 80 },
    { value: "200+", label: "Agents onboarded", numeric: 200 },
    { value: "15+", label: "Hours/week reclaimed", numeric: 15 },
    { value: "100%", label: "Project success rate", numeric: 100 },
    { value: "3", label: "Continents served", numeric: 3 },
  ],

  // Role cluster: single source of truth for entity language across pages and schema.
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

  // Clients (logo bar). `logo` is optional, renders the real logo image
  // in a cream card (needed since several logos have opaque white/colored/
  // black backgrounds that would otherwise mismatch or vanish against the
  // dark page); entries without it fall back to styled text. `url` is optional.
  // `status` is "active" (current, ongoing engagement) or "past" (completed
  // engagement) -- drives the About page's Active/Past split. Keep in sync
  // by hand; there is no automatic end-date to derive this from.
  clients: [
    { name: "MSTRpay",                 country: "Sweden", status: "past",   url: "https://mstrpay.com", logo: "/clients/mstrpay.webp" },
    { name: "Pioneer Outsourcing BPO", country: "Kenya",  status: "active", url: "https://pioneeroutsourcingbpo.com", logo: "/clients/pioneer-outsourcing-bpo.webp" },
    { name: "M-KOPA",                  country: "Kenya",  status: "past",   url: "https://m-kopa.com", logo: "/clients/m-kopa.webp" },
    { name: "OKash Kenya",             country: "Kenya",  status: "past",   url: "https://okash.co.ke", logo: "/clients/okash.webp" },
    { name: "Generation Kenya",        country: "Kenya",  status: "past",   url: "https://kenya.generation.org", logo: "/clients/generation-kenya.webp" },
    { name: "Fundis",                   country: "Kenya",  status: "past",   url: "https://fundis.co.ke/", logo: "/clients/fundis.webp" },
    { name: "Resolv",                   country: "Kenya",  status: "past",   url: "https://useresolv.com/", logo: "/clients/resolv.webp" },
    { name: "Hundred Acre Wood Holdings", country: "Kenya", status: "active", url: "https://www.linkedin.com/in/jai-pandit-/", logo: "/clients/hundred-acre-wood-holdings.webp" },
    { name: "Auto Audit Group",        country: "Kenya",  status: "active", url: "https://autoauditgroup.com", logo: "/clients/auto-audit-group.webp" },
    { name: "Q360",                    country: "Kenya",  status: "active", url: "https://autoauditgroup.com/companies/", logo: "/clients/q360.webp" },
    { name: "Axios",                   country: "Kenya",  status: "active", url: "https://autoauditgroup.com/companies/", logo: "/clients/axios.webp" },
    { name: "Dotify",                  country: "Kenya",  status: "active", url: "https://autoauditgroup.com/companies/", logo: "/clients/dotify.webp" },
    { name: "Jivan Wellness",          country: "Kenya", status: "active", url: "https://jivanwellness.life", logo: "/clients/jivan-wellness.webp" },
    { name: "Gregory Swarn Enterprises", country: "USA", status: "active", url: "https://gregoryswarnenterprises.com", logo: "/clients/gregory-swarn.webp" },
    { name: "Epena Law",                 country: "United Kingdom", status: "active", url: "https://epena-law.com/", logo: "/clients/epena-law.webp" },
  ],

  // Real testimonials, sourced verbatim from verified Google Business Profile
  // reviews (business.google.com, checked 2026-07-31). Company attributed only
  // where the reviewer stated it themselves in the review text; otherwise
  // source: "google" renders a Google Review badge instead of a fake company
  // name. First-name-only display per Abraham's request (Ruth and Purity are
  // the reviewers' preferred first names, per Abraham -- the Google display
  // names read "Bosibori Ruth" / "Mwema Purity"). Purity left a 5-star rating
  // with no written text, so she's rating-only (no quote). Photos are real
  // (Abraham-provided, cropped/converted to grayscale); `photo` is the path
  // stem under /testimonials/ -- both .jpg and .webp exist for each.
  testimonials: [
    {
      author: "Alex",
      title: "",
      company: "",
      source: "google",
      initial: "A",
      photo: "/testimonials/alex",
      quote:
        "Abraham is highly professional, organized, and dependable. He demonstrates excellent communication, attention to detail, and a strong ability to keep operations running smoothly. I highly recommend his services to anyone looking for a reliable Executive Assistant or Chief of Staff.",
      rating: 5,
      datePublished: "2026-07-28",
    },
    {
      author: "Janet",
      title: "",
      company: "",
      source: "google",
      initial: "J",
      photo: "/testimonials/janet",
      quote:
        "Working with Abraham was a great experience. Professional, responsive and highly organized. He helped me optimize my LinkedIn presence and made the entire process smooth and efficient. Highly recommended.",
      rating: 5,
      datePublished: "2026-07-28",
    },
    {
      author: "Greg",
      title: "",
      company: "Gregory Swarn Enterprises",
      source: "google",
      initial: "G",
      photo: "/testimonials/greg",
      quote:
        "I can't recommend Abraham highly enough! He is an exceptional Administrative Assistant with executive-level professionalism, incredible organizational skills, and a genuine commitment to excellence. He goes above and beyond, anticipates needs before they arise, and keeps everything running seamlessly.",
      rating: 5,
      datePublished: "2026-07-27",
    },
    {
      author: "Ruth",
      title: "",
      company: "",
      source: "google",
      initial: "R",
      photo: "/testimonials/ruth",
      quote:
        "Abraham is a highly skilled market research professional with a deep understanding of the Nairobi market and the broader East African region. His insights are practical, well-researched, and aligned with market realities. If you are looking for a trusted executive partner who brings both strategic thinking and execution excellence, Abraham is the person to go to.",
      rating: 5,
      datePublished: "2026-06-19",
    },
    {
      author: "Atinda",
      title: "",
      company: "Pioneer Outsourcing BPO",
      source: "google",
      initial: "A",
      photo: "/testimonials/atinda",
      quote:
        "What stands out most about Abraham is his commitment to people. He doesn't just build businesses, he builds confidence, develops talent, and creates an environment where others can succeed. Working with him at Pioneer Outsourcing was a truly rewarding experience.",
      rating: 5,
      datePublished: "2026-06-19",
    },
    {
      author: "Gordon",
      title: "",
      company: "",
      source: "google",
      initial: "G",
      photo: "/testimonials/gordon",
      quote:
        "Abraham brought both sharp market research and solid operational support to our work together. He came prepared, asked the right questions, and delivered structured insights that actually moved things forward. A reliable partner you can trust to get things done right.",
      rating: 5,
      datePublished: "2026-06-19",
    },
    {
      author: "Purity",
      title: "",
      company: "",
      source: "google",
      initial: "P",
      photo: "/testimonials/purity",
      quote: "",
      ratingOnly: true,
      rating: 5,
      datePublished: "2026-07-27",
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

  // Role landing pages: used by footer + internal-link hubs
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
    { url: "/remote-executive-assistant-africa/", label: "Remote EA, Africa" },
    { url: "/hire-executive-assistant-nairobi/", label: "Hire EA in Nairobi" },
  ],

  // Form integration
  formspreeId: "mpqkbaaj",
  formspreeUrl: "https://formspree.io/f/mpqkbaaj",

  // Build metadata
  buildDate: new Date().toISOString(),
};
