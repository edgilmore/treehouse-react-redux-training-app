import { DateTime } from 'luxon';

export const INITIAL_STATE = {
  players: [
    {
      id: 1,
      name: 'player one',
      score: 0,
      created: DateTime.local().toString(),
    },
    {
      id: 2,
      name: 'player two',
      score: 0,
      created: DateTime.local().toString(),
    },
  ],
  selectedPlayerIndex: -1,
};
