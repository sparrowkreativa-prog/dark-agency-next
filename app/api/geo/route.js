export const runtime = 'edge';

const SR = new Set(['RS', 'BA', 'HR', 'ME', 'SI', 'MK', 'XK']);
const IT = new Set(['IT', 'SM', 'VA', 'CH']);

export async function GET(request) {
  // Vercel injects country into headers on Edge runtime
  const country =
    request.headers.get('x-vercel-ip-country') ||
    request.geo?.country ||
    '';

  let lang = 'en';
  if (SR.has(country)) lang = 'sr';
  else if (IT.has(country)) lang = 'it';

  return Response.json({ lang, country });
}
