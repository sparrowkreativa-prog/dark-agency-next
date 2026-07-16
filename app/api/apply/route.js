import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const form = await req.json();

    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#fafaf8;">
        <div style="background:#911f39;padding:20px 28px;border-radius:12px 12px 0 0;">
          <h1 style="color:#fff;margin:0;font-size:20px;letter-spacing:0.05em;">VELLUTO NERO — Nova Prijava</h1>
        </div>
        <div style="background:#fff;border:1px solid #e8e4df;border-top:none;border-radius:0 0 12px 12px;padding:28px;">

          <h2 style="color:#911f39;font-size:14px;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 16px;">Kontakt</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr><td style="padding:8px 0;color:#888;font-size:13px;width:140px;">Ime</td><td style="padding:8px 0;font-size:13px;font-weight:600;color:#1a1a1a;">${form.firstName}</td></tr>
            <tr style="background:#fafaf8;"><td style="padding:8px 6px;color:#888;font-size:13px;">Email</td><td style="padding:8px 6px;font-size:13px;font-weight:600;color:#1a1a1a;">${form.email}</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:13px;">Telefon</td><td style="padding:8px 0;font-size:13px;font-weight:600;color:#1a1a1a;">${form.countryCode} ${form.phone}</td></tr>
          </table>

          <h2 style="color:#911f39;font-size:14px;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 16px;">O Kreatorici</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr><td style="padding:8px 0;color:#888;font-size:13px;width:140px;">Tip usluge</td><td style="padding:8px 0;font-size:13px;font-weight:600;color:#1a1a1a;">${form.serviceType}</td></tr>
            <tr style="background:#fafaf8;"><td style="padding:8px 6px;color:#888;font-size:13px;">Pol</td><td style="padding:8px 6px;font-size:13px;font-weight:600;color:#1a1a1a;">${form.gender}</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:13px;">Godine</td><td style="padding:8px 0;font-size:13px;font-weight:600;color:#1a1a1a;">${form.age}</td></tr>
            <tr style="background:#fafaf8;"><td style="padding:8px 6px;color:#888;font-size:13px;">Zemlja</td><td style="padding:8px 6px;font-size:13px;font-weight:600;color:#1a1a1a;">${form.country}</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:13px;">Cilj</td><td style="padding:8px 0;font-size:13px;font-weight:600;color:#1a1a1a;">${form.goal}</td></tr>
          </table>

          <h2 style="color:#911f39;font-size:14px;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 16px;">Platforma & Sadržaj</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr><td style="padding:8px 0;color:#888;font-size:13px;width:140px;">Platforma</td><td style="padding:8px 0;font-size:13px;font-weight:600;color:#1a1a1a;">${form.platform}</td></tr>
            <tr style="background:#fafaf8;"><td style="padding:8px 6px;color:#888;font-size:13px;">Handle</td><td style="padding:8px 6px;font-size:13px;font-weight:600;color:#1a1a1a;">${form.handle}</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:13px;">OF status</td><td style="padding:8px 0;font-size:13px;font-weight:600;color:#1a1a1a;">${form.ofStatus}</td></tr>
            <tr style="background:#fafaf8;"><td style="padding:8px 6px;color:#888;font-size:13px;">Agencija ranije</td><td style="padding:8px 6px;font-size:13px;font-weight:600;color:#1a1a1a;">${form.agency}</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:13px;">Sadržaj</td><td style="padding:8px 0;font-size:13px;font-weight:600;color:#1a1a1a;">${form.content}</td></tr>
            <tr style="background:#fafaf8;"><td style="padding:8px 6px;color:#888;font-size:13px;">Sati/nedeljno</td><td style="padding:8px 6px;font-size:13px;font-weight:600;color:#1a1a1a;">${form.hours}</td></tr>
            ${form.goalDetail ? `<tr><td style="padding:8px 0;color:#888;font-size:13px;">Za 12 meseci</td><td style="padding:8px 0;font-size:13px;color:#1a1a1a;">${form.goalDetail}</td></tr>` : ''}
          </table>

          <div style="background:#f8f0f3;border:1px solid rgba(145,31,57,0.15);border-radius:8px;padding:14px 18px;font-size:12px;color:#911f39;text-align:center;">
            Prijava primljena · Velluto Nero
          </div>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: 'Velluto Nero <onboarding@resend.dev>',
      to: 'velluto.nero.int@gmail.com',
      subject: `Nova prijava — ${form.firstName} (${form.ofStatus})`,
      html,
      replyTo: form.email,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error('Apply email error:', err);
    return Response.json({ ok: false, error: err.message }, { status: 500 });
  }
}
