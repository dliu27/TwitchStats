<!-- 
  Returns the home view component, with skeleton component while loading.
-->

<template>
  <div>
    <Suspense>
      <template #default>
        <AsyncHomeView />
      </template>
      <template #fallback>
        <AsyncHomeSkeleton />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import AsyncHomeSkeleton from "../components/AsyncHomeSkeleton.vue";
import AsyncHomeView from "../components/AsyncHomeView.vue";
</script>
