import { useParams } from "next/navigation";
import gameConfigs from "@/config/gameConfigs";
import { PageParams } from "@/types";

export default function useGameConfig() {
  const { gameName = 'pokedoku' } = useParams<PageParams>();
  return gameConfigs[gameName];
}