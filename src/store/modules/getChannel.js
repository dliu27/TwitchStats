/*
  Module definition for channel fetching
*/

import axios from "axios";

import shouldUseCache from "../../helpers/shouldUseCache.js";

const CLIENT_ID = import.meta.env.VITE_APP_TWITCH_APP_CLIENT_ID;
const ACCESS_TOKEN = import.meta.env.VITE_APP_TWITCH_APP_ACCESS_TOKEN;

const getChannel = {
  namespaced: true,
  state: {
    channelData: {},
  },

  getters: {
    getChannelById: (state) => (id) => {
      return state.channelData[id];
    },
  },

  mutations: {
    SET_CHANNEL: (state, { id, data }) => {
      state.channelData[id] = {
        data,
        lastUpdated: Date.now(),
      };
    },
  },

  actions: {
    async fetchChannel({ commit, getters }, id) {
      const cachedData = getters.getChannelById(id);

      // Use cache, and return
      if (shouldUseCache(cachedData)) {
        console.log("CHANNEL: CACHED DATA USED");
        return;
      }
      console.log("CHANNEL: FETCHING");

      // Otherwise make an API call
      try {
        const result = await axios.get(`https://api.twitch.tv/helix/channels`, {
          headers: {
            "Client-ID": `${CLIENT_ID}`,
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
          params: { broadcaster_id: id },
        });
        commit("SET_CHANNEL", {
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

export default getChannel;
