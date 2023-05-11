/*
  Module definition for clips fetching
*/

import axios from "axios";

import { shouldUseCache } from "../../helpers/shouldUseCache.js";

const CLIENT_ID = import.meta.env.VITE_APP_TWITCH_APP_CLIENT_ID;

const getClips = {
  namespaced: true,
  state: {
    clipData: {},
  },

  getters: {
    getClipsById: (state) => (id) => {
      return state.clipData[id];
    },
  },

  mutations: {
    SET_CLIPS: (state, { id, data }) => {
      state.clipData[id] = {
        data,
        lastUpdated: Date.now(),
      };
    },
  },

  actions: {
    async fetchClips(
      { commit, getters, rootGetters },
      id,
      started_at,
      ended_at
    ) {
      const cachedData = getters.getClipsById(id);
      const ACCESS_TOKEN = rootGetters["getTokenModule/getToken"]().token;

      // Use cache, and return
      if (shouldUseCache(cachedData)) {
        console.log("CLIPS: CACHED DATA USED");
        return;
      }
      console.log("CLIPS: FETCHING");

      // Otherwise make an API call
      try {
        const result = await axios.get(`https://api.twitch.tv/helix/clips`, {
          headers: {
            "Client-ID": `${CLIENT_ID}`,
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
          params: {
            broadcaster_id: id,
            first: 10,
            started_at: started_at,
            ended_at: ended_at,
          },
        });
        commit("SET_CLIPS", {
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

export default getClips;
