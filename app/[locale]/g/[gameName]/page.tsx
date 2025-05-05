"use client";

import Hero from '@/modules/Hero';
import HowToPlay from '@/modules/HowToPlay';
import FAQ from '@/modules/FAQ';
import Features from '@/modules/Features';
import GA from '@/modules/GA';
import PlayView from '@/modules/PlayView';

export default function GamePage() {
  return (
    <main>
      <PlayView />
      <Hero />
      <HowToPlay />
      <Features />
      <FAQ />
      <GA />
    </main>
  );
}
