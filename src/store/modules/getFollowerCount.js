/*
  Module definition for follower count fetching
*/

import axios from "axios";

import { shouldUseCache } from "../../helpers/shouldUseCache.js";

const CLIENT_ID = import.meta.env.VITE_APP_TWITCH_APP_CLIENT_ID;

const getFollowerCount = {
  namespaced: true,
  state: {
    followerCountData: {},
  },

  getters: {
    getFollowerCountById: (state) => (id) => {
      return state.followerCountData[id];
    },
  },

  mutations: {
    SET_FOLLOWER_COUNT: (state, { id, total }) => {
      state.followerCountData[id] = {
        total,
        lastUpdated: Date.now(),
      };
    },
  },

  actions: {
    async fetchFollowerCount({ commit, getters, rootGetters }, id) {
      const cachedData = getters.getFollowerCountById(id);
      const ACCESS_TOKEN = rootGetters["getTokenModule/getToken"]().token;

      // Use cache, and return
      if (shouldUseCache(cachedData)) {
        console.log("FOLLOWER COUNT: CACHED DATA USED");
        return;
      }
      console.log("FOLLOWER COUNT: FETCHING");

      // Otherwise make an API call
      try {
        const result = await axios.get(
          `https://api.twitch.tv/helix/users/follows`,
          {
            headers: {
              "Client-ID": `${CLIENT_ID}`,
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
            params: {
              to_id: id,
            },
          }
        );
        commit("SET_FOLLOWER_COUNT", {
          id,
          total: result.data.total,
        });
        return;
      } catch (err) {
        console.error(err);
      }
    },
  },
};

export default getFollowerCount;
