import { NextResponse } from 'next/server';

// Countries that get Serbian
const SR_COUNTRIES = new Set(['RS', 'BA', 'HR', 'ME', 'SI', 'MK', 'XK']);

// Countries that get Italian
const IT_COUNTRIES = new Set(['IT', 'SM', 'VA', 'CH']);

function detectLang(country) {
  if (!country) return 'en';
  if (SR_COUNTRIES.has(country)) return 'sr';
  if (IT_COUNTRIES.has(country)) return 'it';
  return 'en';
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Only redirect the root path
  if (pathname !== '/') return NextResponse.next();

  // Vercel injects geo data into the request
  const country = request.geo?.country ?? '';
  const lang = detectLang(country);

  const url = request.nextUrl.clone();
  url.pathname = `/${lang}/site`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: '/',
};
