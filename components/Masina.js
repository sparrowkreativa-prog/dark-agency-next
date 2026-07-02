import SectionFade from './SectionFade';
import { siteData } from '@/data/content';

export default function Masina() {
  const { masina } = siteData;

  return (
    <SectionFade id="masina">
      <section className="section-masina">
        <div className="container">
          <div className="section-header">
            <span className="chapter-label">{masina.label}</span>
            <h2 className="section-title">{masina.title}</h2>
            <p className="section-sub">{masina.sub}</p>
          </div>

          {/* Live metrics strip */}
          <div className="masina-metrics-strip" style={{ marginBottom: 32 }}>
            {masina.liveMetrics.map((m) => (
              <div key={m.label} className="masina-metric">
                <div className="masina-metric-val">
                  {m.value}<span className="masina-metric-unit">{m.unit}</span>
                </div>
                <div className="masina-metric-lbl">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="masina-grid">
            {/* CRM */}
            <div className="masina-card">
              <div className="masina-card-label">Custom CRM</div>
              <h3>Revenue Dashboard</h3>
              <p>Svaki kreator, svaki dolar, u realnom vremenu.</p>
              <div className="masina-live">
                <span className="masina-live-dot" /> LIVE
              </div>
              <div className="crm-metrics">
                <div className="crm-metric">
                  <div className="crm-metric-val crm-metric-val--pink">${masina.crm.totalRevenue}</div>
                  <div className="crm-metric-lbl">Ukupan prihod</div>
                </div>
                <div className="crm-metric">
                  <div className="crm-metric-val">{masina.crm.activeCreators}</div>
                  <div className="crm-metric-lbl">Aktivni kreatori</div>
                </div>
                <div className="crm-metric">
                  <div className="crm-metric-val">{masina.crm.avgMonthly}</div>
                  <div className="crm-metric-lbl">Avg mesečno</div>
                </div>
                <div className="crm-metric">
                  <div className="crm-metric-val crm-metric-val--pink">{masina.crm.topEarner}</div>
                  <div className="crm-metric-lbl">Top kreator</div>
                </div>
              </div>
            </div>

            {/* Phone Farm */}
            <div className="masina-card">
              <div className="masina-card-label">Phone Farm</div>
              <h3>{masina.phoneFarm.title}</h3>
              <p>{masina.phoneFarm.desc}</p>
              <div className="phone-farm-grid">
                {masina.phoneFarm.devices.map((d) => (
                  <div key={d.id} className={`phone-device${d.active ? ' phone-device--active' : ''}`}>
                    <span className="phone-device-dot" />
                    <span className="phone-device-status">{d.active ? d.status : '—'}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Creator App */}
            <div className="masina-card">
              <div className="masina-card-label">Creator App</div>
              <h3>{masina.creatorApp.title}</h3>
              <p>{masina.creatorApp.desc}</p>
              <div className="creator-tasks">
                {masina.creatorApp.tasks.map((t) => (
                  <div key={t.label} className={`creator-task${t.done ? ' creator-task--done' : ''}`}>
                    <span className="task-check" />
                    <span className="task-label">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionFade>
  );
}
