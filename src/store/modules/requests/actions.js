export default {
  async contactMaster(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://rpg-gm-6edeb-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.masterId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to send request.'
      );
      throw error;
    }

    newRequest.id = responseData.name;
    newRequest.masterId = payload.masterId;

    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const masterId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const response = await fetch(
      `https://rpg-gm-6edeb-default-rtdb.europe-west1.firebasedatabase.app/requests/${masterId}.json?auth=` +
        token
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to fetch requests.'
      );
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        masterId: masterId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(request);
    }

    context.commit('setRequests', requests);
  },
};
