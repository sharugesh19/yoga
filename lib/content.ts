import {
  Award,
  CalendarDays,
  Dumbbell,
  Flower2,
  Heart,
  HeartHandshake,
  Laptop,
  MapPin,
  Shield,
  Sparkles,
  Star,
  Users,
  UsersRound,
  Video,
} from "lucide-react";

// ─── Site / NAP ──────────────────────────────────────────────────────────────
export const site = {
  name: "Mokshaa Yoga",
  url: "https://mokshaayoga.in",

  // Primary contact — S. Maheswari (Founder & Director) — matches GBP listing
  phone: "9962090996",
  phoneFormatted: "996 2090 996",
  phoneHref: "tel:+919962090996",
  phoneName: "S. Maheswari",
  phoneTitle: "Founder & Director",

  // Secondary contact — S. Satheesh (Co-Founder & MD)
  phone2: "9962080996",
  phone2Formatted: "996 2080 996",
  phone2Href: "tel:+919962080996",
  phone2Name: "S. Satheesh",
  phone2Title: "Co-Founder & MD",

  // WhatsApp — using primary number until WhatsApp Business number confirmed
  whatsapp: "https://wa.me/919962090996",

  email: "hello@mokshaayoga.in",

  // Confirmed full address — NAP authoritative (source: addendum v2)
  address: "122, Sri Kapaleeswarar Nagar North, 2nd North Cross Street, Neelankarai, Chennai – 600115, Tamil Nadu, India",
  addressShort: "Neelankarai, Chennai – 600115",
  area: "Neelankarai",
  city: "Chennai",
  state: "Tamil Nadu",
  pincode: "600115",

  // Approximate coordinates for Neelankarai (exact pin TBD from client)
  coordinates: { lat: 12.8994, lng: 80.2542 },

  // Social — @mokshaa_yoga canonical handle
  instagram: "https://www.instagram.com/mokshaa_yoga",
  facebook: "https://www.facebook.com/mokshaa_yoga",
  instagramHandle: "@mokshaa_yoga",

  // OG image
  ogImage: "https://mokshaayoga.in/logo.png",

  // Hours
  hours: ["Monday–Saturday: 6:00 AM – 8:00 PM", "Sunday: By workshop schedule only"],

  // Brand taglines — confirmed client-approved copy (do not alter)
  taglinePrimary: "Elevate Your Inner World",
  taglineHero: "Strengthen Body · Calm Mind · Energize Life",
  taglineSub: "Your Health. Your Peace. Your Journey. We're with You Every Step!",
  taglineCta: "Join Today. Transform Forever!",
  taglineTrust: "Expert Instructors | Personal Attention | Safe & Hygienic Environment | Flexible Timings",
} as const;

// ─── Navigation ──────────────────────────────────────────────────────────────
export const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Classes", "/classes"],
  ["Schedule", "/schedule"],
  ["Pricing", "/pricing"],
  ["Instructors", "/instructors"],
  ["Contact", "/contact"],
] as const;

// ─── Certifications / Trust badges ───────────────────────────────────────────
export const certifications = [
  { name: "ISO 9001:2015", detail: "Certified Quality Management", icon: Shield },
  { name: "E-RYT 500", detail: "Yoga Alliance USA", icon: Award },
  { name: "YACEP", detail: "Continuing Education Provider", icon: Star },
  { name: "MSME Registered", detail: "Government of India", icon: Award },
] as const;

