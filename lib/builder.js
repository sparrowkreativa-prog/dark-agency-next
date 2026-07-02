import { Builder } from '@builder.io/react';

export const BUILDER_API_KEY = '0edeb660c80b4a5dab3575372c668fe0';

// Register all custom components so Builder.io can use them visually
import('@/components/Header');
import('@/components/Hero');
import('@/components/Masina');
import('@/components/Roster');
import('@/components/FAQ');

Builder.registerComponent(
  require('@/components/Hero').default,
  {
    name: 'Hero',
    inputs: [
      { name: 'headline', type: 'text', defaultValue: 'Tvoja Agencija.\nTvoj Brend.\nTvoja Priča.' },
      { name: 'subtext',  type: 'text', defaultValue: 'Najpromišljeniji način da razviješ svoj brend.' },
      { name: 'ctaLabel', type: 'text', defaultValue: 'Počni danas' },
      { name: 'ctaHref',  type: 'text', defaultValue: '#apply' },
      { name: 'microcopy', type: 'text', defaultValue: '60-sekundi prijava · manje od 2% primljenih' },
    ],
  }
);
