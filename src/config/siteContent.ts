export interface Offering {
  id: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  duration: string;
  iconName: string;
}

export interface CounselorProfile {
  name: string;
  title: string;
  subtitle: string;
  experienceYears: number;
  phone: string;
  whatsapp: string;
  email: string;
  location: string;
  bio: string[];
  coreBelief: string;
  credentials: string[];
  photoUrl: string;
}

export interface LaunchConfig {
  eventName: string;
  eventSubtitle: string;
  sacredLocation: string;
  defaultLaunchTimestamp: string;
  blessingTextBalaji: string;
  slokaBalaji: string;
  slokaBalajiMeaning: string;
  blessingTextMahadev: string;
  slokaMahadev: string;
  slokaMahadevMeaning: string;
}

export const siteContent = {
  // 1. Counselor Brand & Profile
  counselor: {
    name: "Acharya Meera Sharma",
    title: "Compassionate Counselor & Life Mentor",
    subtitle: "A Patient Listener • Empathetic Guide • Calming Presence",
    experienceYears: 12,
    phone: "+91 98765 43210",
    whatsapp: "919876543210",
    email: "sanctum.counseling@gmail.com",
    location: "Tirupati / Bengaluru & Online Worldwide",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
    coreBelief: "Most people do not need lectures or judgment. They simply need someone genuine to listen to their pain, understand their dilemma, and offer gentle, practical guidance with positive energy.",
    bio: [
      "In a world where everyone is busy talking and judging, finding someone who genuinely listens with complete patience is rare. Acharya Meera provides a safe, confidential sanctuary for anyone dealing with life's heavy phases, emotional exhaustion, relationship friction, or personal confusion.",
      "Every session is grounded in empathy, mutual respect, and positive calming vibrations. Whether you need to unload what's been choking inside your chest, need grounded perspective on a hard decision, or simply want to feel lighter and peaceful again, you will be heard with wholehearted care."
    ],
    credentials: [
      "12+ Years of Compassionate Counseling & Life Mentorship",
      "Over 3,500+ One-on-One Confidential Listening Sessions",
      "Specialized in Relationship, Career Anxiety & Life Crossroads",
      "Certified in Modern Psychological Counseling & Vedic Life Philosophy"
    ]
  } as CounselorProfile,

  // 2. Tirupati Tirumala Sacred Launch Config
  launch: {
    eventName: "Auspicious Global Sanctum Launch",
    eventSubtitle: "Consecrated Under the Divine Gaze of the Seven Hills",
    sacredLocation: "Sri Venkateswara Swamy Sannidhi, Tirupati Tirumala",
    defaultLaunchTimestamp: "2026-11-07T06:00:00+05:30",
    blessingTextBalaji: "May Lord Venkateswara, the granter of peace and dispeller of Kalyug hardships, bless your heart with relief, clarity, and courage to overcome every obstacle.",
    slokaBalaji: "काल्याणाद्भुत गात्राय कामितार्थ प्रदायिने । श्रीमद् वेङ्कटनाथाय श्रीनिवासाय ते नमः ॥",
    slokaBalajiMeaning: "Obeisance to Sri Srinivasa (Lord Venkateswara), whose form is auspicious and miraculous, and who bestows strength and cherished peace upon all seekers.",
    blessingTextMahadev: "May Lord Mahadev, the tranquil master of meditation, dissolve your mental turbulence, grant calmness to your restless thoughts, and fill your space with peaceful energy.",
    slokaMahadev: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् । उर्वारुकमिव बन्धनान्मृत्य pushyate स्वाहा ॥",
    slokaMahadevMeaning: "We revere the Great Auspicious One, the giver of health and inner calm. May He liberate our minds from anxiety and bring serene peace."
  } as LaunchConfig,

  // 3. Counseling & Guidance Focus Areas (Grounded, relatable, NO esoteric packages)
  offerings: [
    {
      id: "deep-listening",
      title: "Soulful Listening & Unloading",
      tagline: "Pour your heart out in 100% confidence — zero judgment, zero interruptions",
      description: "When worries pile up, keeping them inside feels like carrying a heavy stone. Here, you have a patient, empathetic human being who listens unconditionally to everything on your mind, giving your thoughts the space they deserve.",
      benefits: [
        "Immediate emotional relief and release of pent-up stress",
        "A completely judgment-free and safe listening environment",
        "No unsolicited preaching or hasty dismissals",
        "100% sacred privacy and strict confidentiality"
      ],
      duration: "45 - 60 Minutes",
      iconName: "Ear"
    },
    {
      id: "life-crossroads",
      title: "Life Crossroads & Decision Clarity",
      tagline: "Unraveling confusion in career, personal crossroads, and difficult choices",
      description: "Feeling paralyzed between options or lost in life direction? We calmly break down your thoughts, sort through emotional noise, and help you see your path ahead with practical, grounded wisdom.",
      benefits: [
        "Clarity on complicated dilemmas and tough choices",
        "Unbiased, objective guidance focused on your long-term peace",
        "Step-by-step practical steps for what to do next",
        "Regaining self-confidence and mental focus"
      ],
      duration: "60 Minutes",
      iconName: "Compass"
    },
    {
      id: "relationship-support",
      title: "Relationship & Family Guidance",
      tagline: "Navigating heartbreak, misunderstandings, expectations, and difficult conversations",
      description: "Relationships can bring the deepest joy and the deepest hurt. Whether you are dealing with communication breakdowns, separation pain, or family friction, we help you understand the dynamics and find inner peace.",
      benefits: [
        "Perspective on emotional conflicts and recurring arguments",
        "Healing from heartbreak, neglect, or broken trust",
        "Healthy communication boundaries and realistic expectations",
        "Finding emotional balance when situations cannot change"
      ],
      duration: "60 Minutes",
      iconName: "Heart"
    },
    {
      id: "calm-reassurance",
      title: "Overthinking & Stress Reassurance",
      tagline: "Calming mental chatter, soothing anxiety, and regaining restful sleep",
      description: "When the mind won't stop racing with 'what-ifs', you need positive reassuring energy to ground yourself. We guide you out of the spiral of worry back into present-moment calm.",
      benefits: [
        "Quietening repetitive overthinking loops and mental fatigue",
        "Positive, uplifting energy that restores your inner confidence",
        "Simple grounding practices you can use during stressful moments",
        "Reconnecting with a peaceful, good vibe for your day"
      ],
      duration: "45 Minutes",
      iconName: "Sparkles"
    }
  ] as Offering[],

  // 4. Vibes & Energy Philosophy (Relatable, positive atmosphere, NO esoteric chakras)
  vibePhilosophy: {
    headline: "The Role of Positive Vibes & Calming Energy",
    subheadline: "Why talking to the right person makes your entire mind and heart feel lighter",
    points: [
      {
        title: "The Energy of a Calm Listener",
        description: "When you talk to someone agitated or impatient, your stress increases. But in the presence of someone truly calm, patient, and grounded, your own nervous system relaxes and feels safe.",
        significance: "Calming Presence"
      },
      {
        title: "Words Carry Weight and Vibration",
        description: "Harsh words drain energy; gentle, respectful, and understanding words restore hope. Our conversations are infused with warmth, encouragement, and respectful positive energy.",
        significance: "Positive Reassurance"
      },
      {
        title: "Emotional Release Brings Lightness",
        description: "Carrying unexpressed sorrow or anger is a heavy burden. The simple act of speaking honestly in a safe space lifts an invisible weight off your shoulders, renewing your spirits.",
        significance: "Heartfelt Catharsis"
      }
    ]
  },

  // 5. Relatable Emotional Check (NO esoteric chakras)
  quizData: {
    title: "What Has Been Weighing On Your Mind?",
    subtitle: "Take 30 seconds to reflect on what you need support with today",
    questions: [
      {
        id: 1,
        question: "What is the primary burden you are carrying right now?",
        options: [
          { text: "My heart is heavy with unspoken sadness, grief, or loneliness", recommendation: "deep-listening" },
          { text: "I'm confused about a major life choice or career crossroad", recommendation: "life-crossroads" },
          { text: "Relationship friction, heartbreak, or painful family dynamics", recommendation: "relationship-support" },
          { text: "Constantly overthinking, anxious about the future, unable to rest", recommendation: "calm-reassurance" }
        ]
      },
      {
        id: 2,
        question: "What kind of support would help you feel better right now?",
        options: [
          { text: "Just someone patient who will listen to me without judging or lecturing" },
          { text: "Clear, practical, honest advice on what steps to take next" },
          { text: "A reassuring, peaceful conversation that calms my panic and anxiety" },
          { text: "Spiritual perspective and comfort to accept what I cannot control" }
        ]
      },
      {
        id: 3,
        question: "How long have you been carrying this alone?",
        options: [
          { text: "Just happened recently, feeling overwhelmed" },
          { text: "A few weeks or months, feeling worn down" },
          { text: "A very long time, feeling deeply exhausted" },
          { text: "It comes and goes in waves, but today is particularly hard" }
        ]
      }
    ]
  },

  // 6. Testimonials
  testimonials: [
    {
      name: "Radhika M.",
      city: "Hyderabad",
      story: "I was carrying the burden of family misunderstandings for months. Acharya Meera listened with such genuine patience that I felt like a massive weight was lifted off my chest. Her advice was warm, practical, and so reassuring.",
      sessionType: "Deep Listening & Guidance"
    },
    {
      name: "Siddharth K.",
      city: "Bengaluru",
      story: "I was paralyzed at a career crossroad and completely stressed out. Speaking to her gave me clarity and calm. No fancy theories, just honest, wise, and grounded perspective.",
      sessionType: "Life Crossroads Clarity"
    },
    {
      name: "Sunita R.",
      city: "Chennai",
      story: "Her peaceful demeanor and positive vibes made me feel safe within 5 minutes. For the first time in a year, I felt truly understood without being judged.",
      sessionType: "Relationship Support"
    }
  ],

  // 7. Frequently Asked Questions
  faqs: [
    {
      question: "What happens during a listening & counseling session?",
      answer: "You are given complete, uninterrupted space to speak whatever is on your mind. Acharya Meera listens with total attention, helps you organize your thoughts, and offers practical, comforting advice grounded in real-life wisdom."
    },
    {
      question: "Are my conversations confidential?",
      answer: "100% strictly confidential. Everything you share remains sacred and private. Your trust is our highest priority."
    },
    {
      question: "Do I need to prepare anything before speaking?",
      answer: "Not at all. You don't need a polished script or structured thoughts. Just arrive as you are, even if you are emotional or confused. We will untangle things together."
    },
    {
      question: "How can I book a session?",
      answer: "You can choose a convenient time slot using the booking form below, or simply tap 'Message Directly on WhatsApp' to connect instantly."
    }
  ]
};