// ─── Classes — 7 confirmed types ─────────────────────────────────────────────
export const classes = [
  {
    slug: "group-yoga",
    title: "Group Yoga Classes",
    level: "All Levels",
    duration: "60 min",
    icon: UsersRound,
    keyword: "group yoga classes in Chennai",
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=1200&q=80",
    alt: "Group yoga class in Chennai at Mokshaa Yoga studio, Neelankarai",
    summary: "Small-group sessions blending Hatha foundations, breathwork and mindful mobility — beginner-friendly with real individual attention in every class.",
    body: "Our group yoga classes in Chennai are structured to welcome students at every level — from your very first class to a seasoned practice. Each session runs 60 minutes and weaves together asana (posture work), pranayama (breathwork) and a brief closing meditation. Class sizes are kept small so every student receives genuine guidance rather than being lost in a crowd. Morning and evening batches available Monday through Saturday at our Neelankarai studio.",
    whatToExpect: [
      "Warm-up sequence → standing postures → floor work → savasana",
      "Verbal cues plus physical assists for safe alignment",
      "A short pranayama (breathing) practice in every session",
    ],
    whoIsItFor: "Beginners, working professionals, anyone returning to movement after a gap — or experienced practitioners who want a consistent, well-structured practice.",
    seoTitle: "Group Yoga Classes in Chennai | Mokshaa Yoga, Neelankarai",
    seoDescription: "Join beginner-friendly group yoga classes in Chennai at Mokshaa Yoga, Neelankarai. Morning & evening batches, expert instructors, ISO 9001 certified studio.",
  },
  {
    slug: "ladies-yoga",
    title: "Exclusive Ladies Class",
    level: "Women Only",
    duration: "60 min",
    icon: Heart,
    keyword: "ladies yoga class Chennai",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1200&q=80",
    alt: "Exclusive ladies-only yoga class at Mokshaa Yoga, Chennai",
    summary: "A private, comfortable space designed exclusively for women — a focused, judgment-free environment to build practice at your own pace.",
    body: "Our Exclusive Ladies Class is designed to give women a completely comfortable and private environment for their yoga practice. Many women prefer a women-only space, especially when starting yoga for the first time or returning after pregnancy. Sessions focus on strength, flexibility, stress relief and a calm community of like-minded women. This class is particularly popular among working women in Chennai who value both the physical practice and the supportive group dynamic it creates.",
    whatToExpect: [
      "Female-only batch — no exceptions",
      "Modifications available for all fitness levels and life stages",
      "Postures for strength, flexibility, core stability and stress relief",
    ],
    whoIsItFor: "Women of all ages — beginners, working professionals, homemakers, post-natal practitioners, and anyone who prefers a women-only learning environment.",
    seoTitle: "Ladies Yoga Classes in Chennai | Women-Only Yoga | Mokshaa Yoga",
    seoDescription: "Exclusive ladies-only yoga classes in Chennai at Mokshaa Yoga, Neelankarai. Safe, comfortable women-only batches. Expert female instructor guidance.",
  },
  {
    slug: "zoom-yoga",
    title: "Zoom Online Class",
    level: "Remote",
    duration: "45–60 min",
    icon: Video,
    keyword: "online yoga classes India",
    image: "https://images.unsplash.com/photo-1593164842249-d74fc06dae05?auto=format&fit=crop&w=1200&q=80",
    alt: "Online yoga class via Zoom with Mokshaa Yoga instructor",
    summary: "Live instructor-led sessions over Zoom — the same quality guidance from Mokshaa Yoga's certified instructors, accessible from anywhere in India.",
    body: "Mokshaa Yoga's online yoga classes via Zoom bring certified, live instruction to your home, office or anywhere in India. These are not recorded videos — every session is live, interactive and corrected in real time by our E-RYT 500 instructors who give verbal cues specific to what they observe on screen. Equipment needed: a yoga mat and enough floor space to extend your arms and legs. Suitable for all levels.",
    whatToExpect: [
      "Live 1-way video guidance with real-time corrections",
      "Structured session: warm-up, main practice, breathing, cool-down",
      "Flexible batch timings — morning and evening available",
    ],
    whoIsItFor: "Students outside Chennai, busy professionals who travel, or anyone who wants to maintain a consistent practice from home without losing the discipline of a live class.",
    seoTitle: "Online Yoga Classes India | Live Zoom Yoga | Mokshaa Yoga",
    seoDescription: "Join live online yoga classes via Zoom with certified E-RYT 500 instructors at Mokshaa Yoga. Available across India. Morning & evening batches.",
  },
  {
    slug: "personal-yoga",
    title: "Personal (1:1) Class",
    level: "Private",
    duration: "60–75 min",
    icon: Dumbbell,
    keyword: "private yoga instructor Chennai",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80",
    alt: "Private one-on-one yoga session with personal instructor at Mokshaa Yoga Chennai",
    summary: "Fully personalised private sessions — your schedule, your goals, your pace. Designed for weight management, injury recovery, therapeutic needs or simply accelerated progress.",
    body: "Personal yoga training at Mokshaa Yoga gives you undivided attention from a certified E-RYT 500 instructor for the entire session. Your teacher builds a programme specifically around your health history, goals, schedule and current fitness level — whether that means therapeutic yoga for back pain, a weight-loss-focused power flow, posture correction, or beginner foundations at a pace that never feels rushed. Available at the studio in Neelankarai or as online 1:1 sessions.",
    whatToExpect: [
      "Initial assessment session — goals, health history, current level",
      "Custom practice plan revised as you progress",
      "Flexible scheduling — book sessions around your calendar",
    ],
    whoIsItFor: "Anyone with specific therapeutic needs, health conditions, weight goals, or anyone who wants faster progress than group classes allow. Also ideal for complete beginners who want a gentle introduction before joining groups.",
    seoTitle: "Private Yoga Instructor Chennai | 1:1 Personal Yoga | Mokshaa Yoga",
    seoDescription: "Personal one-on-one yoga classes in Chennai with certified E-RYT 500 instructors at Mokshaa Yoga, Neelankarai. Custom plans for weight loss, back pain & more.",
  },
  {
    slug: "kids-yoga",
    title: "Kids Class",
    level: "Ages 5–14",
    duration: "45 min",
    icon: Sparkles,
    keyword: "kids yoga classes Chennai",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    alt: "Kids yoga class at Mokshaa Yoga studio in Neelankarai Chennai",
    summary: "Playful, engaging yoga sessions for children — building body awareness, focus, balance and calm through age-appropriate movement and breathing games.",
    body: "Children benefit enormously from yoga — improved concentration, better posture, reduced anxiety, and greater body awareness. Our Kids Yoga classes at Mokshaa Yoga use games, stories and age-appropriate poses to make movement joyful rather than exercise-like. Sessions are supervised by our trained instructors who understand child development and ensure every child feels safe, included and gently challenged. Classes are available for ages 5–14 in dedicated children-only batches.",
    whatToExpect: [
      "Playful warm-up games and breathing exercises",
      "Age-appropriate asana sequences using stories and themes",
      "Focus and concentration games embedded in the flow",
    ],
    whoIsItFor: "Children aged 5–14 — particularly those with restlessness or difficulty focusing, children involved in sport who benefit from flexibility and breath training, or simply kids who want a fun, active after-school activity.",
    seoTitle: "Kids Yoga Classes in Chennai | Children's Yoga | Mokshaa Yoga",
    seoDescription: "Fun, structured yoga classes for kids ages 5–14 in Chennai at Mokshaa Yoga, Neelankarai. Builds focus, flexibility and confidence through playful movement.",
  },
  {
    slug: "senior-yoga",
    title: "Senior Citizen Class",
    level: "Gentle / 55+",
    duration: "45 min",
    icon: Flower2,
    keyword: "yoga for senior citizens Chennai",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
    alt: "Gentle yoga class for senior citizens at Mokshaa Yoga Chennai",
    summary: "Gentle, chair-assisted yoga designed for seniors — improving mobility, joint health, balance and mental clarity at a comfortable, unhurried pace.",
    body: "Yoga is one of the most powerful practices for healthy aging, but seniors need a class that respects their body's specific needs. Our Senior Citizen Yoga at Mokshaa Yoga is specifically designed for students aged 55 and above. We use chair-supported postures, gentle joint warm-ups, balance exercises and slow pranayama sequences that improve mobility, reduce chronic pain, support joint health and boost mental clarity — without any risk of strain or injury. Our instructors are trained in modifications appropriate for this age group.",
    whatToExpect: [
      "Chair-supported and seated postures for safe mobility",
      "Joint warm-up sequences — hips, knees, shoulders, spine",
      "Breathing and meditation for mental clarity and reduced anxiety",
    ],
    whoIsItFor: "Adults aged 55 and above, including those with joint conditions, arthritis, reduced mobility, or those recovering from illness who want a safe and gentle way back into physical activity.",
    seoTitle: "Senior Citizen Yoga Chennai | Gentle Yoga for Elderly | Mokshaa Yoga",
    seoDescription: "Safe, gentle yoga classes for senior citizens in Chennai at Mokshaa Yoga, Neelankarai. Chair-supported, mobility-focused sessions for ages 55+.",
  },
  {
    slug: "prenatal-yoga",
    title: "Pregnant Ladies Class",
    level: "Prenatal",
    duration: "50 min",
    icon: Heart,
    keyword: "prenatal yoga Chennai",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    alt: "Prenatal yoga class for pregnant women at Mokshaa Yoga Chennai",
    summary: "Breath-led, pelvic-safe yoga for expecting mothers — with specific modifications for each trimester taught by an instructor trained in prenatal practice.",
    body: "Prenatal yoga at Mokshaa Yoga is carefully designed for pregnant women, led by our certified instructors with specific training in prenatal methodology. Sessions support the body through pregnancy with trimester-appropriate postures, breathing practices for labour preparation, pelvic floor stability exercises, and deep relaxation techniques that help manage physical discomfort and emotional changes. Medical clearance from your OB-GYN is required before joining. Classes are small and gentle, making each participant feel seen and cared for at every stage of their pregnancy.",
    whatToExpect: [
      "Trimester-specific modifications — safe in all stages with clearance",
      "Pelvic stability, hip opening and breathing for labour preparation",
      "Deep relaxation and restorative postures",
    ],
    whoIsItFor: "Expecting mothers at any trimester who have received medical clearance to exercise. Particularly beneficial for those experiencing back pain, fatigue, swelling and stress during pregnancy.",
    seoTitle: "Prenatal Yoga Classes Chennai | Pregnancy Yoga | Mokshaa Yoga",
    seoDescription: "Certified prenatal yoga classes in Chennai at Mokshaa Yoga, Neelankarai. Trimester-safe, pelvic-focused sessions for expecting mothers. Medical clearance required.",
  },
] as const;

