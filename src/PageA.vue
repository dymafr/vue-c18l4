<template>
  <div class="card p-20 d-flex justify-content-center align-items-center">
    <h1>La page A</h1>
    <pre>{{ route }}</pre>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

setTimeout(() => {
  router.push('/pageB');
}, 5000);

watch(
  () => route.params,
  () => (newParams, oldParams) => {
    console.log(newParams);
  }
);
</script>

<style scoped lang="scss">
.card {
  width: 100%;
}
</style>
