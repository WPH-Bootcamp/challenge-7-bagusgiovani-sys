// NAVBAR
export type NavBar = {
  label: string;
  href: string;
};


export const Nav_Bar: NavBar[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

// COMPANY LOGO

export type TrustedLogo = {
  name: string;
  src: string;
};

export const CompanyLogo: TrustedLogo[] = [
  { name: "Adobe", src: "/assets/company-logo/Company-adobe.svg" },
  { name: "Upwork", src: "/assets/company-logo/Company-upwork.svg" },
  { name: "Zoom", src: "/assets/company-logo/Company-zoom.svg" },
  { name: "Postman", src: "/assets/company-logo/Company-postman.svg" },
  { name: "Databricks", src: "/assets/company-logo/Company-databricks.svg" },
  { name: "Airbnb", src: "/assets/company-logo/Company-airbnb.svg" },
  { name: "Dropbox", src: "/assets/company-logo/Company-dropbox.svg" },
  { name: "Paypall", src: "/assets/company-logo/Company-paypal.svg" },
  { name: "Netflix", src: "/assets/company-logo/Company-netflix.svg" },
];

// END TO END 
export type MetCard = {
  value: string;
  label: string;
};

export const Endborder: MetCard[] = [
  { value: "50+", label: "Projects Delivered" },
  { value: "5+", label: "Years of Experience" },
  { value: "10+", label: "Industry Awards Won" },
  { value: "100%", label: "Client Satisfaction Rate" },
];

// OUR PROCESS

export type ProcessStep = {
  title: string;
  subtitle: string;
};

export const OurProcess: ProcessStep[] = [
  {
    title: "Discovery & Consultation",
    subtitle: "Understand Your Needs & Goals",
  },
  {
    title: "Planning & Strategy",
    subtitle: "Build a Clear, Scalable Roadmap",
  },
  {
    title: "Design & Prototyping",
    subtitle: "Craft UX That Converts",
  },
  {
    title: "Development & Implementation",
    subtitle: "Deliver With Speed & Precision",
  },
  {
    title: "Testing & Optimization",
    subtitle: "Ensure Quality at Every Step",
  },
  {
    title: "Launch & Growth",
    subtitle: "Scale, Measure & Improve Continuously",
  },
];


// SMART IT SOLUTION 

export type SolutionCard = {
  title: string;
  description: string;
  image: string;
};

export const SmartIT: SolutionCard[] = [
  {
    title: "Web Development",
    description: "Build fast, scalable, and SEO-friendly websites.",
    image: "/assets/solutionIT/Icon-web.svg",
  },
  {
    title: "Mobile App Development",
    description: "Native & cross-platform apps tailored to user needs.",
    image: "/assets/solutionIT/Icon-mobile-dev.svg",
  },
  {
    title: "UI/UX Design",
    description: "Delight users with intuitive and beautiful interfaces.",
    image: "/assets/solutionIT/Icon-ui-ux.svg",
  },
  {
    title: "Cloud Solutions",
    description: "Build fast, scalable, and SEO-friendly websites.",
    image: "/assets/solutionIT/Icon-cloud.svg",
  },
  {
    title: "Software Development",
    description: "Custom solutions built around your business logic.",
    image: "/assets/solutionIT/Icon-software.svg",
  },
  {
    title: "IT Infrastructure",
    description: "Scale your backend with reliable tech foundations.",
    image: "/assets/solutionIT/Icon-it.svg",
  },
  {
    title: "Cybersecurity Services",
    description: "Stay protected with enterprise-grade security.",
    image: "/assets/solutionIT/Icon-cyber.svg",
  },
  {
    title: "QA Solutions",
    description: "Ensure performance with rigorous testing frameworks.",
    image: "/assets/solutionIT/Icon-qa.svg",
  },
  {
    title: "IT Consulting & Support",
    description: "Make smarter tech decisions with expert guidance.",
    image: "/assets/solutionIT/Icon-it-con.svg",
  },
];

// BUILT FOR YOUR INDUSTRY SECTION

export type IndustrySection = {
  key: "fintech" | "ecommerce" | "healthcare";
  label: string;
  description: string;
  image: string;
};

export const Industry: IndustrySection[] = [
  {
    key: "fintech",
    label: "Fintech",
    description:
      "We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.",
    image: "/assets/Industry/industry-finance.svg",
  },
  {
    key: "ecommerce",
    label: "E-Commerce",
    description:
      "Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.",
    image: "/assets/Industry/Industry-ecommerce.svg",
  },
  {
    key: "healthcare",
    label: "Healthcare",
    description:
      "Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.",
    image: "/assets/Industry/Industry-health.svg",
  },
];


// PORTOFOLIO

export type PortoCard = {
  category: string;
  title: string;
  image: string;
};

export const Portofolio: PortoCard[] = [
  {
    category: "Landing Page",
    title: "Portofolio 1",
    image: "/assets/portofolio/Portfolio-1.svg",
  },
  {
    category: "Landing Page",
    title: "Portofolio 2",
    image: "/assets/portofolio/Portfolio-2.svg",
  },
  {
    category: "Landing Page",
    title: "Portofolio 3",
    image: "/assets/portofolio/Portfolio-3.svg",
  },
];

// PARTNER TESTIMONNIAL
export type testi = {
  id: number;
  name: string;
  position: string;
  image: string;
  quote: string;
  vector: string;
};

export const testimonials: testi[] = [
  {
    id: 1,
    name: "John Lee",
    position: "Creative Director at Innovate Corp",
    image: "./assets/testimonial/john.svg",
    quote: "Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.",
    vector: "./assets/testimonial/Vector.svg"
  },
  {
    id: 2,
    name: "Sarah Tan",
    position: "Product Manager at Finovate",
    image: "./assets/testimonial/sarah.svg",
    quote: "The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.",
    vector: "./assets/testimonial/Vector.svg"
  },
  {
    id: 3,
    name: "Emily Chen",
    position: "Marketing Head at Tech Solutions",
    image: "./assets/testimonial/emily.svg",
    quote: "The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.",
    vector: "./assets/testimonial/Vector.svg"
  }
];

// FAQ SECTION

export type FaqSec = {
  id: string;
  question: string;
  answer: string;
};

export const FAQ: FaqSec[] = [
  {
    id: "faq-1",
    question: "What services do you offer?",
    answer:
      "We provide end-to-end digital solutions including web development, mobile app development, UI/UX design, cloud solutions, software development, cybersecurity, QA solutions, and IT consulting.",
  },
  {
    id: "faq-2",
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines depend on scope and complexity. Smaller projects can take a few weeks, while larger, more complex systems may take several months. We always provide a clear timeline before starting.",
  },
  {
    id: "faq-3",
    question: "Do you work with startups or only large companies?",
    answer:
      "We work with startups, scale-ups, and enterprise clients. Our approach is flexible and tailored to match your business stage and goals.",
  },
  {
    id: "faq-4",
    question: "How do you ensure project quality?",
    answer:
      "We follow structured development processes, conduct rigorous testing, and maintain clear communication throughout the project lifecycle to ensure high-quality results.",
  },
  {
    id: "faq-5",
    question: "Can you support our product after launch?",
    answer:
      "Absolutely. We offer ongoing support, maintenance, and optimization services to ensure your product continues to perform and scale effectively after launch.",
  },
];


// CONTACT US 

export type ContactUsSec = {
  id: string;
  name: string;
  value: string;
  label: string;
};

export const ContactUs: ContactUsSec[] = [
  {
    id: "web",
    name: "services",
    value: "web",
    label: "Web Development",
  },
  {
    id: "mobile",
    name: "services",
    value: "mobile",
    label: "Mobile App Development",
  },
  {
    id: "ui",
    name: "services",
    value: "ui",
    label: "UI/UX Design",
  },
  {
    id: "cloud",
    name: "services",
    value: "cloud",
    label: "Cloud Solutions",
  },
  {
    id: "software",
    name: "services",
    value: "software",
    label: "Software Development",
  },
  {
    id: "other",
    name: "services",
    value: "other",
    label: "Other",
  },
];