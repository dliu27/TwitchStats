/*
  Module definition for stream fetching
*/

import axios from "axios";

import { shouldUseCache } from "../../helpers/shouldUseCache.js";

const CLIENT_ID = import.meta.env.VITE_APP_TWITCH_APP_CLIENT_ID;

const getStream = {
  namespaced: true,
  state: {
    streamData: {},
  },

  getters: {
    getStreamById: (state) => (id) => {
      return state.streamData[id];
    },
  },

  mutations: {
    SET_STREAM: (state, { id, data }) => {
      state.streamData[id] = {
        data,
        lastUpdated: Date.now(),
      };
    },
  },

  actions: {
    async fetchStream({ commit, getters, rootGetters }, id) {
      const cachedData = getters.getStreamById(id);
      const ACCESS_TOKEN = rootGetters["getTokenModule/getToken"]().token;

      // Use cache, and return
      if (shouldUseCache(cachedData)) {
        console.log("STREAM: CACHED DATA USED");
        return;
      }
      console.log("STREAM: FETCHING");

      // Otherwise make an API call
      try {
        const result = await axios.get(`https://api.twitch.tv/helix/streams`, {
          headers: {
            "Client-ID": `${CLIENT_ID}`,
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
          params: {
            user_id: id,
          },
        });
        commit("SET_STREAM", {
          id,
          data: result.data.data,
        });
        return;
      } catch (err) {
        console.error(err);
      }
    },
  },
};

export default getStream;
