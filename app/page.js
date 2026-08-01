export const metadata = {
  title: 'Velluto Nero — Porodični biznis. Vode ga žene.',
  description: 'Agencija sa 8-cifrenim godišnjim prihodom kreatora, 5+ godina iskustva i poslovanjem u 12 zemalja.',
};

export default function HomePage() {
  return (
    <>
      <main className="rl-root">
        <img
          src="/redirect-desk.jpg"
          alt="Velluto Nero"
          className="rl-bg rl-bg--desk"
          draggable={false}
        />
        <img
          src="/redirect-mobile.jpg"
          alt="Velluto Nero"
          className="rl-bg rl-bg--mobile"
          draggable={false}
        />

        <a href="/site" className="rl-btn">
          POGLEDAJ <span className="rl-arrow">→</span>
        </a>
      </main>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { overflow: hidden; }

        .rl-root {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .rl-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          user-select: none;
          pointer-events: none;
        }

        .rl-bg--desk   { display: block; }
        .rl-bg--mobile { display: none; }

        @media (max-width: 640px) {
          .rl-bg--desk   { display: none; }
          .rl-bg--mobile { display: block; }
        }

        .rl-btn {
          position: absolute;
          left: 50%;
          top: 57%;
          transform: translate(-50%, -50%);
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #a9875c;
          color: #fff;
          font-family: Arial, sans-serif;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 18px 56px;
          border-radius: 999px;
          white-space: nowrap;
          animation: rl-pulse 2.2s ease-in-out infinite;
          box-shadow: 0 0 0 0 rgba(169,135,92,0.7), 0 4px 24px rgba(169,135,92,0.45);
          transition: background 0.2s ease;
        }

        .rl-btn:hover { background: #c4a070; }

        .rl-arrow { font-size: 18px; line-height: 1; }

        @keyframes rl-pulse {
          0%   { box-shadow: 0 0 0 0    rgba(169,135,92,0.7), 0 4px 24px rgba(169,135,92,0.45); }
          50%  { box-shadow: 0 0 0 18px rgba(169,135,92,0),   0 4px 32px rgba(169,135,92,0.6); }
          100% { box-shadow: 0 0 0 0    rgba(169,135,92,0),   0 4px 24px rgba(169,135,92,0.45); }
        }

        @media (max-width: 640px) {
          .rl-btn {
            top: 62%;
            font-size: 14px;
            padding: 18px 44px;
          }
        }
      `}</style>
    </>
  );
}
