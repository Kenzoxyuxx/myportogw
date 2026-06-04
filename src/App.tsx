import LanyardCarousel from './components/LanyardCarousel';

export default function App() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: '#0a0e14', fontFamily: "'Inter', sans-serif" }}
    >
      {/* Geometric 3D grid background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.12 }}
        >
          <defs>
            <pattern
              id="grid-small"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="0.5"
              />
            </pattern>
            <pattern
              id="grid-large"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <rect width="200" height="200" fill="url(#grid-small)" />
              <path
                d="M 200 0 L 0 0 0 200"
                fill="none"
                stroke="rgba(255,255,255,0.7)"
                strokeWidth="1"
              />
            </pattern>
            <radialGradient id="fade-center" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="black" stopOpacity="0" />
              <stop offset="100%" stopColor="black" stopOpacity="1" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-large)" />
          <rect width="100%" height="100%" fill="url(#fade-center)" />
        </svg>
      </div>

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background:
            'radial-gradient(ellipse, rgba(0,229,201,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden
      />

      {/* Header */}
      <header className="relative z-10 pt-12 pb-8 text-center px-4">
        <p
          className="text-xs font-bold tracking-[0.35em] mb-3 uppercase"
          style={{ color: '#00e5c9' }}
        >
          Portofolio Interaktif
        </p>
        <h1
          className="text-4xl md:text-5xl font-black leading-tight mb-4"
          style={{ color: '#ffffff', letterSpacing: '-0.02em' }}
        >
          Lanyard Card
          <span
            className="block text-2xl md:text-3xl mt-1 font-light"
            style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0' }}
          >
            Suspended Swipeable Portfolio
          </span>
        </h1>
        <p
          className="text-sm max-w-md mx-auto leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          Geser kartu gantung untuk menjelajahi setiap proyek
        </p>
      </header>

      {/* Main carousel */}
      <main className="relative z-10 flex flex-col items-center px-4 pb-16">
        <LanyardCarousel />
      </main>

      {/* Footer */}
      <footer
        className="relative z-10 text-center pb-8"
        style={{ color: 'rgba(255,255,255,0.2)', fontSize: '11px' }}
      >
        <p className="tracking-widest">DESIGNED BY GEMINI &amp; CREATOR &mdash; 2026</p>
      </footer>
    </div>
  );
}
