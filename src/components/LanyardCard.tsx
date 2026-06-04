import { QrCode } from 'lucide-react';

export interface Project {
  id: number;
  number: string;
  title: string;
  features: string;
  designer: string;
  category: string;
  categoryColor: string;
  strapColor: string;
  image: string;
  description: string;
}

interface LanyardCardProps {
  project: Project;
  position: number; // -4 to 4, 0 = center
  isActive: boolean;
  onClick: () => void;
}

export default function LanyardCard({ project, position, isActive, onClick }: LanyardCardProps) {
  const absPos = Math.abs(position);

  const scale = isActive ? 1 : absPos === 1 ? 0.82 : absPos === 2 ? 0.68 : 0.58;
  const blur = isActive ? 0 : absPos === 1 ? 2 : absPos === 2 ? 4 : 6;
  const opacity = isActive ? 1 : absPos === 1 ? 0.85 : absPos === 2 ? 0.6 : 0.35;
  const rotate = isActive ? 0 : position * 3.5;
  const translateX = position * 220;
  const translateY = isActive ? 0 : absPos === 1 ? 20 : absPos === 2 ? 40 : 60;
  const zIndex = isActive ? 50 : 50 - absPos * 10;

  return (
    <div
      className="absolute flex flex-col items-center cursor-pointer"
      style={{
        transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
        transformOrigin: 'top center',
        filter: `blur(${blur}px)`,
        opacity,
        zIndex,
        transition: 'all 0.65s cubic-bezier(0.25, 0.8, 0.25, 1)',
        top: 0,
        left: '50%',
        marginLeft: '-110px',
      }}
      onClick={onClick}
    >
      {/* Strap */}
      <div
        className="w-5 relative flex flex-col items-center"
        style={{ height: '52px' }}
      >
        {/* Metal clip top */}
        <div
          className="w-8 h-3 rounded-sm flex items-center justify-center relative"
          style={{
            background: 'linear-gradient(180deg, #d0d0d0 0%, #8a8a8a 40%, #c0c0c0 100%)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
          }}
        >
          <div
            className="absolute bottom-0 w-2 h-1.5"
            style={{
              background: 'linear-gradient(180deg, #aaa 0%, #666 100%)',
              borderRadius: '0 0 2px 2px',
            }}
          />
        </div>
        {/* Fabric strap */}
        <div
          className="w-4 flex-1 rounded-b-sm"
          style={{
            background: `linear-gradient(180deg, ${project.strapColor}dd 0%, ${project.strapColor} 100%)`,
            boxShadow: `0 0 8px ${project.strapColor}44`,
          }}
        />
      </div>

      {/* Card body */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          width: '220px',
          background: isActive
            ? 'linear-gradient(160deg, #1a1f2e 0%, #0f1420 100%)'
            : 'linear-gradient(160deg, #1a1f2e 0%, #0f1420 100%)',
          border: isActive
            ? `2px solid ${project.strapColor}`
            : '2px solid rgba(255,255,255,0.08)',
          boxShadow: isActive
            ? `0 0 40px ${project.strapColor}40, 0 20px 60px rgba(0,0,0,0.6)`
            : '0 8px 32px rgba(0,0,0,0.5)',
        }}
      >
        {/* Project image */}
        <div className="relative overflow-hidden" style={{ height: '148px' }}>
          <img
            src={`${project.image}?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop`}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{ opacity: isActive ? 0.9 : 0.7 }}
          />
          {/* Overlay gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, transparent 40%, rgba(10,14,20,0.85) 100%)',
            }}
          />
          {/* Category tag */}
          <div className="absolute bottom-2 left-3">
            <span
              className="text-xs font-bold tracking-widest px-2 py-0.5 rounded-full"
              style={{
                background: `${project.categoryColor}22`,
                border: `1px solid ${project.categoryColor}`,
                color: project.categoryColor,
                fontSize: '9px',
              }}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Card content */}
        <div className="px-4 pt-3 pb-2">
          <p
            className="font-black tracking-wide leading-tight mb-0.5"
            style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)' }}
          >
            {project.number}
          </p>
          <h3
            className="font-black leading-tight mb-1"
            style={{ fontSize: '14px', color: '#ffffff' }}
          >
            {project.title}
          </h3>
          <p
            className="leading-snug mb-2"
            style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}
          >
            {project.description}
          </p>

          {/* Divider */}
          <div
            className="w-full mb-2"
            style={{
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)',
              borderStyle: 'dashed',
            }}
          />

          {/* Bottom row: barcode + QR */}
          <div className="flex items-center justify-between">
            {/* Barcode */}
            <div className="flex items-end gap-px" style={{ height: '20px' }}>
              {Array.from({ length: 28 }, (_, i) => (
                <div
                  key={i}
                  style={{
                    width: i % 3 === 0 ? '2px' : '1px',
                    height: `${12 + Math.sin(i * 0.9) * 5}px`,
                    background: isActive
                      ? `${project.categoryColor}cc`
                      : 'rgba(255,255,255,0.25)',
                    borderRadius: '0.5px',
                  }}
                />
              ))}
            </div>
            {/* QR icon */}
            <QrCode
              size={20}
              style={{ color: isActive ? project.categoryColor : 'rgba(255,255,255,0.3)' }}
            />
          </div>
        </div>

        {/* Active glow border effect */}
        {isActive && (
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: `linear-gradient(135deg, ${project.strapColor}18 0%, transparent 60%)`,
            }}
          />
        )}
      </div>
    </div>
  );
}
