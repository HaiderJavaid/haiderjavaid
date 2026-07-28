import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Terminal, Briefcase, User, FileText, ArrowLeft, Shield, Wifi, Battery, ExternalLink, Github, Image as ImageIcon, Mail, MapPin, Phone, Info, Linkedin, Instagram, Code2, Megaphone, ChevronDown, ChevronRight } from 'lucide-react';
import SlotMachineNav from '../components/dev/SlotMachineNav';
import MatrixRain from '../components/dev/MatrixRain';
import BootScreen from '../components/dev/BootScreen';
import resumePdf from '../assets/resume.pdf';
import portraitImage from '../assets/haider-portrait.png';
import { PROFILE } from '../content/profile';
import { EXPERIENCES } from '../content/experience';
import { PROJECTS, WORK_CATEGORIES } from '../content/projects';

const MENU_ITEMS = [
  { id: 'work', label: 'View Recent Work', icon: Briefcase },
  { id: 'about', label: 'About Me', icon: Info },
  { id: 'exp', label: 'Experience', icon: User },
  { id: 'contact', label: 'Contact Me', icon: Terminal },
  { id: 'resume', label: 'Download Resume', icon: FileText },
];

const SOCIAL_ICONS = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
};

const WORK_CATEGORY_ICONS = {
  software: Code2,
  marketing: Megaphone,
};

const PROJECT_DETAIL_SECTIONS = [
  { id: 'outcome', label: 'Outcome' },
  { id: 'features', label: 'Key Features' },
  { id: 'tech', label: 'Tech Specs' },
];

