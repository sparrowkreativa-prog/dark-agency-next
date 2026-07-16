import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const form = await req.json();

    const row = (label, value, shade) => `
      <tr>
        <td style="padding:11px 16px;font-family:Georgia,serif;font-size:11px;text-transform:uppercase;letter-spacing:0.12em;color:#6b6356;width:150px;background:${shade ? 'rgba(255,255,255,0.04)' : 'transparent'};border-bottom:1px solid rgba(255,255,255,0.06);">${label}</td>
        <td style="padding:11px 16px;font-family:Arial,sans-serif;font-size:13px;font-weight:700;color:#f0ede8;background:${shade ? 'rgba(255,255,255,0.04)' : 'transparent'};border-bottom:1px solid rgba(255,255,255,0.06);">${value}</td>
      </tr>`;

    const section = (title, rows) => `
      <tr><td colspan="2" style="padding:22px 16px 10px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
          <tr><td style="padding-bottom:12px;">
            <span style="font-family:Arial,sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.18em;color:#a9875c;">◆ ${title}</span>
          </td></tr>
        </table>
      </td></tr>
      ${rows}
      <tr><td colspan="2" style="padding:8px 0;"></td></tr>`;

    const html = `
    <!DOCTYPE html>
    <html>
    <body style="margin:0;padding:0;background:#111;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#111;padding:32px 16px;">
        <tr><td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

            <!-- Header -->
            <tr><td style="background:linear-gradient(135deg,#1e0a10 0%,#2a0f1a 100%);border-radius:16px 16px 0 0;padding:32px 32px 28px;border:1px solid rgba(169,135,92,0.25);border-bottom:none;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div style="font-family:Georgia,serif;font-size:22px;font-style:italic;color:#a9875c;letter-spacing:0.04em;margin-bottom:4px;">Velluto Nero</div>
                    <div style="font-family:Arial,sans-serif;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.28em;color:rgba(169,135,92,0.55);">Management Agency</div>
                  </td>
                  <td align="right">
                    <div style="display:inline-block;background:rgba(145,31,57,0.2);border:1px solid rgba(145,31,57,0.4);border-radius:999px;padding:6px 16px;">
                      <span style="font-family:Arial,sans-serif;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.16em;color:#911f39;">Nova Prijava</span>
                    </div>
                  </td>
                </tr>
              </table>
              <div style="margin-top:24px;padding-top:20px;border-top:1px solid rgba(169,135,92,0.15);">
                <div style="font-family:Arial,sans-serif;font-size:11px;color:rgba(240,237,232,0.5);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px;">Kandidatkinja</div>
                <div style="font-family:Georgia,serif;font-size:28px;font-style:italic;color:#f0ede8;">${form.firstName}</div>
              </div>
            </td></tr>

            <!-- Body -->
            <tr><td style="background:#1a1a1a;border:1px solid rgba(169,135,92,0.15);border-top:none;border-bottom:none;">
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">

                ${section('Kontakt', `
                  ${row('Email', `<a href="mailto:${form.email}" style="color:#a9875c;text-decoration:none;">${form.email}</a>`, false)}
                  ${row('Telefon', `${form.countryCode} ${form.phone}`, true)}
                `)}

                ${section('O Kreatorici', `
                  ${row('Tip usluge', form.serviceType === 'full-management' ? 'Puno upravljanje' : form.serviceType === 'dmca-only' ? 'Samo DMCA zaštita' : 'Nisam sigurna', false)}
                  ${row('Pol', form.gender, true)}
                  ${row('Godine', form.age, false)}
                  ${row('Zemlja', form.country, true)}
                  ${row('Cilj', form.goal, false)}
                `)}

                ${section('Platforma &amp; Sadržaj', `
                  ${row('Platforma', form.platform, false)}
                  ${row('Handle', form.handle, true)}
                  ${row('OF status', form.ofStatus, false)}
                  ${row('Agencija ranije', form.agency, true)}
                  ${row('Sadržaj', form.content, false)}
                  ${row('Sati/nedeljno', form.hours, true)}
                  ${form.goalDetail ? row('Za 12 meseci', form.goalDetail, false) : ''}
                `)}

              </table>
            </td></tr>

            <!-- Footer -->
            <tr><td style="background:linear-gradient(135deg,#1e0a10 0%,#2a0f1a 100%);border-radius:0 0 16px 16px;padding:20px 32px;border:1px solid rgba(169,135,92,0.25);border-top:1px solid rgba(169,135,92,0.15);">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-family:Arial,sans-serif;font-size:11px;color:rgba(169,135,92,0.6);">vellutonero.international</td>
                  <td align="right" style="font-family:Georgia,serif;font-size:11px;font-style:italic;color:rgba(169,135,92,0.5);">Building Empires Together</td>
                </tr>
              </table>
            </td></tr>

          </table>
        </td></tr>
      </table>
    </body>
    </html>
    `;

    const { error } = await resend.emails.send({
      from: 'Velluto Nero <noreply@vellutonero.international>',
      to: 'velluto.nero.int@gmail.com',
      subject: `Nova prijava — ${form.firstName} (${form.ofStatus})`,
      html,
      replyTo: form.email,
    });

    if (error) throw new Error(error.message);

    return Response.json({ ok: true });
  } catch (err) {
    console.error('Apply email error:', err);
    return Response.json({ ok: false, error: err.message }, { status: 500 });
  }
}