// ─── Instructors ──────────────────────────────────────────────────────────────
export const instructors = [
  {
    slug: "maheswari-satheesh",
    name: "S. Maheswari",
    role: "Yoga Acharya, Founder & Director",
    phone: "996 2090 996",
    phoneHref: "tel:+919962090996",
    image: "/mam.png",
    alt: "S. Maheswari, Founder and Director of Mokshaa Yoga, Neelankarai Chennai",
    specialties: [ "Traditional Hatha Yoga",
  "Women's Health Yoga",
  "Prenatal Yoga",
  "Therapeutic Yoga",
  "Pranayama & Meditation",],
    certifications: [ "Yoga Siromani",
  "Yoga Acharya",
  "E-RYT 500",
  "YACEP",],
    bio: "S. Maheswari is the Founder and Director of Mokshaa Yoga with over 22 years of experience in teaching authentic yoga. She is an E-RYT 500 certified yoga teacher and YACEP recognised by Yoga Alliance USA. Having conducted yoga workshops in India and Japan, she blends traditional Hatha Yoga with therapeutic practices to help students improve their physical health, mental well-being and overall quality of life. She specialises in Prenatal Yoga, Women's Health, Therapeutic Yoga, Pranayama and Meditation.",
    shortBio: "Founder & Director of Mokshaa Yoga with 22+ years of teaching experience. E-RYT 500 | YACEP.",
    experience: "22+ years teaching",
    seoTitle: "S. Maheswari — Certified Yoga Instructor Chennai | Mokshaa Yoga",
    seoDescription: "Meet S. Maheswari, E-RYT 500 certified Founder & Director of Mokshaa Yoga, Neelankarai Chennai. Expert in Hatha, Pranayama & Prenatal yoga.",
  },
  {
    slug: "satheesh-santhanam",
    name: "S. Satheesh",
    role: "Yoga Acharya, Co-Founder & MD",
    phone: "996 2080 996",
    phoneHref: "tel:+919962080996",
    image: "/sir.png",
    alt: "S. Satheesh, Co-Founder and MD of Mokshaa Yoga, Neelankarai Chennai",
    specialties: [ "Traditional Hatha Yoga",
  "Therapeutic Yoga",
  "Back Pain Relief",
  "Corporate Yoga",
  "Pranayama & Meditation",],
    certifications: ["E-RYT 500 — Yoga Alliance USA", "YACEP — Yoga Alliance", "ISO 9001:2015 Certified Studio", "MSME Registered"],
    bio: "S. Satheesh is the Co-Founder and Managing Director of Mokshaa Yoga with over 20 years of teaching experience. An E-RYT 500 certified yoga teacher and YACEP recognised by Yoga Alliance USA, he specialises in Traditional Hatha Yoga, Therapeutic Yoga, Back Pain Relief, Corporate Yoga, Pranayama and Meditation. He has conducted yoga workshops in Japan and volunteered during the 2011 Japan tsunami relief, using yoga as a tool for healing and wellness.",
    shortBio: "Co-Founder & Managing Director of Mokshaa Yoga with 20+ years of teaching experience. E-RYT 500 | YACEP.",
    experience: "20+ years teaching",
    seoTitle: "S. Satheesh — Certified Yoga Instructor Chennai | Mokshaa Yoga",
    seoDescription: "Meet S. Satheesh, E-RYT 500 certified Co-Founder & MD of Mokshaa Yoga, Neelankarai Chennai. Expert in Ashtanga, Power Yoga & Meditation.",
  },
] as const;

