'use client';
import Image from 'next/image';

type MarqueeRowProps = {
  badges: string[];
  badgesDup?: number;
  direction?: 'ltr' | 'rtl';
  speed?: number;
  itemStart?: 'first' | 'last';
};

function BadgeImage({ name }: { name: string }) {
  const src = `https://img.shields.io/badge/${name}`;
  return (
    <Image
      src={src}
      alt={name.split('-')[0].replace(/_/g, ' ')}
      width={0}
      height={0}
      className="h-7 md:h-8 w-auto badge-glow"
      unoptimized
    />
  );
}

export default function MarqueeRow({
  badges,
  badgesDup = 1,
  direction = 'rtl',
  speed = 25,
  itemStart = 'first',
}: MarqueeRowProps) {
  const orderedBadges = itemStart === 'last' ? [...badges].reverse() : badges;
  const duplicatedBadges = Array.from({ length: badgesDup }, () => orderedBadges).flat();

  const animationStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    paddingRight: '0.75rem',
    flexShrink: 0,
    animation: `${direction === 'ltr' ? 'marquee-ltr' : 'marquee-rtl'} ${speed}s infinite linear`,
  };

  const group = (suffix: string) => (
    <div style={animationStyle} aria-hidden={suffix === 'b' ? true : undefined}>
      {duplicatedBadges.map((badge, idx) => (
        <BadgeImage key={`${badge}-${suffix}-${idx}`} name={badge} />
      ))}
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes marquee-rtl {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }
        @keyframes marquee-ltr {
          from { transform: translateX(-100%); }
          to   { transform: translateX(0); }
        }
        .marquee-track:hover > div {
          animation-play-state: paused;
        }
      `}</style>
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          overflow: 'hidden',
          maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        }}
      >
        {group('a')}
        {group('b')}
      </div>
    </>
  );
}