'use client';

const ITEMS = [
  'Top 0.1%',
  'White-glove',
  'Diskrecija',
  'Data-driven',
  'Chat 24/7',
  'Bez avansa',
  'Sopstveni CRM',
];

function Sparkle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ color: 'rgba(169,135,92,0.7)', flexShrink: 0 }}
    >
      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
    </svg>
  );
}

function Strip() {
  return (
    <div className="mb-strip" aria-hidden="true">
      {ITEMS.map((item) => (
        <div key={item} className="mb-item">
          <span className="mb-text">{item}</span>
          <Sparkle />
        </div>
      ))}
    </div>
  );
}

export default function MarqueeBar() {
  return (
    <div className="mb-outer" aria-label="Ključne prednosti">
      <div className="mb-track">
        <Strip />
        <Strip />
        <Strip />
      </div>

      <style>{`
        .mb-outer {
          background: #0a0a0a;
          overflow: hidden;
          padding: 18px 0;
          border-top: 1px solid rgba(169,135,92,0.15);
          border-bottom: 1px solid rgba(169,135,92,0.15);
        }
        .mb-track {
          display: flex;
          width: max-content;
          animation: mb-scroll 28s linear infinite;
        }
        .mb-track:hover {
          animation-play-state: paused;
        }
        @keyframes mb-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .mb-strip {
          display: flex;
          align-items: center;
          gap: 40px;
          padding: 0 20px;
          flex-shrink: 0;
        }
        .mb-item {
          display: flex;
          align-items: center;
          gap: 40px;
          flex-shrink: 0;
        }
        .mb-text {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          text-transform: uppercase;
          letter-spacing: -0.01em;
          color: #a9875c;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
}