// ─── Pricing — Group Classes (confirmed exact data) ───────────────────────────
export const monthlyPlans = [
  { sessions: 20, price: 3500, perSession: 175 },
  { sessions: 12, price: 3000, perSession: 250 },
  { sessions: 8, price: 2500, perSession: 313 },
] as const;

export const multiMonthPlans = [
  {
    id: "3m-12",
    durationMonths: 3,
    sessionsPerMonth: 12,
    totalSessions: 36,
    originalPrice: 9000,
    offerPrice: 7999,
    perSession: 222,
    savings: 1001,
    freeGifts: ["Yoga Strap"],
    validityDays: 90,
    graceDays: 15,
    makeupSessions: 4,
    highlighted: false,
  },
  {
    id: "3m-20",
    durationMonths: 3,
    sessionsPerMonth: 20,
    totalSessions: 60,
    originalPrice: 10500,
    offerPrice: 8999,
    perSession: 150,
    savings: 1501,
    freeGifts: ["Yoga Strap"],
    validityDays: 90,
    graceDays: 15,
    makeupSessions: 4,
    highlighted: false,
  },
  {
    id: "6m-12",
    durationMonths: 6,
    sessionsPerMonth: 12,
    totalSessions: 72,
    originalPrice: 18000,
    offerPrice: 13999,
    perSession: 194,
    savings: 4001,
    freeGifts: ["Yoga Strap", "Eye Wash", "Neti Pot"],
    validityDays: 180,
    graceDays: 30,
    makeupSessions: 8,
    highlighted: false,
  },
  {
    id: "6m-20",
    durationMonths: 6,
    sessionsPerMonth: 20,
    totalSessions: 120,
    originalPrice: 21000,
    offerPrice: 15999,
    perSession: 133,
    savings: 5001,
    freeGifts: ["Yoga Strap", "Eye Wash", "Neti Pot"],
    validityDays: 180,
    graceDays: 30,
    makeupSessions: 8,
    highlighted: true, // Best Value badge
  },
  {
    id: "12m-12",
    durationMonths: 12,
    sessionsPerMonth: 12,
    totalSessions: 144,
    originalPrice: 36000,
    offerPrice: 26999,
    perSession: 187,
    savings: 9001,
    freeGifts: ["Yoga Mat", "Yoga Strap", "Eye Wash", "Neti Pot"],
    validityDays: 365,
    graceDays: 45,
    makeupSessions: 15,
    highlighted: false,
  },
  {
    id: "12m-20",
    durationMonths: 12,
    sessionsPerMonth: 20,
    totalSessions: 240,
    originalPrice: 42000,
    offerPrice: 28999,
    perSession: 121,
    savings: 13001,
    freeGifts: ["Yoga Mat", "Yoga Strap", "Eye Wash", "Neti Pot"],
    validityDays: 365,
    graceDays: 45,
    makeupSessions: 15,
    highlighted: false,
  },
] as const;

