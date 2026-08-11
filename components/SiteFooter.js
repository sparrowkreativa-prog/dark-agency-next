'use client';
import { useLang } from '@/hooks/useContent';

const T = {
  sr: {
    tagline: 'Promenila je sve. Niko nikad nije saznao.',
    ctaLabel: 'Prijavi se',
    copy: `© ${new Date().getFullYear()} Velluto Nero. Sva prava zadržana.`,
    legal: [
      { label: 'Politika privatnosti', href: '/privacy' },
      { label: 'Uslovi korišćenja',    href: '/terms' },
      { label: 'Cookies',              href: '/cookies' },
    ],
  },
  en: {
    tagline: 'She changed everything. No one ever found out.',
    ctaLabel: 'Apply now',
    copy: `© ${new Date().getFullYear()} Velluto Nero. All rights reserved.`,
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Use',   href: '/terms' },
      { label: 'Cookies',        href: '/cookies' },
    ],
  },
  it: {
    tagline: 'Ha cambiato tutto. Nessuno l\'ha mai saputo.',
    ctaLabel: 'Candidati',
    copy: `© ${new Date().getFullYear()} Velluto Nero. Tutti i diritti riservati.`,
    legal: [
      { label: 'Informativa sulla privacy', href: '/privacy' },
      { label: 'Termini di utilizzo',       href: '/terms' },
      { label: 'Cookies',                   href: '/cookies' },
    ],
  },
};

export default function SiteFooter() {
  const lang = useLang();
  const t = T[lang] || T.sr;
  const applyHref = `/${lang}/site#apply`;

  return (
    <footer id="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-brand-name">Velluto Nero</div>
            <p className="footer-tagline">{t.tagline}</p>
          </div>
          <a href={applyHref} className="btn-outline" style={{ borderColor: '#a9875c', color: '#a9875c' }}>
            {t.ctaLabel} <span>→</span>
          </a>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">{t.copy}</p>
          <div className="footer-legal">
            {t.legal.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
