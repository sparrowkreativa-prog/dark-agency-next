import Image from 'next/image';

const logos = [
  { src: '/press/vogue.webp',      alt: 'Vogue',       w: 100, h: 28 },
  { src: '/press/playboy.svg',     alt: 'Playboy',     w: 130, h: 28 },
  { src: '/press/maxim.webp',      alt: 'Maxim',       w: 110, h: 28 },
  { src: '/press/vanityfair.webp', alt: 'Vanity Fair', w: 140, h: 28 },
];

export default function PressBar() {
  // 8 copies: ensures track fills any screen width before the loop restarts
  const track = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section className="press-bar">
      <p className="press-bar-label">Kao kod</p>
      <div className="press-marquee-outer">
        <div className="press-marquee-track">
          {track.map((l, i) => (
            <span key={i} className="press-logo-wrap">
              <Image
                src={l.src}
                alt={l.alt}
                width={l.w}
                height={l.h}
                style={{ objectFit: 'contain', width: 'auto', height: l.h }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
