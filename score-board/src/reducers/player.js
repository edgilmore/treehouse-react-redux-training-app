import {DateTime} from 'luxon';
import * as PlayerActionTypes from '../action-types/player';
import { INITIAL_STATE } from '../utils/constants';

export default function Player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PlayerActionTypes.ADD_PLAYER:
      return {
        ...state, 
        players: [...state.players,
        {
          id: state.players.length + 1,
          name: action.name,
          score: 0,
          created: DateTime.local(),
        },
      ]};
    case PlayerActionTypes.REMOVE_PLAYER:
      return {
        ...state,
        players: state.players.filter(player => player.id !== action.id)
      };
    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
      return {
        ...state,
        players: state.players.map(player => {
          if (player.id === action.id)
            return {
              ...player,
              score: player.score + action.score,
              updated: DateTime.local(),
            };
          return player;
        })
    }
    case PlayerActionTypes.SELECT_PLAYER:
      return {
        ...state, 
        selectedPlayerIndex: action.index
      }
    default:
      return state;
  }
}
