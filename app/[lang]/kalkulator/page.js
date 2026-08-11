'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import Kalkulator from '@/components/Kalkulator';
import { useLang } from '@/hooks/useContent';

const T = {
  sr: { back: '← Svi resursi', title: 'Kalkulator Zarade', sub: 'Unesi svoje podatke i vidi procenjeni mesečni potencijal.' },
  en: { back: '← All resources', title: 'Earnings Calculator', sub: 'Enter your details and see your estimated monthly potential.' },
  it: { back: '← Tutte le risorse', title: 'Calcolatore Guadagni', sub: 'Inserisci i tuoi dati e scopri il tuo potenziale mensile stimato.' },
};

export default function KalkulatorPage() {
  const lang = useLang();
  const t = T[lang] || T.sr;
  const base = `/${lang}`;
  return (
    <div>
      <Header />
      <main style={{ background: '#fff', minHeight: '100vh' }}>
        <div style={{ textAlign: 'center', padding: '112px 24px 0' }}>
          <Link href={`${base}/resursi`} style={{ display: 'inline-block', fontSize: 13, color: '#aaa', textDecoration: 'none', marginBottom: 20 }}>{t.back}</Link>
          <h1 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#1a1a1a', margin: '0 0 12px' }}>{t.title}</h1>
          <p style={{ fontSize: '1rem', color: '#888', margin: '0 auto 0', maxWidth: 440, lineHeight: 1.7 }}>{t.sub}</p>
        </div>
        <Kalkulator />
      </main>
    </div>
  );
}
