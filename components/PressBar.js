import Image from 'next/image';

const logos = [
  { src: '/press/vogue.webp',      alt: 'Vogue',       w: 80 },
  { src: '/press/playboy.svg',     alt: 'Playboy',     w: 100 },
  { src: '/press/maxim.webp',      alt: 'Maxim',       w: 80 },
  { src: '/press/vanityfair.webp', alt: 'Vanity Fair', w: 110 },
];

export default function PressBar() {
  return (
    <section className="press-bar">
      <div className="press-bar-inner">
        <p className="press-bar-label">As Seen On</p>
        <div className="press-bar-logos">
          {logos.map(l => (
            <span key={l.alt} className="press-logo-wrap">
              <Image
                src={l.src}
                alt={l.alt}
                width={l.w}
                height={24}
                style={{ objectFit: 'contain', height: 18 }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
