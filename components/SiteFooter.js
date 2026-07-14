import { siteData } from '@/data/content';

export default function SiteFooter() {
  const { footer } = siteData;
  return (
    <footer id="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-brand-name">{siteData.nav.logo}</div>
            <p className="footer-tagline">{footer.tagline}</p>
          </div>
          <a href={footer.cta.href} className="btn-outline" style={{ borderColor: '#a9875c', color: '#a9875c' }}>
            {footer.cta.label} <span>→</span>
          </a>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">{footer.copy}</p>
          <div className="footer-legal">
            {footer.legal.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
