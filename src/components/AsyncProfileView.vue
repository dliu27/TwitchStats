<!-- 
  Profile View Component for when the user clicks a search result from the search bar
-->

<template>
  <div class="min-h-screen">
    <div id="app" class="max-w-2xl mx-auto py-6">
      <div class="flex items-center justify-center" v-if="user">
        <img
          class="w-32 h-32 border-4 border-black rounded-full"
          :src="user.profile_image_url"
          alt="User's profile picture"
        />
        <div class="ml-4">
          <span class="flex items-center">
            <h1
              class="font-bold text-2xl text-white hover: cursor-pointer"
              @click="openLink(`https://www.twitch.tv/${user.login}`)"
            >
              {{ user.display_name }}
            </h1>
            <svg
              class="ml-1 w-6 h-6 mr-2"
              viewBox="0 0 16 16"
              aria-label="Verified Partner"
              fill="var(--twitch-checkmark)"
              v-if="user.broadcaster_type === 'partner'"
            >
              <path
                fill-rule="evenodd"
                d="M12.5 3.5 8 2 3.5 3.5 2 8l1.5 4.5L8 14l4.5-1.5L14 8l-1.5-4.5ZM7 11l4.5-4.5L10 5 7 8 5.5 6.5 4 8l3 3Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>

          <p class="text-lg text-white">
            {{
              !followerCountError
                ? formatGeneralNumber(followerCount)
                : followerCountError
            }}
            followers
          </p>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="relative">
        <div class="flex justify-between items-center mb-4">
          <h1 class="text-2xl font-bold text-white z-0">Key Metrics</h1>
          <div
            class="flex justify-end items-center bg-black rounded-md overflow-hidden"
          >
            <div
              class="py-1 px-3 bg-black rounded transition-all duration-200 cursor-pointer"
              :class="{
                'bg-yellow-400': selectedOption === 0,
              }"
              @click="handleSwitcherClick(0)"
            >
              <span
                :class="{
                  'text-black': selectedOption === 0,
                  'text-white': selectedOption !== 0,
                }"
                >Past Week</span
              >
            </div>
            <div
              class="py-1 px-3 bg-black rounded transition-all duration-200 cursor-pointer"
              :class="{
                'bg-yellow-400': selectedOption === 1,
              }"
              @click="handleSwitcherClick(1)"
            >
              <span
                :class="{
                  'text-black': selectedOption === 1,
                  'text-white': selectedOption !== 1,
                }"
                >Past Month</span
              >
            </div>
            <div
              class="py-1 px-3 bg-black rounded transition-all duration-200 cursor-pointer"
              :class="{
                'bg-yellow-400': selectedOption === 2,
              }"
              @click="handleSwitcherClick(2)"
            >
              <span
                :class="{
                  'text-black': selectedOption === 2,
                  'text-white': selectedOption !== 2,
                }"
                >Past Year</span
              >
            </div>
          </div>
        </div>
        <div class="h-1 bg-black rounded-full relative">
          <div
            class="h-1 bg-yellow-500 rounded-full w-10 absolute left-0 transform translate-x-0"
          ></div>
        </div>
      </div>

      <div class="grid grid-cols-4 gap-4 mt-4">
        <div class="bg-widget-bg rounded-lg p-4 flex items-center">
          <div class="avg-viewers-wrapper">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="eye"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              class="m-auto svg-inline--fa fa-eye fa-lg h-8 w-8 mx-auto mt-4"
            >
              <path
                fill="white"
                d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z"
                class=""
              ></path>
            </svg>
          </div>

          <div>
            <p class="text-gray-200 text-sm mb-1">Avg. Video Views</p>
            <p class="text-white font-bold text-2xl">
              {{ formatGeneralNumber(avgViewers) }}
            </p>
          </div>
        </div>
        <div class="bg-widget-bg rounded-lg p-4 flex items-center">
          <div class="peak-viewers-wrapper">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="users"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              class="m-auto svg-inline--fa fa-users fa-lg h-8 w-8 mx-auto mt-4"
            >
              <path
                fill="white"
                d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"
                class=""
              ></path>
            </svg>
          </div>
          <div>
            <p class="text-gray-200 text-sm mb-1">Peak Video Views</p>
            <p class="text-white font-bold text-2xl">
              {{ formatGeneralNumber(peakViewers) }}
            </p>
          </div>
        </div>
        <div class="bg-widget-bg rounded-lg p-4 flex items-center">
          <div class="avg-stream-duration-wrapper">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="clock"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="m-auto svg-inline--fa fa-clock fa-lg h-8 w-8 mx-auto mt-4"
            >
              <path
                fill="white"
                d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"
                class=""
              ></path>
            </svg>
          </div>
          <div>
            <p class="text-gray-200 text-sm mb-1">Avg. Stream Duration</p>
            <p class="text-white font-bold text-2xl">
              {{ formatTimestamp(avgStreamDuration) }}
            </p>
          </div>
        </div>
        <div class="bg-widget-bg rounded-lg p-4 flex items-center">
          <div class="total-followers-wrapper">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="user-plus"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              class="m-auto svg-inline--fa fa-user-plus fa-lg h-8 w-8 mx-auto mt-4"
            >
              <path
                fill="white"
                d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z"
                class=""
              ></path>
            </svg>
          </div>

          <div>
            <p class="text-gray-200 text-sm mb-1">Total Followers</p>
            <p class="text-white font-bold text-2xl">
              {{
                !followerCountError
                  ? formatGeneralNumber(followerCount)
                  : followerCountError
              }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="relative">
        <div class="flex justify-between items-center mb-4">
          <h1 class="text-2xl font-bold text-white z-0">About Me</h1>
        </div>
        <div class="h-1 bg-black rounded-full relative">
          <div
            class="h-1 bg-yellow-500 rounded-full w-10 absolute left-0 transform translate-x-0"
          ></div>
        </div>
      </div>
      <div class="bg-gray-900 text-white py-4 rounded-lg">
        <div class="flex flex-wrap items-center py-4 mb-4">
          <div class="w-full md:w-1/6">
            <p class="text-sm text-gray-400 mb-1">Status:</p>
            <p v-if="!userError" class="text-lg font-semibold">
              {{
                user.broadcaster_type
                  ? `Twitch ${capitalizeFirstLetter(user.broadcaster_type)}`
                  : "Normal Streamer"
              }}
            </p>
            <p v-else class="text-lg font-semibold text-red-500">
              {{ userError }}
            </p>
          </div>
          <div class="w-full md:w-1/6">
            <p class="text-sm text-gray-400 mb-1">Mature Content?</p>
            <p
              v-if="!streamError"
              class="text-lg font-semibold"
              :class="{
                'text-red-500': stream.length !== 0 && stream[0].is_mature,
                'text-green-500':
                  (stream.length !== 0 && !stream[0].is_mature) ||
                  stream.length === 0,
              }"
            >
              {{
                stream.length !== 0 && stream[0].is_mature
                  ? "Mature"
                  : "Not Mature"
              }}
            </p>
            <p v-else class="text-lg font-semibold text-red-500">
              {{ streamError }}
            </p>
          </div>
          <div class="w-full md:w-1/6">
            <p class="text-sm text-gray-400 mb-1">Language:</p>
            <p v-if="!channelError" class="text-lg font-semibold">
              {{ ISO6391.getName(channel[0].broadcaster_language) }}
            </p>
            <p v-else class="text-lg font-semibold text-red-500">
              {{ channelError }}
            </p>
          </div>
          <div class="w-full md:w-1/6">
            <p class="text-sm text-gray-400 mb-1">Last online:</p>
            <p class="text-lg font-semibold">
              {{ handleLastOnline(stream, videos) }}
            </p>
          </div>
          <div class="w-full md:w-1/6 pr-5">
            <p class="text-sm text-gray-400 mb-1">Recent Games Streamed:</p>
            <p class="text-lg font-semibold">{{ formatGamesList(games) }}</p>
          </div>
          <div class="w-full md:w-1/6">
            <p class="text-sm text-gray-400 mb-1">Channel Tags:</p>
            <div class="flex flex-wrap">
              <template v-if="channel && channel[0].tags.length > 0">
                <a
                  v-for="tag in channel[0].tags"
                  :key="tag"
                  class="inline-block py-1 px-2 rounded-full text-sm text-black bg-gray-400 hover:bg-white hover:text-black mr-2 mt-2"
                >
                  {{ tag }}
                </a>
              </template>
              <template v-else>
                <a
                  class="inline-block py-1 px-2 rounded-full text-sm text-black bg-gray-400 hover:bg-white hover:text-black mr-2 mt-2"
                >
                  None
                </a>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <div class="relative">
      <h2 class="text-2xl text-white font-semibold mb-4">Top Recent Clips</h2>
      <div class="h-1 bg-black rounded-full relative">
        <div
          class="h-1 bg-yellow-500 rounded-full w-10 absolute left-0 transform translate-x-0"
        ></div>
      </div>
    </div>
    <div class="grid grid-cols-5 gap-4 mt-4">
      <div
        v-for="clip in clips"
        :key="clip.id"
        class="rounded-lg overflow-hidden shadow-md relative group"
      >
        <div class="relative">
          <img
            :src="clip.thumbnail_url"
            :alt="clip.title"
            class="w-full h-32 object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer"
            @click="openLink(clip.url)"
          />
        </div>
        <div className="p-2">
          <div class="flex items-center">
            <img
              :src="getGameImage(clip.game_id)"
              alt="/"
              class="mr-2 pt-2 h-full"
            />
            <div class="h-full flex flex-col justify-center w-10/12">
              <h2
                class="text-lg font-medium text-gray-500 truncate max-w-full group-hover:text-white cursor-pointer transition-colors duration-300"
                @click="openLink(clip.url)"
              >
                <abbr :title="clip.title" class="no-underline">
                  {{ clip.title }}
                </abbr>
              </h2>
              <p className="text-sm text-gray-500">
                {{ clip.broadcaster_name }}
              </p>
              <p class="text-sm text-gray-500">
                {{ formatGeneralNumber(clip.view_count) }} views
                <span v-if="clip.created_at">
                  &middot; {{ formatTimestampAgo(clip.created_at) }}</span
                >
                <span v-else></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <div class="relative">
      <h2 class="text-2xl text-white font-semibold mb-4">Recent VODs</h2>
      <div class="h-1 bg-black rounded-full relative">
        <div
          class="h-1 bg-yellow-500 rounded-full w-10 absolute left-0 transform translate-x-0"
        ></div>
      </div>
    </div>
    <div class="grid grid-cols-5 gap-4 mt-4">
      <div
        v-for="vod in vodVideos"
        :key="vod.id"
        class="rounded-lg overflow-hidden shadow-md relative group"
      >
        <div ref="thumbnail-container" class="relative">
          <img
            :src="handleImage(vod.thumbnail_url)"
            class="w-full h-32 object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer"
            alt="Video thumbnail"
            @click="openLink(vod.url)"
          />
        </div>
        <div class="p-2">
          <h2
            class="text-lg font-medium text-gray-500 truncate max-w-full group-hover:text-white cursor-pointer transition-colors duration-300"
            @click="openLink(vod.url)"
          >
            <abbr :title="vod.title" class="no-underline">
              {{ vod.title }}
            </abbr>
          </h2>
          <p class="text-sm text-gray-500">
            {{ formatGeneralNumber(vod.view_count) }} views
            <span v-if="vod.published_at">
              &middot; {{ formatTimestampAgo(vod.published_at) }}</span
            >
            <span v-else></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import ISO6391 from "iso-639-1";
