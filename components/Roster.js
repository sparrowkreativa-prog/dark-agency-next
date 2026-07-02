import SectionFade from './SectionFade';
import { siteData } from '@/data/content';

export default function Roster() {
  const { roster } = siteData;

  return (
    <SectionFade id="roster">
      <section className="section-roster">
        <div className="container">
          <div className="section-header">
            <span className="chapter-label">{roster.label}</span>
            <h2 className="section-title">{roster.title}</h2>
            <p className="section-sub">{roster.sub}</p>
          </div>
          <div className="roster-grid">
            {roster.cases.map((c) => {
              const max = Math.max(...c.months);
              return (
                <div key={c.id} className="roster-card">
                  <div className="roster-card-top">
                    <span className="roster-id">{c.id}</span>
                    <span className="roster-niche">{c.niche}</span>
                  </div>
                  <div className="roster-rank">{c.rank}</div>
                  <div>
                    <div className="roster-before">Početak: <span>{c.before}</span></div>
                    <div className="roster-after">{c.after}</div>
                    <div className="roster-duration">{c.duration}</div>
                  </div>
                  <div>
                    <div className="roster-growth-label">Mesečni rast</div>
                    <div className="roster-bars">
                      {c.months.map((v, i) => (
                        <div
                          key={i}
                          className={`roster-bar${i === c.months.length - 1 ? ' roster-bar--peak' : ''}`}
                          style={{ height: `${Math.round((v / max) * 100)}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="roster-quote">"{c.quote}"</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </SectionFade>
  );
}
