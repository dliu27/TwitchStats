<!-- 
  Navigation component defining the header of the site.
-->

<template>
  <header class="sticky top-0 bg-background-color shadow-lg">
    <nav
      class="container flex flex-col sm:flex-row justify-start items-center gap-4 text-white py-6 z-50"
    >
      <RouterLink :to="{ name: 'home' }">
        <div class="flex items-center gap-3">
          <img src="/android-chrome-192x192.png" class="h-12 w-12" />
          <p class="text-2xl">Twitch Analytics SPA</p>
        </div>
      </RouterLink>
    </nav>
    <div class="h-0.5 bg-yellow-500"></div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