export const pricingPolicy = [
  "Missed sessions can be compensated within the grace period after package expiry.",
  "Prior booking is required for make-up classes.",
  "Unused sessions beyond the grace period will lapse.",
] as const;

// ─── Schedule (placeholder — real data needed from client) ────────────────────
export const schedule = [
  ["Monday", "6:00 AM", "Group Yoga Classes", "S. Maheswari", "In-person"],
  ["Monday", "7:00 PM", "Exclusive Ladies Class", "S. Maheswari", "In-person"],
  ["Tuesday", "6:00 AM", "Group Yoga Classes", "S. Satheesh", "In-person"],
  ["Tuesday", "7:00 PM", "Personal (1:1) Class", "S. Satheesh", "In-person"],
  ["Wednesday", "6:00 AM", "Senior Citizen Class", "S. Maheswari", "In-person"],
  ["Wednesday", "10:00 AM", "Pregnant Ladies Class", "S. Maheswari", "In-person"],
  ["Wednesday", "7:00 PM", "Zoom Online Class", "S. Satheesh", "Zoom"],
  ["Thursday", "6:00 AM", "Group Yoga Classes", "S. Satheesh", "In-person"],
  ["Thursday", "7:00 PM", "Kids Class", "S. Maheswari", "In-person"],
  ["Friday", "6:00 AM", "Group Yoga Classes", "S. Maheswari", "In-person"],
  ["Friday", "7:00 PM", "Exclusive Ladies Class", "S. Maheswari", "In-person"],
  ["Saturday", "6:00 AM", "Group Yoga Classes", "S. Satheesh", "In-person"],
  ["Saturday", "8:00 AM", "Personal (1:1) Class", "S. Satheesh", "In-person"],
  ["Saturday", "10:00 AM", "Kids Class", "S. Maheswari", "In-person"],
] as const;

