export default {
  registerMaster(state, payload) {
    state.masters.push(payload);
  },
  setMasters(state, payload) {
    state.masters = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  }
};