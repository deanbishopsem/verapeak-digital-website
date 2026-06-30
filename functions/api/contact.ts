// Cloudflare Pages Function: handles the contact form and emails the lead
// via Resend, from a branded "Verapeak Leads" sender.
//
// Required env var (Cloudflare Pages > Settings > Environment variables):
//   RESEND_API_KEY  - your Resend API key
// Optional overrides:
//   LEAD_TO    - where leads are delivered (default deanbishopsem@gmail.com)
//   LEAD_FROM  - the From header (default "Verapeak Leads <leads@verapeakdigital.com>")

interface Env {
  RESEND_API_KEY: string;
  LEAD_TO?: string;
  LEAD_FROM?: string;
}

const str = (v: FormDataEntryValue | null) => (v == null ? '' : v.toString().trim());

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export const onRequestPost: (context: { request: Request; env: Env }) => Promise<Response> = async ({
  request,
  env,
}) => {
  const wantsJson = (request.headers.get('accept') || '').includes('application/json');
  const ok = () =>
    wantsJson
      ? json({ ok: true })
      : Response.redirect(new URL('/thank-you', request.url).toString(), 303);
  const fail = (msg: string, code: number) =>
    wantsJson
      ? json({ ok: false, error: msg }, code)
      : Response.redirect(new URL('/contact?error=1', request.url).toString(), 303);

  try {
    const form = await request.formData();

    // Honeypot: bots fill this hidden field. Pretend success, send nothing.
    if (str(form.get('_honey'))) return ok();

    const name = str(form.get('name'));
    const email = str(form.get('email'));
    const company = str(form.get('company'));
    const website = str(form.get('website'));
    const service = str(form.get('service'));
    const budget = str(form.get('budget'));
    const message = str(form.get('message'));

    if (!name || !email || !message) {
      return fail('Please fill in your name, email, and message.', 400);
    }
    if (!env.RESEND_API_KEY) {
      return fail('Email service is not configured.', 500);
    }

    const to = env.LEAD_TO || 'deanbishopsem@gmail.com';
    const from = env.LEAD_FROM || 'Verapeak Leads <leads@verapeakdigital.com>';
    const subject = `New lead: ${name}${company ? ' — ' + company : ''}`;

    const fields: [string, string][] = [
      ['Name', name],
      ['Company', company],
      ['Email', email],
      ['Website', website],
      ['Primary interest', service],
      ['Monthly budget', budget],
    ];

    const rows = fields
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px 16px 6px 0;color:#64748b;font:600 13px -apple-system,Segoe UI,sans-serif;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:6px 0;font:14px -apple-system,Segoe UI,sans-serif;color:#0f172a">${esc(v) || '&mdash;'}</td></tr>`
      )
      .join('');

    const html = `<div style="font-family:-apple-system,Segoe UI,sans-serif;max-width:620px">
  <div style="background:#0f766e;color:#fff;padding:18px 24px;border-radius:10px 10px 0 0;font:600 16px -apple-system,Segoe UI,sans-serif">New lead from verapeakdigital.com</div>
  <div style="border:1px solid #e2e8f0;border-top:none;border-radius:0 0 10px 10px;padding:24px">
    <table style="border-collapse:collapse;margin-bottom:18px">${rows}</table>
    <div style="color:#64748b;font:600 13px -apple-system,Segoe UI,sans-serif;margin-bottom:6px">Message</div>
    <div style="font:14px/1.6 -apple-system,Segoe UI,sans-serif;color:#0f172a;white-space:pre-wrap">${esc(message)}</div>
  </div>
</div>`;

    const text =
      fields.map(([k, v]) => `${k}: ${v || '—'}`).join('\n') + `\n\nMessage:\n${message}`;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject, html, text }),
    });

    if (!res.ok) {
      return fail('We could not send your message. Please email us directly.', 502);
    }
    return ok();
  } catch {
    return fail('Something went wrong. Please email us directly.', 500);
  }
};
