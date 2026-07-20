import Link from 'next/link';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: 'Politika Privatnosti — Velluto Nero',
  description: 'Politika privatnosti agencije Velluto Nero.',
};

const sections = [
  {
    num: '1.',
    title: 'Introduction',
    content: `This Privacy Policy explains how Velluto Nero collects, uses, stores, and protects your personal data when you:

• Visit our website
• Apply to work with us
• Work with us as a creator partner
• Browse our blog
• Interact with our social channels
• Contact us for support or inquiries

We operate under EU GDPR, Slovenian Personal Data Protection Act (ZVOP-2), and all relevant EU privacy regulations.

We take privacy extremely seriously — especially because our creators operate in sensitive digital industries. We operate with full confidentiality, strict access controls, and creator-first privacy standards.`,
  },
  {
    num: '2.',
    title: 'Data We Collect',
    content: `We only collect the minimum data necessary to provide our services.`,
    subsections: [
      {
        title: '2.1. Data You Provide Voluntarily',
        content: `When applying to work with us:
• Name / stage name
• Email
• Social media links
• Experience level
• Country
• Content-related preferences
• Any info you voluntarily provide in the form

When becoming our client:
• Social media & platform account links
• (Optional) Access permissions you provide for workflow execution
• Communication preferences
• Contractual information

When requesting our Instagram Playbook:
• Instagram handle
• Phone number (including country code)

When contacting us:
• Name
• Email
• Message content`,
      },
      {
        title: '2.2. Automatically Collected Data (Website Analytics)',
        content: `We collect minimal usage data for analytics:
• IP address (anonymized)
• Device type / browser
• Pages visited
• Time spent on page
• Referring source
• Click and scroll behavior

We do not collect or share sensitive personal data. We do not use invasive tracking or fingerprinting.`,
      },
    ],
  },
  {
    num: '3.',
    title: 'How We Use Your Data',
    content: `We process your data strictly for the following purposes:`,
    subsections: [
      {
        title: '3.1. To Operate and Improve Our Services',
        content: `• Review applications\n• Evaluate fit for collaboration\n• Provide management services\n• Optimize account performance\n• Analyze trends and content performance`,
      },
      {
        title: '3.2. To Communicate With You',
        content: `• Send updates\n• Provide onboarding information\n• Respond to inquiries\n• Schedule calls`,
      },
      {
        title: '3.3. SMS / Text Messaging',
        content: `If you request one of our free playbooks or guides (e.g., Instagram Playbook, Chatting Strategy, Reddit Playbook, Male Creator Playbook, Chatting Script), we use your phone number solely to send a one-time SMS containing your playbook access link. We do not:

• Send marketing or promotional text messages
• Share your phone number with third parties
• Send recurring messages unless you explicitly opt in to a separate program

Messages are sent via Twilio, our SMS delivery provider, which processes your phone number under a Data Processing Agreement compliant with GDPR. You can opt out at any time by replying STOP to any message. For help, reply HELP or contact us at info@vellutonero.com.`,
      },
      {
        title: '3.4. Legal & Contractual Obligations',
        content: `• Compliance with EU GDPR and Serbian law\n• Accounting and tax purposes (if applicable)\n• Contract management`,
      },
      {
        title: '3.5. Website Optimization',
        content: `• Analyze traffic\n• Improve user experience\n• Adapt content to user behavior`,
      },
    ],
  },
  {
    num: '4.',
    title: 'Legal Basis for Processing (GDPR)',
    content: `Under Article 6 GDPR, we process your data based on:

• Consent — when submitting forms, cookies (Art. 6(1)(a))
• Contractual necessity — when applying or working with us (Art. 6(1)(b))
• Legitimate interest — website analytics, fraud prevention (Art. 6(1)(f))
• Legal obligation — accounting or regulatory compliance (Art. 6(1)(c))`,
  },
  {
    num: '5.',
    title: 'How We Protect Your Data',
    content: `We use strict technical and organizational measures:

• Encrypted storage
• Role-based access
• 2FA on all internal systems
• Regular security audits
• Zero sharing of creator NSFW content
• Logs of all data access
• Strict confidentiality clauses for staff

We never sell personal data to third parties.`,
  },
  {
    num: '6.',
    title: 'Sharing of Your Data',
    content: `We only share your data with:`,
    subsections: [
      {
        title: '6.1. Trusted Processing Partners',
        content: `Such as:
• Analytics tools (anonymized)
• Advertising platforms (Meta Pixel — conversion tracking and audience building, consent required)
• CRM/scheduling tools
• Cloud storage providers
• Email service provider
• SMS delivery provider (Twilio)

All partners comply with GDPR and have valid Data Processing Agreements (DPAs).`,
      },
      {
        title: '6.2. Legal Authorities (Rare)',
        content: `Only if legally required.\n\nWe do not share content, identity details, or sensitive creator data with any agency, partner, or platform unless explicitly instructed by you.`,
      },
    ],
  },
  {
    num: '7.',
    title: 'International Data Transfers',
    content: `Data may be processed in the EU or in GDPR-approved countries. If transferred outside the EU, we use:

• Standard Contractual Clauses (SCCs)
• Adequacy decisions
• Strong encryption`,
  },
  {
    num: '8.',
    title: 'Data Retention',
    content: `We retain data only as long as necessary:

• Application forms: 12 months (unless you request deletion sooner)
• Client data: For the duration of the partnership + 36 months
• Legal/accounting data: 10 years (as required by Slovenian law)
• SMS / playbook requests: 12 months
• Analytics: 26 months (Google default)
• Meta Pixel data: 90 days (Meta default)

You can request deletion at any time (see Section 9).`,
  },
  {
    num: '9.',
    title: 'Your Rights Under GDPR',
    content: `You have the right to:

• Access your data
• Correct your data
• Delete your data ("right to be forgotten")
• Limit processing
• Object to processing
• Withdraw consent
• Receive a copy (data portability)
• File a complaint with the Slovenian Information Commissioner (IP RS)`,
  },
  {
    num: '10.',
    title: 'Cookies',
    content: `We use minimal cookies for:

• Essential site functionality
• Anonymous analytics
• Remembering preferences

Marketing pixel cookies (Meta Pixel, Google Ads) are only activated with your explicit consent. These are used for conversion tracking, retargeting, and building lookalike audiences for advertising.

You can manage or revoke cookies anytime via your Cookie Policy page or the "Cookie preferences" link in the footer.`,
  },
  {
    num: '11.',
    title: 'Third-Party Links',
    content: `Our website may contain links to YouTube, Instagram, blog posts, etc. We are not responsible for their privacy practices.`,
  },
  {
    num: '12.',
    title: 'Policy Updates',
    content: `We may update this Privacy Policy to stay compliant. We will update the "Last updated" date at the top of this page.`,
  },
];

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p style={{ fontSize: 13, color: '#888', marginBottom: 56, borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: 24 }}>
            Last updated: 19th March 2026 &nbsp;·&nbsp; Company: Velluto Nero &nbsp;·&nbsp; Registered in: Serbia
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
