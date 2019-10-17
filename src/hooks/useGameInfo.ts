import { useEffect } from "react";
import GameInfoStore from "stores/gameInfo";
import { toJS } from "mobx";

function useGameInfo(gameInfo: GameInfoStore) {
  const { info, fetchGameInfo } = gameInfo;

  useEffect(() => {
    if (!info.length) {
      fetchGameInfo();
    }
  }, [info]);

  return info;
}

export default useGameInfo;