'use client';
import { useEffect, useState } from 'react';
import { useLang } from '@/hooks/useContent';

const NAMES = [
  // Srbija
  'Ana','Milica','Jovana','Marija','Tamara','Jelena','Nina','Sara',
  'Teodora','Katarina','Aleksandra','Dragana','Maja','Ivana','Sofija',
  'Lena','Mia','Una','Tijana','Bojana','Nevena','Nikolina','Dunja',
  // Hrvatska
  'Petra','Lucija','Iva','Antonija','Valentina','Kristina','Andreja',
  'Martina','Domagoja','Monika','Vedrana','Mirela','Karla','Tea',
  // Bosna i Hercegovina
  'Amra','Lejla','Emina','Belma','Selma','Azra','Amina','Dina',
  'Lamija','Merima','Jasmina','Edina','Samira','Alma',
  // Crna Gora
  'Milena','Gordana','Vesna','Snežana','Nataša','Đurđica','Vanja','Anđela',
];

const CITIES = [
  // Srbija
  'Beograda','Novog Sada','Niša','Kragujevca','Subotice','Zrenjanina',
  'Pančeva','Čačka','Kruševca','Vranja','Šapca','Valjeva','Leskovca',
  'Požarevca','Smedereva','Kikinde','Užica','Zaječara','Pirota',
  // Hrvatska
  'Zagreba','Splita','Rijeke','Osijeka','Zadra','Pule','Slavonskog Broda',
  'Karlovca','Varaždina','Šibenika','Dubrovnika','Petrinje','Siska',
  // Bosna i Hercegovina
  'Sarajeva','Banja Luke','Tuzle','Zenice','Mostara','Bihaća',
  'Brčkog','Prijedora','Doboja','Trebinja',
  // Crna Gora
  'Podgorice','Nikšića','Bijelog Polja','Herceg Novog','Bara',
  'Pljevalja','Kotora','Budve','Ulcinja',
];

const ACTIONS_SR = [
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
const ACTIONS_EN = [
  'is viewing "What\'s Included"',
  'is viewing "We\'re Accepting New Creators"',
  'is reading about security & privacy',
  'is viewing creator results',
  'is exploring the earnings calculator',
  'is viewing the live dashboard',
  'is reading creator stories',
  'is seeing how the system works',
  'is exploring the guarantee',
  'is reading the FAQ',
];
const ACTIONS_IT = [
  'sta guardando "Cosa è incluso"',
  'sta guardando "Accettiamo Nuove Creator"',
  'sta leggendo di sicurezza e privacy',
  'sta guardando i risultati delle creator',
  'sta esplorando il calcolatore guadagni',
  'sta guardando la dashboard live',
  'sta leggendo le storie delle creator',
  'sta vedendo come funziona il sistema',
  'sta esplorando la garanzia',
  'sta leggendo le FAQ',
];

const TIMES_SR = ['upravo','pre 1 min','pre 3 min','pre 6 min','pre 10 min','pre 18 min'];
const TIMES_EN = ['just now','1 min ago','3 min ago','6 min ago','10 min ago','18 min ago'];
const TIMES_IT = ['proprio ora','1 min fa','3 min fa','6 min fa','10 min fa','18 min fa'];

const FROM_SR = 'iz';
const FROM_EN = 'from';
const FROM_IT = 'da';

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function initials(name) { return name[0].toUpperCase(); }

function generateEntry(actions, times) {
  return { name: pick(NAMES), city: pick(CITIES), action: pick(actions), time: pick(times), color: pick(['#911f39','#a9875c','#6b7c93','#3d6b4f']) };
}

export default function NotificationToast() {
  const lang = useLang();
  const actions = lang === 'en' ? ACTIONS_EN : lang === 'it' ? ACTIONS_IT : ACTIONS_SR;
  const times   = lang === 'en' ? TIMES_EN   : lang === 'it' ? TIMES_IT   : TIMES_SR;
  const from    = lang === 'en' ? FROM_EN     : lang === 'it' ? FROM_IT    : FROM_SR;
  const [entry, setEntry] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // first toast after 8s, then every 18–28s (random)
    let timer;
    const show = () => {
      setEntry(generateEntry(actions, times));
      setVisible(true);
      setTimeout(() => setVisible(false), 4500);
      timer = setTimeout(show, 18000 + Math.random() * 10000);
    };

    const t1 = setTimeout(show, 8000);
    return () => { clearTimeout(t1); clearTimeout(timer); };
  }, []);

  if (!entry) return null;

  return (
    <div className={`nt-toast${visible ? ' nt-toast--visible' : ''}`} aria-live="polite">
      <div className="nt-avatar" style={{ background: entry.color }}>
        {initials(entry.name)}
      </div>
      <div className="nt-content">
        <p className="nt-text"><strong>{entry.name}</strong> {from} {entry.city} {entry.action}</p>
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
