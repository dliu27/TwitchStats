<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-background-color">
    <SiteNavigation class="site-navigation" />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import SiteNavigation from "./components/SiteNavigation.vue";
</script>

<style scoped>
.site-navigation {
  z-index: 999;
}
</style>
