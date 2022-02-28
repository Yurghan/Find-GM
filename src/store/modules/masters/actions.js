export default {
  async registerMaster(context, data) {
    const userId = context.rootGetters.userId;
    const masterData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const token = context.rootGetters.token;

    const response = await fetch(`https://rpg-gm-6edeb-default-rtdb.europe-west1.firebasedatabase.app/masters/${userId}.json?auth=` + token, {
      method: 'PUT',
      body: JSON.stringify(masterData),
    });

    if (!response.ok) {
      // error ...
    }

    context.commit('registerMaster', {
      ...masterData,
      id: userId,
    });
  },
  async loadMasters(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(`https://rpg-gm-6edeb-default-rtdb.europe-west1.firebasedatabase.app/masters.json`);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const masters = [];

    for (const key in responseData) {
      const master = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      masters.push(master);
    }

    context.commit('setMasters', masters);
    context.commit('setFetchTimestamp');
  },
};
