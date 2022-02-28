export default {
  masters(state) {
    return state.masters;
  },
  hasMasters(state) {
    return state.masters && state.masters.length > 0;
  },
  isMaster(_, getters, _2, rootGetters) {
    const masters = getters.masters;
    const userId = rootGetters.userId;
    return masters.some((master) => master.id === userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  },
};
