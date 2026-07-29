import anonymailLogo from '../assets/anonymail-logo.png';
import anonymailPreview from '../assets/anonymail-preview.png';
import bikebajuLogo from '../assets/bikebaju-logo.png';
import bikebajuPreview from '../assets/bikebaju-preview.jpg';
import kasijobReview from '../assets/kasijob-review.png';
import kasijobsLogo from '../assets/kasijobs-logo.png';
import stonecodeLogo from '../assets/stonecode-logo.svg';
import stonecodePreview from '../assets/stonecode-landing-preview.png';
import yelloSkincarePreview from '../assets/yelloskincare.png';

export const WORK_CATEGORIES = [
  {
    id: 'software',
    label: 'Software Projects',
    description: 'AI products, web applications, and end-to-end software systems.',
  },
  {
    id: 'marketing',
    label: 'Marketing Projects',
    description: 'Growth strategy, conversion funnels, automation, and retention systems.',
  },
];

export const PROJECTS = [
  {
    id: 'stonecode',
    workCategory: 'software',
    title: 'STONECODE',
    category: 'AI-Powered E-Learning SaaS',
    listingTitle: 'AI Programming Tutor',
    shortDesc:
      'Persistent AI programming tutor that creates personalized courses, guided projects, and practice inside an IDE-style workspace.',
    longDesc:
      'Stonecode is an AI programming tutor for self-taught beginners. It creates personalized courses, guided projects, and practice sessions inside a persistent IDE-style workspace where lessons, code, tutor conversations, and progress stay connected.',
    outcome:
      'The current work-in-progress proves the core SaaS flow from authenticated onboarding and AI discovery through generated learning experiences, persistent workspace state, tutor interaction, and progress tracking.',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'OpenAI API',
      'Supabase',
      'Stripe',
      'CodeMirror',
    ],
    features: [
      'AI-led discovery for courses, short courses, exercises, and guided projects',
      'Personalized course generation with theory, quizzes, workshops, labs, and projects',
      'Persistent IDE workspace with files, editor, terminal, visual preview, and tutor chat',
      'Supabase authentication and persisted course, file, chat, and progress state',
      'Streaming AI tutor with contextual guidance and direct file-edit support',
      'Stripe subscription and plan-limit foundations for a focused paid beta',
    ],
    role: 'Product Builder and Full-Stack Software Developer',
    listingTags: ['AI Web App', 'Full Stack', 'Tutor'],
    liveUrl: 'https://stonecoded.netlify.app/',
    statusLabel: 'Live preview',
    assetState: 'available',
    assetLabel: 'Stonecode landing page preview',
    image: stonecodePreview,
    imageAlt: 'Stonecode landing page for its AI programming tutor',
    logo: stonecodeLogo,
    logoAlt: 'Stonecode logo',
  },
  {
    id: 'anonymail',
    workCategory: 'software',
    title: 'ANONYMAIL',
    category: 'Privacy-First Chrome Extension',
    listingTitle: 'Disposable Mail Chrome Extension',
    shortDesc:
      'Disposable inbox and signup autofill tool that keeps private email workflows beside the page in Chrome.',
    longDesc:
      'Anonymail is a privacy-first Chrome extension that creates a disposable inbox, generates a separate signup password, fills signup forms, and keeps incoming verification mail in a side panel or dashboard tab.',
    outcome:
      'Released as a live MVP beta with the extension package, product website, privacy page, and Mail.tm-powered inbox flow deployed through Netlify.',
    tech: [
      'React',
      'TypeScript',
      'WXT',
      'Chrome Manifest V3',
      'Astro',
      'Mail.tm API',
      'Netlify',
    ],
    features: [
      'Right-click signup form filling with a disposable email and separate generated password',
      'One active inbox available in a Chrome side panel or dashboard tab',
      'Configurable mailbox lifetime with session-aligned password retention',
      'Privacy-first permissions without permanent access to every website',
      'Sanitized email reading with remote images and attachments blocked',
      'Packaged developer-mode beta with a dedicated landing and privacy site',
    ],
    role: 'Product Builder and Full-Stack Software Developer',
    listingTags: ['Browser Extension', 'Full Stack', 'Privacy'],
    liveUrl: 'https://anony-mail.netlify.app',
    statusLabel: 'Live beta',
    assetState: 'available',
    assetLabel: 'Anonymail disposable inbox dashboard',
    image: anonymailPreview,
    imageAlt: 'Anonymail disposable inbox dashboard',
    logo: anonymailLogo,
    logoAlt: 'Anonymail logo',
  },
  {
    id: 'bikebaju',
    workCategory: 'software',
    title: 'BIKEBAJU',
    category: 'Cycling Apparel E-Commerce Website',
    listingTitle: 'Cycling Apparel E-Commerce',
    shortDesc:
      'Responsive storefront for a Malaysian cycling lifestyle brand built around bold apparel, product discovery, and community.',
    longDesc:
      'BikeBaju is a Malaysian cycling lifestyle brand and e-commerce storefront for expressive jerseys, bibs, accessories, custom apparel, and cycling-community experiences.',
    outcome:
      'Delivered frontend development for a live, responsive storefront that presents the brand, product catalogue, shopping journey, and cycling community in one cohesive experience.',
    tech: ['Shopify', 'HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    features: [
      'Responsive product discovery across jerseys, bibs, and accessories',
      'Collection browsing, quick views, product details, cart, and checkout paths',
      'Bold campaign-led homepage built around the Stand Out & Be Seen identity',
      'Custom jersey service and cyclist sizing support',
      'Crash-replacement, shipping, delivery, and returns information',
      'Integrated fellowship rides, team stories, news, and community content',
    ],
    role: 'Frontend Web Developer',
    listingTags: ['Web App', 'Frontend', 'E-Commerce'],
    liveUrl: 'https://bikebaju.com/',
    statusLabel: 'Live website',
    assetState: 'available',
    assetLabel: 'BikeBaju storefront homepage',
    image: bikebajuPreview,
    imageAlt: 'BikeBaju cycling apparel storefront homepage',
    logo: bikebajuLogo,
    logoAlt: 'BikeBaju logo',
  },
  {
    id: 'kasijobs',
    workCategory: 'software',
    title: 'KASIJOBS',
    category: 'Marketplace Web App',
    listingTitle: 'Gig Marketplace Web App',
    shortDesc:
      'Marketplace-style earning platform for small jobs, proof submission, admin review, and wallet-style reward tracking.',
    longDesc:
      'KasiJobs is a mobile-first marketplace web app for small jobs and earning opportunities in Malaysia. It combines onboarding, task discovery, proof submission, admin review, participant messaging, referral operations, and reward tracking in one experience.',
    outcome:
      'Demonstrates product judgment, practical security boundaries, and the ability to evolve a controlled earning flow into broader marketplace behavior.',
    tech: [
      'Next.js App Router',
      'React',
      'Tailwind CSS',
      'Firebase Auth',
      'Firestore',
      'Firebase Admin SDK',
      'Cloudflare R2',
    ],
    features: [
      'Email verification gate for account access',
      'Task listing, proof upload, and admin approval or rejection',
      'Wallet-style balance and transaction history',
      'Job posting, apply, shortlist, accept, reject, and completion flow',
      'Participant-based job messaging for shortlisted and accepted applications',
      'Admin tools for tasks, submissions, users, transactions, and referrals',
    ],
    role: 'Product Builder, Frontend Developer, Systems Integrator',
    listingTags: ['Web App', 'Full Stack', 'Marketplace'],
    repoUrl: 'https://github.com/HaiderJavaid/kasijob.git',
    liveUrl: 'https://kasijob.my',
    statusLabel: 'Live + public repo',
    assetState: 'available',
    assetLabel: 'KasiJobs product screenshot',
    image: kasijobReview,
    imageAlt: 'KasiJobs web app interface screenshot',
    logo: kasijobsLogo,
    logoAlt: 'KasiJobs logo',
  },
  {
    id: 'yello-skincare',
    workCategory: 'marketing',
    title: 'YELLO SKINCARE',
    category: 'Marketing Funnel Case Study',
    listingTitle: 'Marketing Funnel',
    shortDesc:
      'Full-funnel revenue recovery system combining lead capture, quiz segmentation, WhatsApp automation, and CRM tracking.',
    longDesc:
      'Yello Skincare uses a connected acquisition, lead-capture, and retention system designed to reduce marketplace dependence. QR-based customer capture, a personalized skincare quiz, WhatsApp follow-up, CRM visibility, and the website work together as one owned marketing engine.',
    outcome:
      'Within 6 months, the system helped drive 2X revenue growth while improving owned customer data collection, repeat purchase opportunities, and funnel visibility.',
    tech: [
      'React',
      'N8N',
      'GoHighLevel',
      'Facebook Ads',
      'WhatsApp Automation',
      'CRM',
      'Landing Pages',
    ],
    features: [
      'QR-based acquisition path from marketplace packaging into owned funnels',
      'Personalized skincare quiz for lead capture and segmentation',
      'Automated WhatsApp nurturing and re-engagement sequences',
      'CRM setup for lead tracking, attribution, and retention monitoring',
      'Website repositioned into a central conversion and retention hub',
      'Funnel structure built to reduce dependency on TikTok Shop and Shopee',
    ],
    role: 'Digital Marketing Strategist and Funnel Systems Developer',
    listingTags: ['Marketing System', 'Full Funnel', 'CRM'],
    statusLabel: 'Private / available on request',
    assetState: 'available',
    assetLabel: 'Yello Skincare funnel screenshot',
    image: yelloSkincarePreview,
    imageAlt: 'Yello Skincare website and funnel screenshot',
  },
];
