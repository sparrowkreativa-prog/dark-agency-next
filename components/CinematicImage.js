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
          Ona pronađe ovu stranicu u <em>1 ujutru.</em>
        </p>
        <p className="cinematic-sub">Napravljena za ženu koja ni od koga ne može da pita za ovo</p>
      </div>
    </div>
  );
}
