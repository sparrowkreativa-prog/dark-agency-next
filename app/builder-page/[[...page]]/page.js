'use client';
import { useEffect, useState } from 'react';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import { BUILDER_API_KEY } from '@/lib/builder';

builder.init(BUILDER_API_KEY);

export default function BuilderPage({ params }) {
  const [content, setContent] = useState(null);
  const isPreviewing = useIsPreviewing();

  useEffect(() => {
    const urlPath = '/' + (params?.page?.join('/') || '');
    builder.get('page', { url: urlPath }).promise().then(setContent);
  }, [params]);

  if (!content && !isPreviewing) return <div>Page not found</div>;

  return <BuilderComponent model="page" content={content} />;
}