const ProjectDetailContent = ({ sectionId, project }) => {
  if (sectionId === 'features') {
    return (
      <ul className="space-y-3">
        {project.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed opacity-85 md:text-base">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pip" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (sectionId === 'tech') {
    return (
      <div className="flex flex-wrap gap-2">
        {project.tech.map((technology) => (
          <span key={technology} className="border border-pip/30 bg-pip/10 px-2 py-1 text-xs font-bold">
            {technology}
          </span>
        ))}
      </div>
    );
  }

  return <p className="text-sm leading-relaxed opacity-90 md:text-base">{project.outcome}</p>;
};

const DEFAULT_ACTIVE_INDEX = 0;
const COLLAPSED_PROJECT_IMAGE_HEIGHT = 224;

const DevView = () => {
  const [isBooting, setIsBooting] = useState(true);
  const [view, setView] = useState('home');
  const [activeIndex, setActiveIndex] = useState(DEFAULT_ACTIVE_INDEX);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedWorkCategory, setSelectedWorkCategory] = useState(null);
  const [openProjectSection, setOpenProjectSection] = useState(null);
  const [hasPlayedHomeIntro, setHasPlayedHomeIntro] = useState(false);
  const [isProjectImageExpanded, setIsProjectImageExpanded] = useState(false);
  const [projectImageFullHeight, setProjectImageFullHeight] = useState(COLLAPSED_PROJECT_IMAGE_HEIGHT);
  const homeLayoutRef = useRef(null);
  const homeProfileRef = useRef(null);
  const homeNavRef = useRef(null);
  const homeHeaderRef = useRef(null);
  const homeFooterRef = useRef(null);
  const homeInstructionsRef = useRef(null);
  const homeIntroStartedRef = useRef(false);
  const homeIntroCompletedRef = useRef(false);
  const projectImageFrameRef = useRef(null);
  const projectImageRef = useRef(null);
  const activeProjectImage = selectedProject?.image
    ? {
        src: selectedProject.image,
        alt: selectedProject.imageAlt,
        label: selectedProject.assetLabel,
      }
    : null;
  const activeProjectImageSource = activeProjectImage?.src;

  useLayoutEffect(() => {
    if (
      isBooting
      || view !== 'home'
      || homeIntroCompletedRef.current
      || homeIntroStartedRef.current
      || !homeLayoutRef.current
      || !homeProfileRef.current
      || !homeNavRef.current
    ) {
      return undefined;
    }

    homeIntroStartedRef.current = true;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const homeLayout = homeLayoutRef.current;
    const profileGroup = homeProfileRef.current;
      const navGroup = homeNavRef.current;
    const profileItems = profileGroup.querySelectorAll('[data-home-intro-item]');
    const profileHeading = profileGroup.querySelector('[data-home-intro-heading]');
    const header = homeHeaderRef.current;
    const footer = homeFooterRef.current;
    const instructions = homeInstructionsRef.current;

    if (reduceMotion) {
      const frameId = window.requestAnimationFrame(() => {
        homeIntroCompletedRef.current = true;
        setHasPlayedHomeIntro(true);
      });

      return () => window.cancelAnimationFrame(frameId);
    }

    const context = gsap.context(() => {
      const layoutRect = homeLayout.getBoundingClientRect();
      const isDesktop = window.matchMedia('(min-width: 768px)').matches;
      const layoutCenterX = layoutRect.left + (layoutRect.width / 2);
      const profileRect = profileGroup.getBoundingClientRect();
      const mobileCenteredOffsetY = isDesktop
        ? 0
        : layoutRect.top + (layoutRect.height / 2) - (profileRect.top + (profileRect.height / 2));
      const centeredOffsets = Array.from(profileItems, (item) => {
        const itemRect = item.getBoundingClientRect();
        return isDesktop
          ? layoutCenterX - (itemRect.left + (itemRect.width / 2))
          : 0;
      });

      gsap.set(profileGroup, { y: mobileCenteredOffsetY });
      profileItems.forEach((item, index) => {
        gsap.set(item, {
          autoAlpha: 0,
          x: centeredOffsets[index],
          filter: 'contrast(1) brightness(1)',
          transformOrigin: 'center center',
        });
      });
      gsap.set(navGroup, {
        autoAlpha: 0,
        x: 72,
        clipPath: 'inset(46% 0 46% 0)',
        filter: 'brightness(2.2) contrast(2)',
        '--nav-glitch-opacity': 0,
      });
      gsap.set([header, footer, instructions], { autoAlpha: 0 });

      const addFlickerReveal = (timeline, element, position) => {
        timeline.to(element, {
          keyframes: [
            { autoAlpha: 1, filter: 'contrast(1.5) brightness(1.5)', duration: 0.07 },
            { autoAlpha: 0, filter: 'contrast(1) brightness(1)', duration: 0.06 },
            { autoAlpha: 0.8, filter: 'contrast(1.25) brightness(1.25)', duration: 0.1 },
            { autoAlpha: 0.2, filter: 'contrast(1) brightness(1)', duration: 0.08 },
            { autoAlpha: 1, filter: 'contrast(1.35) brightness(1.2)', duration: 0.12 },
            { autoAlpha: 0.55, filter: 'contrast(1) brightness(1)', duration: 0.08 },
            { autoAlpha: 1, filter: 'contrast(1) brightness(1)', duration: 0.16 },
          ],
          ease: 'none',
        }, position);
      };

      const startNavBoot = () => {
        gsap.timeline({
          defaults: { overwrite: 'auto' },
          onComplete: () => {
            profileHeading?.classList.add('home-profile-heading-glow');
            const closingTimeline = gsap.timeline({
              onComplete: () => {
                homeIntroCompletedRef.current = true;
                setHasPlayedHomeIntro(true);
              },
            });

            addFlickerReveal(closingTimeline, instructions, 0);
          },
        })
          .set(navGroup, { autoAlpha: 1, '--nav-glitch-opacity': 0.85 })
          .to(navGroup, {
            x: -18,
            clipPath: 'inset(38% 0 38% 0)',
            duration: 0.06,
            ease: 'steps(1)',
          })
          .to(navGroup, {
            x: 14,
            clipPath: 'inset(12% 0 58% 0)',
            filter: 'brightness(3) contrast(2.6)',
            duration: 0.07,
            ease: 'steps(1)',
          })
          .to(navGroup, {
            x: -8,
            clipPath: 'inset(56% 0 8% 0)',
            filter: 'brightness(1.4) contrast(2.2)',
            '--nav-glitch-opacity': 0.45,
            duration: 0.08,
            ease: 'steps(1)',
          })
          .to(navGroup, {
            x: 6,
            clipPath: 'inset(5% 0 24% 0)',
            filter: 'brightness(2.4) contrast(2.4)',
            '--nav-glitch-opacity': 1,
            duration: 0.07,
            ease: 'steps(1)',
          })
          .to(navGroup, {
            x: 0,
            clipPath: 'inset(0% 0 0% 0)',
            filter: 'brightness(1) contrast(1)',
            '--nav-glitch-opacity': 0,
            duration: 0.34,
            ease: 'power2.out',
          })
          .fromTo(navGroup, {
            filter: 'drop-shadow(0 0 18px rgba(94, 234, 212, 0.75))',
          }, {
            filter: 'drop-shadow(0 0 0 rgba(94, 234, 212, 0))',
            duration: 0.45,
            ease: 'power2.out',
          });
      };

      const moveProfileLeft = () => {
        gsap.timeline({ onComplete: startNavBoot })
          .to(profileItems, {
            x: 0,
            duration: 1.05,
            ease: 'power3.inOut',
          })
          .to(profileGroup, {
            y: 0,
            duration: 1.05,
            ease: 'power3.inOut',
          }, '<')
          .fromTo('[data-home-intro-heading]', {
            textShadow: '0 0 0 rgba(20, 184, 166, 0)',
          }, {
            textShadow: '0 0 20px rgba(20, 184, 166, 0.6)',
            duration: 0.8,
            ease: 'power2.out',
          });
      };

      const profileTimeline = gsap.timeline({
        defaults: { overwrite: 'auto' },
        paused: true,
        onComplete: () => {
          moveProfileLeft();
        },
      })
        .to(profileItems, {
          keyframes: [
            { autoAlpha: 1, filter: 'contrast(1.5) brightness(1.5)', duration: 0.08 },
            { autoAlpha: 0, filter: 'contrast(1) brightness(1)', duration: 0.08 },
            { autoAlpha: 0.8, filter: 'contrast(1.2) brightness(1.2)', duration: 0.12 },
            { autoAlpha: 0.2, filter: 'contrast(1) brightness(1)', duration: 0.1 },
            { autoAlpha: 1, filter: 'contrast(1.4) brightness(1.2)', duration: 0.12 },
            { autoAlpha: 0.5, filter: 'contrast(1) brightness(1)', duration: 0.1 },
            { autoAlpha: 1, filter: 'contrast(1) brightness(1)', duration: 0.2 },
          ],
          stagger: 0.16,
          ease: 'none',
        })
        .to({}, { duration: 0.4 });

      const openingTimeline = gsap.timeline();
      addFlickerReveal(openingTimeline, header, 0);
      openingTimeline.call(() => profileTimeline.play(), null, 0.14);
      addFlickerReveal(openingTimeline, footer, 0.3);
    }, homeLayout);

    return () => {
      context.revert();
      homeIntroStartedRef.current = false;
    };
  }, [isBooting, view]);

  useEffect(() => {
    const frameNode = projectImageFrameRef.current;

    if (!frameNode || !activeProjectImageSource) return undefined;

    const updateHeight = () => {
      const imageNode = projectImageRef.current;

      if (!imageNode?.naturalWidth || !frameNode.clientWidth) return;

      setProjectImageFullHeight(
        Math.round((imageNode.naturalHeight / imageNode.naturalWidth) * frameNode.clientWidth),
      );
    };

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(frameNode);
    const frameId = window.requestAnimationFrame(updateHeight);

    return () => {
      resizeObserver.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, [activeProjectImageSource]);

  const handleOpenProject = (project) => {
    setIsProjectImageExpanded(false);
    setProjectImageFullHeight(COLLAPSED_PROJECT_IMAGE_HEIGHT);
    setOpenProjectSection(null);
    setSelectedProject(project);
    handleNavigate('project_details');
  };

  // State to handle the Glitch/Static effect
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Transition Handler
  const handleNavigate = (targetView) => {
    if (view === targetView) return;

    // 1. Start Glitch
    setIsTransitioning(true);

    // 2. Wait for the static to "mask" the change
    setTimeout(() => {
      setView(targetView);

      // 3. Keep static for a split second longer on the new screen
      setTimeout(() => {
        setIsTransitioning(false);
      }, 250);
    }, 150);
  };

  const activeItem = MENU_ITEMS[activeIndex];
  const visibleProjects = PROJECTS.filter(
    (project) => project.workCategory === selectedWorkCategory,
  );

  const handleOpenActiveSection = () => {
    if (activeItem.id === 'work') setSelectedWorkCategory(null);
    handleNavigate('content');
  };

  const handleContentBack = () => {
    if (activeItem.id === 'work' && selectedWorkCategory) {
      setSelectedWorkCategory(null);
      return;
    }

    handleNavigate('home');
  };
  return (
    <div className="fixed top-0 left-0 w-full h-[100vh] bg-pip-bg text-pip font-mono overflow-hidden selection:bg-pip selection:text-pip-bg flex flex-col">

      {/* GLITCH & STATIC OVERLAY */}
      {isTransitioning && (
        <div className="absolute inset-0 z-[60] pointer-events-none overflow-hidden flex flex-col justify-center transform-gpu will-change-transform">
          {/* 1. Heavy Static Background (Optimized) */}
          <div className="absolute inset-0 bg-noise opacity-30 animate-noise-bg"></div>

          {/* 2. Color Split / Tint (Optimized) */}
          <div className="absolute inset-0 bg-pip/10 animate-pulse"></div>

          {/* 3. Random Horizontal Glitch Bars */}
          <div className="w-full h-2 bg-pip/60 absolute top-[20%] animate-glitch-bar"></div>
          <div className="w-full h-8 bg-pip-light/40 absolute top-[60%] animate-glitch-bar-alt"></div>
        </div>
      )}

      {/* CRT Overlay Effects */}
      <div className="crt-overlay absolute -inset-[10vh] z-50 animate-flicker pointer-events-none transform-gpu" />
      <div className="absolute -inset-[10vh] bg-[radial-gradient(circle_at_center,_transparent_50%,_rgba(0,0,0,0.8)_100%)] pointer-events-none z-40 transform-gpu" />

      {/* MATRIX RAIN FULL SCREEN (Reveals after boot) */}
      {view === 'home' && !isBooting && (
        <div className="absolute inset-0 z-0">
          <MatrixRain />
        </div>
      )}

      {isBooting ? (
        <BootScreen onComplete={() => setIsBooting(false)} />
      ) : (
        /* Root Container */
        <div className="relative z-10 container mx-auto h-[100dvh] flex flex-col p-4 md:p-6 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-bottom,1rem))] pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] max-w-5xl min-h-0 w-full">

          {/* HEADER */}
          <header
            ref={homeHeaderRef}
            className={`border-b-2 border-pip/50 pb-4 mb-4 h-20 shrink-0 ${hasPlayedHomeIntro ? '' : 'home-support-intro-pending'}`}
          >
            <div className="flex h-full justify-between items-end">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold mb-1 opacity-80">
                  <Shield className="w-4 h-4" />
                  <span>PIP-OS V3.0</span>
                </div>
                {view !== 'home' && (
                  <h1 className="text-2xl md:text-4xl font-black tracking-tighter drop-shadow-[0_0_10px_rgba(20,184,166,0.5)] animate-in fade-in slide-in-from-left-4 truncate max-w-[200px] md:max-w-none">
                    {activeItem.label.toUpperCase()}
                  </h1>
                )}
              </div>

              <div className="flex flex-col items-end gap-1 text-xs font-bold opacity-75">
                <div className="flex items-center gap-2">
                  <span>HP 100/100</span>
                  <Battery className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-2">
                  <span>SIGNAL</span>
                  <Wifi className="w-4 h-4 animate-pulse" />
                </div>
              </div>
            </div>
          </header>

          {/* MAIN CONTENT AREA */}
          <main className={`flex-1 relative flex flex-col justify-center transition-all duration-75 transform-gpu min-h-0 ${isTransitioning ? 'scale-[1.02] opacity-40' : 'scale-100 opacity-100'}`}>

            {/* HOME VIEW */}
            {view === 'home' && (
              <div ref={homeLayoutRef} className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 w-full h-full relative py-2 md:py-8">

                {/* LEFT SECTION: HERO TITLE & DESCRIPTION */}
                <div
                  ref={homeProfileRef}
                  className={`flex-1 flex flex-col items-center md:items-start justify-center space-y-4 md:space-y-6 cursor-default px-4 md:px-0 md:pl-8 z-10 w-full mt-4 md:mt-0 ${hasPlayedHomeIntro ? '' : 'home-profile-intro-pending'}`}
                >
                  <h1
                    data-home-intro-item
                    data-home-intro-heading
                    className={`home-profile-intro-item text-7xl sm:text-8xl md:text-8xl lg:text-9xl font-black tracking-tighter text-pip leading-none text-center md:text-left ${hasPlayedHomeIntro ? 'home-profile-heading-glow' : ''}`}
                  >
                    {PROFILE.displayName}
                  </h1>

                  <div data-home-intro-item className="home-profile-intro-item flex items-center justify-center md:justify-start gap-2 md:gap-4 opacity-80 mb-4 md:mb-0">
                    <div className="h-[2px] w-6 md:w-12 bg-pip shrink-0 hidden md:block"></div>
                    <p className="tracking-[0.1em] md:tracking-[0.3em] text-xs md:text-sm font-bold text-pip-light whitespace-normal text-center md:text-left">{PROFILE.role.toUpperCase()}</p>
                    <div className="h-[2px] w-6 md:w-12 bg-pip shrink-0 hidden"></div>
                  </div>

                  <div data-home-intro-item className="home-profile-intro-item hidden md:block text-xs md:text-sm text-center md:text-left opacity-70 max-w-[95%] font-mono leading-relaxed border-t-2 md:border-t-0 md:border-l-2 border-pip/50 pt-4 md:pt-0 md:pl-4 mt-2">
                    <p className="text-pip-light/80">{PROFILE.summary}</p>
                  </div>

                  <div data-home-intro-item className="home-profile-intro-item flex flex-wrap justify-center md:justify-start gap-2 max-w-2xl">
                    {PROFILE.footerTags.map((tag) => (
                      <span key={tag} className="text-[10px] md:text-xs font-bold bg-pip/15 border border-pip/30 px-2 py-1 uppercase tracking-wide text-pip-light">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div data-home-intro-item className="home-profile-intro-item flex items-center justify-center md:justify-start gap-3">
                    {PROFILE.socialLinks.map((social) => {
                      const SocialIcon = SOCIAL_ICONS[social.id] ?? ExternalLink;

                      return (
                        <a
                          key={social.id}
                          href={social.url}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={social.label}
                          className="flex h-10 w-10 items-center justify-center border border-pip/35 bg-pip/10 text-pip-light transition-colors hover:border-pip hover:bg-pip/20 hover:text-white"
                        >
                          <SocialIcon size={18} />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* RIGHT SECTION: NAVIGATION */}
                <div
                  ref={homeNavRef}
                  className={`home-nav-intro flex-1 w-full md:max-w-[50%] relative group flex flex-col justify-center mb-8 md:mb-0 z-10 ${hasPlayedHomeIntro ? '' : 'pointer-events-none'}`}
                >
                  <div className="scale-90 md:scale-100 origin-center w-full">
                    <SlotMachineNav
                      items={MENU_ITEMS}
                      activeIndex={activeIndex}
                      onNavigate={setActiveIndex}
                      onSelect={handleOpenActiveSection}
                      disabled={!hasPlayedHomeIntro}
                    />
                  </div>

                  {/* Visual hint pointing to center */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[calc(100%+20px)] h-[50px] md:h-[60px] border-l-2 border-r-2 border-pip/30 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Bottom Instructions Center */}
                <div
                  ref={homeInstructionsRef}
                  className={`absolute bottom-2 md:bottom-0 left-0 right-0 flex items-center justify-center pointer-events-none pb-2 z-10 ${hasPlayedHomeIntro ? '' : 'home-support-intro-pending'}`}
                >
                  <div className="text-center text-[9px] uppercase tracking-widest opacity-50 md:text-[10px]">
                    Scroll or swipe to browse · tap to open
                  </div>
                </div>
              </div>
            )}

            {/* CONTENT VIEW */}
            {view === 'content' && (
              <div className="h-full flex flex-col animate-in slide-in-from-bottom-10 duration-500 min-h-0">
                <button
                  onClick={handleContentBack}
                  className="self-start flex items-center gap-2 mb-4 md:mb-6 hover:underline decoration-2 underline-offset-4 group shrink-0"
                >
                  <div className="bg-pip/20 p-1 rounded group-hover:bg-pip/40 transition-colors">
                    <ArrowLeft size={16} md:size={20} />
                  </div>
                  <span className="font-bold tracking-widest text-xs md:text-sm">
                    {activeItem.id === 'work' && selectedWorkCategory ? 'BACK TO WORK TYPES' : 'BACK HOME'}
                  </span>
                </button>

                <div className="flex-1 border-2 border-pip/30 bg-pip-bg/40 p-4 md:p-8 rounded relative overflow-y-auto pip-scrollbar shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] min-h-0">
                  {/* Decoration Corners */}
                  <div className="absolute top-0 left-0 w-4 h-4 md:w-6 md:h-6 border-t-2 border-l-2 md:border-t-4 md:border-l-4 border-pip" />
                  <div className="absolute top-0 right-0 w-4 h-4 md:w-6 md:h-6 border-t-2 border-r-2 md:border-t-4 md:border-r-4 border-pip" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 md:w-6 md:h-6 border-b-2 border-l-2 md:border-b-4 md:border-l-4 border-pip" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 md:w-6 md:h-6 border-b-2 border-r-2 md:border-b-4 md:border-r-4 border-pip" />

                  {/* Content Rendering */}
                  <div className="pb-8"> {/* Added padding bottom to ensure last item is visible */}
                    {activeItem.id === 'work' && (
                      <div className="min-h-full">
                        {!selectedWorkCategory ? (
                          <div className="flex min-h-[420px] items-center">
                            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                              {WORK_CATEGORIES.map((category) => {
                                const CategoryIcon = WORK_CATEGORY_ICONS[category.id] ?? Briefcase;

                                return (
                                  <button
                                    key={category.id}
                                    type="button"
                                    onClick={() => setSelectedWorkCategory(category.id)}
                                    className="group flex min-h-48 flex-col items-center justify-center border-2 border-pip/25 bg-pip/5 p-6 text-center transition-all hover:border-pip hover:bg-pip/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pip md:min-h-64 md:p-8"
                                  >
                                    <div className="mb-6 border border-pip/30 bg-pip/10 p-3 text-pip-light transition-colors group-hover:bg-pip/20">
                                      <CategoryIcon size={30} />
                                    </div>
                                    <h3 className="text-xl font-black uppercase text-pip-light transition-colors group-hover:text-white md:text-2xl">
                                      {category.label}
                                    </h3>
                                    <p className="mt-3 max-w-sm text-sm leading-relaxed opacity-65">{category.description}</p>
                                    <span className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-pip-light">
                                      Click to view <ChevronRight size={15} className="transition-transform group-hover:translate-x-1" />
                                    </span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-5">
                            {visibleProjects.map((project) => (
                              <button
                                key={project.id}
                                type="button"
                                className="group flex w-full cursor-pointer flex-col items-start gap-4 border border-pip/20 bg-pip/5 p-4 text-left transition-all hover:border-pip/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pip md:flex-row md:gap-6 md:p-6"
                                onClick={() => handleOpenProject(project)}
                              >
                                <div className="relative flex h-36 w-full shrink-0 items-center justify-center overflow-hidden border-2 border-pip/30 bg-pip-bg/60 transition-colors group-hover:border-pip/80 group-hover:bg-pip/10 md:h-32 md:w-48">
                                  <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none"></div>
                                  {project.image ? (
                                    <img
                                      src={project.image}
                                      alt={project.imageAlt}
                                      className="h-full w-full object-cover opacity-80 grayscale contrast-125 sepia hue-rotate-[120deg] saturate-150 transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:sepia-0 group-hover:hue-rotate-0"
                                    />
                                  ) : (
                                    <div className="relative z-10 text-center">
                                      <ImageIcon className="mx-auto mb-2 h-8 w-8 text-pip/40 group-hover:text-pip/80" />
                                      <p className="text-[10px] uppercase tracking-[0.2em] text-pip/55">{project.assetLabel}</p>
                                    </div>
                                  )}
                                </div>

                                <div className="flex h-full flex-1 flex-col">
                                  <div className="mb-2 flex items-start justify-between gap-4">
                                    <div>
                                      <h3 className="text-xl font-bold text-pip-light transition-colors group-hover:text-white md:text-2xl">{project.title}</h3>
                                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-pip/55 md:text-xs">{project.category}</p>
                                    </div>
                                    <ExternalLink size={16} className="shrink-0 text-pip/40 group-hover:text-pip" />
                                  </div>
                                  <p className="mb-4 line-clamp-2 text-sm leading-relaxed opacity-80 md:text-base">{project.shortDesc}</p>
                                  <div className="mb-4 flex flex-wrap gap-2">
                                    <span className="border border-pip/25 bg-pip/15 px-2 py-1 text-[10px] font-bold uppercase tracking-wide md:text-xs">{project.statusLabel}</span>
                                  </div>
                                  <div className="mt-auto flex flex-wrap gap-2">
                                    {project.tech.slice(0, 3).map((technology) => (
                                      <span key={technology} className="bg-pip/20 px-2 py-1 text-[10px] font-bold md:text-xs">{technology.toUpperCase()}</span>
                                    ))}
                                    {project.tech.length > 3 && (
                                      <span className="bg-pip/10 px-2 py-1 text-[10px] font-bold md:text-xs">+{project.tech.length - 3} MORE</span>
                                    )}
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                    {activeItem.id === 'about' && (
                      <div className="space-y-8 md:space-y-10">
                        <div className="border border-pip/25 bg-pip/5 p-5 md:p-6 shadow-[inset_0_0_20px_rgba(20,184,166,0.05)]">
                          <div className="flex flex-col gap-6 md:flex-row md:items-start">
                            <div className="w-full md:w-56 md:shrink-0">
                              <div className="relative h-56 w-full overflow-hidden border-2 border-pip/35 bg-pip-bg/50 md:h-64">
                                <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none"></div>
                                <img
                                  src={portraitImage}
                                  alt="Haider Javaid portrait"
                                  className="relative z-10 h-full w-full object-cover object-top"
                                />
                              </div>
                            </div>

                            <div className="min-w-0 flex-1">
                              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] opacity-60">Profile Summary</p>
                              <h2 className="mb-4 text-2xl md:text-3xl font-black text-pip-light">
                                {PROFILE.aboutIntro}
                              </h2>
                              <p className="max-w-3xl text-sm md:text-base leading-relaxed opacity-85">
                                {PROFILE.aboutBody}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                          <div className="border border-pip/20 bg-pip/5 p-5 md:p-6">
                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] opacity-60">Skills</p>
                            <div className="space-y-5">
                              {Object.entries(PROFILE.coreSkills).map(([group, skills]) => (
                                <div key={group}>
                                  <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-pip-light">
                                    {group}
                                  </h3>
                                  <div className="flex flex-wrap gap-2">
                                    {skills.map((skill) => (
                                      <span
                                        key={skill}
                                        className="text-[10px] md:text-xs font-bold bg-pip/10 border border-pip/25 px-2 py-1 uppercase tracking-wide"
                                      >
                                        {skill}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div className="border border-pip/20 bg-pip/5 p-5 md:p-6">
                              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] opacity-60">Operating Style</p>
                              <ul className="space-y-3">
                                {PROFILE.strengths.map((strength) => (
                                  <li key={strength} className="flex items-start gap-2 text-sm md:text-base opacity-85">
                                    <span className="mt-1 text-pip">&gt;</span>
                                    <span>{strength}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="border border-pip/20 bg-pip/5 p-5 md:p-6">
                              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] opacity-60">Languages</p>
                              <div className="flex flex-wrap gap-2">
                                {PROFILE.languages.map((language) => (
                                  <span
                                    key={language}
                                    className="text-[10px] md:text-xs font-bold bg-pip/10 border border-pip/25 px-2 py-1 uppercase tracking-wide"
                                  >
                                    {language}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeItem.id === 'exp' && (
                      <div className="space-y-8 md:space-y-12 pl-4 md:pl-6 pt-4">
                        {EXPERIENCES.map((exp) => (
                          <div key={exp.id} className="relative border-l-2 border-pip/50 pl-6 md:pl-8 pb-4 group">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-pip-bg border-2 border-pip group-hover:bg-pip group-hover:shadow-[0_0_10px_rgba(20,184,166,0.8)] transition-all"></div>
                            <h3 className="text-lg md:text-xl font-bold text-pip-light">{exp.role} <span className="opacity-60 text-pip">@ {exp.company}</span></h3>
                            <p className="text-xs md:text-sm font-bold opacity-60 mb-3 tracking-widest">{exp.period}</p>
                            <p className="opacity-80 text-sm md:text-base leading-relaxed">{exp.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {activeItem.id === 'contact' && (
                      <div className="py-6 md:py-10 flex flex-col items-center">
                        <Terminal size={48} className="mx-auto mb-4 animate-pulse text-pip" />
                        <h2 className="text-xl md:text-2xl font-bold mb-4 tracking-widest text-center">GET IN TOUCH</h2>
                        <p className="text-sm md:text-base opacity-75 text-center max-w-2xl mb-8">{PROFILE.systemNote}</p>

                        <div className="grid w-full max-w-3xl grid-cols-1 gap-4 md:grid-cols-3">
                          <a
                            href={`mailto:${PROFILE.contact.email}`}
                            className="border border-pip/30 bg-pip/5 p-4 md:p-5 text-left hover:border-pip hover:bg-pip/10 transition-colors"
                          >
                            <Mail className="mb-3 h-5 w-5 text-pip" />
                            <p className="mb-2 text-xs font-bold tracking-[0.2em] opacity-60">EMAIL</p>
                            <p className="break-all text-sm md:text-base text-pip-light">{PROFILE.contact.email}</p>
                          </a>

                          <a
                            href={`tel:${PROFILE.contact.phone.replace(/[^+\d]/g, '')}`}
                            className="border border-pip/30 bg-pip/5 p-4 md:p-5 text-left hover:border-pip hover:bg-pip/10 transition-colors"
                          >
                            <Phone className="mb-3 h-5 w-5 text-pip" />
                            <p className="mb-2 text-xs font-bold tracking-[0.2em] opacity-60">PHONE</p>
                            <p className="text-sm md:text-base text-pip-light">{PROFILE.contact.phone}</p>
                          </a>

                          <div className="border border-pip/30 bg-pip/5 p-4 md:p-5 text-left">
                            <MapPin className="mb-3 h-5 w-5 text-pip" />
                            <p className="mb-2 text-xs font-bold tracking-[0.2em] opacity-60">LOCATION</p>
                            <p className="text-sm md:text-base text-pip-light">{PROFILE.contact.location}</p>
                          </div>
                        </div>

                        <div className="mt-6 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
                          {PROFILE.socialLinks.map((social) => {
                            const SocialIcon = SOCIAL_ICONS[social.id] ?? ExternalLink;

                            return (
                              <a
                                key={social.id}
                                href={social.url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-3 border-2 border-pip/45 bg-pip/10 px-4 py-4 text-sm font-bold uppercase tracking-[0.2em] text-pip-light transition-colors hover:border-pip hover:bg-pip/20 hover:text-white"
                              >
                                <SocialIcon size={20} />
                                <span>{social.label}</span>
                              </a>
                            );
                          })}
                        </div>

                        <div className="mt-6 flex w-full max-w-3xl flex-wrap gap-2">
                          {Object.values(PROFILE.coreSkills)
                            .flat()
                            .slice(0, 8)
                            .map((skill) => (
                            <span key={skill} className="text-[10px] md:text-xs font-bold bg-pip/10 border border-pip/25 px-2 py-1 uppercase tracking-wide">
                              {skill}
                            </span>
                            ))}
                        </div>
                      </div>
                    )}
                    {activeItem.id === 'resume' && (
                      <div className="text-center py-10 h-full flex flex-col items-center justify-center">
                        <FileText size={80} className="mb-6 opacity-30" />
                        <h2 className="text-xl md:text-2xl font-bold mb-4">RESUME</h2>
                        <p className="mb-6 max-w-xl text-sm md:text-base opacity-75">
                          View {PROFILE.name}&apos;s resume in the browser or download the PDF.
                        </p>
                        <div className="flex flex-col gap-3 sm:flex-row">
                          <a
                            href={resumePdf}
                            target="_blank"
                            rel="noreferrer"
                            className="border-2 border-pip px-6 py-2 md:px-8 md:py-3 hover:bg-pip hover:text-pip-bg transition-colors font-bold uppercase tracking-widest text-sm md:text-base"
                          >
                            Open Resume
                          </a>
                          <a
                            href={resumePdf}
                            download="Haider_Javaid_Resume.pdf"
                            className="border-2 border-pip/40 px-6 py-2 md:px-8 md:py-3 hover:border-pip hover:bg-pip/15 transition-colors font-bold uppercase tracking-widest text-sm md:text-base"
                          >
                            Download PDF
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* PROJECT DETAILS VIEW */}
            {view === 'project_details' && selectedProject && (
              <div className="h-full flex flex-col animate-in slide-in-from-right-8 duration-500 min-h-0">
                <button
                  onClick={() => handleNavigate('content')}
                  className="self-start flex items-center gap-2 mb-4 md:mb-6 hover:underline decoration-2 underline-offset-4 group shrink-0"
                >
                  <div className="bg-pip/20 p-1 rounded group-hover:bg-pip/40 transition-colors">
                    <ArrowLeft size={16} md:size={20} />
                  </div>
                  <span className="font-bold tracking-widest text-xs md:text-sm uppercase">Return to Projects</span>
                </button>

                <div className="flex-1 border-2 border-pip/30 bg-pip-bg/40 p-4 md:p-8 rounded relative overflow-y-auto pip-scrollbar shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] min-h-0">
                  {/* Decoration Corners */}
                  <div className="absolute top-0 left-0 w-4 h-4 md:w-6 md:h-6 border-t-2 border-l-2 md:border-t-4 md:border-l-4 border-pip" />
                  <div className="absolute top-0 right-0 w-4 h-4 md:w-6 md:h-6 border-t-2 border-r-2 md:border-t-4 md:border-r-4 border-pip" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 md:w-6 md:h-6 border-b-2 border-l-2 md:border-b-4 md:border-l-4 border-pip" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 md:w-6 md:h-6 border-b-2 border-r-2 md:border-b-4 md:border-r-4 border-pip" />

                  <div className="space-y-6 pb-8 md:space-y-8">
                    <div>
                      <h2 className="mb-2 text-2xl font-black uppercase text-pip-light drop-shadow-[0_0_8px_rgba(20,184,166,0.5)] md:text-4xl">{selectedProject.title}</h2>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-pip/55">{selectedProject.category}</p>
                      <p className="mt-3 max-w-3xl text-sm leading-relaxed opacity-80 md:text-base">{selectedProject.shortDesc}</p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        {selectedProject.repoUrl && (
                          <a href={selectedProject.repoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 border border-pip/30 bg-pip/20 px-3 py-1.5 text-xs font-bold transition-colors hover:border-pip hover:bg-pip/40 hover:text-white">
                            <Github size={14} /> GITHUB
                          </a>
                        )}
                        {selectedProject.liveUrl && (
                          <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 border border-pip/30 bg-pip/20 px-3 py-1.5 text-xs font-bold transition-colors hover:border-pip hover:bg-pip/40 hover:text-white">
                            <ExternalLink size={14} /> LIVE SITE
                          </a>
                        )}
                        <span className="border border-pip/20 bg-pip/10 px-3 py-1.5 text-xs font-bold text-pip/70">
                          {selectedProject.statusLabel}
                        </span>
                      </div>
                    </div>

                    <div>
                      <button
                        type="button"
                        onClick={() => setIsProjectImageExpanded((current) => !current)}
                        className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pip"
                        aria-label={`${isProjectImageExpanded ? 'Collapse' : 'Expand'} ${activeProjectImage?.label ?? 'project'} preview`}
                        disabled={!activeProjectImage}
                      >
                        <div
                          ref={projectImageFrameRef}
                          className="group relative w-full overflow-hidden border-2 border-pip/40 bg-pip/5 transition-[height] duration-500 ease-out"
                          style={{
                            height: isProjectImageExpanded
                              ? `${projectImageFullHeight}px`
                              : `${COLLAPSED_PROJECT_IMAGE_HEIGHT}px`,
                          }}
                        >
                          <div className="pointer-events-none absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
                          {activeProjectImage ? (
                            <img
                              ref={projectImageRef}
                              src={activeProjectImage.src}
                              alt={activeProjectImage.alt}
                              onLoad={(event) => {
                                const { naturalHeight, naturalWidth } = event.currentTarget;
                                const frameWidth = projectImageFrameRef.current?.clientWidth;

                                if (!naturalWidth || !frameWidth) return;

                                setProjectImageFullHeight(Math.round((naturalHeight / naturalWidth) * frameWidth));
                              }}
                              className="block w-full opacity-90 grayscale contrast-125 sepia hue-rotate-[120deg] saturate-150 transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:sepia-0 group-hover:hue-rotate-0"
                            />
                          ) : (
                            <div className="flex h-full flex-col items-center justify-center">
                              <ImageIcon className="z-10 mb-2 h-12 w-12 text-pip/30" />
                              <span className="z-10 text-xs uppercase tracking-widest text-pip/40">{selectedProject.assetLabel}</span>
                            </div>
                          )}
                        </div>
                        {activeProjectImage && (
                          <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-pip/60">
                            <span>{isProjectImageExpanded ? 'Collapse image' : 'View full image'}</span>
                            <span>{activeProjectImage.label}</span>
                          </div>
                        )}
                      </button>
                    </div>

                    <div className="space-y-6">
                      <div className="border-l-2 border-pip/40 py-1 pl-4">
                        <h4 className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-white md:text-base">Overview</h4>
                        <p className="text-sm leading-relaxed opacity-90 md:text-base">{selectedProject.longDesc}</p>
                      </div>
                      <div className="border-l-2 border-pip/40 py-1 pl-4">
                        <h4 className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-white md:text-base">My Role</h4>
                        <p className="text-sm leading-relaxed opacity-90 md:text-base">{selectedProject.role}</p>
                      </div>
                    </div>

                    <div className="divide-y divide-pip/20 border-y border-pip/20">
                      {PROJECT_DETAIL_SECTIONS.map((section) => {
                        const isOpen = openProjectSection === section.id;

                        return (
                          <div key={section.id}>
                            <button
                              type="button"
                              onClick={() => setOpenProjectSection(isOpen ? null : section.id)}
                              className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-bold uppercase tracking-[0.18em] text-pip-light transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-pip md:text-base"
                              aria-expanded={isOpen}
                              aria-controls={`project-section-${section.id}`}
                            >
                              <span>{section.label}</span>
                              <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isOpen && (
                              <div id={`project-section-${section.id}`} className="pb-5 pr-8 animate-in fade-in slide-in-from-top-2 duration-200">
                                <ProjectDetailContent sectionId={section.id} project={selectedProject} />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* BREADCRUMBS FOOTER */}
            <footer
              ref={homeFooterRef}
              className={`mt-4 border-t-2 border-pip/50 pt-2 shrink-0 text-[8px] md:text-xs font-bold uppercase tracking-widest ${hasPlayedHomeIntro ? '' : 'home-support-intro-pending'}`}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span>ROOT</span>
                  {view !== 'home' && <span className="mx-1 md:mx-2 text-pip">&gt;</span>}
                  {view !== 'home' && <span>{view === 'project_details' ? 'VIEW RECENT WORK' : activeItem.label}</span>}
                  {view !== 'home' && activeItem.id === 'work' && selectedWorkCategory && <span className="mx-1 md:mx-2 text-pip">&gt;</span>}
                  {view !== 'home' && activeItem.id === 'work' && selectedWorkCategory && <span>{WORK_CATEGORIES.find((category) => category.id === selectedWorkCategory)?.label}</span>}
                  {view === 'project_details' && <span className="mx-1 md:mx-2 text-pip">&gt;</span>}
                  {view === 'project_details' && <span className="text-pip-light truncate max-w-[100px] md:max-w-none">{selectedProject.title}</span>}
                </div>
                <div className="flex gap-2 md:gap-4 text-right">
                  <span className="hidden md:inline">SYSTEM: ONLINE</span>
                  <span>SECURE</span>
                </div>
              </div>
            </footer>

          </main>
        </div>
      )}

      <style>{`
        /* 1. Base64 SVG Noise Pattern */
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E");
        }

        @keyframes noise-bg {
          0% { transform: translateX(0px) translateY(0px); }
          10% { transform: translateX(-10%) translateY(10%); }
          20% { transform: translateX(10%) translateY(-5%); }
          30% { transform: translateX(-20%) translateY(15%); }
          40% { transform: translateX(20%) translateY(-15%); }
          50% { transform: translateX(-15%) translateY(20%); }
          60% { transform: translateX(15%) translateY(-20%); }
          70% { transform: translateX(-5%) translateY(5%); }
          80% { transform: translateX(5%) translateY(-5%); }
          90% { transform: translateX(-10%) translateY(10%); }
          100% { transform: translateX(0px) translateY(0px); }
        }
        .animate-noise-bg {
          animation: noise-bg 0.2s steps(2) infinite;
        }

        @keyframes glitch-bar {
          0% { top: 10%; opacity: 0; }
          20% { top: 60%; opacity: 1; height: 4px; }
          50% { top: 20%; opacity: 0; }
          60% { top: 90%; opacity: 1; height: 12px; }
          100% { top: 10%; opacity: 0; }
        }
        .animate-glitch-bar {
          animation: glitch-bar 0.3s steps(2) infinite;
        }

        @keyframes glitch-bar-alt {
          0% { top: 80%; opacity: 0; }
          30% { top: 10%; opacity: 1; height: 2px; }
          70% { top: 50%; opacity: 0; }
          100% { top: 80%; opacity: 0; }
        }
        .animate-glitch-bar-alt {
          animation: glitch-bar-alt 0.4s steps(2) infinite reverse;
        }
        .pip-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .pip-scrollbar::-webkit-scrollbar-track {
          background: rgba(20, 184, 166, 0.05);
        }
        .pip-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(20, 184, 166, 0.4);
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default DevView;
