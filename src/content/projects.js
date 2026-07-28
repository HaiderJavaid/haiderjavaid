import kasijobReview from '../assets/kasijob-review.png';
import stonecodePreview from '../assets/stonecode-preview.png';
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
    category: 'AI-Powered Learning SaaS',
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
    statusLabel: 'Latest WIP / private beta',
    assetState: 'available',
    assetLabel: 'Stonecode AI discovery workspace',
    image: stonecodePreview,
    imageAlt: 'Stonecode AI course discovery workspace',
  },
  {
    id: 'kasijobs',
    workCategory: 'software',
    title: 'KASIJOBS',
    category: 'Marketplace Web App',
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
    repoUrl: 'https://github.com/HaiderJavaid/kasijob.git',
    liveUrl: 'https://kasijob.my',
    statusLabel: 'Live + public repo',
    assetState: 'available',
    assetLabel: 'KasiJobs product screenshot',
    image: kasijobReview,
    imageAlt: 'KasiJobs web app interface screenshot',
  },
  {
    id: 'yello-skincare',
    workCategory: 'marketing',
    title: 'YELLO SKINCARE',
    category: 'Marketing Funnel Case Study',
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
    statusLabel: 'Private / available on request',
    assetState: 'available',
    assetLabel: 'Yello Skincare funnel screenshot',
    image: yelloSkincarePreview,
    imageAlt: 'Yello Skincare website and funnel screenshot',
  },
];
