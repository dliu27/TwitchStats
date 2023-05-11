/*
  Module definition for Twitch Token fetching
*/

import axios from "axios";

import { shouldUseCacheSeconds } from "../../helpers/shouldUseCache.js";

const CLIENT_ID = import.meta.env.VITE_APP_TWITCH_APP_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_APP_TWITCH_APP_CLIENT_SECRET;

const getToken = {
  namespaced: true,
  state: {
    token: null,
    expiresIn: null,
    lastUpdated: null,
  },

  getters: {
    getToken: (state) => () => state,
  },

  mutations: {
    SET_TOKEN(state, { token, expiresIn }) {
      state.token = token;
      state.expiresIn = expiresIn;
      state.lastUpdated = Date.now();
    },
  },

  actions: {
    async fetchToken({ commit, getters }) {
      const cachedData = getters.getToken();
      // Use cache, and return

      if (shouldUseCacheSeconds(cachedData)) {
        console.log("TWITCH TOKEN: CACHED DATA USED");
        return;
      }

      console.log("TWITCH TOKEN: FETCHING");
      try {
        const result = await axios.post(
          "https://id.twitch.tv/oauth2/token",
          null,
          {
            params: {
              client_id: CLIENT_ID,
              client_secret: CLIENT_SECRET,
              grant_type: "client_credentials",
            },
          }
        );

        const { access_token, expires_in } = result.data;
        commit("SET_TOKEN", { token: access_token, expiresIn: expires_in });

        return access_token;
      } catch (error) {
        console.error("Error fetching access token:", error);
        return null;
      }
    },
  },
};

export default getToken;
