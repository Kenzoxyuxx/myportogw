import { useState, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import LanyardCard, { Project } from './LanyardCard';

const PROJECTS: Project[] = [
  {
    id: 1,
    number: 'PROJECT 1',
    title: 'INTERACTIVE MOBILE APP UI/UX',
    features: 'FINAL REFINED VISUAL DESIGN',
    designer: 'DESIGNED BY: GEMINI & CREATOR',
    category: 'MOBILE UI',
    categoryColor: '#00e5c9',
    strapColor: '#00e5c9',
    image: 'https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg',
    description: 'Task management & analytics dashboard with refined interaction design.',
  },
  {
    id: 2,
    number: 'PROJECT 2',
    title: 'E-COMMERCE WEB DESIGN',
    features: 'FULL STACK SHOPPING EXPERIENCE',
    designer: 'DESIGNED BY: GEMINI & CREATOR',
    category: 'WEB DESIGN',
    categoryColor: '#ff6b6b',
    strapColor: '#ff6b6b',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    description: 'Japanese minimalist e-commerce with fluid product browsing.',
  },
  {
    id: 3,
    number: 'PROJECT 3',
    title: 'BRANDING & VISUAL IDENTITY',
    features: 'CULINARY BRAND SYSTEM',
    designer: 'DESIGNED BY: GEMINI & CREATOR',
    category: 'BRANDING',
    categoryColor: '#ff9f43',
    strapColor: '#ff9f43',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    description: 'Velvet Palette — premium culinary brand with red velvet aesthetics.',
  },
  {
    id: 4,
    number: 'PROJECT 4',
    title: 'DASHBOARD ANALYTICS SYSTEM',
    features: 'DATA VISUALIZATION & KPIs',
    designer: 'DESIGNED BY: GEMINI & CREATOR',
    category: 'DATA VIZ',
    categoryColor: '#54a0ff',
    strapColor: '#54a0ff',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
    description: 'Real-time analytics platform with interactive charts and KPI tracking.',
  },
  {
    id: 5,
    number: 'PROJECT 5',
    title: 'MOBILE BANKING APP',
    features: 'FINTECH UX DESIGN',
    designer: 'DESIGNED BY: GEMINI & CREATOR',
    category: 'FINTECH',
    categoryColor: '#5f27cd',
    strapColor: '#a29bfe',
    image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg',
    description: 'Secure and intuitive mobile banking with seamless transaction flows.',
  },
  {
    id: 6,
    number: 'PROJECT 6',
    title: 'SOCIAL MEDIA PLATFORM',
    features: 'COMMUNITY & REAL-TIME FEEDS',
    designer: 'DESIGNED BY: GEMINI & CREATOR',
    category: 'SOCIAL',
    categoryColor: '#fd79a8',
    strapColor: '#fd79a8',
    image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg',
    description: 'Creator-first social platform with algorithmic content discovery.',
  },
  {
    id: 7,
    number: 'PROJECT 7',
    title: 'HEALTHCARE APP DESIGN',
    features: 'MEDICAL RECORDS & APPOINTMENTS',
    designer: 'DESIGNED BY: GEMINI & CREATOR',
    category: 'HEALTHCARE',
    categoryColor: '#00b894',
    strapColor: '#00b894',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
    description: 'Patient-centric health management with appointment scheduling.',
  },
  {
    id: 8,
    number: 'PROJECT 8',
    title: 'TRAVEL BOOKING INTERFACE',
    features: 'HOTELS, FLIGHTS & EXPERIENCES',
    designer: 'DESIGNED BY: GEMINI & CREATOR',
    category: 'TRAVEL',
    categoryColor: '#e17055',
    strapColor: '#e17055',
    image: 'https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg',
    description: 'Immersive travel discovery with curated destination recommendations.',
  },
  {
    id: 9,
    number: 'PROJECT 9',
    title: 'EDUCATION PLATFORM',
    features: 'LEARNING MANAGEMENT SYSTEM',
    designer: 'DESIGNED BY: GEMINI & CREATOR',
    category: 'EDTECH',
    categoryColor: '#fdcb6e',
    strapColor: '#fdcb6e',
    image: 'https://images.pexels.com/photos/4260485/pexels-photo-4260485.jpeg',
    description: 'Interactive LMS with progress tracking and gamified learning paths.',
  },
];

export default function LanyardCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const navigate = useCallback(
    (direction: 'prev' | 'next') => {
      if (isAnimating) return;
      setIsAnimating(true);
      setActiveIndex((prev) => {
        if (direction === 'next') return (prev + 1) % PROJECTS.length;
        return (prev - 1 + PROJECTS.length) % PROJECTS.length;
      });
      setTimeout(() => setIsAnimating(false), 700);
    },
    [isAnimating]
  );

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating || index === activeIndex) return;
      setIsAnimating(true);
      setActiveIndex(index);
      setTimeout(() => setIsAnimating(false), 700);
    },
    [isAnimating, activeIndex]
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) navigate(delta < 0 ? 'next' : 'prev');
    touchStartX.current = null;
  };

  const activeProject = PROJECTS[activeIndex];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Metal rod */}
      <div className="relative w-full max-w-5xl px-8 mb-0">
        <div
          className="w-full rounded-full relative"
          style={{
            height: '14px',
            background:
              'linear-gradient(180deg, #e8e8e8 0%, #c0c0c0 25%, #8a8a8a 50%, #b0b0b0 75%, #d0d0d0 100%)',
            boxShadow:
              '0 4px 16px rgba(0,0,0,0.6), inset 0 2px 4px rgba(255,255,255,0.3)',
          }}
        >
          {/* Rod highlights */}
          <div
            className="absolute inset-x-0 top-1 mx-4 rounded-full"
            style={{ height: '3px', background: 'rgba(255,255,255,0.35)' }}
          />
          {/* Rod end caps */}
          <div
            className="absolute left-0 top-0 bottom-0 w-4 rounded-l-full"
            style={{
              background:
                'linear-gradient(90deg, #aaa 0%, #e0e0e0 50%, #aaa 100%)',
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-4 rounded-r-full"
            style={{
              background:
                'linear-gradient(270deg, #aaa 0%, #e0e0e0 50%, #aaa 100%)',
            }}
          />
        </div>
      </div>

      {/* Cards container */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: '420px' }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {PROJECTS.map((project, index) => {
          let position = index - activeIndex;
          if (position > PROJECTS.length / 2) position -= PROJECTS.length;
          if (position < -PROJECTS.length / 2) position += PROJECTS.length;
          const visible = Math.abs(position) <= 2;
          if (!visible) return null;
          return (
            <LanyardCard
              key={project.id}
              project={project}
              position={position}
              isActive={position === 0}
              onClick={() => goTo(index)}
            />
          );
        })}
      </div>

      {/* Active project info */}
      <div className="text-center mt-6 mb-8 px-4" style={{ maxWidth: '480px' }}>
        <p
          className="text-xs font-bold tracking-widest mb-1"
          style={{ color: activeProject.categoryColor }}
        >
          {activeProject.features}
        </p>
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
          {activeProject.designer}
        </p>
      </div>

      {/* Navigation */}
      <div className="flex flex-col items-center gap-4">
        {/* Arrow buttons */}
        <div className="flex items-center gap-4">
          {/* Left arrow */}
          <div className="flex flex-col items-center gap-1">
            <span
              className="text-xs font-bold tracking-widest"
              style={{ color: 'rgba(255,255,255,0.4)', fontSize: '9px' }}
            >
              GESER
            </span>
            <button
              onClick={() => navigate('prev')}
              disabled={isAnimating}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-200 active:scale-95"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.8)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  'rgba(255,255,255,0.14)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  'rgba(255,255,255,0.08)';
              }}
            >
              <ChevronLeft size={16} />
              <span className="text-sm font-medium">SWIPE</span>
            </button>
          </div>

          {/* Pagination dots */}
          <div className="flex items-center gap-1.5 px-3">
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeIndex ? '20px' : '6px',
                  height: '6px',
                  background:
                    i === activeIndex
                      ? activeProject.categoryColor
                      : 'rgba(255,255,255,0.2)',
                  boxShadow:
                    i === activeIndex
                      ? `0 0 8px ${activeProject.categoryColor}`
                      : 'none',
                }}
              />
            ))}
          </div>

          {/* Right arrow */}
          <div className="flex flex-col items-center gap-1">
            <span
              className="text-xs font-bold tracking-widest"
              style={{ color: 'rgba(255,255,255,0.4)', fontSize: '9px' }}
            >
              GESER
            </span>
            <button
              onClick={() => navigate('next')}
              disabled={isAnimating}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-200 active:scale-95"
              style={{
                background: activeProject.categoryColor + '22',
                border: `1px solid ${activeProject.categoryColor}66`,
                color: activeProject.categoryColor,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  activeProject.categoryColor + '33';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  activeProject.categoryColor + '22';
              }}
            >
              <span className="text-sm font-medium">SWIPE</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
