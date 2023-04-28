<!-- 
  Returns the profile view component for the selected streamer, with skeleton component while loading.
-->

<template>
  <div>
    <Suspense>
      <template #default>
        <AsyncProfileView />
      </template>
      <template #fallback>
        <AsyncProfileSkeleton />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import AsyncProfileSkeleton from "../components/AsyncProfileSkeleton.vue";
import AsyncProfileView from "../components/AsyncProfileView.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const username = ref("");

if (route.params.username) {
  username.value = route.params.username;
}
</script>
