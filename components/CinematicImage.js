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
      <div className="cinematic-caption">
        <p className="cinematic-headline">
          <em className="cinematic-headline-plain-italic">Pronađi I Ti </em><em className="cinematic-headline-em">Svoje Mesto.</em>
        </p>
        <p className="cinematic-sub">Napravljena za ženu koja nikoga ne može da pita za ovo</p>
      </div>
    </div>
  );
}
