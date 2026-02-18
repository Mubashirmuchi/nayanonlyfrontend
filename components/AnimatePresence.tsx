'use client';
import { AnimatePresence as _AnimatePresence } from 'framer-motion';
import React from 'react';

export default function AnimatePresence({
  children,
  itemKey,
}: {
  children: React.ReactNode;
  itemKey?: string;
}) {
  return (
    <_AnimatePresence
      mode="wait"
      onExitComplete={() => console.log('Animation Finished')}
    >
      <div key={itemKey}>{children}</div>
    </_AnimatePresence>
  );
}
