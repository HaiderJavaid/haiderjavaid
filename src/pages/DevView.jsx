import React, { useState } from 'react';
import { Terminal, Briefcase, User, FileText, ArrowLeft, Shield, Wifi, Battery, ExternalLink, Github, Image as ImageIcon, Mail, MapPin, Phone, Info } from 'lucide-react';
import SlotMachineNav from '../components/dev/SlotMachineNav';
import MatrixRain from '../components/dev/MatrixRain';
import BootScreen from '../components/dev/BootScreen';
import resumePdf from '../assets/resume.pdf';
import { PROFILE } from '../content/profile';
import { EXPERIENCES } from '../content/experience';
import { PROJECTS } from '../content/projects';

const MENU_ITEMS = [
  { id: 'work', label: 'View Work', icon: Briefcase },
  { id: 'about', label: 'About Me', icon: Info },
  { id: 'exp', label: 'Experience', icon: User },
  { id: 'contact', label: 'Contact Me', icon: Terminal },
  { id: 'resume', label: 'Download Resume', icon: FileText },
];

const DevView = () => {
  const [isBooting, setIsBooting] = useState(true);
  const [view, setView] = useState('home');
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenProject = (project) => {
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
      {view === 'home' && !isBooting && <MatrixRain />}

      {isBooting ? (
        <BootScreen onComplete={() => setIsBooting(false)} />
      ) : (
        /* Root Container */
        <div className="relative z-10 container mx-auto h-[100dvh] flex flex-col p-4 md:p-6 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-bottom,1rem))] pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] max-w-5xl min-h-0 w-full">

          {/* HEADER */}
          <header className="flex justify-between items-end border-b-2 border-pip/50 pb-4 mb-4 h-20 shrink-0 animate-flicker-in" style={{ animationDelay: '0.1s' }}>
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
          </header>

          {/* MAIN CONTENT AREA */}
          <main className={`flex-1 relative flex flex-col justify-center transition-all duration-75 transform-gpu min-h-0 ${isTransitioning ? 'scale-[1.02] opacity-40' : 'scale-100 opacity-100'}`}>

            {/* HOME VIEW */}
            {view === 'home' && (
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 animate-in fade-in zoom-in-95 duration-500 w-full h-full relative py-2 md:py-8">

                {/* LEFT SECTION: HERO TITLE & DESCRIPTION */}
                <div className="flex-1 flex flex-col items-center md:items-start justify-center space-y-4 md:space-y-6 transform hover:scale-[1.02] transition-transform duration-500 cursor-default px-4 md:px-0 md:pl-8 z-10 w-full mt-4 md:mt-0 animate-flicker-in" style={{ animationDelay: '0.4s' }}>
                  <h1 className="text-7xl sm:text-8xl md:text-8xl lg:text-9xl font-black tracking-tighter text-pip drop-shadow-[0_0_20px_rgba(20,184,166,0.6)] leading-none text-center md:text-left">
                    {PROFILE.displayName}
                  </h1>

                  <div className="flex items-center justify-center md:justify-start gap-2 md:gap-4 opacity-80 w-full mb-4 md:mb-0">
                    <div className="h-[2px] w-6 md:w-12 bg-pip shrink-0 hidden md:block"></div>
                    <p className="tracking-[0.1em] md:tracking-[0.3em] text-xs md:text-sm font-bold text-pip-light whitespace-normal text-center md:text-left">{PROFILE.role.toUpperCase()}</p>
                    <div className="h-[2px] w-6 md:w-12 bg-pip shrink-0 hidden"></div>
                  </div>

                  <div className="hidden md:block text-xs md:text-sm text-center md:text-left opacity-70 max-w-[95%] font-mono leading-relaxed border-t-2 md:border-t-0 md:border-l-2 border-pip/50 pt-4 md:pt-0 md:pl-4 mt-2 animate-flicker-in" style={{ animationDelay: '0.7s' }}>
                    <p className="mb-2 font-bold text-pip-light animate-pulse">&gt; SYS.INIT()</p>
                    <p>{PROFILE.summary}</p>
                  </div>

                  <div className="flex flex-wrap justify-center md:justify-start gap-2 w-full max-w-2xl">
                    {PROFILE.footerTags.map((tag) => (
                      <span key={tag} className="text-[10px] md:text-xs font-bold bg-pip/15 border border-pip/30 px-2 py-1 uppercase tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RIGHT SECTION: NAVIGATION */}
                <div className="flex-1 w-full md:max-w-[50%] relative group flex flex-col justify-center mb-8 md:mb-0 z-10 animate-flicker-in" style={{ animationDelay: '1.0s' }}>
                  <div className="scale-90 md:scale-100 origin-center w-full">
                    <SlotMachineNav
                      items={MENU_ITEMS}
                      activeIndex={activeIndex}
                      onNavigate={setActiveIndex}
                      onSelect={() => handleNavigate('content')}
                    />
                  </div>

                  {/* Visual hint pointing to center */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[calc(100%+20px)] h-[50px] md:h-[60px] border-l-2 border-r-2 border-pip/30 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Bottom Instructions Center */}
                <div className="absolute bottom-2 md:bottom-0 left-0 right-0 flex flex-col items-center gap-1 md:gap-2 pointer-events-none pb-2 z-10">
                  <div className="text-[10px] md:text-xs uppercase tracking-widest opacity-60 animate-pulse text-center">
                    [TAP CENTER OF NAV] TO ENTER
                  </div>
                  <div className="text-[9px] md:text-[10px] uppercase tracking-widest opacity-40 text-center w-full">
                    SWIPE/SCROLL TO NAVIGATE // TAP TO CONFIRM
                  </div>
                </div>
              </div>
            )}

            {/* CONTENT VIEW */}
            {view === 'content' && (
              <div className="h-full flex flex-col animate-in slide-in-from-bottom-10 duration-500 min-h-0">
                <button
                  onClick={() => handleNavigate('home')}
                  className="self-start flex items-center gap-2 mb-4 md:mb-6 hover:underline decoration-2 underline-offset-4 group shrink-0"
                >
                  <div className="bg-pip/20 p-1 rounded group-hover:bg-pip/40 transition-colors">
                    <ArrowLeft size={16} md:size={20} />
                  </div>
                  <span className="font-bold tracking-widest text-xs md:text-sm">RETURN TO HUB</span>
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
                      <div className="space-y-6 md:space-y-8">
                        {PROJECTS.map((project) => (
                          <div key={project.id} className="bg-pip/5 p-4 md:p-6 border border-pip/20 hover:border-pip/60 transition-all group flex flex-col md:flex-row gap-4 md:gap-6 items-start cursor-pointer" onClick={() => handleOpenProject(project)}>
                            {/* Image Placeholder */}
                            <div className="w-full md:w-48 h-32 md:h-full shrink-0 border-2 border-pip/30 bg-pip-bg/60 flex items-center justify-center group-hover:border-pip/80 group-hover:bg-pip/10 transition-colors relative overflow-hidden">
                              <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none"></div>
                              <div className="relative z-10 text-center">
                                <ImageIcon className="mx-auto mb-2 w-8 h-8 text-pip/40 group-hover:text-pip/80" />
                                <p className="text-[10px] uppercase tracking-[0.2em] text-pip/55">
                                  {project.assetLabel}
                                </p>
                              </div>
                            </div>

                            {/* Info */}
                            <div className="flex-1 flex flex-col h-full">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h3 className="text-xl md:text-2xl font-bold text-pip-light group-hover:text-white transition-colors">{project.title}</h3>
                                  <p className="mt-1 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-pip/55">
                                    {project.category}
                                  </p>
                                </div>
                                <ExternalLink size={16} className="text-pip/40 group-hover:text-pip" />
                              </div>
                              <p className="opacity-80 leading-relaxed mb-4 text-sm md:text-base line-clamp-2">{project.shortDesc}</p>
                              <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-[10px] md:text-xs font-bold bg-pip/15 border border-pip/25 px-2 py-1 uppercase tracking-wide">
                                  {project.statusLabel}
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.slice(0, 3).map(t => (
                                  <span key={t} className="text-[10px] md:text-xs font-bold bg-pip/20 px-2 py-1">{t.toUpperCase()}</span>
                                ))}
                                {project.tech.length > 3 && <span className="text-[10px] md:text-xs font-bold bg-pip/10 px-2 py-1">+{project.tech.length - 3} MORE</span>}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {activeItem.id === 'about' && (
                      <div className="space-y-8 md:space-y-10">
                        <div className="border border-pip/25 bg-pip/5 p-5 md:p-6 shadow-[inset_0_0_20px_rgba(20,184,166,0.05)]">
                          <div className="flex flex-col gap-6 md:flex-row md:items-start">
                            <div className="w-full md:w-56 md:shrink-0">
                              <div className="relative flex h-56 w-full items-center justify-center border-2 border-dashed border-pip/35 bg-pip-bg/50 md:h-64">
                                <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none"></div>
                                <div className="relative z-10 text-center">
                                  <User className="mx-auto mb-3 h-10 w-10 text-pip/50" />
                                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-pip/60">
                                    Image Placeholder
                                  </p>
                                  <p className="mt-2 text-[10px] md:text-xs opacity-45">
                                    Add portrait here
                                  </p>
                                </div>
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
                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] opacity-60">Core Systems</p>
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
                        <h2 className="text-xl md:text-2xl font-bold mb-4 tracking-widest text-center">ESTABLISH CONNECTION</h2>
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
                        <h2 className="text-xl md:text-2xl font-bold mb-4">PERSONNEL FILE FOUND</h2>
                        <p className="mb-6 max-w-xl text-sm md:text-base opacity-75">
                          Current resume synced for {PROFILE.name}. Open the file in-browser or download the PDF directly.
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

                    <div className="pb-8 space-y-6 md:space-y-8">
                      {/* HERO IMAGE PLACEHOLDER FOR PROJECT */}
                    <div className="w-full h-48 md:h-72 border-2 border-pip/40 bg-pip/5 flex flex-col items-center justify-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none"></div>
                      <ImageIcon className="w-12 h-12 text-pip/30 mb-2 z-10" />
                      <span className="text-pip/40 text-xs tracking-widest uppercase z-10">{selectedProject.assetLabel}</span>
                    </div>

                    <div className="flex flex-col md:flex-row md:justify-between items-start gap-4">
                      <div>
                        <h2 className="text-2xl md:text-4xl font-black text-pip-light drop-shadow-[0_0_8px_rgba(20,184,166,0.5)] mb-2 uppercase">{selectedProject.title}</h2>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-pip/55">
                          {selectedProject.category}
                        </p>
                        <div className="flex flex-wrap gap-3 mt-4">
                          {selectedProject.repoUrl && (
                            <a href={selectedProject.repoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-bold hover:text-white transition-colors bg-pip/20 px-3 py-1.5 border border-pip/30 hover:border-pip hover:bg-pip/40">
                              <Github size={14} /> GITHUB
                            </a>
                          )}
                          {selectedProject.liveUrl && (
                            <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-bold hover:text-white transition-colors bg-pip/20 px-3 py-1.5 border border-pip/30 hover:border-pip hover:bg-pip/40">
                              <ExternalLink size={14} /> LIVE SITE
                            </a>
                          )}
                          {!selectedProject.repoUrl && !selectedProject.liveUrl && (
                            <span className="flex items-center gap-1.5 text-xs font-bold bg-pip/10 px-3 py-1.5 border border-pip/20 text-pip/70">
                              {selectedProject.statusLabel}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="border border-pip/20 bg-pip/5 px-3 py-2">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">Status</p>
                        <p className="mt-1 text-sm text-pip-light">{selectedProject.statusLabel}</p>
                      </div>
                    </div>

                    <div className="space-y-6 mt-8">
                      <div className="border-l-2 border-pip/40 pl-4 py-1">
                        <h4 className="text-xs uppercase tracking-widest opacity-60 mb-2">System Overview</h4>
                        <p className="text-sm md:text-base leading-relaxed opacity-90">{selectedProject.longDesc}</p>
                      </div>
                      <div className="border-l-2 border-pip/40 pl-4 py-1">
                        <h4 className="text-xs uppercase tracking-widest opacity-60 mb-2">Outcome</h4>
                        <p className="text-sm md:text-base leading-relaxed opacity-90">{selectedProject.outcome}</p>
                      </div>
                      <div className="border-l-2 border-pip/40 pl-4 py-1">
                        <h4 className="text-xs uppercase tracking-widest opacity-60 mb-2">Role</h4>
                        <p className="text-sm md:text-base leading-relaxed opacity-90">{selectedProject.role}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                        <div>
                          <h4 className="text-xs uppercase tracking-widest opacity-60 mb-4 border-b border-pip/20 pb-2">Tech Specs</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.tech.map(t => (
                              <span key={t} className="text-xs font-bold bg-pip/10 border border-pip/30 px-2 py-1">{t}</span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xs uppercase tracking-widest opacity-60 mb-4 border-b border-pip/20 pb-2">Key Features</h4>
                          <ul className="space-y-2">
                            {selectedProject.features.map((f, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm opacity-80">
                                <span className="text-pip mt-1">&gt;</span> {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            )}

            {/* BREADCRUMBS FOOTER */}
            <footer className="mt-4 border-t-2 border-pip/50 pt-2 shrink-0 flex justify-between items-center text-[8px] md:text-xs animate-flicker-in font-bold uppercase tracking-widest" style={{ animationDelay: '1.2s' }}>
              <div className="flex items-center">
                <span>ROOT</span>
                {view !== 'home' && <span className="mx-1 md:mx-2 text-pip">&gt;</span>}
                {view !== 'home' && <span>{view === 'project_details' ? 'VIEW WORK' : activeItem.label}</span>}
                {view === 'project_details' && <span className="mx-1 md:mx-2 text-pip">&gt;</span>}
                {view === 'project_details' && <span className="text-pip-light truncate max-w-[100px] md:max-w-none">{selectedProject.title}</span>}
              </div>
              <div className="flex gap-2 md:gap-4 text-right">
                <span className="hidden md:inline">SYSTEM: ONLINE</span>
                <span>SECURE</span>
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
