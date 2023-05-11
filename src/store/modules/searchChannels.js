/*
  Module definition for search channels fetching
*/

import axios from "axios";

import { shouldUseCache } from "../../helpers/shouldUseCache.js";

const CLIENT_ID = import.meta.env.VITE_APP_TWITCH_APP_CLIENT_ID;
const ACCESS_TOKEN = import.meta.env.VITE_APP_TWITCH_APP_ACCESS_TOKEN;

const searchChannels = {
  namespaced: true,
  state: {
    searchChannelData: {},
  },

  getters: {
    getSearchChannels: (state) => (searchQuery) => {
      return state.searchChannelData[searchQuery];
    },
  },

  mutations: {
    SET_SEARCH_CHANNELS: (state, { searchQuery, data }) => {
      state.searchChannelData[searchQuery] = {
        data,
        lastUpdated: Date.now(),
      };
    },
  },

  actions: {
    async fetchSearchChannels({ commit, getters, rootGetters }, searchQuery) {
      const cachedData = getters.getSearchChannels(searchQuery);
      const ACCESS_TOKEN = rootGetters["getTokenModule/getToken"]().token;

      // Use cache, and return
      if (shouldUseCache(cachedData)) {
        console.log("SEARCH CHANNELS: CACHED DATA USED");
        return;
      }
      console.log("SEARCH CHANNELS: FETCHING");

      // Otherwise make an API call
      if (searchQuery !== "") {
        try {
          const result = await axios.get(
            `https://api.twitch.tv/helix/search/channels`,
            {
              headers: {
                "Client-ID": `${CLIENT_ID}`,
                Authorization: `Bearer ${ACCESS_TOKEN}`,
              },
              params: {
                query: searchQuery,
                first: 5,
              },
            }
          );
          commit("SET_SEARCH_CHANNELS", {
            searchQuery,
            data: result.data.data,
          });
          return;
        } catch (err) {
          console.error(err);
        }
      }
    },
  },
};

export default searchChannels;
