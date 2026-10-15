import anonymailLogo from '../assets/anonymail-logo.png';
import anonymailPreview from '../assets/anonymail-preview.png';
import bikebajuLogo from '../assets/bikebaju-logo.png';
import bikebajuPreview from '../assets/bikebaju-preview.jpg';
import kasijobReview from '../assets/kasijob-review.png';
import kasijobsLogo from '../assets/kasijobs-logo.png';
import stonecodeLogo from '../assets/stonecode-logo.svg';
import stonecodePreview from '../assets/stonecode-landing-preview.png';
import stonecodeOnboardingPreview from '../assets/stonecode-preview.png';
import yelloSkincarePreview from '../assets/yelloskincare.png';
import replenishLogo from '../assets/projects/replenish-logo.png';
import replenishHome from '../assets/projects/replenish-home.webp';
import replenishShop from '../assets/projects/replenish-shop.webp';
import replenishProduct from '../assets/projects/replenish-product.webp';
import replenishQuiz from '../assets/projects/replenish-quiz.webp';
import replenishMobile from '../assets/projects/replenish-shop-mobile.webp';
import hackboxLogo from '../assets/projects/hackbox-logo.png';
import hackboxLanding from '../assets/projects/hackbox-landing.webp';
import hackboxHome from '../assets/projects/hackbox-home.webp';
import hackboxTerminal from '../assets/projects/hackbox-terminal.webp';
import hackboxHackhub from '../assets/projects/hackbox-hackhub.webp';
import hackboxProgress from '../assets/projects/hackbox-progress.webp';
import hackboxHardware from '../assets/projects/hackbox-hardware.webp';
import stonecodeAssessment from '../assets/projects/stonecode-assessment.webp';
import stonecodeWorkspace from '../assets/projects/stonecode-workspace.webp';
import anonymailLanding from '../assets/projects/anonymail-landing.webp';
import anonymailPrivacy from '../assets/projects/anonymail-privacy.webp';
import bikebajuCollection from '../assets/projects/bikebaju-collection.webp';
import bikebajuProduct from '../assets/projects/bikebaju-product.webp';
import kasijobsLanding from '../assets/projects/kasijobs-landing.webp';
import kasijobsMarketplace from '../assets/projects/kasijobs-marketplace.webp';
import kasijobsMobile from '../assets/projects/kasijobs-mobile.webp';

export const PROJECT_FILTERS = [
  { id: 'all', label: 'All Work' },
  { id: 'ai-app', label: 'AI App' },
  { id: 'web-app', label: 'Web App' },
  { id: 'game', label: 'Game' },
  { id: 'chrome-extension', label: 'Chrome Extension' },
  { id: 'e-commerce', label: 'E-Commerce' },
  { id: 'marketplace', label: 'Marketplace' },
  { id: 'marketing-system', label: 'Marketing System' },
];

