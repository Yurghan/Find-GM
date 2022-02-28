import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      masters: [
        {
          id: 'm1',
          firstName: 'John',
          lastName: 'Smith',
          areas: ['Dungeons', 'Pathfinder', 'Warhammer'],
          description: "I'm John - great fan of D&D",
          hourlyRate: 35,
        },
        {
          id: 'm2',
          firstName: 'Maria',
          lastName: 'Jones',
          areas: ['Dungeons', 'Warhammer'],
          description: 'I am Maria - Warhammer Universe is my favourite one.',
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