import { useStore } from "vuex";

import {
  formatGeneralNumber,
  formatTimestampAgo,
  formatTimestamp,
  formatTwitchThumbnailUrl,
  capitalizeFirstLetter,
} from "../helpers/formatters.js";

const route = useRoute();

const selectedOption = ref(null);

const username = route.params.username;

const user = ref(null);
const followerCount = ref(0);
const videos = ref(null);
const stream = ref(null);
const channel = ref(null);

const widgetVideos = ref(null);
const vodVideos = ref(null);

const clips = ref(null);
const games = ref(null);

const avgViewers = ref(0);
const peakViewers = ref(0);
const avgStreamDuration = ref(0);

const userError = ref(null);
const followerCountError = ref(null);
const videosError = ref(null);
const streamError = ref(null);
const channelError = ref(null);
const clipsError = ref(null);
const gamesError = ref(null);

const store = useStore();

// gets the image of the game with the given id
function getGameImage(gameId) {
  if (!games.value) return;
  let game = games.value.find((game) => game.id === gameId);
  return game.box_art_url.replace("{width}x{height}", "35x56");
}

// formats an array of games to a comma separated list
function formatGamesList(games) {
  if (!games || games.length === 0) {
    return "None";
  }
  const gameNames = games.map((game) => game.name);
  return gameNames.join(", ");
}