// ─── Testimonials (placeholder — real reviews needed) ─────────────────────────
export const testimonials = [
  {
    quote: "Mokshaa Yoga completely changed my relationship with exercise. I came for weight loss and stayed for the calm and community. Maheswari's teaching is incredibly patient and precise.",
    author: "Priya R.",
    location: "Neelankarai, Chennai",
    rating: 5,
  },
  {
    quote: "As a senior with knee issues, I was nervous about yoga. The Senior Citizen class here is perfectly paced — I've gained so much mobility in just 2 months.",
    author: "Krishnamurthy S.",
    location: "Thiruvanmiyur, Chennai",
    rating: 5,
  },
  {
    quote: "The ladies-only batch is exactly what I needed. A safe, welcoming space where I could start yoga without any self-consciousness. Highly recommend to all women.",
    author: "Divya M.",
    location: "Besant Nagar, Chennai",
    rating: 5,
  },
  {
    quote: "The Zoom classes are genuinely live and interactive — not pre-recorded videos. Satheesh corrects my form during the session itself. It's the real thing.",
    author: "Anand K.",
    location: "Bangalore (Online student)",
    rating: 5,
  },
  {
    quote: "My daughter has been attending Kids Yoga here for 3 months and her focus at school has noticeably improved. The instructors really understand how to engage children.",
    author: "Meenakshi T.",
    location: "Adyar, Chennai",
    rating: 5,
  },
  {
    quote: "I joined the prenatal class in my 2nd trimester. Every session was safe, calming and expertly modified. I've recommended it to every pregnant friend I have.",
    author: "Saranya V.",
    location: "Neelankarai, Chennai",
    rating: 5,
  },
] as const;