export const PROJECTS = [
  {
    id: 'replenish-beauty',
    workCategory: 'software',
    title: 'REPLENISH BEAUTY',
    category: 'Headless E-Commerce & Customer CRM',
    listingTitle: 'Headless Beauty E-Commerce',
    shortDesc:
      'Skincare storefront connecting a custom shopping experience, skin quiz, and private customer CRM to WooCommerce.',
    longDesc:
      'Replenish Beauty brings a Malaysian skincare brand from ShoppeGo to a headless WooCommerce store. A custom Next.js frontend connects product discovery, a seven-question skin quiz, free-product fulfilment, and a private WordPress CRM with the store’s commerce operations.',
    outcome:
      'Launched the custom storefront on the brand’s production domain, migrated five verified active products and their media, and connected WooCommerce checkout, customer records, and campaign fulfilment. The handover includes store-manager training and concise client guides.',
    tech: ['Next.js', 'React', 'TypeScript', 'WooCommerce', 'WordPress / PHP', 'GSAP', 'ToyyibPay', 'Netlify'],
    features: [
      'Custom responsive storefront with an animated campaign story, searchable catalogue, product pages, and customer reviews',
      'ShoppeGo product and media migration with SKU, price, stock, and image reconciliation',
      'Persistent cart with current WooCommerce pricing and a secure checkout handoff',
      'Branded Bag, Contact, Delivery, and Payment checkout with Malaysian shipping and ToyyibPay integration',
      'Seven-question skin quiz followed by delivery details and server-assigned free-product fulfilment',
      'Custom WordPress commerce bridge and private CRM with editable contacts, quiz answers, CSV import/export, and consent controls',
    ],
    role: 'Full-Stack Developer, E-Commerce Migration and CRM Integration',
    filters: ['e-commerce', 'web-app', 'marketing-system'],
    listingTags: ['E-Commerce', 'Full Stack', 'CRM'],
    liveUrl: 'https://www.thereplenishbeauty.com/',
    assetState: 'available',
    assetLabel: 'Replenish Beauty skincare storefront',
    image: replenishShop,
    imageAlt: 'Replenish Beauty product catalogue with skincare products and category filters',
    logo: replenishLogo,
    logoAlt: 'Replenish Beauty brand icon',
    screenshots: [
      { src: replenishHome, alt: 'Replenish Beauty campaign homepage with skincare photography', label: 'Campaign homepage' },
      { src: replenishShop, alt: 'Replenish Beauty searchable skincare catalogue', label: 'Product catalogue' },
      { src: replenishProduct, alt: 'The Complete Routine product page with pricing and shopping controls', label: 'Product detail' },
      { src: replenishQuiz, alt: 'Replenish Beauty mobile skin quiz age-range question', label: 'Skin quiz · mobile', format: 'portrait' },
      { src: replenishMobile, alt: 'Replenish Beauty responsive product catalogue on mobile', label: 'Shop · mobile', format: 'portrait' },
    ],
  },
  {
    id: 'hackbox',
    workCategory: 'software',
    title: 'HACKBOX',
    category: 'Mobile Cyber-Simulation Game',
    listingTitle: 'Cyber-Simulation Game',
    shortDesc:
      'Mobile-first hacking story game with a simulated operating system, terminal investigations, contracts, and persistent progression.',
    longDesc:
      'Hackbox is a fictional cyber-simulation game delivered as an installable mobile web app. Players explore a simulated computer, investigate networks and services through a terminal, follow story messages, complete contracts, and manage tools, files, and hardware.',
    outcome:
      'Published an installable mobile browser game with a playable demo, the OPEN CIRCUIT seasonal campaign, persistent online game state, and a one-time full-game upgrade. A shared simulation engine keeps terminal actions, progression, and server validation consistent.',
    tech: ['React', 'TypeScript', 'Vite', 'PWA', 'Supabase', 'PostgreSQL', 'Deno Edge Functions', 'RevenueCat'],
    features: [
      'Touch-friendly simulated OS with app windows, file explorer, notes, mail, and multiple terminals',
      'Fictional network discovery, service investigation, access routes, and privilege-based progression',
      'OPEN CIRCUIT story campaign with contracts, collectible fragments, and season progress',
      'In-game software and hardware shops, tool installation, and resource-aware actions',
      'Shared TypeScript simulation with server-authoritative online actions and persisted player state',
      'OS-aware mobile installation flow, replayable demo, and one-time full-game purchase with restore support',
    ],
    role: 'Game Designer, Product Builder and Full-Stack Developer',
    filters: ['game', 'web-app'],
    listingTags: ['Game', 'PWA', 'Full Stack'],
    liveUrl: 'https://hackbox.hiderstudios.com/',
    liveLabel: 'View Game',
    liveNote: 'Install and play on iPhone, iPad, or Android.',
    assetState: 'available',
    assetLabel: 'Hackbox game landing page',
    image: hackboxLanding,
    imageAlt: 'Hackbox Season 1 game landing page',
    logo: hackboxLogo,
    logoAlt: 'Hackbox app icon',
    screenshots: [
      { src: hackboxHome, alt: 'Hackbox simulated mobile desktop with Terminal, Bank, Mail, and Files apps', label: 'Simulated desktop', format: 'portrait' },
      { src: hackboxTerminal, alt: 'Hackbox mobile terminal investigating a fictional network service', label: 'Terminal investigation', format: 'portrait' },
      { src: hackboxHackhub, alt: 'Hackbox HackHub wordlist and tools interface', label: 'HackHub tools', format: 'portrait' },
      { src: hackboxProgress, alt: 'Hackbox OPEN CIRCUIT campaign and collectible progress', label: 'Season progress', format: 'portrait' },
      { src: hackboxHardware, alt: 'Hackbox hardware shop with simulated computer resources', label: 'Hardware shop', format: 'portrait' },
      { src: hackboxLanding, alt: 'Hackbox public landing page with supported mobile platforms', label: 'Game landing page' },
    ],
  },
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
    filters: ['ai-app', 'web-app'],
    listingTags: ['AI Web App', 'Full Stack', 'Tutor'],
    liveUrl: 'https://stonecoded.netlify.app/',
    assetState: 'available',
    assetLabel: 'Stonecode landing page preview',
    image: stonecodePreview,
    imageAlt: 'Stonecode landing page for its AI programming tutor',
    screenshots: [
      {
        src: stonecodeOnboardingPreview,
        alt: 'Stonecode AI-learning discovery flow',
        label: 'AI learning discovery',
      },
      {
        src: stonecodePreview,
        alt: 'Stonecode landing page for its AI programming tutor',
        label: 'Product landing page',
      },
      { src: stonecodeAssessment, alt: 'Stonecode personalized programming assessment with a multiple-choice question', label: 'Learning assessment' },
      { src: stonecodeWorkspace, alt: 'Stonecode development demo showing course modules, code editor, and exercise feedback', label: 'Workspace · demo session' },
    ],
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
    filters: ['chrome-extension'],
    listingTags: ['Browser Extension', 'Full Stack', 'Privacy'],
    liveUrl: 'https://anony-mail.netlify.app',
    assetState: 'available',
    assetLabel: 'Anonymail disposable inbox dashboard',
    image: anonymailPreview,
    imageAlt: 'Anonymail disposable inbox dashboard',
    logo: anonymailLogo,
    logoAlt: 'Anonymail logo',
    screenshots: [
      { src: anonymailPreview, alt: 'Anonymail disposable inbox dashboard', label: 'Disposable inbox' },
      { src: anonymailLanding, alt: 'Anonymail product website introducing the Chrome extension', label: 'Extension website' },
      { src: anonymailPrivacy, alt: 'Anonymail privacy page explaining local storage and permissions', label: 'Privacy and permissions' },
    ],
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
    filters: ['e-commerce', 'web-app'],
    listingTags: ['Web App', 'Frontend', 'E-Commerce'],
    liveUrl: 'https://bikebaju.com/',
    assetState: 'available',
    assetLabel: 'BikeBaju storefront homepage',
    image: bikebajuPreview,
    imageAlt: 'BikeBaju cycling apparel storefront homepage',
    logo: bikebajuLogo,
    logoAlt: 'BikeBaju logo',
    screenshots: [
      { src: bikebajuPreview, alt: 'BikeBaju cycling apparel storefront homepage', label: 'Storefront homepage' },
      { src: bikebajuCollection, alt: 'BikeBaju jersey collection with product filtering and apparel photography', label: 'Jersey collection' },
      { src: bikebajuProduct, alt: 'BikeBaju Galaxy jersey page with size selection and product photography', label: 'Product and sizing' },
    ],
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
    filters: ['web-app', 'marketplace'],
    listingTags: ['Web App', 'Full Stack', 'Marketplace'],
    repoUrl: 'https://github.com/HaiderJavaid/kasijob.git',
    liveUrl: 'https://kasijob.my',
    assetState: 'available',
    assetLabel: 'KasiJobs product screenshot',
    image: kasijobReview,
    imageAlt: 'KasiJobs web app interface screenshot',
    logo: kasijobsLogo,
    logoAlt: 'KasiJobs logo',
    screenshots: [
      { src: kasijobReview, alt: 'KasiJobs web app interface', label: 'Product overview' },
      { src: kasijobsLanding, alt: 'KasiJobs public marketplace landing page', label: 'Marketplace website' },
      { src: kasijobsMarketplace, alt: 'KasiJobs public jobs-board preview with example gigs', label: 'Jobs board · public preview' },
      { src: kasijobsMobile, alt: 'KasiJobs responsive public homepage on mobile', label: 'Homepage · mobile', format: 'portrait' },
    ],
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
    filters: ['marketing-system'],
    listingTags: ['Marketing System', 'Full Funnel', 'CRM'],
    assetState: 'available',
    assetLabel: 'Yello Skincare funnel screenshot',
    image: yelloSkincarePreview,
    imageAlt: 'Yello Skincare website and funnel screenshot',
  },
];