// calculates the values and sets the statistics widgets
function setWidgetRefs(arr) {
  let viewCount = 0;
  let peakViewCount = 0;
  let totalSeconds = 0;
  let avgSeconds = 0;
  let avgViewCount = 0;

  for (let i = 0; i < arr.length; i++) {
    // set max peak viewers
    peakViewCount = Math.max(peakViewCount, arr[i].view_count);

    // add to viewCount
    viewCount += arr[i].view_count;

    // add up durations
    const duration = arr[i].duration;
    const hoursStr = duration.substr(0, duration.indexOf("h"));
    const hours = parseInt(hoursStr) || 0;
    const minutesStr = duration.substr(
      duration.indexOf("h") + 1,
      duration.indexOf("m") - duration.indexOf("h") - 1
    );
    const minutes = parseInt(minutesStr) || 0;
    const secondsStr = duration.substr(
      duration.indexOf("m") + 1,
      duration.indexOf("s") - duration.indexOf("m") - 1
    );
    const seconds = parseInt(secondsStr) || 0;
    totalSeconds += hours * 3600 + minutes * 60 + seconds;
  }
  if (arr.length === 0) {
    avgSeconds = 0;
    avgViewCount = 0;
  } else {
    avgSeconds = Math.round(totalSeconds / arr.length);
    avgViewCount = viewCount / arr.length;
  }
  avgViewers.value = avgViewCount;
  peakViewers.value = peakViewCount;
  avgStreamDuration.value = avgSeconds;
  console.log(
    "Widget Stats:",
    avgViewers.value,
    peakViewers.value,
    avgStreamDuration.value,
    formatTimestamp(avgStreamDuration.value)
  );
}

