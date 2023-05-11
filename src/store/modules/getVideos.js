/*
  Module definition for videos fetching
*/

import axios from "axios";

import { shouldUseCache } from "../../helpers/shouldUseCache.js";

const CLIENT_ID = import.meta.env.VITE_APP_TWITCH_APP_CLIENT_ID;

const getVideos = {
  namespaced: true,
  state: {
    videoData: {},
  },

  getters: {
    getVideosById: (state) => (id) => {
      return state.videoData[id];
    },
  },

  mutations: {
    SET_VIDEOS: (state, { id, data }) => {
      state.videoData[id] = {
        data,
        lastUpdated: Date.now(),
      };
    },
  },

  actions: {
    async fetchVideos({ commit, getters, rootGetters }, id) {
      const cachedData = getters.getVideosById(id);
      const ACCESS_TOKEN = rootGetters["getTokenModule/getToken"]().token;

      // Use cache, and return
      if (shouldUseCache(cachedData)) {
        console.log("VIDEOS: CACHED DATA USED");
        return;
      }
      console.log("VIDEOS: FETCHING");

      // Otherwise make an API call
      try {
        const result = await axios.get(`https://api.twitch.tv/helix/videos`, {
          headers: {
            "Client-ID": `${CLIENT_ID}`,
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
          params: { user_id: id, first: 100, type: "archive" },
        });
        commit("SET_VIDEOS", {
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

export default getVideos;
