import Link from 'next/link';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: 'Cookies Policy — Velluto Nero',
  description: 'Politika kolačića sajta Velluto Nero.',
};

const sections = [
  {
    num: '1.',
    title: 'What Are Cookies?',
    content: `Cookies are small text files stored on your device when you visit a website. They help the site function properly, analyze performance, and deliver media (such as embedded YouTube videos).

Cookies may be:

• Essential – required for the website to work
• Analytics – help us understand traffic and performance
• Marketing/Embedded – set by YouTube or other third-party platforms`,
  },
  {
    num: '2.',
    title: 'What Cookies We Use',
    content: `Because we use Google Analytics and YouTube embeds, our site uses 3 categories:`,
    subsections: [
      {
        title: 'A) Essential Cookies (Required)',
        content: `These cookies enable:

• Basic site navigation
• Form submissions
• Security and performance

They do not collect personal data and cannot be disabled.`,
      },
      {
        title: 'B) Analytics Cookies (Google Analytics)',
        content: `We use Google Analytics to understand:

• How visitors use our website
• Which pages perform best
• Traffic sources
• Time spent on pages
• Device/browser statistics

Google Analytics may process anonymized data such as:

• IP address (anonymized)
• Page interactions
• Click events

Analytics cookies are non-essential and require consent under GDPR.`,
      },
      {
        title: 'C) Marketing Cookies (Meta Pixel)',
        content: `With your consent, we use the Meta Pixel to:

• Measure the effectiveness of our Instagram and Facebook ads
• Track conversions (e.g. form submissions)
• Build audiences for ad targeting and lookalike audiences
• Retarget visitors who have interacted with our site

Marketing cookies are non-essential and require explicit consent under GDPR. They are only activated after you accept marketing cookies via the cookie banner.`,
      },
      {
        title: 'D) Embedded Content Cookies (YouTube)',
        content: `Our website includes embedded YouTube videos, which may set cookies for:

• Playback functionality
• Tracking video engagement (views, watch time)
• Personalizing recommendations (if logged into YouTube)

These cookies only activate after you click to play a YouTube video.`,
      },
    ],
  },
  {
    num: '3.',
    title: 'Why We Use Cookies',
    content: `We use cookies to:

• Ensure the website functions properly
• Improve performance and reliability
• Analyze traffic and content performance
• Enable video playback
• Deliver a seamless user experience`,
  },
  {
    num: '4.',
    title: 'Cookie Consent (GDPR)',
    content: `On your first visit, you may see a cookie banner allowing you to:

• Accept all cookies
• Reject non-essential cookies
• Customize preferences

You can change your settings at any time using "Cookie Preferences" in the footer.`,
  },
  {
    num: '5.',
    title: 'Managing Cookies Manually',
    content: `You may control or delete cookies anytime through your browser settings:

• Chrome: chrome://settings/cookies
• Firefox: about:preferences#privacy
• Safari: Preferences → Privacy
• Edge: edge://settings/siteData

If you disable cookies, parts of the site may not function correctly.`,
  },
  {
    num: '6.',
    title: 'Third-Party Cookie Providers',
    content: `We use cookies set by:

• Google (Analytics + YouTube) – https://policies.google.com/technologies/cookies
• Meta (Pixel / Facebook) – https://www.facebook.com/policies/cookies/

These providers have their own policies governing how they store and process information.`,
  },
  {
    num: '7.',
    title: 'Updates to This Policy',
    content: `We may update this Cookies Policy to reflect:

• Changes to the website
• New tools, analytics, or embeds
• Legal/regulatory updates

Revised versions will be posted on this page with a new "Effective Date."`,
  },
];

export default function CookiesPolicy() {
  return (
    <div>
      <header id="site-header" style={{ position: 'sticky', top: 0, zIndex: 100, background: '#fafaf8', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="nav-container">
          <div className="nav-logo"><Link href="/" style={{ fontStyle: 'italic' }}>Velluto Nero</Link></div>
          <nav className="nav-links">
            <ul className="nav-menu">
              <li><Link href="/">Početna</Link></li>
              <li><Link href="/#services">Usluge</Link></li>
              <li><Link href="/rezultati">Rezultati</Link></li>
            </ul>
          </nav>
          <Link href="/#apply" className="nav-cta">Prijavi se →</Link>
        </div>
      </header>

      <main style={{ background: '#fafaf8', minHeight: '100vh', padding: '80px 20px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>

          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: '#a9875c', marginBottom: 16 }}>Legal</p>
          <h1 style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: 'clamp(28px, 5vw, 44px)', color: '#1a1a1a', margin: '0 0 12px', lineHeight: 1.2 }}>
            Cookies Policy
          </h1>
          <p style={{ fontSize: 13, color: '#888', marginBottom: 56, borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: 24 }}>
            Effective Date: March 2026 &nbsp;·&nbsp; Velluto Nero follows GDPR and EU ePrivacy rules.
          </p>

          {sections.map((s) => (
            <div key={s.num} style={{ marginBottom: 48 }}>
              <h2 style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: 22, color: '#1a1a1a', margin: '0 0 16px', display: 'flex', gap: 10 }}>
                <span style={{ color: '#a9875c', minWidth: 28 }}>{s.num}</span>
                {s.title}
              </h2>
              {s.content && (
                <p style={{ fontSize: 14, color: '#444', lineHeight: 1.8, whiteSpace: 'pre-line', margin: '0 0 16px' }}>{s.content}</p>
              )}
              {s.subsections?.map((sub) => (
                <div key={sub.title} style={{ marginBottom: 20, paddingLeft: 24, borderLeft: '2px solid rgba(145,31,57,0.15)' }}>
                  <h3 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#911f39', margin: '0 0 10px' }}>{sub.title}</h3>
                  <p style={{ fontSize: 14, color: '#444', lineHeight: 1.8, whiteSpace: 'pre-line', margin: 0 }}>{sub.content}</p>
                </div>
              ))}
            </div>
          ))}

        </div>
      </main>

      <SiteFooter />

      <style>{`
        .nav-container { max-width: 1060px; margin: 0 auto; padding: 0 24px; height: 64px; display: flex; align-items: center; gap: 40px; }
        .nav-logo a { font-family: Georgia, serif; font-size: 20px; color: #1a1a1a; text-decoration: none; }
        .nav-links { flex: 1; }
        .nav-menu { list-style: none; margin: 0; padding: 0; display: flex; gap: 28px; }
        .nav-menu a { font-size: 13px; color: #444; text-decoration: none; font-weight: 500; }
        .nav-cta { background: #911f39; color: #fff; padding: 10px 22px; border-radius: 999px; font-size: 13px; font-weight: 700; text-decoration: none; white-space: nowrap; }
        @media (max-width: 640px) { .nav-links { display: none; } }
      `}</style>
    </div>
  );
}
