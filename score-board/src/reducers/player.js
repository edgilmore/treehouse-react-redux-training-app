import * as PlayerActionTypes from '../action-types/player';
import { INITAL_STATE } from '../utils/constants';

const initialState = [...INITAL_STATE];

export default function Player(state = initialState, action) {
  switch (action.type) {
    case PlayerActionTypes.ADD_PLAYER:
      return [
        ...state,
        {
          name: action.name,
          score: 0,
        },
      ];
    case PlayerActionTypes.REMOVE_PLAYER:
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
      return state.map(player => {
        if (player.id === action.id)
          return {
            ...player,
            score: player.score + action.score,
          };
        return player;
      });
    default:
      return state;
  }
}
