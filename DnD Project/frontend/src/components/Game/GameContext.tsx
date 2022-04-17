import { createContext, useState } from "react";
import { CharList } from "../../utils/interfaces";

const maps = [
  {
    link: "/images/map_LavaVault.jpg",
    name: "Lava Vault",
  },
  {
    link: "/images/map_FireArena.jpg",
    name: "Fire Arena",
  },
  {
    link: "/images/map_AncientDesertTemple.jpg",
    name: "Ancient Desert Temple",
  },
  {
    link: "/images/map_DesertCatacombs.jpg",
    name: "Desert Catacombs",
  },
  {
    link: "/images/map_DesertIslandTropic.jpg",
    name: "Desert Island Tropic",
  },
  {
    link: "/images/map_MountainTopMonastery.jpg",
    name: "Mountain Top Monastery",
  },
  {
    link: "/images/map_MountainTopMonasteryInterior.jpg",
    name: "Mountain Top Monastery Interior",
  },
  {
    link: "/images/map_ArcadeCenter.jpg ",
    name: "Arcade Center",
  },
  {
    link: "/images/map_ClearForest.jpg",
    name: "Clear Forest",
  },
  {
    link: "/images/map_RiverFort.jpg",
    name: "River Fort",
  },
  {
    link: "/images/map_NomadicCamp.jpg",
    name: "Nomadic Camp",
  },
  {
    link: "/images/map_SpringLake.jpg",
    name: "Spring Lake",
  },
  {
    link: "/images/map_TownCenter.jpg",
    name: "Town Center",
  },
  {
    link: "/images/map_HauntedGraveyard.jpg",
    name: "Haunted Graveyard",
  },
  {
    link: "/images/map_AbandonedTunnels.jpg",
    name: "Abandoned Tunnels",
  },
  {
    link: "/images/map_HotSprings.jpg ",
    name: "Hot Springs",
  },
  {
    link: "/images/map_WizardSchoolClassroom.jpg",
    name: "Wizard School Classroom",
  },
  {
    link: "/images/map_WizardSchoolCourtyard.jpg",
    name: "Wizard School Courtyard",
  },
];

export const gameContext = createContext<any>({});

interface GameProviderProps {
  children: React.ReactElement;
}

export default function GameProvider({ children }: GameProviderProps) {
  const [chosenMap, setChosenMap] = useState(maps[0]);
  const [characters, setCharacters] = useState<CharList[]>([]);

  const addCharacter = (item: CharList) => {
    setCharacters([...characters, item]);
  };

  return (
    <gameContext.Provider
      value={{
        maps,
        chosenMap,
        setChosenMap,
        characters,
        setCharacters,
        addCharacter,
      }}
    >
      {children}
    </gameContext.Provider>
  );
}
