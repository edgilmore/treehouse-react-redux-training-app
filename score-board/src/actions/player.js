import * as PlayerActionTypes from '../action-types/player';

export const addPlayer = name => {
  return {
    type: PlayerActionTypes.ADD_PLAYER,
    name,
  };
};

export const removePlayer = id => {
  return {
    type: PlayerActionTypes.REMOVE_PLAYER,
    id,
  };
};

export const updatePlayerScore = (id, score) => {
  return {
    type: PlayerActionTypes.UPDATE_PLAYER_SCORE,
    id,
    score,
  };
};

export const selectPlayer = index => {
  return {
    type: PlayerActionTypes.SELECT_PLAYER,
    index,
  };
};
