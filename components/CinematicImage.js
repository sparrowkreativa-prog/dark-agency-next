import Image from 'next/image';

export default function CinematicImage() {
  return (
    <div className="cinematic-wrap">
      <Image
        src="/cinematic.jpg"
        alt=""
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        loading="lazy"
      />
      <div className="cinematic-fade-top" />
      <div className="cinematic-fade-bottom" />
    </div>
  );
}