// ─── Blog posts ───────────────────────────────────────────────────────────────
export const posts = [
  {
    slug: "best-yoga-classes-beginners-chennai",
    title: "Best Yoga Classes for Beginners in Chennai: A Starter's Guide",
    date: "2026-06-20",
    keyword: "yoga for beginners Chennai",
    excerpt: "Starting yoga in Chennai? Here's what to look for in a beginner-friendly studio, what to expect from your first class, and why choosing the right batch matters.",
    image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=1200&q=80",
    readTime: "5 min read",
  },
  {
    slug: "yoga-for-weight-loss-chennai",
    title: "Yoga for Weight Loss in Chennai: Why Consistency Beats Intensity",
    date: "2026-06-18",
    keyword: "yoga for weight loss Chennai",
    excerpt: "How breath-led strength training, power yoga and mindful eating awareness combine to make yoga one of the most sustainable weight management practices.",
    image: "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?auto=format&fit=crop&w=1200&q=80",
    readTime: "6 min read",
  },
  {
    slug: "hatha-vs-vinyasa-yoga-chennai",
    title: "Hatha vs Vinyasa Yoga: Which Class Should You Try First?",
    date: "2026-06-15",
    keyword: "Hatha yoga Chennai",
    excerpt: "A clear guide for new students deciding between Hatha's steady alignment focus and Vinyasa's flowing movement sequences — and what each feels like in practice.",
    image: "https://images.unsplash.com/photo-1593810450967-f9c42742e326?auto=format&fit=crop&w=1200&q=80",
    readTime: "4 min read",
  },
  {
    slug: "prenatal-yoga-benefits-chennai",
    title: "Prenatal Yoga in Chennai: What Every Expecting Mother Should Know",
    date: "2026-06-10",
    keyword: "prenatal yoga Chennai",
    excerpt: "The benefits of yoga during pregnancy, what makes a certified prenatal class different from a regular one, and how to know if a studio is genuinely trained for this.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    readTime: "5 min read",
  },
  {
    slug: "ladies-yoga-classes-chennai",
    title: "Why Ladies-Only Yoga Classes Work Better for Many Women in Chennai",
    date: "2026-06-05",
    keyword: "ladies yoga class Chennai",
    excerpt: "The case for women-exclusive yoga batches — from comfort and focus to the specific teaching adjustments that make a real difference for female practitioners.",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1200&q=80",
    readTime: "4 min read",
  },
  {
    slug: "yoga-for-seniors-chennai",
    title: "Yoga for Senior Citizens in Chennai: Safe, Gentle and Effective",
    date: "2026-05-30",
    keyword: "yoga for senior citizens Chennai",
    excerpt: "How chair-supported yoga and gentle pranayama help seniors gain mobility, reduce joint pain, improve balance and manage chronic health conditions safely.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
    readTime: "5 min read",
  },
] as const;

// ─── Events (upcoming workshops) ──────────────────────────────────────────────
export const events = [
  {
    date: "2026-07-20",
    title: "Pranayama & Meditation Morning",
    description: "A 90-minute guided breathwork and meditation workshop — open to all levels, no experience needed. Includes a take-home practice guide.",
    spots: 15,
  },
  {
    date: "2026-08-10",
    title: "International Yoga Day Special Session",
    description: "A community practice to celebrate yoga — open class for students and their families, followed by a wellness talk by our instructors.",
    spots: 30,
  },
  {
    date: "2026-09-14",
    title: "Beginner Foundations Weekend",
    description: "Two-day intensive introduction to alignment, breath and home practice design — ideal for anyone who has tried yoga and wants a solid foundation.",
    spots: 12,
  },
] as const;

// ─── Values / Why Mokshaa ─────────────────────────────────────────────────────
export const values = [
  {
    title: "ISO 9001:2015 Certified",
    text: "We are one of very few yoga studios in Chennai to hold ISO 9001:2015 certification — a quality assurance standard that means our teaching methodology and studio operations are formally audited.",
    icon: Shield,
  },
  {
    title: "E-RYT 500 Instructors",
    text: "Both founders hold the E-RYT 500 credential from Yoga Alliance USA — the highest internationally recognised teaching qualification in yoga, awarded after 500+ hours of certified training and teaching experience.",
    icon: Award,
  },
  {
    title: "7 Class Formats",
    text: "Group, Ladies-only, Prenatal, Kids, Senior Citizen, Personal 1:1, and live Zoom — a structured class for every life stage and goal, taught with consistent care.",
    icon: Users,
  },
  {
    title: "Flexible Batches",
    text: "Morning and evening batches Monday through Saturday, Zoom classes for remote students, and personal training slots built around your schedule — not the other way around.",
    icon: CalendarDays,
  },
] as const;

