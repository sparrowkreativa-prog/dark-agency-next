'use client';
import { useEffect, useState } from 'react';

const NAMES = [
  'Ana','Milica','Jovana','Marija','Tamara','Jelena','Nina','Sara',
  'Teodora','Katarina','Aleksandra','Dragana','Maja','Ivana','Sofija',
  'Lena','Mia','Una','Tijana','Bojana','Nevena','Nikolina','Dunja',
];

const CITIES = [
  'Beograda','Novog Sada','Niša','Kragujevca','Subotice','Zrenjanina',
  'Pančeva','Čačka','Kruševca','Vranja','Šapca','Valjeva','Leskovca',
  'Požarevca','Smedereva','Kikinde','Užica','Zaječara','Pirota',
];

const ACTIONS = [
  'gleda „Šta je uključeno"',
  'gleda „Primamo Nove Kreatorke"',
  'čita o bezbednosti i privatnosti',
  'gleda rezultate kreatorki',
  'istražuje kalkulator zarade',
  'gleda live dashboard',
  'čita priče kreatorki',
  'gleda kako sistem funkcioniše',
  'istražuje garancije',
  'čita odgovore na pitanja',
];

const TIMES = ['upravo','pre 1 min','pre 3 min','pre 6 min','pre 10 min','pre 18 min'];

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function initials(name) { return name[0].toUpperCase(); }

function generateEntry() {
  return { name: pick(NAMES), city: pick(CITIES), action: pick(ACTIONS), time: pick(TIMES), color: pick(['#911f39','#a9875c','#6b7c93','#3d6b4f']) };
}

export default function NotificationToast() {
  const [entry, setEntry] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // first toast after 4s, then every 7s
    const show = () => {
      setEntry(generateEntry());
      setVisible(true);
      setTimeout(() => setVisible(false), 4500);
    };

    const t1 = setTimeout(show, 4000);
    const interval = setInterval(show, 7000);
    return () => { clearTimeout(t1); clearInterval(interval); };
  }, []);

  if (!entry) return null;

  return (
    <div className={`nt-toast${visible ? ' nt-toast--visible' : ''}`} aria-live="polite">
      <div className="nt-avatar" style={{ background: entry.color }}>
        {initials(entry.name)}
      </div>
      <div className="nt-content">
        <p className="nt-text"><strong>{entry.name}</strong> iz {entry.city} {entry.action}</p>
        <p className="nt-time">{entry.time}</p>
      </div>
      <div className="nt-check">
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
      </div>

      <style>{`
        .nt-toast {
          position: fixed;
          bottom: 28px;
          left: 24px;
          z-index: 9000;
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(20px) saturate(1.8);
          -webkit-backdrop-filter: blur(20px) saturate(1.8);
          border: 1px solid rgba(255,255,255,0.95);
          box-shadow: 0 8px 32px rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,1);
          border-radius: 14px;
          padding: 12px 16px;
          max-width: 290px;
          pointer-events: none;
          opacity: 0;
          transform: translateY(16px) scale(0.97);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .nt-toast--visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .nt-avatar {
          width: 38px; height: 38px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 15px; font-weight: 700; color: #fff;
          flex-shrink: 0;
        }
        .nt-content { flex: 1; min-width: 0; }
        .nt-text { font-size: 13px; color: #1a1a1a; margin: 0 0 2px; line-height: 1.4; }
        .nt-text strong { font-weight: 700; }
        .nt-time { font-size: 11px; color: #aaa; margin: 0; }
        .nt-check {
          width: 24px; height: 24px; border-radius: 50%;
          background: rgba(34,197,94,0.12); border: 1px solid rgba(34,197,94,0.3);
          display: flex; align-items: center; justify-content: center;
          color: #22c55e; flex-shrink: 0;
        }
        @media (max-width: 480px) {
          .nt-toast { left: 12px; right: 12px; max-width: none; bottom: 20px; }
        }
      `}</style>
    </div>
  );
}
