<!-- 
  The main page with the view of the search bar
-->

<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input
        type="text"
        v-model="searchQuery"
        @input="getSearchResults"
        placeholder="Search for a creator on Twitch, for example: 'tarik'"
        :class="{ 'rounded-b-none': searchResults }"
        class="py-4 px-4 w-full h-14 rounded-lg bg-search-color text-white focus:bg-search-focus-color focus:shadow-md transition-colors duration-200"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />

      <ul
        class="bg-gray-800 text-white w-full shadow-md rounded-lg rounded-t-none"
        v-if="searchResults"
      >
        <p class="py-4 px-4" v-if="searchError">
          Sorry, something went wrong, please try again.
        </p>
        <p class="py-4 px-4" v-if="!searchError && searchResults.length === 0">
          No results match your query, try a different term.
        </p>
        <template v-else>
          <li
            v-for="(searchResult, index) in searchResults"
            :key="searchResult.id"
            class="py-4 px-4 cursor-pointer transition-all duration-300 ease-in-out"
            :class="{ 'bg-gray-700': selectedIndex === index }"
            @click="previewStreamer(searchResult)"
            @mouseenter="selectedIndex = index"
            @mouseleave="selectedIndex = -1"
          >
            <div class="flex items-center gap-3">
              <img
                :src="searchResult.thumbnail_url"
                class="w-8 h-8 rounded-full"
              />
              <span>{{ searchResult.display_name }}</span>
            </div>
          </li>
        </template>
      </ul>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const searchQuery = ref("");
const queryTimeout = ref(null);
const debounceValue = 300;
const searchResults = ref(null);
const searchError = ref(null);
const router = useRouter();
const store = useStore();
const selectedIndex = ref(null);

// takes user to profile page of the selected streamer
const previewStreamer = (searchResult) => {
  const username = searchResult.display_name;
  router.push({
    name: "profileView",
    params: { username: username },
    props: { username: username },
  });
};

const getToken = async function () {
  try {
    await store.dispatch("getTokenModule/fetchToken");
    return store.getters["getTokenModule/getToken"]();
  } catch (err) {
    console.error(err);
  }
};
await getToken();

// fetches search results from the store/Twitch API based on the search bar input
const getSearchResults = async () => {
  // Check if token is available
  if (store.getters["getTokenModule/getToken"]) {
    clearTimeout(queryTimeout.value);
    queryTimeout.value = setTimeout(async () => {
      if (searchQuery.value !== "") {
        try {
          await store.dispatch(
            "searchUsersModule/fetchSearchChannels",
            searchQuery.value
          );
          const search_data = store.getters[
            "searchUsersModule/getSearchChannels"
          ](searchQuery.value);
          searchResults.value = search_data.data;
          return;
        } catch (err) {
          searchError.value = true;
          console.error(err);
        }
      }
      searchResults.value = null;
    }, debounceValue);
  }
};
</script>

<style>
input:focus {
  background-color: #282a36;
}

input:hover {
  background-color: #282a36;
}

input {
  border-color: transparent;
  outline: none;

  font-size: 18px;
  padding: 14px 16px;
}

input::placeholder {
  color: #bec2cc;
}

li {
  color: #bec2cc;
}
li:hover {
  color: white;
  background-color: #282a36;
}
li.bg-gray-700:hover {
  background-color: #282a36 !important;
}
li.bg-gray-700 {
  background-color: #282a36 !important;
}
</style>
