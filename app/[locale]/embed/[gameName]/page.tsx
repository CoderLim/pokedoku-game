"use client";

import useGameConfig from '@/hooks/useGameConfig';

export default function GamePage() {
  const gameConfig = useGameConfig()

  const marginTop = gameConfig.title.toLowerCase() === 'pokedoku' ? -60 : 0;

  return (
    <main className="overflow-hidden">
       <iframe src={gameConfig.url} style={{ width: '100vw', height: '100vh', marginTop }} />
    </main>
  );
}
