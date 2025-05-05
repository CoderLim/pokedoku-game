
import gameConfigs from '@/config/gameConfigs';
import React from 'react';
import Link from 'next/link';

export default function RecommandGames() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-2 md:px-10">
        {/* Recommand */}
        <div className="flex gap-5 mt-3 flex-wrap">
          {
            Object.entries(gameConfigs).map(([gameName, config]) => (
              <div className="relative w-36">
                <Link href={`/g/${gameName}`}>
                  <img
                    key={gameName}
                    className="rounded-lg object-cover cursor-pointer  h-36 "
                    src={config.logo}
                    alt={config.title}
                  />
                  {/* 游戏名称 */}
                  <span
                    className="absolute w-full p-3 text-center bottom-0 text-white font-bold rounded-lg"
                    style={{ backgroundColor: 'rgba(0,0,0,.5)' }}
                  >
                    {config.title}
                  </span>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}