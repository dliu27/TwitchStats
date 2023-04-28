/*
  Module definition for games fetching
*/

import axios from "axios";

import shouldUseCache from "../../helpers/shouldUseCache.js";

const CLIENT_ID = import.meta.env.VITE_APP_TWITCH_APP_CLIENT_ID;
const ACCESS_TOKEN = import.meta.env.VITE_APP_TWITCH_APP_ACCESS_TOKEN;

const getGames = {
  namespaced: true,
  state: {
    gameData: {},
  },

  getters: {
    getGamesById: (state) => (id) => {
      return state.gameData[id];
    },
  },

  mutations: {
    SET_GAMES: (state, { id, data }) => {
      state.gameData[id] = {
        data,
        lastUpdated: Date.now(),
      };
    },
  },

  actions: {
    async fetchGames({ commit, getters }, id) {
      const cachedData = getters.getGamesById(id);

      // Use cache, and return
      if (shouldUseCache(cachedData)) {
        console.log("GAMES: CACHED DATA USED");
        return;
      }
      console.log("GAMES: FETCHING");

      // Otherwise make an API call
      try {
        const result = await axios.get(`https://api.twitch.tv/helix/games`, {
          headers: {
            "Client-ID": `${CLIENT_ID}`,
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
          params: { id: id },
        });
        commit("SET_GAMES", {
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

export default getGames;
