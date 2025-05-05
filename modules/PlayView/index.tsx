
import { useEffect } from 'react';
import { useParams } from "next/navigation";
import gameConfigs from '@/config/gameConfigs';
import useGameConfig from '@/hooks/useGameConfig';
import React from 'react';
import Link from 'next/link';
import { PageParams } from "@/types";

export default function PlayView() {
  const gameConfig = useGameConfig()
  const { gameName = 'pokedoku' } = useParams<PageParams>();

  const renderRecommend = () => {
    if (Object.entries(gameConfigs).length <= 1) {
      return null;
    }

    return (
      <div className="flex gap-5 mt-3 flex-wrap">
          {
            Object.entries(gameConfigs).map(([gameName, config]) => (
              <div className="relative w-36" key={gameName}>
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
    )
  }

  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-2 md:px-10">
        {/* Component */}
        <div className="flex flex-col items-center justify-center gap-14 lg:gap-20">
          <iframe
            src={`/embed/${gameName}`}
            // src={gameConfig.url}
            className="w-4/5"
            style={{ height: '600px' }}
            // 页面加载后，聚焦在 iframe 上
            tabIndex={0}
          ></iframe>
        </div>

        {/* Recommand */}
        {renderRecommend()}

      </div>
    </section>
  );
}