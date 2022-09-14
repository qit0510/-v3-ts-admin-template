<script setup lang="ts">
import { useTestStore } from '@/store/modules/test'
import { computed } from 'vue'

defineProps<{ msg: string }>()

const testStore = useTestStore()
const count = computed(() => testStore.getCount)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="testStore.setCount(2)">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
