export default {
  requests(state, _, _2, rootGetters) {
    const masterId = rootGetters.userId;
    return state.requests.filter((req) => req.masterId === masterId);
  },
  hasRequests(_, getters) {
    return getters.requests && getters.requests.length > 0;
  },
};