// takes twitch thumbnail base urls and returns a working url
function handleImage(url) {
  let urlToReturn = "";
  if (
    url ===
    "https://vod-secure.twitch.tv/_404/404_processing_%{width}x%{height}.png"
  ) {
    if (stream.value.length !== 0) {
      urlToReturn = formatTwitchThumbnailUrl(
        stream.value[0].thumbnail_url,
        true,
        "1280",
        "960"
      );
    } else {
      urlToReturn =
        "https://vod-secure.twitch.tv/_404/404_processing_320x180.png";
    }
  } else {
    urlToReturn = formatTwitchThumbnailUrl(url, false, "1280", "960");
  }

  return urlToReturn;
}

// handles click on the switcher, sets the selected option and filters the videos
function handleSwitcherClick(id) {
  if (id === selectedOption.value) return;

  selectedOption.value = id;

  switch (id) {
    case 0:
      widgetVideos.value = videos.value.filter((video) => {
        const videoDate = new Date(video.created_at);
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - 7);
        return videoDate >= cutoffDate;
      });

      break;
    case 1:
      widgetVideos.value = videos.value.filter((video) => {
        const videoDate = new Date(video.created_at);
        const cutoffDate = new Date();
        cutoffDate.setMonth(cutoffDate.getMonth() - 1);
        return videoDate >= cutoffDate;
      });
      break;
    case 2:
      widgetVideos.value = videos.value.filter((video) => {
        const videoDate = new Date(video.created_at);
        const cutoffDate = new Date();
        cutoffDate.setFullYear(cutoffDate.getFullYear() - 1);
        return videoDate >= cutoffDate;
      });
      break;
  }
  // re-calculate and render widget statistics
  setWidgetRefs(widgetVideos.value);
}

// opens the url in a new tab
function openLink(url) {
  window.open(url, "_blank");
}

// calculates the time since last stream/video
function handleLastOnline(streamRef, videosRef) {
  if (streamRef.length !== 0) {
    return "Streaming Now!";
  } else if (videosRef.length !== 0) {
    return formatTimestampAgo(videosRef[0].created_at);
  }
  return "unknown";
}

// queries Vuex store/Twitch API for user data
const getUser = async () => {
  if (username !== "") {
    try {
      await store.dispatch("getUserModule/fetchUser", username);
      return store.getters["getUserModule/getUserByUsername"](username).data;
    } catch (err) {
      userError.value = "Error fetching user.";
      console.error(err);
    }
  }
};

// queries Vuex store/Twitch API for follower count data
const getFollowerCount = async (userId) => {
  try {
    await store.dispatch("getFollowerCountModule/fetchFollowerCount", userId);
    return store.getters["getFollowerCountModule/getFollowerCountById"](userId)
      .total;
  } catch (err) {
    followerCountError.value = "Error fetching follower count.";
    console.error(err);
  }
};

