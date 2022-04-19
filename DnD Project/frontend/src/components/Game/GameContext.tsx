import { createContext, useState } from "react";
import { CharList } from "../../utils/interfaces";
import req from "../../utils/request";

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
  const [chosenChar, setChosenChar] = useState<CharList | null>(null);
  const [characters, setCharacters] = useState<CharList[]>([]);
  const [circleSize, setCircleSize] = useState(5);
  const [sessionUrl, setSessionUrl] = useState<string | null>(null);

  const updateChar = (x: number, y: number) => {
    setCharacters(
      characters.map((item: CharList) => {
        if (item === chosenChar) {
          let newData = { ...item, x, y };
          setChosenChar(newData);
          return newData;
        } else {
          return item;
        }
      })
    );
  };

  const addCharacter = (item: CharList) => {
    setCharacters([...characters, item]);
    setChosenChar(item);
  };

  const saveGame = async (name: string, newSession: boolean = false) => {
    let obj = {
      name,
      map: chosenMap.link,
      characters,
    };

    let url = newSession ? "/session/createSession" : "/session/updateSession";

    try {
      await req.post(url, obj);
      return true;
    } catch (err) {
      return false;
    }
  };

  const loadGame = async () => {
    setSessionUrl(null);
  };

  return (
    <gameContext.Provider
      value={{
        // variables
        maps,

        // state and updates
        chosenMap,
        setChosenMap,
        characters,
        setCharacters,
        chosenChar,
        setChosenChar,
        circleSize,
        setCircleSize,

        // methods
        loadGame,
        addCharacter,
        updateChar,
        saveGame,
      }}
    >
      {children}
    </gameContext.Provider>
  );
}
