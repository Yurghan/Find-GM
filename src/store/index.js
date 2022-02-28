import { createStore } from 'vuex';

import mastersModule from './modules/masters/index.js';
import requestsModule from './modules/requests/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
  modules: {
    masters: mastersModule,
    requests: requestsModule,
    auth: authModule,
  },
});

export default store;