// queries Vuex store/Twitch API for videos data
const getVideos = async (userId) => {
  try {
    await store.dispatch("getVideosModule/fetchVideos", userId);
    return store.getters["getVideosModule/getVideosById"](userId).data;
  } catch (err) {
    videosError.value = "Error fetching videos.";
    console.error(err);
  }
};

// queries Vuex store/Twitch API for stream data
const getStream = async (userId) => {
  try {
    await store.dispatch("getStreamModule/fetchStream", userId);
    return store.getters["getStreamModule/getStreamById"](userId).data;
  } catch (err) {
    streamError.value = "Error fetching stream.";
    console.error(err);
  }
};

// queries Vuex store/Twitch API for channel data
const getChannel = async (userId) => {
  try {
    await store.dispatch("getChannelModule/fetchChannel", userId);
    return store.getters["getChannelModule/getChannelById"](userId).data;
  } catch (err) {
    channelError.value = "Error fetching channel.";
    console.error(err);
  }
};

// queries Vuex store/Twitch API for clips data
const getClips = async (userId, started_at, ended_at) => {
  try {
    await store.dispatch(
      "getClipsModule/fetchClips",
      userId,
      started_at,
      ended_at
    );

    return store.getters["getClipsModule/getClipsById"](userId).data;
  } catch (err) {
    clipsError.value = "Error fetching clips.";
    console.error(err);
  }
};

// queries Vuex store/Twitch API for games data
const getGames = async (gameIds) => {
  try {
    await store.dispatch("getGamesModule/fetchGames", gameIds);
    return store.getters["getGamesModule/getGamesById"](gameIds).data;
  } catch (err) {
    gamesError.value = "Error fetching games.";
    console.error(err);
  }
};

// queries Vuex store/Twitch API for Access Token
const getToken = async function () {
  try {
    await store.dispatch("getTokenModule/fetchToken");
    return store.getters["getTokenModule/getToken"]();
  } catch (err) {
    console.error(err);
  }
};

// constants for date range to be used for clips
const twoMonthsAgo = new Date(
  Date.now() - 60 * 60 * 24 * 30 * 3 * 1000
).toISOString();
const now = new Date(Date.now()).toISOString();

await getToken();

// start fetching async data
user.value = await getUser();
if (user.value) {
  followerCount.value = await getFollowerCount(user.value.id);
  videos.value = await getVideos(user.value.id);
  vodVideos.value = videos.value.slice(0, 10);
  widgetVideos.value = videos.value;

  stream.value = await getStream(user.value.id);
  channel.value = await getChannel(user.value.id);

  clips.value = await getClips(user.value.id, twoMonthsAgo, now);

  let gameIds = [];
  clips.value.forEach((item) => {
    gameIds.push(item.game_id);
  });

  if (gameIds.length !== 0) {
    games.value = await getGames(gameIds);
  }
  // log info:
  // console.log("ID", user.value.id);
  // console.log("user.value", user.value);
  // console.log("followerCount.value", followerCount.value);
  // console.log("videos.value", videos.value);
  // console.log("stream.value", stream.value);
  // console.log("channel.value", channel.value);
  // console.log("clips.value", clips.value);
  // console.log("games.value", games.value);

  // sets switcher option to first element
  handleSwitcherClick(0);
}
</script>
<style>
@import "../assets/colors.css";

.avg-viewers-wrapper {
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  margin-right: 1rem;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    linear-gradient(
      222.71deg,
      var(--avg-viewers-bg-from),
      var(--avg-viewers-bg-to) 104.33%
    );
}

.peak-viewers-wrapper {
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  margin-right: 1rem;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    linear-gradient(
      222.71deg,
      var(--peak-viewers-bg-from),
      var(--peak-viewers-bg-to) 104.33%
    );
}

.avg-stream-duration-wrapper {
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  margin-right: 1rem;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    linear-gradient(
      222.71deg,
      var(--avg-stream-duration-bg-from),
      var(--avg-stream-duration-bg-to) 104.33%
    );
}
.total-followers-wrapper {
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  margin-right: 1rem;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    linear-gradient(
      222.71deg,
      var(--total-followers-bg-from),
      var(--total-followers-bg-to) 104.33%
    );
}
</style>
