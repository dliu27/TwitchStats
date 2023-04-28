/*
  Module definition for user fetching
*/

import axios from "axios";

import shouldUseCache from "../../helpers/shouldUseCache.js";

const CLIENT_ID = import.meta.env.VITE_APP_TWITCH_APP_CLIENT_ID;
const ACCESS_TOKEN = import.meta.env.VITE_APP_TWITCH_APP_ACCESS_TOKEN;

const getUser = {
  namespaced: true,
  state: {
    userData: {},
  },

  getters: {
    getUserByUsername: (state) => (username) => {
      return state.userData[username];
    },
  },

  mutations: {
    SET_USER: (state, { username, data }) => {
      state.userData[username] = {
        data,
        lastUpdated: Date.now(),
      };
    },
  },

  actions: {
    async fetchUser({ commit, getters }, username) {
      const cachedData = getters.getUserByUsername(username);

      // Use cache, and return
      if (shouldUseCache(cachedData)) {
        console.log("USER: CACHED DATA USED");
        return;
      }
      console.log("USER: FETCHING");

      // Otherwise make an API call
      if (username !== "") {
        try {
          const result = await axios.get(`https://api.twitch.tv/helix/users`, {
            headers: {
              "Client-ID": `${CLIENT_ID}`,
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
            params: {
              login: username,
            },
          });
          commit("SET_USER", {
            username,
            data: result.data.data[0],
          });
          return;
        } catch (err) {
          console.error(err);
        }
      }
    },
  },
};

export default getUser;
