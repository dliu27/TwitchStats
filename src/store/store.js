/*
  Store file for Vuex with VuexPersistence for cache persistence
*/

import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import searchChannels from "./modules/searchChannels";
import getUser from "./modules/getUser";
import getFollowerCount from "./modules/getFollowerCount";
import getVideos from "./modules/getVideos";
import getStream from "./modules/getStream";
import getChannel from "./modules/getChannel";
import getClips from "./modules/getClips";
import getGames from "./modules/getGames";
import getToken from "./modules/getToken";

const modules = {
  searchUsersModule: searchChannels,
  getUserModule: getUser,
  getFollowerCountModule: getFollowerCount,
  getVideosModule: getVideos,
  getStreamModule: getStream,
  getChannelModule: getChannel,
  getClipsModule: getClips,
  getGamesModule: getGames,
  getTokenModule: getToken,
};

const moduleNames = Object.keys(modules);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: moduleNames,
});

const store = createStore({
  plugins: [vuexLocal.plugin],
  modules: modules,
});

export default store;