// ─── Gallery images ───────────────────────────────────────────────────────────
export const gallery = [
  { src: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=900&q=80", alt: "Mokshaa Yoga studio practice session, Neelankarai Chennai", category: "class" },
  { src: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=900&q=80", alt: "Group yoga class at Mokshaa Yoga Chennai", category: "class" },
  { src: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=900&q=80", alt: "Ladies yoga class at Mokshaa Yoga studio", category: "class" },
  { src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80", alt: "Senior yoga practice at Mokshaa Yoga Neelankarai", category: "class" },
  { src: "https://images.unsplash.com/photo-1593164842249-d74fc06dae05?auto=format&fit=crop&w=900&q=80", alt: "Online Zoom yoga class at Mokshaa Yoga", category: "online" },
  { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80", alt: "Early morning yoga practice in natural light", category: "studio" },
] as const;

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const faqItems = [
  {
    q: "What yoga classes do you offer at Mokshaa Yoga?",
    a: "We offer 7 class types: Group Yoga Classes, Exclusive Ladies Class, Zoom Online Class, Personal (1:1) Class, Kids Class (ages 5–14), Senior Citizen Class (55+), and Pregnant Ladies Class (prenatal yoga). We also run periodic workshops and events.",
  },
  {
    q: "Are your classes suitable for complete beginners?",
    a: "Absolutely. Our Group Yoga Classes and all specialist batches are designed to welcome beginners. Instructors provide individual modifications so no student is left behind. We recommend starting with a free trial class to find the batch that suits you best.",
  },
  {
    q: "How do I book a free trial class?",
    a: "Call or WhatsApp us on 996 2090 996 (Maheswari) or 996 2080 996 (Satheesh), or use the contact form on this website. Our team will confirm the timing and batch that works best for your schedule.",
  },
  {
    q: "Where is Mokshaa Yoga located?",
    a: "We are at 122, Sri Kapaleeswarar Nagar North, 2nd North Cross Street, Neelankarai, Chennai – 600115. Neelankarai is on the ECR corridor, close to Thiruvanmiyur, Besant Nagar and Adyar.",
  },
  {
    q: "What are your class timings?",
    a: "Morning batches begin at 6:00 AM and evening batches at 7:00 PM, Monday through Saturday. Some specialised classes (prenatal, seniors, kids) have mid-morning slots. Call us for the current batch schedule.",
  },
  {
    q: "How much do yoga classes cost?",
    a: "Group class plans start at ₹2,500/month (8 sessions). Our 1-month plans go from ₹2,500 to ₹3,500 depending on session frequency. Multi-month packages (3, 6, 12 months) offer significantly better per-session rates plus free gifts. Pricing for personal, kids, senior and online classes is available on request.",
  },
  {
    q: "What is the Exclusive Ladies Class?",
    a: "This is a women-only yoga batch designed for students who prefer a private, all-female environment. The class covers the same quality of Hatha yoga teaching as our group classes but in a space where women of all ages can practise comfortably without self-consciousness.",
  },
  {
    q: "Do you offer online yoga classes?",
    a: "Yes — we run live Zoom yoga classes with real-time instruction and corrections, available to students anywhere in India. These are interactive live sessions, not pre-recorded videos.",
  },
  {
    q: "Is prenatal yoga safe during pregnancy?",
    a: "Prenatal yoga, when taught by a trained instructor, is safe and beneficial throughout pregnancy. We require medical clearance from your OB-GYN before joining. Our prenatal classes are taught by S. Maheswari, who has specific training in prenatal methodology.",
  },
  {
    q: "What qualifications do your instructors hold?",
    a: "Both our founding instructors hold the E-RYT 500 certification from Yoga Alliance USA — the highest internationally recognised yoga teaching credential. Our studio is also ISO 9001:2015 certified and MSME registered with the Government of India.",
  },
  {
    q: "What should I bring to my first class?",
    a: "Comfortable, breathable clothing that allows full range of movement. We have yoga mats available at the studio. If you'd prefer your own mat, bring it along. Arrive 5–10 minutes early to introduce yourself to the instructor.",
  },
  {
    q: "Do you have make-up sessions if I miss a class?",
    a: "Yes. Our multi-month packages include make-up session provisions (4 sessions for 3-month plans, 8 for 6-month, 15 for 12-month), subject to prior booking and within the grace period after your plan expires.",
  },
] as const;

// ─── Quick links (mobile CTA bar / footer shortcuts) ─────────────────────────
export const quickLinks = [
  { label: "Book Trial", href: "/contact", icon: Sparkles },
  { label: "WhatsApp", href: site.whatsapp, icon: HeartHandshake },
  { label: "Find Us", href: "/contact", icon: MapPin },
] as const;

// ─── Trust stats (animated counters on home) ──────────────────────────────────
export const trustStats = [
   { value: "22+", label: "Years of Experience" },
  { value: "1000+", label: "Students Guided" },
  { value: "7", label: "Specialized Classes" },
  { value: "E-RYT 500", label: "Certified Instructors" },
] as const;
