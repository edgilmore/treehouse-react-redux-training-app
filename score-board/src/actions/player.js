import * as PlayerActionTypes from '../action-types/player';

export const addPlayer = name => {
  return {
    type: PlayerActionTypes.ADD_PLAYER,
    name,
  };
};

export const removePlayer = playerId => {
  return {
    type: PlayerActionTypes.REMOVE_PLAYER,
    playerId,
  };
};

export const updatePlayerScore = (index, score) => {
  return {
    type: PlayerActionTypes.UPDATE_PLAYER_SCORE,
    index,
    score,
  };
};
