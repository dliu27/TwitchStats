<!-- 
    Skeleton loader component for Profile View
-->

<template>
  <div class="min-h-screen">
    <div class="max-w-2xl mx-auto py-6">
      <div class="flex items-center justify-center">
        <div class="w-32 h-32 rounded-full bg-gray-300 animate-pulse"></div>
        <div class="ml-4">
          <span class="flex items-center">
            <h1
              class="font-bold text-2xl text-white bg-gray-300 h-8 w-48 animate-pulse"
            ></h1>
          </span>
          <p
            class="text-lg text-white bg-gray-300 h-6 w-32 mt-2 animate-pulse"
          ></p>
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
              class="py-1 px-3 bg-yellow-400 text-black rounded transition-all duration-200 cursor-pointer"
            >
              <span>Past Week</span>
            </div>
            <div
              class="py-1 px-3 bg-black text-white rounded transition-all duration-200 cursor-pointer"
            >
              <span>Past Month</span>
            </div>
            <div
              class="py-1 px-3 bg-black text-white rounded transition-all duration-200 cursor-pointer"
            >
              <span>Past Year</span>
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
            <p
              class="text-lg text-white bg-gray-300 h-6 w-32 mt-2 animate-pulse"
            ></p>
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
            <p
              class="text-lg text-white bg-gray-300 h-6 w-32 mt-2 animate-pulse"
            ></p>
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
            <p class="text-gray-200 text-sm mb-1">Watch Time</p>
            <p
              class="text-lg text-white bg-gray-300 h-6 w-32 mt-2 animate-pulse"
            ></p>
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
            <p
              class="text-lg text-white bg-gray-300 h-6 w-32 mt-2 animate-pulse"
            ></p>
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
            <p
              class="text-lg text-white bg-gray-300 h-6 w-32 mt-2 animate-pulse"
            ></p>
          </div>
          <div class="w-full md:w-1/6">
            <p class="text-sm text-gray-400 mb-1">Mature Content?</p>
            <p
              class="text-lg text-white bg-gray-300 h-6 w-32 mt-2 animate-pulse"
            ></p>
          </div>
          <div class="w-full md:w-1/6">
            <p class="text-sm text-gray-400 mb-1">Language:</p>
            <p
              class="text-lg text-white bg-gray-300 h-6 w-32 mt-2 animate-pulse"
            ></p>
          </div>
          <div class="w-full md:w-1/6">
            <p class="text-sm text-gray-400 mb-1">Last online:</p>
            <p
              class="text-lg text-white bg-gray-300 h-6 w-32 mt-2 animate-pulse"
            ></p>
          </div>
          <div class="w-full md:w-1/6 pr-5">
            <p class="text-sm text-gray-400 mb-1">Recent Games Streamed:</p>
            <p
              class="text-lg text-white bg-gray-300 h-6 w-32 mt-2 animate-pulse"
            ></p>
          </div>
          <div class="w-full md:w-1/6">
            <p class="text-sm text-gray-400 mb-1">Channel Tags:</p>
            <div class="flex flex-wrap">
              <div>
                <a
                  class="inline-block py-1 px-2 rounded-full text-sm text-black bg-gray-400 hover:bg-white hover:text-black mr-2 mt-2 animate-pulse"
                >
                  Loading...
                </a>
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
        <!-- Skeleton loader for clips -->
        <div
          v-for="n in 10"
          :key="n"
          class="rounded-lg overflow-hidden shadow-md relative group"
        >
          <div class="relative">
            <div class="animate-pulse bg-gray-300 w-full h-32"></div>
          </div>
          <div class="p-2">
            <div class="flex items-center">
              <div class="animate-pulse bg-gray-300 mr-2 pt-2 h-12 w-12"></div>
              <div class="h-full flex flex-col justify-center w-10/12">
                <div class="animate-pulse bg-gray-300 h-4 w-full mb-1"></div>
                <div class="animate-pulse bg-gray-300 h-4 w-1/2"></div>
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
            class="h-1 bg-yellow-300 rounded-full w-10 absolute left-0 transform translate-x-0"
          ></div>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-4 mt-4">
        <div
          v-for="n in 10"
          :key="n"
          class="rounded-lg overflow-hidden shadow-md relative group animate-pulse"
        >
          <div class="relative">
            <div class="bg-gray-300 w-full h-32"></div>
          </div>
          <div class="p-2">
            <div class="bg-gray-300 w-full h-4 mb-2"></div>
            <div class="bg-gray-300 w-3/4 h-4"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const clipCount = [
  {
    id: 1,
    title: "Loading...",
    url: "#",
    view_count: 0,
    created_at: null,
    broadcaster_name: "Loading...",
    game_id: 0,
  },
  {
    id: 2,
    title: "Loading...",
    url: "#",
    view_count: 0,
    created_at: null,
    broadcaster_name: "Loading...",
    game_id: 0,
  },
  {
    id: 3,
    title: "Loading...",
    url: "#",
    view_count: 0,
    created_at: null,
    broadcaster_name: "Loading...",
    game_id: 0,
  },
  {
    id: 4,
    title: "Loading...",
    url: "#",
    view_count: 0,
    created_at: null,
    broadcaster_name: "Loading...",
    game_id: 0,
  },
  {
    id: 5,
    title: "Loading...",
    url: "#",
    view_count: 0,
    created_at: null,
    broadcaster_name: "Loading...",
    game_id: 0,
  },
  {
    id: 6,
    title: "Loading...",
    url: "#",
    view_count: 0,
    created_at: null,
    broadcaster_name: "Loading...",
    game_id: 0,
  },
  {
    id: 7,
    title: "Loading...",
    url: "#",
    view_count: 0,
    created_at: null,
    broadcaster_name: "Loading...",
    game_id: 0,
  },
  {
    id: 8,
    title: "Loading...",
    url: "#",
    view_count: 0,
    created_at: null,
    broadcaster_name: "Loading...",
    game_id: 0,
  },
  {
    id: 9,
    title: "Loading...",
    url: "#",
    view_count: 0,
    created_at: null,
    broadcaster_name: "Loading...",
    game_id: 0,
  },
  {
    id: 10,
    title: "Loading...",
    url: "#",
    view_count: 0,
    created_at: null,
    broadcaster_name: "Loading...",
    game_id: 0,
  },
];
</script>
