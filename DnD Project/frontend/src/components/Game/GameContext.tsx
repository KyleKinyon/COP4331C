import { createContext, useCallback, useState } from "react";
import { CharList, Game } from "../../utils/interfaces";
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
  const [sessionName, setSessionName] = useState("");
  const [circleSize, setCircleSize] = useState(10);
  const [sessionUrl, setSessionUrl] = useState("");
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = useCallback(
    (text: string) => {
      setLogs([...logs, text]);
    },
    [logs]
  );

  const updateChar = (x: number, y: number) => {
    setCharacters(
      characters.map((item: CharList) => {
        if (item !== chosenChar) {
          return item;
        }

        let newData = { ...item, x, y };
        setChosenChar(newData);
        return newData;
      })
    );

    addLog(`${chosenChar?.name} has moved`);
  };

  const removeCharacter = () => {
    addLog(`${chosenChar?.name} has fallen!`);
    setCharacters(characters.filter((char) => char !== chosenChar));
    setChosenChar(characters.length > 0 ? characters[0] : null);
  };

  const addCharacter = (item: CharList) => {
    setCharacters([...characters, item]);
    setChosenChar(item);
    addLog(`${item.name} has joined the game.`);
  };

  const saveGame = async (name: string) => {
    let obj: Game = {
      name: sessionName || name,
      map: chosenMap,
      characters,
      logs,
    };

    let url = "";

    if (sessionUrl) {
      url = `/session/updateSession`;
      obj._id = sessionUrl;
    } else {
      url = "/session/createSession";
    }

    try {
      await req.post(url, obj);
      return true;
    } catch (err) {
      return false;
    }
  };

  const loadGame = async (item: Game) => {
    try {
      setChosenMap(item.map);
      setCharacters(item.characters);
      setChosenChar(item.characters[0]);
      setSessionName(item.name);
      setSessionUrl(item._id as string);
      setLogs(item.logs ?? []);
    } catch (err) {
      console.error(err);
    }
  };

  const newGame = () => {
    setCharacters([]);
    setChosenChar(null);
    setChosenMap(maps[0]);
    setSessionUrl("");
    setSessionName("");
  };

  const deleteGame = async ({ _id, name }: Game) => {
    await req.post("/session/deleteSession", {
      id: _id,
      name,
    });

    if (_id === sessionUrl) {
      newGame();
    }
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
        sessionName,
        setSessionName,
        sessionUrl,
        setSessionUrl,

        // methods
        addLog,
        deleteGame,
        loadGame,
        newGame,
        removeCharacter,
        addCharacter,
        updateChar,
        saveGame,
      }}
    >
      {children}
    </gameContext.Provider>
  );
}
