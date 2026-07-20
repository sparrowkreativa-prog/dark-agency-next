import Link from 'next/link';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: 'Uslovi Korišćenja — Velluto Nero',
  description: 'Uslovi korišćenja sajta Velluto Nero.',
};

const sections = [
  {
    num: '1.',
    title: 'Acceptance of Terms',
    content: `By accessing or using vellutonero.com ("Website"), you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree, do not use the Website.

These Terms govern website usage only and do not constitute a service agreement. All partnerships with Velluto Nero are governed by separate contractual terms.`,
  },
  {
    num: '2.',
    title: 'Eligibility',
    content: `To use this Website, you must:

• Be at least 18 years old
• Have the legal capacity to enter into agreements
• Use the Website in compliance with local laws

Creators must also be over 18 in compliance with platform guidelines.`,
  },
  {
    num: '3.',
    title: 'Purpose of the Website',
    content: `This Website provides:

• Information about Velluto Nero services
• Educational content, articles, and videos
• An application form for creators
• Case studies and proof of results
• Tools such as the earnings calculator

The Website is informational only. Nothing on the Website guarantees earnings, partnership acceptance, or specific outcomes.`,
  },
  {
    num: '4.',
    title: 'No Professional Advice',
    content: `Content provided (articles, calculators, videos, guides, etc.) is for informational purposes only and not professional, financial, or legal advice.`,
  },
  {
    num: '5.',
    title: 'User Responsibilities',
    content: `You agree not to:

• Use the Website for illegal purposes
• Attempt to gain unauthorized access to systems or accounts
• Scrape, copy, or extract content, data, or code
• Impersonate Velluto Nero or its staff
• Distribute harmful software (malware, bots, scripts)
• Interfere with Website functionality or security
• Upload or transmit pornographic content to the Website (applications only allow links, not uploads)

Violation may result in access restriction or legal action.`,
  },
  {
    num: '6.',
    title: 'Intellectual Property',
    content: `All content on the Website is protected by copyright and includes:

• Logos, branding, and trademarks
• Website design and layout
• Blog posts and articles
• Creator systems, frameworks, and visuals
• Photos, graphics, and videos
• Tools and calculators

You may not reproduce, republish, sell, or distribute any content without written permission. Limited personal use is allowed.`,
  },
  {
    num: '7.',
    title: 'Application Submission',
    content: `By submitting an application, you confirm:

• All information is accurate
• You are legally allowed to perform adult content online (where applicable)
• You allow us to review your application
• Submission does not guarantee acceptance

We reserve the right to accept or decline applications at our discretion.`,
  },
  {
    num: '8.',
    title: 'Earnings & Platform Disclaimer',
    content: `You acknowledge that:

• Earnings vary based on creator effort, market conditions, and audience
• Creator industries are volatile and involve inherent risk

Velluto Nero agency is not responsible for:

• Platform bans
• Shadowbans
• Algorithm changes
• Account restrictions
• Payment processor issues
• Content removals
• Loss of followers or revenue
• Mistakes caused by platforms (OF, IG, TikTok, Reddit, etc.)

We cannot control third-party platforms.

We also do not guarantee:

• Specific results
• Earnings increases
• 10–20× growth
• Partnership acceptance
• Timeline for revenue improvements`,
  },
  {
    num: '9.',
    title: 'Service Availability',
    content: `We may modify, pause, or remove Website features at any time, including:

• Blog content
• Results & case studies
• Earnings calculator
• Application form
• Design elements
• Technical functionality

We are not liable for downtime or errors.`,
  },
  {
    num: '10.',
    title: 'Third-Party Links',
    content: `The Website may contain links to:

• YouTube
• Instagram
• TikTok
• X (Twitter)
• Blogs
• Third-party tools

We are not responsible for the content, policies, or actions of third-party websites.`,
  },
  {
    num: '11.',
    title: 'SMS / Text Messaging Terms',
    content: `Program name: Velluto Nero Playbook Delivery

By providing your phone number and requesting one of our free playbooks or guides (including but not limited to our Instagram Playbook, Chatting Strategy, Reddit Playbook, Male Creator Playbook, and Chatting Script), you consent to receive a one-time SMS from Velluto Nero containing your playbook access link.

• Message frequency: One-time message per request
• Message and data rates may apply depending on your mobile carrier
• Reply STOP to opt out of future messages
• Reply HELP for support
• Compatible carriers include all major US, EU, and international carriers

We do not sell, rent, or share your phone number with third parties for marketing purposes. Your phone number is used exclusively for delivering the requested playbook link. See our Privacy Policy for full details on data handling.`,
  },
  {
    num: '12.',
    title: 'Privacy Policy',
    content: `Use of the Website is also governed by our Privacy Policy. By using the Website, you consent to the data practices described there.`,
  },
  {
    num: '13.',
    title: 'Cookies',
    content: `We use essential and non-essential cookies, subject to your consent. You may manage preferences at Cookie Policy.`,
  },
  {
    num: '14.',
    title: 'Limitation of Liability',
    content: `To the fullest extent permitted by Serbian and EU law:

• Velluto Nero is not responsible for damages arising from Website usage
• We are not responsible for data loss, errors, or interruptions
• We provide all website content "as is" with no guarantees

This limitation also applies to indirect, incidental, or consequential damages.`,
  },
  {
    num: '15.',
    title: 'Indemnification',
    content: `You agree to indemnify and hold harmless Velluto Nero from claims arising from:

• Your misuse of the Website
• Violation of these Terms
• Violation of law
• Misuse of our intellectual property`,
  },
  {
    num: '16.',
    title: 'Changes to Terms',
    content: `We may update these Terms at any time. Updates will be posted on this page with a modified "Last Updated" date.

Your continued use of the Website indicates acceptance.`,
  },
  {
    num: '17.',
    title: 'Governing Law & Jurisdiction',
    content: `These Terms are governed by:

• Serbian law, and
• EU GDPR where applicable

Disputes shall be handled by the competent court in Belgrade, Serbia.`,
  },
];

export default function Terms() {
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
            Terms & Conditions
          </h1>
          <p style={{ fontSize: 13, color: '#888', marginBottom: 56, borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: 24 }}>
            Last updated: 12th March 2026 &nbsp;·&nbsp; Company: Velluto Nero &nbsp;·&nbsp; Registered in: Serbia
          </p>

          {sections.map((s) => (
            <div key={s.num} style={{ marginBottom: 48 }}>
              <h2 style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: 22, color: '#1a1a1a', margin: '0 0 16px', display: 'flex', gap: 10 }}>
                <span style={{ color: '#a9875c', minWidth: 28 }}>{s.num}</span>
                {s.title}
              </h2>
              <p style={{ fontSize: 14, color: '#444', lineHeight: 1.8, whiteSpace: 'pre-line', margin: 0 }}>{s.content}</p>
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
