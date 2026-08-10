'use client';
import { usePathname } from 'next/navigation';
import { siteData } from '@/data/content';
import { siteDataEn } from '@/data/content.en';
import { siteDataIt } from '@/data/content.it';

export function useLang() {
  const pathname = usePathname();
  const segments = pathname.split('/');
  return segments.find(s => ['sr', 'en', 'it'].includes(s)) || 'sr';
}

export function useContent() {
  const lang = useLang();
  if (lang === 'en') return { data: siteDataEn, lang };
  if (lang === 'it') return { data: siteDataIt, lang };
  return { data: siteData, lang };
}
